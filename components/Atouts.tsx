const atouts = [
  {
    num: "01",
    title: "Interlocuteur unique",
    text: "Clim, sanitaire et électricité gérés par la même personne, de A à Z.",
  },
  {
    num: "02",
    title: "Devis gratuit",
    text: "Un chiffrage clair et sans engagement avant chaque intervention.",
  },
  {
    num: "03",
    title: "Réactif & proche",
    text: "Artisan local, joignable directement et rapide à se déplacer.",
  },
  {
    num: "04",
    title: "Travail soigné",
    text: "Finitions propres, conseils honnêtes et chantier laissé net.",
  },
];

export function Atouts() {
  return (
    <section
      id="atouts"
      className="section atouts"
      aria-labelledby="atouts-title"
    >
      <div className="section-head--center">
        <div className="eyebrow">Pourquoi KEF</div>
        <h2 id="atouts-title" className="h2">
          Un artisan en qui <span className="accent">avoir confiance</span>
        </h2>
      </div>
      <div className="cards-4">
        {atouts.map((atout) => (
          <div className="atout" key={atout.num}>
            <div className="atout-num">{atout.num}</div>
            <h3>{atout.title}</h3>
            <p>{atout.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
