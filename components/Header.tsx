import Link from "next/link";
import { site } from "@/lib/site";
import { SocialLinks } from "@/components/SocialLinks";

export function Header() {
  return (
    <header className="site-header">
      <Link href="/" className="logo">
        K<span>E</span>F
      </Link>
      <nav className="site-nav" aria-label="Navigation principale">
        <Link href="/#services" className="nav-link">
          Services
        </Link>
        <Link href="/#zone" className="nav-link">
          Zone
        </Link>
        <Link href="/#atouts" className="nav-link">
          Atouts
        </Link>
        <Link href="/#contact" className="nav-link">
          Contact
        </Link>
        <SocialLinks className="header-social" />
        <span className="header-phone">
          <span className="ico" aria-hidden="true">
            ☎
          </span>{" "}
          {site.phoneDisplay}
        </span>
      </nav>
    </header>
  );
}
