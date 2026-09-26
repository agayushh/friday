"use client";

import React, { useEffect, useState } from "react";
import { flushSync } from "react-dom";
import { FiArrowUpRight, FiMoon, FiSun } from "react-icons/fi";
import { RESUME_URL } from "../config/info";

const LINKS = [
  { href: "#profile", label: "Profile" },
  { href: "#experience", label: "Record" },
  { href: "#operations", label: "Operations" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setDarkMode(document.documentElement.classList.contains("dark"));
  }, []);

  const toggleDarkMode = (event?: React.MouseEvent<HTMLButtonElement>) => {
    const nextMode = !darkMode;
    const apply = () => {
      setDarkMode(nextMode);
      document.documentElement.classList.toggle("dark", nextMode);
      localStorage.setItem("theme", nextMode ? "dark" : "light");
    };

    if (
      typeof document.startViewTransition !== "function" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      apply();
      return;
    }

    const x = event ? event.clientX : window.innerWidth / 2;
    const y = event ? event.clientY : window.innerHeight / 2;
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    const transition = document.startViewTransition(() => {
      flushSync(apply);
    });

    transition.ready.then(() => {
      document.documentElement.animate(
        {
          clipPath: [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${endRadius}px at ${x}px ${y}px)`,
          ],
        },
        {
          duration: 400,
          easing: "ease-in-out",
          pseudoElement: "::view-transition-new(root)",
        }
      );
    });
  };

  const linkClass =
    "font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-foreground";

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-3xl items-center justify-between border-border px-4 sm:border-x sm:px-6">
        <a href="#top" className="font-mono text-sm font-semibold tracking-tight">
          AG<span className="text-signal">.</span>
        </a>

        <nav className="hidden items-center gap-5 sm:flex" aria-label="Primary">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} className={linkClass}>
              {link.label}
            </a>
          ))}
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`${linkClass} inline-flex items-center gap-1`}
          >
            Resume <FiArrowUpRight aria-hidden="true" />
          </a>
        </nav>

        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={toggleDarkMode}
            className="grid size-8 place-items-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {darkMode ? <FiSun className="size-4" /> : <FiMoon className="size-4" />}
          </button>
          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            className={`${linkClass} h-8 px-2 sm:hidden`}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav"
          >
            {isMenuOpen ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="border-t border-border bg-background sm:hidden"
        >
          {[...LINKS, { href: RESUME_URL, label: "Resume" }].map((link, index) => {
            const external = link.href.startsWith("http");
            return (
              <a
                key={link.href}
                href={link.href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center gap-3 border-b border-border px-4 py-3.5 font-mono text-[11px] uppercase tracking-[0.16em] last:border-b-0"
              >
                <span className="text-signal">{String(index + 1).padStart(2, "0")}</span>
                {link.label}
                {external && <FiArrowUpRight aria-hidden="true" className="ml-auto" />}
              </a>
            );
          })}
        </nav>
      )}
    </header>
  );
};

export default Navbar;
