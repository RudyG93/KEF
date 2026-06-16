import { site } from "@/lib/site";

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div>
        <div className="badge">
          <span className="dot" aria-hidden="true" /> Artisan à Rivesaltes ·
          Perpignan
        </div>
        <h1 id="hero-title">
          Clim, sanitaire
          <br />
          &amp; électricité
          <br />
          <span className="accent">par un seul artisan</span>
        </h1>
        <p className="lede">
          Installation, entretien et dépannage sur Perpignan et ses alentours.
          Un interlocuteur unique, un travail soigné et des conseils clairs pour
          votre confort au quotidien.
        </p>
        <div className="hero-actions">
          <a
            href={`tel:${site.phoneHref}`}
            className="btn btn--primary btn--lg"
            aria-label={`Appeler le ${site.phoneDisplay}`}
          >
            <span className="ico" aria-hidden="true">
              ☎
            </span>{" "}
            Appeler maintenant
          </a>
          <a href="#contact" className="btn btn--ghost btn--lg">
            Demander un devis
          </a>
        </div>
        <div className="stats">
          <div>
            <div className="stat-num">3</div>
            <div className="stat-label">métiers, 1 artisan</div>
          </div>
          <div className="stat-divider" aria-hidden="true" />
          <div>
            <div className="stat-num">30 km</div>
            <div className="stat-label">autour de Perpignan</div>
          </div>
          <div className="stat-divider" aria-hidden="true" />
          <div>
            <div className="stat-num accent">Devis</div>
            <div className="stat-label">gratuit &amp; sans engagement</div>
          </div>
        </div>
      </div>

      <div className="hero-media">
        <span className="media-tag">
          photo · artisan au travail / réalisation
        </span>
        <div className="media-card">
          <div className="mark">
            K<span>E</span>F
          </div>
          <div className="who">Kentin Ferreira · Gérant</div>
        </div>
      </div>
    </section>
  );
}
