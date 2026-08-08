import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

// Date de dernière modification réelle du contenu — à mettre à jour quand
// une page change (un `new Date()` par build fausserait le signal lastmod).
const LAST_CONTENT_UPDATE = new Date("2026-08-08");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: site.url,
      lastModified: LAST_CONTENT_UPDATE,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${site.url}/climatisation-perpignan`,
      lastModified: LAST_CONTENT_UPDATE,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${site.url}/plombier-perpignan`,
      lastModified: LAST_CONTENT_UPDATE,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${site.url}/electricien-perpignan`,
      lastModified: LAST_CONTENT_UPDATE,
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];
}
