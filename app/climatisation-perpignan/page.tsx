import { ServicePage } from "@/components/ServicePage";
import { serviceMetadata } from "@/lib/service-metadata";
import type { FaqItem } from "@/lib/structured-data";

export const metadata = serviceMetadata({
  path: "/climatisation-perpignan",
  title: "Climatisation Perpignan : installation & dépannage",
  description:
    "Installation, entretien et dépannage de clim réversible et pompe à chaleur air/air à Perpignan. Artisan local, intervention 24h/24, devis gratuit.",
});

const faq: FaqItem[] = [
  {
    q: "Combien coûte une installation de climatisation à Perpignan ?",
    a: "Le prix dépend de la surface à climatiser, du nombre de pièces (mono-split ou multi-split), de la configuration du logement et du modèle choisi. Chaque projet étant différent, nous établissons un devis gratuit et sans engagement après un échange sur vos besoins — vous savez exactement où vous allez avant de vous décider.",
  },
  {
    q: "Quelle marque de climatisation installez-vous ?",
    a: "Nous installons principalement des équipements Mitsubishi Electric, une référence en fiabilité et en performance énergétique. Selon votre budget et vos besoins, nous pouvons aussi vous proposer d'autres marques reconnues — toujours avec un conseil honnête sur le meilleur rapport qualité/prix.",
  },
  {
    q: "Une climatisation réversible chauffe-t-elle vraiment en hiver ?",
    a: "Oui. Une clim réversible est une pompe à chaleur air/air : elle rafraîchit l'été et chauffe l'hiver, avec une consommation bien inférieure à celle de radiateurs électriques classiques. C'est une solution particulièrement adaptée au climat des Pyrénées-Orientales, où les hivers restent doux.",
  },
  {
    q: "À quelle fréquence faut-il entretenir sa climatisation ?",
    a: "Un entretien annuel est recommandé : nettoyage des filtres, contrôle du fluide frigorigène et vérification des performances. Un entretien périodique par un professionnel est d'ailleurs obligatoire au-delà d'une certaine puissance. Une clim entretenue consomme moins, refroidit mieux et dure plus longtemps.",
  },
  {
    q: "Intervenez-vous en urgence pour un dépannage de climatisation ?",
    a: "Oui, nous sommes disponibles 24h/24 et 7j/7 pour les dépannages sur Perpignan et dans un rayon d'environ 30 km : clim qui ne refroidit plus, fuite, bruit anormal, code erreur… Appelez-nous, nous établissons un premier diagnostic par téléphone.",
  },
];

export default function ClimatisationPerpignanPage() {
  return (
    <ServicePage
      path="/climatisation-perpignan"
      name="Climatisation à Perpignan"
      description="Installation, entretien et dépannage de climatisation réversible et de pompe à chaleur air/air à Perpignan et dans les Pyrénées-Orientales."
      serviceType="Installation, entretien et dépannage de climatisation"
      eyebrow="Climatisation · Perpignan & alentours"
      title={
        <>
          Climatisation à Perpignan :{" "}
          <span className="accent">installation, entretien, dépannage</span>
        </>
      }
      intro="Étés de plus en plus chauds, tramontane, hivers doux : dans les Pyrénées-Orientales, la climatisation réversible est devenue l'équipement de confort incontournable. KEF, artisan basé à Rivesaltes, installe, entretient et dépanne vos climatisations à Perpignan et dans les communes alentour — pour les particuliers comme pour les professionnels."
      zoneIntro="Installations neuves comme dépannages clim : nous nous déplaçons depuis Rivesaltes dans un rayon d'environ 30 km, notamment à :"
      faq={faq}
      related={[
        { href: "/plombier-perpignan", label: "Plombier à Perpignan" },
        { href: "/electricien-perpignan", label: "Électricien à Perpignan" },
      ]}
    >
      <h2>Installation de climatisation réversible</h2>
      <p>
        Chaque logement est différent : une installation réussie commence par un
        dimensionnement sérieux. Nous étudions la surface, l&apos;isolation,
        l&apos;exposition et vos habitudes pour vous proposer la solution
        adaptée — <strong>mono-split</strong> pour une pièce,{" "}
        <strong>multi-split</strong> pour plusieurs, ou pompe à chaleur air/air
        pour chauffer et rafraîchir toute l&apos;année. Nous travaillons
        principalement avec <strong>Mitsubishi Electric</strong>, référence du
        marché pour la fiabilité et la discrétion sonore.
      </p>
      <ul>
        <li>Étude et conseil à domicile, devis gratuit et détaillé</li>
        <li>Pose soignée : liaisons discrètes, percements propres</li>
        <li>Mise en service et prise en main avec vous</li>
      </ul>

      <h2>Entretien de votre climatisation</h2>
      <p>
        Filtres encrassés, fluide à contrôler, performances en baisse : sans
        entretien, une climatisation consomme plus et vieillit mal. Nous
        proposons un entretien complet — nettoyage, contrôles
        d&apos;étanchéité, vérification des performances — pour prolonger la
        durée de vie de votre installation et garder une facture
        d&apos;électricité maîtrisée.
      </p>

      <h2>Dépannage clim &amp; recharge de gaz</h2>
      <p>
        Clim qui ne refroidit plus, unité qui goutte, bruit inhabituel, code
        erreur sur la télécommande… Nous intervenons{" "}
        <strong>24h/24 et 7j/7</strong> sur Perpignan et ses alentours pour
        diagnostiquer et réparer : recherche de fuite, recharge de fluide
        frigorigène, remplacement de pièces. Un premier échange par téléphone
        permet souvent de cerner la panne avant même le déplacement.
      </p>

      <h2>Un artisan local, un seul interlocuteur</h2>
      <p>
        KEF, c&apos;est un artisan du coin — pas une plateforme ni un
        sous-traitant. Du premier appel à la mise en service, vous parlez à la
        même personne, qui connaît votre installation et répond de son travail.
        Et comme nous intervenons aussi en plomberie et en électricité, les
        travaux annexes (alimentation électrique de l&apos;unité, évacuation
        des condensats) sont gérés sans intervenant supplémentaire.
      </p>
    </ServicePage>
  );
}
