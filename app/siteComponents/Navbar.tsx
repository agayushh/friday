"use client";

import React, { useEffect, useState } from "react";
import { flushSync } from "react-dom";
import { RESUME_URL } from "../config/info";

const LINKS = [
  { href: "#experience", label: "Work" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const INDEX = [
  { href: "#about", index: "01", label: "About" },
  { href: "#experience", index: "02", label: "Work" },
  { href: "#projects", index: "03", label: "Projects" },
  { href: "#tools", index: "04", label: "Tools" },
  { href: "#record", index: "05", label: "Record" },
  { href: "#contact", index: "06", label: "Contact" },
];

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setDarkMode(document.documentElement.classList.contains("dark"));
  }, []);

  const toggleDarkMode = (event?: React.MouseEvent<HTMLButtonElement>) => {
    const isAppearanceTransition =
      typeof document.startViewTransition === "function" &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const performToggle = (nextMode: boolean) => {
      if (nextMode) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
    };

    if (!isAppearanceTransition) {
      const nextMode = !darkMode;
      setDarkMode(nextMode);
      performToggle(nextMode);
      return;
    }

    const x = event ? event.clientX : window.innerWidth / 2;
    const y = event ? event.clientY : window.innerHeight / 2;
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    const transition = document.startViewTransition(() => {
      flushSync(() => {
        const nextMode = !darkMode;
        setDarkMode(nextMode);
        performToggle(nextMode);
      });
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

  return (
    <>
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <a
        href="#content"
        className="absolute -left-[999px] top-3 z-[60] bg-background px-3 py-2 font-mono text-[11px] uppercase tracking-[0.16em] focus:left-4"
      >
        Skip to content
      </a>
      <div className="mx-auto flex h-14 max-w-[1040px] items-center justify-between px-5 sm:px-8 lg:px-10">
        <a href="#top" className="font-serif text-lg italic tracking-tight">
          Ayush
        </a>

        <nav className="hidden items-center gap-6 sm:flex" aria-label="Primary">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="link font-mono text-[11px] uppercase tracking-[0.16em]"
            >
              {link.label}
            </a>
          ))}
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="link font-mono text-[11px] uppercase tracking-[0.16em]"
          >
            Resume
          </a>
        </nav>

        <div className="flex items-center gap-5">
          <button
            type="button"
            onClick={toggleDarkMode}
            className="link font-mono text-[11px] uppercase tracking-[0.16em]"
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {darkMode ? "Light" : "Dark"}
          </button>
          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            className="link font-mono text-[11px] uppercase tracking-[0.16em] sm:hidden"
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="border-t border-border bg-background sm:hidden">
        <nav className="mx-auto flex max-w-[1040px] flex-col gap-4 px-5 py-5" aria-label="Mobile">
          {INDEX.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="flex items-baseline gap-3 font-mono text-[11px] uppercase tracking-[0.16em]"
            >
              <span className="text-ink">{link.index}</span>
              {link.label}
            </a>
          ))}
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-baseline gap-3 font-mono text-[11px] uppercase tracking-[0.16em]"
            onClick={() => setIsMenuOpen(false)}
          >
            <span className="text-ink">→</span>
            Resume
          </a>
        </nav>
        </div>
      )}
    </header>

    <nav
        aria-label="Index"
        className="fixed top-1/2 z-40 hidden -translate-y-1/2 min-[1180px]:block"
        style={{ left: "max(1rem, calc(50vw - 560px))" }}
      >
        <ol className="space-y-3">
          {INDEX.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-mono text-[11px] tracking-[0.14em] text-ink transition-colors hover:text-foreground"
              >
                {link.index}
              </a>
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
};

export default Navbar;
