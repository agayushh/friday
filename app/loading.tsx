export default function Loading() {
  return (
    <div
      className="flex min-h-screen items-center justify-center"
      role="status"
      aria-live="polite"
    >
      <p className="flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
        <span className="size-1.5 animate-pulse rounded-full bg-signal" />
        Retrieving file
      </p>
    </div>
  );
}
