import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <div className="w-full max-w-md border border-border">
        <p className="border-b border-border px-5 py-2.5 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
          <span className="text-signal">Error 404</span> · File not found
        </p>
        <div className="px-5 py-8">
          <h1 className="text-2xl font-semibold tracking-tight">
            This record doesn&apos;t exist.
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            It was never filed, or it has been{" "}
            <span className="redact" tabIndex={0}>
              permanently redacted
            </span>
            .
          </p>
          <Link
            href="/"
            className="mt-6 inline-flex h-9 items-center rounded-md bg-foreground px-3.5 font-mono text-[11px] uppercase tracking-[0.14em] text-background transition-opacity hover:opacity-85"
          >
            Back to file
          </Link>
        </div>
      </div>
    </div>
  );
}
