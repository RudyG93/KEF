import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Mentions légales",
  description:
    "Mentions légales et politique de confidentialité du site KEF — KF Clim & Sanitaire (Kentin Ferreira), artisan à Perpignan.",
  robots: { index: false, follow: true },
  alternates: { canonical: "/mentions-legales" },
};

export default function MentionsLegalesPage() {
  const l = site.legal;

  return (
    <>
      <span id="top" />
      <Header />
      <main className="section legal">
        <div className="eyebrow">Informations légales</div>
        <h1 className="h2">Mentions légales</h1>

        <h2>Éditeur du site</h2>
        <p>
          Le présent site est édité par <strong>{site.commercialName}</strong>,
          nom commercial de <strong>{site.owner}</strong>, {l.legalForm}.
        </p>
        <ul>
          <li>SIREN : {l.siren}</li>
          <li>SIRET (siège) : {l.siret}</li>
          <li>
            Code APE : {l.ape} — {l.apeLabel}
          </li>
          <li>Immatriculation au Registre national des entreprises (RNE) : {l.registrationDate}</li>
          <li>
            Siège social : {l.addressStreet}, {l.addressPostalCode}{" "}
            {l.addressCity}, {l.addressCountry}
          </li>
          <li>Téléphone : {site.phoneDisplay}</li>
          <li>E-mail : {site.email}</li>
        </ul>

        <h2>Responsable de la publication</h2>
        <p>{site.owner}.</p>

        <h2>Hébergement</h2>
        <p>
          Site hébergé par Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789,
          États-Unis —{" "}
          <a href="https://vercel.com" rel="noopener noreferrer" target="_blank">
            vercel.com
          </a>
          .
        </p>

        <h2>Propriété intellectuelle</h2>
        <p>
          L&apos;ensemble des contenus (textes, mise en page, identité visuelle)
          est la propriété de {site.commercialName}, sauf mention contraire. Les
          photographies d&apos;illustration sont libres de droits. Toute
          reproduction sans autorisation est interdite.
        </p>

        <h2 id="donnees">Données personnelles (RGPD)</h2>
        <p>
          Le formulaire de contact collecte votre nom, votre numéro de
          téléphone et les informations que vous renseignez, dans le seul but de
          répondre à votre demande de devis ou de dépannage.
        </p>
        <ul>
          <li>Responsable du traitement : {site.owner} ({site.commercialName}).</li>
          <li>Base légale : votre consentement.</li>
          <li>
            Destinataire : {site.commercialName} uniquement. Aucune donnée
            n&apos;est cédée ou revendue à des tiers.
          </li>
          <li>
            Durée de conservation : le temps nécessaire au traitement de votre
            demande, puis 3 ans à des fins de suivi commercial.
          </li>
          <li>
            Vos droits : accès, rectification, suppression et opposition. Pour
            les exercer, écrivez à {site.email}. Vous pouvez aussi saisir la
            CNIL (
            <a href="https://www.cnil.fr" rel="noopener noreferrer" target="_blank">
              cnil.fr
            </a>
            ).
          </li>
        </ul>

        <h2>Cookies &amp; services tiers</h2>
        <p>
          Ce site n&apos;utilise pas de cookies de suivi ni de mesure
          d&apos;audience. La carte de la zone d&apos;intervention est fournie
          par OpenStreetMap, ce qui implique une requête vers les serveurs
          d&apos;OpenStreetMap lors du chargement de la carte.
        </p>

        <p className="legal-back">
          <Link href="/">← Retour à l&apos;accueil</Link>
        </p>
      </main>
      <Footer />
    </>
  );
}
