import type { Metadata } from "next";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import { PROJECTS } from "../config/projects";
import Footer from "../siteComponents/Footer";
import Navbar from "../siteComponents/Navbar";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Finished projects by Ayush Goyal, from the portfolio, the résumé, and GitHub.",
  alternates: { canonical: "/projects" },
  openGraph: {
    title: "Ayush Goyal — Projects",
    description:
      "Finished projects by Ayush Goyal, from the portfolio, the résumé, and GitHub.",
    url: "/projects",
    images: ["/og-image.png"],
  },
};

const textLink =
  "underline decoration-border underline-offset-4 transition-colors hover:decoration-signal";

function outlet(url?: string) {
  if (!url || url.includes("github.com")) return null;
  if (url.includes("npmjs.com")) return { href: url, label: "Package" };
  return { href: url, label: "Live" };
}

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto flex min-h-screen w-full max-w-3xl flex-col border-border pt-14 sm:border-x">
        <div className="px-4 pt-16 sm:px-6 sm:pt-24">
          <nav
            aria-label="Breadcrumb"
            className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground"
          >
            <Link href="/" className={textLink}>
              Home
            </Link>
            <span className="px-2 text-border" aria-hidden="true">
              /
            </span>
            <span className="text-foreground" aria-current="page">
              Projects
            </span>
          </nav>

          <h1 className="mt-10 text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">
            Projects
          </h1>
          <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-muted-foreground">
            Finished work from the site, the résumé, and GitHub.
          </p>
        </div>

        <div className="mt-12 border-t border-border">
          {PROJECTS.map((project, index) => {
            const extra = outlet(project.deployedLink);
            return (
              <article
                key={project.title}
                className="border-b border-border px-4 py-5 sm:px-6"
              >
                <div className="flex items-center justify-between gap-4 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                  <span>
                    <span className="text-signal">
                      {String(index + 1).padStart(2, "0")}
                    </span>{" "}
                    · {project.period}
                  </span>
                  <span
                    className={`rounded-sm border px-1.5 py-0.5 text-[10px] ${
                      extra ? "border-signal/50 text-signal" : "border-border"
                    }`}
                  >
                    {extra ? extra.label : "Source only"}
                  </span>
                </div>

                <h2 className="mt-3 text-lg font-semibold tracking-tight">
                  {project.title}
                </h2>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {project.description.trim()}
                </p>
                <p className="mt-3 font-mono text-[11px] text-muted-foreground">
                  {project.stack.join(" / ")}
                </p>

                <div className="mt-4 flex gap-5 font-mono text-[11px] uppercase tracking-[0.14em]">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 transition-colors hover:text-signal"
                  >
                    Source <FiArrowUpRight aria-hidden="true" />
                  </a>
                  {extra && (
                    <a
                      href={extra.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 transition-colors hover:text-signal"
                    >
                      {extra.label} <FiArrowUpRight aria-hidden="true" />
                    </a>
                  )}
                </div>
              </article>
            );
          })}
        </div>
        <Footer />
      </main>
    </>
  );
}
