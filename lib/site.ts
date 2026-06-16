/**
 * Source unique des informations de l'entreprise (NAP : Name, Address, Phone).
 * Réutilisée par les métadonnées SEO, le JSON-LD et les composants.
 *
 * 👉 Domaine de production : remplacer `url` ci-dessous par le vrai domaine
 *    une fois connu — c'est le seul endroit à changer.
 */
export const site = {
  name: "KEF",
  owner: "Kentin Ferreira",
  jobTitle: "Gérant — Artisan",
  tagline: "Clim · Sanitaire · Électricité",
  description:
    "KEF — Kentin Ferreira, artisan climatisation, sanitaire et électricité à Rivesaltes, Perpignan et alentours. Installation, entretien et dépannage par un interlocuteur unique. Devis gratuit.",

  // Placeholder — à remplacer par le domaine de production.
  url: "https://www.kef-perpignan.fr",

  phoneDisplay: "06 66 61 05 46",
  phoneHref: "+33666610546",
  email: "ferreirakentinwork@gmail.com",

  // Entreprise de zone : ville + zone d'intervention, sans adresse de rue.
  locality: "Rivesaltes",
  postalCode: "66600",
  region: "Occitanie",
  country: "FR",

  // Coordonnées approximatives de Rivesaltes (centre de la zone d'intervention).
  geo: { latitude: 42.7706, longitude: 2.8722 },
  serviceRadiusKm: 30,

  areasServed: [
    "Rivesaltes",
    "Perpignan",
    "Cabestany",
    "Saint-Estève",
    "Le Soler",
    "Canet-en-Roussillon",
    "Pia",
    "Bompas",
    "Thuir",
  ],

  services: [
    {
      name: "Climatisation",
      description:
        "Climatisation réversible & pompes à chaleur air/air : installation mono & multi-split, entretien, mise en service, dépannage et recharge de gaz.",
    },
    {
      name: "Sanitaire / Plomberie",
      description:
        "Plomberie, salle de bains et dépannage : rénovation de salle de bains, recherche & réparation de fuite, chauffe-eau et raccordements.",
    },
    {
      name: "Électricité",
      description:
        "Installations neuves, rénovation et mise aux normes : tableau électrique, éclairage & prises, dépannage et recherche de panne.",
    },
  ],
} as const;

export type Site = typeof site;
