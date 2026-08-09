import type { Metadata, Viewport } from "next";
import { Bebas_Neue, Barlow } from "next/font/google";
import { site } from "@/lib/site";
import { localBusinessJsonLd, webSiteJsonLd } from "@/lib/structured-data";
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
  applicationName: site.siteName,
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
    siteName: site.siteName,
    title: "KEF — Clim · Sanitaire · Électricité · Artisan à Perpignan",
    description: site.description,
  },
  // Seul `card` est fixé : title/description Twitter sont auto-remplis
  // depuis l'openGraph de chaque page (accueil comme pages métier×ville).
  twitter: {
    card: "summary_large_image",
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
          // JSON-LD : LocalBusiness + WebSite (nom de site affiché par Google).
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([localBusinessJsonLd(), webSiteJsonLd()]),
          }}
        />
      </body>
    </html>
  );
}
