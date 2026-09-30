import type { Metadata } from "next";
import Link from "next/link";
import Footer from "../siteComponents/Footer";
import Navbar from "../siteComponents/Navbar";
import { RESUME_PDF } from "../config/info";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Download Ayush Goyal's resume. Software engineer working across full stack development and DevOps.",
  alternates: { canonical: "/resume" },
  openGraph: {
    title: "Ayush Goyal — Resume",
    description: "Download Ayush Goyal's resume.",
    url: "/resume",
    images: ["/og-image.png"],
  },
};

const linkClass =
  "underline decoration-border underline-offset-4 transition-colors hover:decoration-signal";

export default function ResumePage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto flex min-h-screen w-full max-w-3xl flex-col border-border pt-14 sm:border-x">
        <div className="flex-1 px-4 pt-16 pb-20 sm:px-6 sm:pt-24">
          <nav
            aria-label="Breadcrumb"
            className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground"
          >
            <Link href="/" className={linkClass}>
              Home
            </Link>
            <span className="px-2 text-border" aria-hidden="true">
              /
            </span>
            <span className="text-foreground" aria-current="page">
              Resume
            </span>
          </nav>

          <h1 className="mt-10 text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">
            Resume
          </h1>

          <p className="mt-10 text-[15px] leading-relaxed">
            <a href={RESUME_PDF} className={linkClass}>
              Download my resume (PDF).
            </a>
          </p>

          <p className="mt-6 max-w-lg text-[15px] leading-relaxed">
            For more context, read about my{" "}
            <Link href="/#experience" className={linkClass}>
              experience
            </Link>{" "}
            or{" "}
            <Link href="/#contact" className={linkClass}>
              get in touch
            </Link>
            .
          </p>
        </div>
        <Footer />
      </main>
    </>
  );
}
