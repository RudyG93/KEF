import { ServicePage } from "@/components/ServicePage";
import { serviceMetadata } from "@/lib/service-metadata";
import type { FaqItem } from "@/lib/structured-data";

export const metadata = serviceMetadata({
  path: "/electricien-perpignan",
  title: "Électricien Perpignan : mise aux normes & dépannage",
  description:
    "Tableau électrique, mise aux normes NF C 15-100, dépannage et recherche de panne à Perpignan. Électricien artisan, disponible 24h/24, devis gratuit.",
});

const faq: FaqItem[] = [
  {
    q: "Quels sont les signes d'un tableau électrique à remplacer ?",
    a: "Fusibles en porcelaine, absence de disjoncteur différentiel, disjonctions fréquentes, odeur de chauffe ou traces de brûlé : autant de signaux qu'il ne faut pas ignorer. Un tableau vétuste est la première cause d'incendie électrique — j'établis un diagnostic clair et un devis gratuit pour la remise aux normes.",
  },
  {
    q: "Une partie de ma maison n'a plus de courant, que faire ?",
    a: "Vérifiez d'abord votre tableau : un disjoncteur a peut-être sauté. S'il saute de nouveau immédiatement ou si une zone reste sans courant, n'insistez pas — c'est le signe d'un défaut (appareil, câble, humidité). Appelez-moi : je recherche la panne méthodiquement et je répare en toute sécurité, 24h/24 si nécessaire.",
  },
  {
    q: "Faites-vous la mise aux normes complète d'une installation ancienne ?",
    a: "Oui. Remplacement du tableau, mise à la terre, différentiels, circuits dédiés (cuisine, salle de bains) : je remets l'installation en conformité avec la norme électrique en vigueur (NF C 15-100), en une ou plusieurs étapes selon votre budget.",
  },
  {
    q: "Intervenez-vous pour de petits travaux (prises, luminaires) ?",
    a: "Bien sûr. Ajout de prises et d'interrupteurs, remplacement de luminaires, installation de spots, alimentation d'un appareil : aucun chantier n'est trop petit. C'est souvent l'occasion de faire un point rapide sur l'état général de votre installation.",
  },
];

export default function ElectricienPerpignanPage() {
  return (
    <ServicePage
      path="/electricien-perpignan"
      name="Électricien à Perpignan"
      description="Électricité générale à Perpignan : tableau électrique, mise aux normes, éclairage, prises, dépannage et recherche de panne."
      serviceType="Électricité générale : mise aux normes, dépannage et rénovation"
      eyebrow="Électricité · Perpignan & alentours"
      title={
        <>
          Électricien à Perpignan :{" "}
          <span className="accent">normes, dépannage, rénovation</span>
        </>
      }
      intro="Tableau vétuste, panne inexpliquée, rénovation ou simple ajout de prises : artisan électricien basé à Rivesaltes, j'interviens à Perpignan et dans les communes alentour pour des installations sûres et aux normes — dépannage 24h/24, devis gratuit."
      zoneIntro="Mises aux normes planifiées ou pannes électriques urgentes : je couvre Perpignan et les communes voisines depuis Rivesaltes, notamment :"
      faq={faq}
      related={[
        {
          href: "/climatisation-perpignan",
          label: "Climatisation à Perpignan",
        },
        { href: "/plombier-perpignan", label: "Plombier à Perpignan" },
      ]}
    >
      <h2>Tableau électrique &amp; mise aux normes</h2>
      <p>
        Le tableau est le cœur de votre installation — et dans beaucoup de
        logements anciens de Perpignan, il date. Je remplace les tableaux
        vétustes, j&apos;installe les protections différentielles qui
        manquent, je vérifie la mise à la terre et je remets l&apos;ensemble
        en conformité avec la norme <strong>NF C 15-100</strong>. Résultat :
        une installation sûre pour votre famille et conforme pour une vente ou
        une location.
      </p>

      <h2>Éclairage, prises &amp; petits travaux</h2>
      <p>
        Ajouter des prises dans une chambre, poser des spots dans la cuisine,
        alimenter une borne, un portail ou un abri de jardin : je réalise tous
        les travaux d&apos;électricité du quotidien, proprement et sans
        saignées inutiles quand une solution plus discrète existe.
      </p>
      <ul>
        <li>Installations neuves et extensions de circuits</li>
        <li>Éclairage intérieur et extérieur, LED</li>
        <li>Circuits dédiés : plaques, four, lave-linge, clim</li>
      </ul>

      <h2>Dépannage &amp; recherche de panne</h2>
      <p>
        Disjonctions à répétition, prises mortes, lumière qui clignote, odeur
        de chauffe : je recherche la cause méthodiquement — circuit par
        circuit — au lieu de remplacer au hasard. Disponible{" "}
        <strong>24h/24 et 7j/7</strong> pour les urgences électriques sur
        Perpignan et ses alentours.
      </p>

      <h2>L&apos;électricité, en complément de vos autres travaux</h2>
      <p>
        Une climatisation à alimenter, une salle de bains à rénover ? Comme
        j&apos;interviens aussi en climatisation et en plomberie, je gère
        l&apos;électricité de vos projets sans multiplier les intervenants :
        un seul devis, un seul artisan, un chantier cohérent du début à la
        fin.
      </p>
    </ServicePage>
  );
}
