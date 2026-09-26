import { achieve_list } from "../config/achievement";
import Section from "./Section";

const Achievements = () => {
  return (
    <Section
      id="commendations"
      index="05"
      title="Commendations"
      meta={`${achieve_list.length} on record`}
    >
      <ol>
        {achieve_list.map((achieve, index) => (
          <li
            key={achieve.title}
            className="flex items-baseline gap-4 border-b border-border px-4 py-3.5 last:border-b-0 sm:px-6"
          >
            <span className="shrink-0 font-mono text-[11px] text-signal">
              C-{String(index + 1).padStart(2, "0")}
            </span>
            <span className="min-w-0 flex-1 text-[15px] leading-6">
              {achieve.title}
              <span className="mt-0.5 block font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground sm:hidden">
                {achieve.time}
              </span>
            </span>
            <span className="hidden shrink-0 font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground sm:block">
              {achieve.time}
            </span>
          </li>
        ))}
      </ol>
    </Section>
  );
};

export default Achievements;
