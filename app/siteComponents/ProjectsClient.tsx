"use client";

import { useState } from "react";
import Image, { type StaticImageData } from "next/image";

export interface ProjectView {
  title: string;
  description: string;
  period: string;
  stack: string[];
  githubLink: string;
  deployedLink: string;
  banner: StaticImageData | string;
}

function projectLinks(project: ProjectView) {
  const links = [{ href: project.githubLink, label: "Source" }];
  if (project.deployedLink && project.deployedLink !== project.githubLink) {
    links.push({ href: project.deployedLink, label: "Live" });
  }
  return links;
}

export default function ProjectsClient({ projects }: { projects: ProjectView[] }) {
  const [active, setActive] = useState(0);
  const current = projects[active] ?? projects[0];

  return (
    <div className="grid items-start gap-10 md:grid-cols-[minmax(0,1fr)_minmax(220px,42%)] md:gap-12">
      <ol>
        {projects.map((project, index) => {
          const isActive = index === active;
          return (
            <li
              key={project.title}
              onMouseEnter={() => setActive(index)}
              onFocus={() => setActive(index)}
              onClick={() => setActive(index)}
              className={`border-b border-border py-5 pl-4 transition-shadow last:border-b-0 ${
                isActive ? "shadow-[inset_2px_0_0_var(--ink)]" : ""
              }`}
            >
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="font-serif text-[1.7rem] leading-none tracking-[-0.02em]">
                  <span className="mr-3 font-mono text-[11px] text-ink">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {project.title}
                </h3>
                <time className="shrink-0 font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground">
                  {project.period}
                </time>
              </div>
              <p className="mt-3 max-w-[36rem] text-[15px] leading-relaxed text-muted-foreground">
                {project.description.trim()}
              </p>
              <div className="mt-3 flex flex-wrap items-center justify-between gap-x-6 gap-y-2">
                <p className="font-mono text-[11px] tracking-wide text-muted-foreground">
                  {project.stack.join("  ·  ")}
                </p>
                <p className="flex gap-4 font-mono text-[11px] uppercase tracking-[0.14em]">
                  {projectLinks(project).map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link"
                    >
                      {link.label}
                    </a>
                  ))}
                </p>
              </div>
              <div className="relative mt-4 aspect-[16/10] overflow-hidden bg-muted md:hidden">
                <Image
                  src={project.banner}
                  alt={`${project.title} screenshot`}
                  fill
                  className="object-cover object-top"
                  sizes="100vw"
                />
              </div>
            </li>
          );
        })}
      </ol>

      {current && (
        <figure className="sticky top-24 hidden md:block">
          <div className="relative aspect-[16/10] overflow-hidden bg-muted ring-1 ring-border">
            <Image
              key={current.title}
              src={current.banner}
              alt={`${current.title} screenshot`}
              fill
              className="frame-in object-cover object-top"
              sizes="420px"
            />
          </div>
          <figcaption className="mt-3 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
            <span className="text-ink">
              Fig. {String(active + 1).padStart(2, "0")}
            </span>
            <span className="mx-2" aria-hidden="true">
              /
            </span>
            {current.title}
          </figcaption>
        </figure>
      )}
    </div>
  );
}
