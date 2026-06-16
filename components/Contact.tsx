import { site } from "@/lib/site";
import { ContactForm } from "@/components/ContactForm";

export function Contact() {
  return (
    <section id="contact" className="contact" aria-labelledby="contact-title">
      <div className="contact-grid">
        {/* Colonne appel */}
        <div>
          <div className="eyebrow">Contact</div>
          <h2 id="contact-title" className="h2">
            Parlons de
            <br />
            votre projet
          </h2>
          <p className="lede">
            Le plus simple, c&apos;est un coup de fil. Je réponds à vos
            questions et conviens d&apos;un rendez-vous pour un devis gratuit.
          </p>

          <a
            href={`tel:${site.phoneHref}`}
            className="call-card"
            aria-label={`Appeler Kentin au ${site.phoneDisplay}`}
          >
            <span className="ico" aria-hidden="true">
              ☎
            </span>
            <span>
              <span className="label">Appeler Kentin</span>
              <span className="number">{site.phoneDisplay}</span>
            </span>
          </a>

          <div className="contact-meta">
            <a href={`mailto:${site.email}`}>
              <span className="ico" aria-hidden="true">
                ✉️
              </span>{" "}
              {site.email}
            </a>
            <div>
              <span className="ico" aria-hidden="true">
                📍
              </span>{" "}
              Rivesaltes — Perpignan &amp; alentours
            </div>
          </div>
        </div>

        {/* Colonne formulaire */}
        <ContactForm />
      </div>
    </section>
  );
}
