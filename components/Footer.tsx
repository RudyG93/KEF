import Link from "next/link";
import { site } from "@/lib/site";
import { PhoneReveal } from "@/components/PhoneReveal";
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
          <SocialLinks className="footer-social" />
        </div>
        <div className="footer-links">
          <PhoneReveal className="footer-phone" withIcon={false} />
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <span>Rivesaltes — 66</span>
        </div>
      </div>
      <div className="footer-bottom">
        © 2026 KEF — {site.commercialName} ({site.owner}) · Artisan clim,
        sanitaire &amp; électricité à Perpignan. ·{" "}
        <Link href="/mentions-legales">Mentions légales</Link>
      </div>
    </footer>
  );
}
