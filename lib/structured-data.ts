import { site } from "@/lib/site";

export type FaqItem = { q: string; a: string };

/**
 * Nœud WebSite : c'est lui que Google utilise pour afficher le « nom du site »
 * dans les résultats de recherche (à la place du domaine brut).
 */
export function webSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    name: site.siteName,
    alternateName: [site.name, site.commercialName],
    url: site.url,
    inLanguage: "fr-FR",
    publisher: { "@id": `${site.url}/#business` },
  };
}

/**
 * Données structurées d'une page métier×ville (Service + FAQPage + fil
 * d'Ariane). Retourne un tableau d'objets JSON-LD à injecter dans la page.
 */
export function servicePageJsonLd(input: {
  path: string;
  name: string;
  description: string;
  serviceType: string;
  faq: FaqItem[];
}) {
  const pageUrl = `${site.url}${input.path}`;
  return [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${pageUrl}#service`,
      name: input.name,
      serviceType: input.serviceType,
      description: input.description,
      url: pageUrl,
      mainEntityOfPage: pageUrl,
      provider: { "@id": `${site.url}/#business` },
      areaServed: site.areasServed.map((city) => ({
        "@type": "City",
        name: city,
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      mainEntityOfPage: pageUrl,
      mainEntity: input.faq.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: site.url },
        { "@type": "ListItem", position: 2, name: input.name, item: pageUrl },
      ],
    },
  ];
}

/**
 * Données structurées schema.org pour une entreprise locale multi-métiers
 * (clim / sanitaire / électricité). Injecté en JSON-LD dans le <head>.
 */
export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["HVACBusiness", "Plumber", "Electrician"],
    "@id": `${site.url}/#business`,
    name: site.name,
    alternateName: site.commercialName,
    legalName: site.owner,
    description: site.description,
    url: site.url,
    image: `${site.url}/opengraph-image`,
    logo: `${site.url}/icon.svg`,
    telephone: site.phoneHref,
    email: site.email,
    sameAs: [
      site.socials.facebook,
      site.socials.instagram,
      site.socials.tiktok,
    ],
    priceRange: "€€",
    currenciesAccepted: "EUR",
    address: {
      "@type": "PostalAddress",
      addressLocality: site.locality,
      postalCode: site.postalCode,
      addressRegion: site.region,
      addressCountry: site.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.latitude,
      longitude: site.geo.longitude,
    },
    areaServed: [
      ...site.areasServed.map((city) => ({ "@type": "City", name: city })),
      {
        "@type": "GeoCircle",
        geoMidpoint: {
          "@type": "GeoCoordinates",
          latitude: site.geo.latitude,
          longitude: site.geo.longitude,
        },
        geoRadius: site.serviceRadiusKm * 1000,
      },
    ],
    founder: {
      "@type": "Person",
      name: site.owner,
      jobTitle: site.jobTitle,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Prestations KEF",
      itemListElement: site.services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.name,
          description: service.description,
          areaServed: site.areasServed.map((city) => ({
            "@type": "City",
            name: city,
          })),
        },
      })),
    },
  };
}
