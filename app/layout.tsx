import type { Metadata, Viewport } from "next";
import { Bebas_Neue, Barlow } from "next/font/google";
import { site } from "@/lib/site";
import { localBusinessJsonLd } from "@/lib/structured-data";
import "./globals.css";

// Polices auto-hébergées via next/font (mêmes familles que le design d'origine).
const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bebas",
});

const barlow = Barlow({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-barlow",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "KEF — Clim · Sanitaire · Électricité · Artisan à Perpignan",
    template: "%s · KEF",
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.owner }],
  creator: site.owner,
  publisher: site.name,
  keywords: [
    "artisan Perpignan",
    "climatisation Perpignan",
    "climatisation Rivesaltes",
    "climatisation Mitsubishi Perpignan",
    "installateur Mitsubishi Pyrénées-Orientales",
    "plombier Perpignan",
    "sanitaire Perpignan",
    "électricien Perpignan",
    "dépannage clim Perpignan",
    "pompe à chaleur air air",
    "mise aux normes électrique",
    "Kentin Ferreira",
    "KF Clim & Sanitaire",
    "KEF",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: site.url,
    siteName: site.name,
    title: "KEF — Clim · Sanitaire · Électricité · Artisan à Perpignan",
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "KEF — Clim · Sanitaire · Électricité · Artisan à Perpignan",
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "business",
  formatDetection: {
    // Désactive la transformation auto des numéros en liens tel: sur iOS
    // (le numéro reste affiché en texte, cf. demande client).
    telephone: false,
    email: true,
    address: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#FF6A00",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${bebas.variable} ${barlow.variable}`}>
      <body>
        {children}
        <script
          type="application/ld+json"
          // JSON-LD : données structurées LocalBusiness pour les moteurs de recherche.
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd()),
          }}
        />
      </body>
    </html>
  );
}
