import { SITE_SOURCE } from "../config/info";

const Footer = () => {
  return (
    <footer className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
      <p className="border-y border-border py-6 text-center tracking-[0.35em]">
        — End of file —
      </p>
      <div className="flex flex-col gap-2 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p>© 2026 Ayush Goyal</p>
        <p className="flex gap-5">
          <a
            href="https://x.com/pydottsx"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-foreground"
          >
            Built by Ayush
          </a>
          <a href="/sitemap.xml" className="transition-colors hover:text-foreground">
            Sitemap
          </a>
          <a
            href={SITE_SOURCE}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-foreground"
          >
            Source
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
