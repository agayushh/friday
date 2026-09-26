import { SITE_SOURCE } from "../config/info";

const Footer = () => {
  return (
    <footer className="flex flex-col gap-3 border-t border-border py-8 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground sm:flex-row sm:items-baseline sm:justify-between">
      <p>© 2026 Ayush Goyal</p>
      <p className="flex gap-5">
        <a href={SITE_SOURCE} target="_blank" rel="noopener noreferrer" className="link">
          Source
        </a>
        <a href="/sitemap.xml" className="link">
          Sitemap
        </a>
      </p>
    </footer>
  );
};

export default Footer;
