import type { ReactNode } from "react";

export default function Section({
  id,
  index,
  label,
  children,
}: {
  id: string;
  index: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className="scroll-mt-20 border-t border-border py-14 sm:py-16"
    >
      <h2
        id={`${id}-heading`}
        className="mb-8 flex items-baseline gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground"
      >
        <span className="text-ink">{index}</span>
        {label}
      </h2>
      {children}
    </section>
  );
}
