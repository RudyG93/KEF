"use client";

import { useActionState } from "react";
import { site } from "@/lib/site";
import { sendContact, type ContactState } from "@/app/actions/contact";

const initialState: ContactState = { status: "idle" };

export function ContactForm() {
  const [state, formAction, pending] = useActionState(
    sendContact,
    initialState,
  );
  const sent = state.status === "success";

  return (
    <div className={`form-card${sent ? " is-sent" : ""}`}>
      <form className="quote-form" action={formAction}>
        <h3>Demander un devis gratuit</h3>

        {/* Champ piège anti-spam — masqué aux humains. */}
        <input
          type="text"
          name="company"
          className="hp-field"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
        />

        <label className="field">
          Nom
          <input
            type="text"
            name="name"
            placeholder="Votre nom"
            autoComplete="name"
            required
          />
        </label>
        <label className="field">
          Téléphone
          <input
            type="tel"
            name="phone"
            placeholder="06 00 00 00 00"
            autoComplete="tel"
            required
          />
        </label>
        <label className="field">
          Besoin
          <select name="service" defaultValue="Climatisation">
            <option value="Climatisation">Climatisation</option>
            <option value="Sanitaire">Sanitaire / Plomberie</option>
            <option value="Électricité">Électricité</option>
            <option value="Plusieurs / autre">Plusieurs besoins / autre</option>
          </select>
        </label>
        <label className="field">
          Votre message
          <textarea
            name="message"
            rows={4}
            placeholder="Décrivez votre projet ou votre panne…"
          />
        </label>

        <label className="consent">
          <input type="checkbox" name="consent" value="on" required />
          <span>
            J&apos;accepte que {site.commercialName} utilise mon nom et mon
            téléphone pour répondre à ma demande (base : consentement,
            conservation 3 ans). Je peux retirer mon consentement à tout moment
            — voir les <a href="/mentions-legales#donnees">mentions légales</a>.
          </span>
        </label>

        {state.status === "error" && (
          <p className="form-error" role="alert">
            {state.message}
          </p>
        )}

        <button type="submit" className="btn--submit" disabled={pending}>
          {pending ? "Envoi en cours…" : "Envoyer ma demande"}
        </button>
        <p className="form-note">
          Réponse rapide · Devis gratuit &amp; sans engagement
        </p>
      </form>

      <div className="form-success">
        <div className="success-icon" aria-hidden="true">
          ✓
        </div>
        <h3>Message envoyé</h3>
        <p>
          Merci ! Je vous recontacte au plus vite. Pour une demande urgente,
          appelez directement le {site.phoneDisplay}.
        </p>
      </div>
    </div>
  );
}
