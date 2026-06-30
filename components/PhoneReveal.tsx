"use client";

import { useState } from "react";
import { site } from "@/lib/site";

type PhoneRevealProps = {
  /** Classe(s) du bouton — réutilise les styles boutons existants. */
  className?: string;
  /** Libellé affiché avant le clic. */
  idle?: string;
  /** Affiche l'icône téléphone avant le libellé. */
  withIcon?: boolean;
  /** Libellé accessible avant révélation. */
  ariaLabel?: string;
};

/**
 * Bouton « afficher le numéro » : au clic, révèle le numéro de téléphone
 * en texte. Aucun lien tel: n'est ouvert (cf. demande client).
 */
export function PhoneReveal({
  className,
  idle = "Afficher le numéro",
  withIcon = true,
  ariaLabel = "Afficher le numéro de téléphone",
}: PhoneRevealProps) {
  const [revealed, setRevealed] = useState(false);

  return (
    <button
      type="button"
      className={className}
      onClick={() => setRevealed(true)}
      aria-label={
        revealed ? `Numéro de téléphone : ${site.phoneDisplay}` : ariaLabel
      }
    >
      {withIcon && (
        <span className="ico" aria-hidden="true">
          ☎
        </span>
      )}{" "}
      {revealed ? site.phoneDisplay : idle}
    </button>
  );
}
