import { site } from "@/lib/site";

export function Header() {
  return (
    <header className="site-header">
      <a href="#top" className="logo">
        K<span>E</span>F
      </a>
      <nav className="site-nav" aria-label="Navigation principale">
        <a href="#services" className="nav-link">
          Services
        </a>
        <a href="#zone" className="nav-link">
          Zone
        </a>
        <a href="#atouts" className="nav-link">
          Atouts
        </a>
        <a href="#contact" className="nav-link">
          Contact
        </a>
        <a
          href={`tel:${site.phoneHref}`}
          className="btn btn--call"
          aria-label={`Appeler le ${site.phoneDisplay}`}
        >
          <span className="ico" aria-hidden="true">
            ☎
          </span>{" "}
          {site.phoneDisplay}
        </a>
      </nav>
    </header>
  );
}
