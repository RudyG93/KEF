"use server";

import { Resend } from "resend";

export type ContactState = {
  status: "idle" | "success" | "error";
  message?: string;
};

/**
 * Server Action du formulaire de devis → envoi e-mail via Resend.
 * Variables d'environnement requises (voir .env.example) :
 *   RESEND_API_KEY, CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL
 */
export async function sendContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const name = String(formData.get("name") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const service = String(formData.get("service") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();
  const consent = formData.get("consent");
  // Champ piège anti-spam : rempli uniquement par les bots.
  const honeypot = String(formData.get("company") ?? "").trim();

  if (honeypot) {
    return { status: "success" };
  }

  if (!name || !phone || !consent) {
    return {
      status: "error",
      message:
        "Merci d'indiquer votre nom, votre téléphone et d'accepter le traitement de vos données.",
    };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return {
      status: "error",
      message:
        "L'envoi n'est pas encore configuré. Affichez le numéro et appelez-nous directement.",
    };
  }

  const to = process.env.CONTACT_TO_EMAIL ?? "rudygiacomazzo@gmail.com";
  const from = process.env.CONTACT_FROM_EMAIL ?? "KEF <onboarding@resend.dev>";

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from,
    to,
    subject: `Nouvelle demande de devis — ${name} (${service || "non précisé"})`,
    text: [
      `Nom : ${name}`,
      `Téléphone : ${phone}`,
      `Besoin : ${service || "non précisé"}`,
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
