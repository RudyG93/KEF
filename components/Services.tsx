export function Services() {
  return (
    <section id="services" className="section" aria-labelledby="services-title">
      <div className="section-head">
        <div>
          <div className="eyebrow">Nos prestations</div>
          <h2 id="services-title" className="h2">
            Trois métiers, <span className="accent">un savoir-faire</span>
          </h2>
        </div>
        <p className="section-intro">
          De l&apos;installation au dépannage, KEF intervient pour les
          particuliers et les professionnels avec un seul interlocuteur.
        </p>
      </div>

      <div className="cards-3">
        <article className="service">
          <div className="service-ico" aria-hidden="true">
            ❄
          </div>
          <h3>Climatisation</h3>
          <p>
            Climatisation réversible &amp; pompes à chaleur air/air pour un
            confort été comme hiver.
          </p>
          <ul>
            <li>Installation climatisation</li>
            <li>Entretien &amp; mise en service</li>
            <li>Dépannage &amp; recharge gaz</li>
          </ul>
          <a href="#contact" className="service-link">
            Demander un devis →
          </a>
        </article>

        <article className="service">
          <div className="service-ico" aria-hidden="true">
            🚿
          </div>
          <h3>Sanitaire</h3>
          <p>
            Plomberie, salle de bains et dépannage pour une eau qui circule sans
            souci.
          </p>
          <ul>
            <li>Rénovation de salle de bains</li>
            <li>Recherche &amp; réparation de fuite</li>
            <li>Chauffe-eau &amp; raccordements</li>
          </ul>
          <a href="#contact" className="service-link">
            Demander un devis →
          </a>
        </article>

        <article className="service">
          <div className="service-ico" aria-hidden="true">
            ⚡
          </div>
          <h3>Électricité</h3>
          <p>
            Installations neuves, rénovation et mise aux normes en toute
            sécurité.
          </p>
          <ul>
            <li>Tableau électrique &amp; mise aux normes</li>
            <li>Éclairage &amp; prises</li>
            <li>Dépannage &amp; recherche de panne</li>
          </ul>
          <a href="#contact" className="service-link">
            Demander un devis →
          </a>
        </article>
      </div>
    </section>
  );
}
