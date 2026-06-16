"use client";

import { useState } from "react";
import { site } from "@/lib/site";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: brancher un vrai envoi ici (Server Action ou route API → e-mail).
    // Pour l'instant on reproduit le comportement du prototype : état de succès visuel.
    setSubmitted(true);
  }

  return (
    <div className={`form-card${submitted ? " is-sent" : ""}`}>
      <form className="quote-form" onSubmit={handleSubmit}>
        <h3>Demander un devis gratuit</h3>
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
        <button type="submit" className="btn--submit">
          Envoyer ma demande
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
        <a href={`tel:${site.phoneHref}`} className="btn btn--pill">
          <span aria-hidden="true">☎</span> Appeler maintenant
        </a>
      </div>
    </div>
  );
}
