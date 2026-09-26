import Image from "next/image";
import { TECH_STACK } from "../config/techStack";
import Section from "./Section";

export default function Stack() {
  return (
    <Section
      id="toolkit"
      index="04"
      title="Toolkit"
      meta={`${TECH_STACK.length} tools`}
    >
      <div className="overflow-hidden">
        <ul className="-mb-px -mr-px grid grid-cols-4 sm:grid-cols-6 md:grid-cols-9">
          {TECH_STACK.map((stk) => (
            <li key={stk.title} className="border-b border-r border-border">
              <a
                href={stk.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col items-center justify-center gap-2.5 px-1 py-4 transition-colors hover:bg-muted/60"
              >
                {typeof stk.icon === "string" ? (
                  <Image
                    src={stk.icon}
                    alt=""
                    width={28}
                    height={28}
                    unoptimized
                    loading="lazy"
                    className="size-7 object-contain opacity-80 grayscale transition duration-300 group-hover:opacity-100 group-hover:grayscale-0"
                  />
                ) : (
                  <stk.icon
                    aria-hidden="true"
                    className="size-7 text-foreground/75 transition-colors duration-300 group-hover:text-foreground"
                  />
                )}
                <span className="w-full truncate text-center font-mono text-[10px] text-muted-foreground transition-colors group-hover:text-foreground">
                  {stk.title}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
