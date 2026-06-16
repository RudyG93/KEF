import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div>
          <div className="footer-logo">
            K<span>E</span>F
          </div>
          <div className="footer-tag">Clim · Sanitaire · Électricité</div>
        </div>
        <div className="footer-links">
          <a href={`tel:${site.phoneHref}`}>{site.phoneDisplay}</a>
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <span>Rivesaltes — 66</span>
        </div>
      </div>
      <div className="footer-bottom">
        © 2026 KEF — Kentin Ferreira · Artisan clim, sanitaire &amp; électricité
        à Perpignan.
      </div>
    </footer>
  );
}
