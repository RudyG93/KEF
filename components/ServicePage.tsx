import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { site } from "@/lib/site";
import { servicePageJsonLd, type FaqItem } from "@/lib/structured-data";

type RelatedLink = { href: string; label: string };

type ServicePageProps = {
  /** Chemin de la page, ex. "/climatisation-perpignan". */
  path: string;
  /** Nom court du service (fil d'Ariane + JSON-LD), ex. "Climatisation à Perpignan". */
  name: string;
  /** Description du service pour le JSON-LD. */
  description: string;
  /** Type de prestation pour le JSON-LD, ex. "Installation de climatisation". */
  serviceType: string;
  eyebrow: string;
  /** Titre H1 (la partie accentuée est passée via <span className="accent">). */
  title: React.ReactNode;
  intro: string;
  /** Phrase d'intro de la section zone, propre au métier (évite le contenu dupliqué). */
  zoneIntro: string;
  faq: FaqItem[];
  related: RelatedLink[];
  /** Sections de contenu (h2 + prose). */
  children: React.ReactNode;
};

/**
 * Gabarit des pages métier×ville (SEO local). Le JSON-LD LocalBusiness
 * global est déjà injecté par le layout ; on ajoute ici Service + FAQ +
 * fil d'Ariane propres à la page.
 */
export function ServicePage({
  path,
  name,
  description,
  serviceType,
  eyebrow,
  title,
  intro,
  zoneIntro,
  faq,
  related,
  children,
}: ServicePageProps) {
  return (
    <>
      <span id="top" />
      <Header />
      <main className="section svc">
        <nav className="crumbs" aria-label="Fil d'Ariane">
          <Link href="/">Accueil</Link>
          <span aria-hidden="true"> › </span>
          <span>{name}</span>
        </nav>

        <div className="eyebrow">{eyebrow}</div>
        <h1 className="h2 svc-title">{title}</h1>
        <p className="svc-intro">{intro}</p>

        <div className="svc-prose">{children}</div>

        <section className="svc-zone" aria-label="Zone d'intervention">
          <h2>Où intervenons-nous ?</h2>
          <p>{zoneIntro}</p>
          <div className="chips">
            {site.areasServed.map((commune) => (
              <span className="chip chip--light" key={commune}>
                {commune}
              </span>
            ))}
          </div>
        </section>

        <section className="faq" aria-labelledby="faq-title">
          <h2 id="faq-title">Questions fréquentes</h2>
          {faq.map((item) => (
            <details className="faq-item" key={item.q}>
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </section>

        <div className="svc-cta">
          <div>
            <div className="svc-cta-label">Un projet, une panne ?</div>
            <div className="svc-cta-phone">
              <span aria-hidden="true">☎</span> {site.phoneDisplay}
            </div>
            <div className="svc-cta-sub">
              Disponible {site.hoursDisplay} · Devis gratuit
            </div>
          </div>
          <Link href="/#contact" className="btn btn--primary btn--lg">
            Demander un devis
          </Link>
        </div>

        <nav className="svc-related" aria-label="Autres services">
          <span>Nos autres services :</span>
          {related.map((link) => (
            <Link href={link.href} key={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
      </main>
      <Footer />
      <script
        type="application/ld+json"
        // JSON-LD : Service + FAQPage + BreadcrumbList de la page.
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            servicePageJsonLd({ path, name, description, serviceType, faq }),
          ),
        }}
      />
    </>
  );
}
