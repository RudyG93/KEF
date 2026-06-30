"use client";

import { useActionState, useEffect, useRef, useState } from "react";
import { site } from "@/lib/site";
import { sendContact, type ContactState } from "@/app/actions/contact";

const initialState: ContactState = { status: "idle" };

export function ContactForm() {
  const [state, formAction, pending] = useActionState(
    sendContact,
    initialState,
  );
  // Champs contrôlés : leurs valeurs vivent dans le state React et survivent
  // au reset automatique du formulaire après une Server Action (React 19).
  const [values, setValues] = useState({
    name: "",
    phone: "",
    email: "",
    service: "Climatisation",
    message: "",
  });
  const [consent, setConsent] = useState(false);
  const consentRef = useRef<HTMLInputElement>(null);
  const sent = state.status === "success";

  // Après une Server Action, React 19 réinitialise le <form> ; les champs texte
  // contrôlés sont restaurés par React, mais la case à cocher se désynchronise :
  // on la resynchronise sur l'état après chaque soumission.
  useEffect(() => {
    if (consentRef.current) consentRef.current.checked = consent;
  }, [consent, state]);

  function update(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) {
    setValues((v) => ({ ...v, [e.target.name]: e.target.value }));
  }

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
            maxLength={100}
            required
            value={values.name}
            onChange={update}
          />
        </label>
        <label className="field">
          Téléphone
          <input
            type="tel"
            name="phone"
            placeholder="06 00 00 00 00"
            autoComplete="tel"
            maxLength={30}
            value={values.phone}
            onChange={update}
          />
        </label>
        <label className="field">
          E-mail
          <input
            type="email"
            name="email"
            placeholder="vous@exemple.fr"
            autoComplete="email"
            maxLength={150}
            value={values.email}
            onChange={update}
          />
        </label>
        <p className="field-hint">
          Indiquez au moins un téléphone ou un e-mail pour être recontacté(e).
        </p>
        <label className="field">
          Besoin
          <select name="service" value={values.service} onChange={update}>
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
            maxLength={2000}
            placeholder="Décrivez votre projet ou votre panne…"
            value={values.message}
            onChange={update}
          />
        </label>

        <label className="consent">
          <input
            type="checkbox"
            name="consent"
            value="on"
            required
            ref={consentRef}
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
          />
          <span>
            J&apos;accepte que {site.commercialName} utilise mon nom et mes
            coordonnées pour répondre à ma demande (base : consentement,
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
