"use client";

import { useState } from "react";

interface ExperienceType {
  Index: number;
  Position: string;
  Company: string;
  StartDate: string;
  EndDate: string;
  WorkLocation: string;
  task: string[];
}

export default function ExperienceClient({
  experiences,
}: {
  experiences: ExperienceType[];
}) {
  const [expandedItems, setExpandedItems] = useState<Set<number>>(
    () => new Set([0])
  );

  const toggleExpand = (index: number) => {
    setExpandedItems((prev) => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  };

  return (
    <div className="max-w-[48rem]">
      {experiences.map((exp, index) => {
        const isExpanded = expandedItems.has(index);
        return (
          <article
            key={exp.Index}
            className="grid gap-3 border-b border-border py-7 last:border-b-0 sm:grid-cols-[9.5rem_1fr] sm:gap-8"
          >
            <p className="pt-1 font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground">
              {exp.StartDate}
              <span className="mx-1">—</span>
              {exp.EndDate}
            </p>
            <div>
              <h3 className="font-serif text-[1.65rem] leading-none tracking-[-0.02em]">
                {exp.Company}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {exp.Position}
                <span className="mx-2 text-border" aria-hidden="true">
                  /
                </span>
                {exp.WorkLocation}
              </p>
              <button
                type="button"
                onClick={() => toggleExpand(index)}
                className="link mt-4 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground"
                aria-expanded={isExpanded}
              >
                {isExpanded ? "Hide notes" : "Read notes"}
              </button>
              {isExpanded && (
                <ul className="mt-4 space-y-3 border-l border-border pl-4">
                  {exp.task.map((note) => (
                    <li
                      key={note}
                      className="text-[15px] leading-[1.7] text-foreground/85"
                    >
                      {note.trim()}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </article>
        );
      })}
    </div>
  );
}
