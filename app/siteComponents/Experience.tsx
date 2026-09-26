import { FiPlus } from "react-icons/fi";
import { EXP_LIST } from "../config/experience";
import Section from "./Section";

export default function Experience() {
  return (
    <Section
      id="experience"
      index="02"
      title="Field record"
      meta={`${EXP_LIST.length} postings`}
    >
      <ol>
        {EXP_LIST.map((exp, index) => {
          const period = `${exp.StartDate} — ${exp.EndDate}`;
          return (
            <li key={exp.Index} className="border-b border-border last:border-b-0">
              <details className="group" open={index === 0}>
                <summary className="flex cursor-pointer list-none items-start gap-4 px-4 py-4 transition-colors hover:bg-muted/50 sm:px-6 [&::-webkit-details-marker]:hidden">
                  <span className="hidden w-40 shrink-0 whitespace-nowrap pt-0.5 font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground sm:block">
                    {period}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="mb-1 block font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground sm:hidden">
                      {period}
                    </span>
                    <span className="block font-medium">{exp.Company}</span>
                    <span className="block text-sm text-muted-foreground">
                      {exp.Position} · {exp.WorkLocation}
                    </span>
                  </span>
                  <FiPlus
                    aria-hidden="true"
                    className="mt-1 size-4 shrink-0 text-muted-foreground transition-transform duration-300 group-open:rotate-45 group-open:text-signal"
                  />
                </summary>
                <ul className="space-y-2.5 px-4 pb-5 sm:pl-[12.5rem] sm:pr-12">
                  {exp.task.map((task) => (
                    <li
                      key={task}
                      className="relative pl-4 text-sm leading-6 text-muted-foreground before:absolute before:left-0 before:text-signal before:content-['—']"
                    >
                      {task.trim()}
                    </li>
                  ))}
                </ul>
              </details>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
