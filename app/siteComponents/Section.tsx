import type { ReactNode } from "react";

export default function Section({
  id,
  index,
  title,
  meta,
  children,
}: {
  id: string;
  index: string;
  title: string;
  meta?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-heading`} className="scroll-mt-14">
      <div className="flex items-center justify-between gap-4 border-b border-border px-4 py-2.5 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground sm:px-6">
        <h2 id={`${id}-heading`} className="flex items-center gap-2.5">
          <span className="text-signal">§{index}</span>
          <span className="text-foreground">{title}</span>
        </h2>
        {meta && <span className="truncate">{meta}</span>}
      </div>
      {children}
    </section>
  );
}
