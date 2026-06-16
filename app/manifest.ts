import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "KEF — Clim · Sanitaire · Électricité",
    short_name: "KEF",
    description: site.description,
    start_url: "/",
    display: "standalone",
    background_color: "#FAFAF9",
    theme_color: "#FF6A00",
    lang: "fr",
    icons: [
      {
        src: "/icon.svg",
        type: "image/svg+xml",
        sizes: "any",
      },
    ],
  };
}
