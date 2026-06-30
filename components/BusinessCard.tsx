import { site } from "@/lib/site";

/**
 * Carte de visite numérique (design fourni par le client).
 * Affiche les coordonnées directement — le numéro est en texte, sans lien tel:.
 */
export function BusinessCard() {
  return (
    <div className="business-card">
      <div className="bc-corner" aria-hidden="true" />
      <div className="bc-logo">
        K<span>E</span>F
      </div>
      <div className="bc-tagline">{site.tagline}</div>
      <div className="bc-name">{site.owner}</div>
      <div className="bc-title">Gérant — Artisan certifié</div>
      <div className="bc-contacts">
        <div className="bc-contact">
          <span aria-hidden="true">📍</span> <strong>{site.locality}</strong> —
          Perpignan &amp; alentours
        </div>
        <div className="bc-contact">
          <span aria-hidden="true">📞</span>{" "}
          <strong>{site.phoneDisplay}</strong>
        </div>
        <div className="bc-contact">
          <span aria-hidden="true">✉️</span> <strong>{site.email}</strong>
        </div>
      </div>
    </div>
  );
}
