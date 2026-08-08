import type { Metadata } from "next";
import { site } from "@/lib/site";

/**
 * Métadonnées mutualisées des pages métier×ville. Next.js remplace (et ne
 * fusionne pas) le bloc openGraph du layout : on redéclare donc ici type,
 * locale et siteName pour ne pas les perdre. Le bloc twitter du layout ne
 * définit que `card`, si bien que title/description Twitter sont auto-remplis
 * depuis l'openGraph de chaque page.
 */
export function serviceMetadata(input: {
  path: string;
  /** ≤ 54 caractères — le template du layout ajoute " · KEF". */
  title: string;
  /** ~145-155 caractères. */
  description: string;
}): Metadata {
  return {
    title: input.title,
    description: input.description,
    alternates: { canonical: input.path },
    openGraph: {
      type: "website",
      locale: "fr_FR",
      siteName: site.name,
      url: input.path,
      title: input.title,
      description: input.description,
    },
  };
}
