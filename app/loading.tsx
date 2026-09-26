export default function Loading() {
  return (
    <div
      className="flex min-h-screen items-end px-5 py-10 sm:px-8"
      role="status"
      aria-live="polite"
      aria-label="Loading portfolio"
    >
      <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
        Loading the index
      </p>
    </div>
  );
}
