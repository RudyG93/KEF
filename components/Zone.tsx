import { site } from "@/lib/site";
import { ServiceMap } from "@/components/ServiceMap";

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
            km autour de Perpignan. Retrouvez la zone couverte sur la carte
            ci-contre.
          </p>
          <div className="chips">
            {site.areasServed.map((commune) => (
              <span className="chip" key={commune}>
                {commune}
              </span>
            ))}
          </div>
        </div>

        <ServiceMap />
      </div>
    </section>
  );
}
