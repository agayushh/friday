import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";
import { Projects_List } from "../config/projects";
import Section from "./Section";

export const Project = () => {
  return (
    <Section
      id="operations"
      index="03"
      title="Operations"
      meta={`${Projects_List.length} case files`}
    >
      <div className="overflow-hidden">
        <div className="-mb-px grid sm:-mr-px sm:grid-cols-2">
          {Projects_List.map((project, index) => {
            const live =
              project.deployedLink && project.deployedLink !== project.githubLink;
            return (
              <article
                key={project.title}
                className="group flex flex-col border-b border-border p-4 sm:border-r sm:p-5"
              >
                <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                  <span>
                    <span className="text-signal">
                      OP-{String(index + 1).padStart(2, "0")}
                    </span>{" "}
                    · {project.period}
                  </span>
                  <span
                    className={`rounded-sm border px-1.5 py-0.5 text-[10px] ${
                      live ? "border-signal/50 text-signal" : "border-border"
                    }`}
                  >
                    {live ? "Deployed" : "Source only"}
                  </span>
                </div>

                <div className="relative mt-4 aspect-[16/10] overflow-hidden rounded-sm border border-border bg-muted">
                  <Image
                    src={project.banner}
                    alt={`${project.title} screenshot`}
                    fill
                    placeholder={typeof project.banner === "string" ? "empty" : "blur"}
                    sizes="(min-width: 640px) 384px, 100vw"
                    className="object-cover object-top transition duration-500 group-hover:scale-[1.02] [@media(hover:hover)]:grayscale [@media(hover:hover)]:group-hover:grayscale-0"
                  />
                </div>

                <h3 className="mt-4 text-lg font-semibold tracking-tight">
                  {project.title}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {project.description.trim()}
                </p>
                <p className="mt-3 font-mono text-[11px] text-muted-foreground">
                  {project.stack.join(" / ")}
                </p>

                <div className="mt-auto flex gap-5 pt-4 font-mono text-[11px] uppercase tracking-[0.14em]">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 transition-colors hover:text-signal"
                    aria-label={`${project.title} source code`}
                  >
                    Source <FiArrowUpRight aria-hidden="true" />
                  </a>
                  {live && (
                    <a
                      href={project.deployedLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 transition-colors hover:text-signal"
                      aria-label={`${project.title} live site`}
                    >
                      Live <FiArrowUpRight aria-hidden="true" />
                    </a>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </Section>
  );
};
