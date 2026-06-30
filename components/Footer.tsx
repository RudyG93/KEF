import Link from "next/link";
import { site } from "@/lib/site";
import { SocialLinks } from "@/components/SocialLinks";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div>
          <div className="footer-logo">
            K<span>E</span>F
          </div>
          <div className="footer-tag">{site.commercialName}</div>
        </div>
        <div className="footer-links">
          <span className="footer-phone">
            <span className="ico" aria-hidden="true">
              ☎
            </span>{" "}
            {site.phoneDisplay}
          </span>
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <span>Rivesaltes — 66</span>
        </div>
      </div>

      <div className="footer-base">
        <SocialLinks className="footer-social" />
        <div className="footer-copy">
          © 2026 KEF — {site.commercialName} ({site.owner}) ·{" "}
          <Link href="/mentions-legales">Mentions légales</Link>
        </div>
      </div>
    </footer>
  );
}
