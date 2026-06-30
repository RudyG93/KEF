/**
 * Source unique des informations de l'entreprise (NAP : Name, Address, Phone).
 * Réutilisée par les métadonnées SEO, le JSON-LD et les composants.
 *
 * 👉 Domaine de production : remplacer `url` ci-dessous par le vrai domaine
 *    une fois connu — c'est le seul endroit à changer.
 */
export const site = {
  name: "KEF",
  commercialName: "KF Clim & Sanitaire",
  owner: "Kentin Ferreira",
  jobTitle: "Gérant — Artisan",
  tagline: "Clim · Sanitaire · Électricité",
  description:
    "KEF — KF Clim & Sanitaire (Kentin Ferreira), artisan climatisation, sanitaire et électricité à Rivesaltes, Perpignan et alentours. Installation, entretien et dépannage 24h/24, par un interlocuteur unique. Devis gratuit.",

  // Placeholder — à remplacer par le domaine de production.
  url: "https://www.kef-perpignan.fr",

  phoneDisplay: "06 66 61 05 46",
  phoneHref: "+33666610546",
  email: "ferreirakentinwork@gmail.com",

  // Disponibilité affichée (reflétée aussi dans le JSON-LD openingHours).
  hoursDisplay: "24h/24 · 7j/7",

  // Réseaux sociaux (URLs nettoyées des paramètres de suivi).
  socials: {
    facebook: "https://www.facebook.com/profile.php?id=61590410982490",
    instagram: "https://www.instagram.com/kef.pce/",
    tiktok: "https://www.tiktok.com/@kef.pce",
  },

  // Entreprise de zone : ville + zone d'intervention, sans adresse de rue.
  locality: "Rivesaltes",
  postalCode: "66600",
  region: "Occitanie",
  country: "FR",

  // Coordonnées approximatives de Rivesaltes (centre de la zone d'intervention).
  geo: { latitude: 42.7706, longitude: 2.8722 },
  serviceRadiusKm: 30,

  // Données légales officielles (INPI / RNE — attestation du 13/11/2025).
  legal: {
    legalForm: "Entrepreneur individuel",
    siren: "992 094 714",
    siret: "992 094 714 00019",
    ape: "4322B",
    apeLabel:
      "Travaux d'installation d'équipements thermiques et de climatisation",
    registrationDate: "16/10/2025",
    // Siège social (domicile du gérant) — affichage à confirmer (confidentialité).
    addressStreet: "Avenue Maréchal Leclerc",
    addressPostalCode: "66330",
    addressCity: "Cabestany",
    addressCountry: "France",
  },

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
