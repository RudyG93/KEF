import { site } from "@/lib/site";
import { ContactForm } from "@/components/ContactForm";
import { BusinessCard } from "@/components/BusinessCard";

export function Contact() {
  return (
    <section id="contact" className="contact" aria-labelledby="contact-title">
      <div className="contact-grid">
        {/* Colonne gauche : intro + carte de visite */}
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
            Disponible {site.hoursDisplay}.
          </p>

          <BusinessCard />
        </div>

        {/* Colonne droite : formulaire */}
        <ContactForm />
      </div>
    </section>
  );
}
