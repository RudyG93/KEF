# KEF — Site vitrine

Site one-page de **KEF (Kentin Ferreira)** — artisan climatisation, sanitaire et électricité
à Rivesaltes, Perpignan et alentours.

Construit avec **Next.js 15 (App Router)**, **React 19** et **TypeScript**, avec un référencement
SEO soigné (Metadata API, données structurées JSON-LD `LocalBusiness`, sitemap, robots, image
Open Graph dynamique, polices auto-hébergées via `next/font`).

## Démarrer

```bash
npm install
npm run dev      # http://localhost:3000
```

## Build de production

```bash
npm run build
npm start
```

## Scripts

| Commande               | Rôle                                    |
| ---------------------- | --------------------------------------- |
| `npm run dev`          | Serveur de développement                |
| `npm run build`        | Build de production                     |
| `npm start`            | Sert le build de production             |
| `npm run lint`         | ESLint (preset `next/core-web-vitals`)  |
| `npm run typecheck`    | Vérification des types (`tsc --noEmit`) |
| `npm run format`       | Formate le code avec Prettier           |
| `npm run format:check` | Vérifie le formatage (sans modifier)    |

## Structure

```
app/                  Routes App Router
  layout.tsx          <html lang="fr">, polices, métadonnées SEO, JSON-LD
  page.tsx            Composition des sections
  globals.css         Styles + tokens de marque
  sitemap.ts          /sitemap.xml
  robots.ts           /robots.txt
  manifest.ts         /manifest.webmanifest
  opengraph-image.tsx Image Open Graph générée (1200×630)
  icon.svg            Favicon
components/           Header, Hero, Services, Zone, Atouts, Contact, Footer
                      ContactForm.tsx = composant client (état du formulaire)
lib/
  site.ts             ⭐ Coordonnées de l'entreprise (NAP) — source unique
  structured-data.ts  Génération du JSON-LD LocalBusiness
```

## Configuration importante

- **Domaine de production** : défini par `url` dans [`lib/site.ts`](lib/site.ts).
  Actuellement un **placeholder** (`https://www.kef-perpignan.fr`). Remplacez-le par le vrai
  domaine — c'est le seul endroit à changer (métadonnées, sitemap, JSON-LD et Open Graph
  s'appuient tous dessus).
- Toutes les coordonnées (téléphone, e-mail, communes, services) vivent aussi dans
  [`lib/site.ts`](lib/site.ts).

## À faire plus tard (hors périmètre actuel)

- **Envoi réel du formulaire** : aujourd'hui il affiche un message de confirmation sans envoi.
  Le point d'accroche est marqué `// TODO` dans
  [`components/ContactForm.tsx`](components/ContactForm.tsx) — y brancher une Server Action ou
  une route API (ex. service e-mail Resend).
- **Photos réelles** : les zones photo/carte sont des placeholders ; à l'arrivée des visuels,
  utiliser `next/image`.
