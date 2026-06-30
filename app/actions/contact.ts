"use server";

import { headers } from "next/headers";
import { Resend } from "resend";

export type ContactState = {
  status: "idle" | "success" | "error";
  message?: string;
};

const SERVICES = [
  "Climatisation",
  "Sanitaire",
  "Électricité",
  "Plusieurs / autre",
];
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[0-9 ().+-]{7,30}$/;

/** Champ sur une ligne : aplatit les espaces/sauts de ligne, limite la longueur. */
function cleanLine(value: FormDataEntryValue | null, max: number): string {
  return String(value ?? "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, max);
}

// Limite de débit en mémoire (anti-spam de base). Sur Vercel Fluid Compute,
// l'instance est réutilisée → efficace contre les rafales. Pour une protection
// robuste multi-instances : Upstash Redis ou Cloudflare Turnstile.
const RATE_MAX = 4;
const RATE_WINDOW_MS = 10 * 60 * 1000;
const rateHits = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (rateHits.get(ip) ?? []).filter(
    (t) => now - t < RATE_WINDOW_MS,
  );
  if (recent.length >= RATE_MAX) {
    rateHits.set(ip, recent);
    return true;
  }
  recent.push(now);
  rateHits.set(ip, recent);
  return false;
}

/**
 * Server Action du formulaire de devis → envoi e-mail via Resend.
 * Variables d'environnement requises (voir .env.example) :
 *   RESEND_API_KEY, CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL
 */
export async function sendContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const name = cleanLine(formData.get("name"), 100);
  const phone = cleanLine(formData.get("phone"), 30);
  const email = cleanLine(formData.get("email"), 150);
  const serviceRaw = cleanLine(formData.get("service"), 40);
  const service = SERVICES.includes(serviceRaw)
    ? serviceRaw
    : "Plusieurs / autre";
  const message = String(formData.get("message") ?? "")
    .trim()
    .slice(0, 2000);
  const consent = formData.get("consent");
  // Champ piège anti-spam : rempli uniquement par les bots.
  const honeypot = cleanLine(formData.get("company"), 100);

  if (honeypot) {
    return { status: "success" };
  }

  if (!name || !consent) {
    return {
      status: "error",
      message:
        "Merci d'indiquer votre nom et d'accepter le traitement de vos données.",
    };
  }

  if (!phone && !email) {
    return {
      status: "error",
      message:
        "Indiquez au moins un téléphone ou un e-mail pour être recontacté(e).",
    };
  }

  if (phone && !PHONE_RE.test(phone)) {
    return {
      status: "error",
      message: "Le numéro de téléphone saisi n'est pas valide.",
    };
  }

  if (email && !EMAIL_RE.test(email)) {
    return {
      status: "error",
      message: "L'adresse e-mail saisie n'est pas valide.",
    };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL ?? "KEF <onboarding@resend.dev>";
  if (!apiKey || !to) {
    return {
      status: "error",
      message:
        "L'envoi n'est pas encore configuré. Affichez le numéro et appelez-nous directement.",
    };
  }

  // Limite de débit (au moment de l'envoi, pour ne pas pénaliser les corrections).
  const headerList = await headers();
  const ip =
    headerList.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    headerList.get("x-real-ip") ||
    "unknown";
  if (isRateLimited(ip)) {
    return {
      status: "error",
      message: "Trop de demandes envoyées. Merci de réessayer dans quelques minutes.",
    };
  }

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from,
    to,
    ...(email ? { replyTo: email } : {}),
    subject: `Nouvelle demande de devis — ${name} (${service})`,
    text: [
      `Nom : ${name}`,
      `Téléphone : ${phone || "non communiqué"}`,
      `E-mail : ${email || "non communiqué"}`,
      `Besoin : ${service}`,
      "",
      "Message :",
      message || "(aucun message)",
    ].join("\n"),
  });

  if (error) {
    return {
      status: "error",
      message:
        "L'envoi a échoué. Réessayez dans un instant ou appelez-nous directement.",
    };
  }

  return { status: "success" };
}
