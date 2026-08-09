import { ServicePage } from "@/components/ServicePage";
import { serviceMetadata } from "@/lib/service-metadata";
import type { FaqItem } from "@/lib/structured-data";

export const metadata = serviceMetadata({
  path: "/plombier-perpignan",
  title: "Plombier Perpignan : dépannage & salle de bains",
  description:
    "Fuite, chauffe-eau, salle de bains : artisan plombier à Perpignan et alentours, dépannage 24h/24. Étude et devis gratuits, travail soigné.",
});

const faq: FaqItem[] = [
  {
    q: "Que faire en cas de fuite d'eau avant l'arrivée du plombier ?",
    a: "Coupez l'arrivée d'eau générale (le robinet se trouve souvent près du compteur), coupez l'électricité si l'eau approche des prises ou des appareils électriques, puis épongez pour limiter les dégâts. Appelez-moi ensuite : je suis disponible 24h/24 et je vous guide par téléphone en attendant l'intervention.",
  },
  {
    q: "Réparez-vous ou remplacez-vous les chauffe-eau ?",
    a: "Les deux. Selon l'âge de l'appareil, la panne (résistance, thermostat, groupe de sécurité, fuite de cuve) et votre budget, je vous oriente honnêtement entre réparation et remplacement — puis je fournis et j'installe le nouveau chauffe-eau si nécessaire.",
  },
  {
    q: "Prenez-vous en charge une rénovation complète de salle de bains ?",
    a: "Oui. Plomberie, sanitaires, raccordements et, puisque j'interviens aussi en électricité, l'éclairage et les prises aux normes : vous n'avez qu'un seul interlocuteur pour l'ensemble, du plan initial à la pose finale.",
  },
  {
    q: "Le devis est-il vraiment gratuit ?",
    a: "Oui : l'étude et le devis sont gratuits et sans engagement, à Perpignan comme dans toute ma zone d'intervention. Vous recevez un chiffrage clair et détaillé avant tout début de travaux — aucune surprise sur la facture.",
  },
];

export default function PlombierPerpignanPage() {
  return (
    <ServicePage
      path="/plombier-perpignan"
      name="Plombier à Perpignan"
      description="Plomberie et sanitaire à Perpignan : dépannage, recherche de fuite, rénovation de salle de bains, chauffe-eau et raccordements."
      serviceType="Plomberie : dépannage, sanitaire et salle de bains"
      eyebrow="Plomberie · Perpignan & alentours"
      title={
        <>
          Plombier à Perpignan :{" "}
          <span className="accent">dépannage, sanitaire, salle de bains</span>
        </>
      }
      intro="Une fuite qui n'attend pas, un chauffe-eau qui lâche un dimanche, une salle de bains à refaire : artisan plombier basé à Rivesaltes, j'interviens à Perpignan et dans les communes alentour, 24h/24 pour les urgences — avec des devis gratuits et un travail soigné."
      zoneIntro="Pour une fuite ou un dépannage urgent, chaque minute compte : basé à Rivesaltes, je reste au plus près de chez vous, notamment à :"
      faq={faq}
      related={[
        {
          href: "/climatisation-perpignan",
          label: "Climatisation à Perpignan",
        },
        { href: "/electricien-perpignan", label: "Électricien à Perpignan" },
      ]}
    >
      <h2>Dépannage plomberie &amp; recherche de fuite</h2>
      <p>
        Robinet qui goutte, chasse d&apos;eau qui fuit, canalisation bouchée,
        trace d&apos;humidité suspecte : je localise l&apos;origine du
        problème et je répare durablement — pas de rafistolage. Pour les
        urgences (fuite importante, dégât des eaux), je suis joignable{" "}
        <strong>24h/24 et 7j/7</strong> et je vous donne les premiers gestes à
        faire dès l&apos;appel.
      </p>

      <h2>Salle de bains : création &amp; rénovation</h2>
      <p>
        Du simple remplacement d&apos;un receveur à la rénovation complète, je
        conçois avec vous une salle de bains fonctionnelle et propre : douche,
        baignoire, meubles vasques, WC. Un seul artisan gère la plomberie{" "}
        <em>et</em> l&apos;électricité (éclairage, prises, sèche-serviettes) —
        moins d&apos;intervenants, moins de délais, un résultat cohérent.
      </p>
      <ul>
        <li>Étude et devis gratuits, conseils sur les matériaux</li>
        <li>Pose de sanitaires et robinetterie toutes marques</li>
        <li>Raccordements eau froide / eau chaude aux normes</li>
      </ul>

      <h2>Chauffe-eau : réparation &amp; remplacement</h2>
      <p>
        Plus d&apos;eau chaude ? Avant de remplacer, je diagnostique : une
        résistance, un thermostat ou un groupe de sécurité se remplacent
        souvent pour une fraction du prix d&apos;un appareil neuf. Si le
        remplacement s&apos;impose, je vous aide à choisir la bonne capacité
        et le bon type de chauffe-eau, puis je l&apos;installe dans les règles
        de l&apos;art.
      </p>

      <h2>Un artisan local qui répond de son travail</h2>
      <p>
        Basé à Rivesaltes, à quelques minutes de Perpignan, je suis un artisan
        indépendant : celui qui établit le devis est celui qui fait les
        travaux. Conseils francs, tarifs annoncés avant intervention et
        travail propre — c&apos;est ce qui fait revenir mes clients.
      </p>
    </ServicePage>
  );
}
