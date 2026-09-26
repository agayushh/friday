import { Suspense } from "react";
import { achieve_list } from "../config/achievement";
import Section from "./Section";
import Stats from "./Stats";

const Achievements = () => {
  return (
    <Section id="record" index="05" label="Record">
      <ul className="max-w-[48rem]">
        {achieve_list.map((achieve) => (
          <li
            key={achieve.title}
            className="grid gap-1 border-b border-border py-4 last:border-b-0 sm:grid-cols-[9.5rem_1fr] sm:gap-8 sm:py-5"
          >
            <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground">
              {achieve.time}
            </p>
            <p className="text-[15px] leading-relaxed">{achieve.title}</p>
          </li>
        ))}
      </ul>

      <div className="mt-14">
        <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
          GitHub
        </p>
        <Suspense
          fallback={
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
              Loading contributions
            </p>
          }
        >
          <Stats />
        </Suspense>
      </div>
    </Section>
  );
};

export default Achievements;
