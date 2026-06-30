import { site } from "@/lib/site";

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
