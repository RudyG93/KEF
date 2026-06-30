import { PhoneReveal } from "@/components/PhoneReveal";

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
        <PhoneReveal className="btn btn--call" />
      </nav>
    </header>
  );
}
