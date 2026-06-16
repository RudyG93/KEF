import { site } from "@/lib/site";

export function Zone() {
  return (
    <section id="zone" className="zone" aria-labelledby="zone-title">
      <div className="zone-grid">
        <div>
          <div className="eyebrow">Zone d&apos;intervention</div>
          <h2 id="zone-title" className="h2">
            Perpignan
            <br />
            &amp; ses alentours
          </h2>
          <p className="lede">
            Basé à Rivesaltes, j&apos;interviens dans un rayon d&apos;environ 30
            km autour de Perpignan. Un doute sur votre commune ? Appelez-moi, je
            vous réponds directement.
          </p>
          <div className="chips">
            {site.areasServed.map((commune) => (
              <span className="chip" key={commune}>
                {commune}
              </span>
            ))}
          </div>
          <a
            href={`tel:${site.phoneHref}`}
            className="btn btn--invert"
            aria-label={`Vérifier ma commune — appeler le ${site.phoneDisplay}`}
          >
            <span className="ico" aria-hidden="true">
              ☎
            </span>{" "}
            Vérifier ma commune
          </a>
        </div>

        <div className="map">
          <span className="media-tag">carte · zone d&apos;intervention</span>
          <div className="map-pin-wrap">
            <div className="map-pin" aria-hidden="true">
              📍
            </div>
            <div className="map-title">Rivesaltes (66)</div>
            <div className="map-sub">~30 km autour de Perpignan</div>
          </div>
        </div>
      </div>
    </section>
  );
}
