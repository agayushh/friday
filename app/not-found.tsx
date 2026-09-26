import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-screen max-w-[1040px] flex-col justify-end px-5 py-16 sm:px-8">
      <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink">
        404
      </p>
      <h1 className="mt-4 font-serif text-5xl tracking-[-0.03em] sm:text-7xl">
        Not in the index.
      </h1>
      <p className="mt-6 max-w-md text-[16px] leading-relaxed text-muted-foreground">
        This page is not part of the portfolio.
      </p>
      <Link
        href="/"
        className="link mt-8 w-fit font-mono text-[11px] uppercase tracking-[0.16em]"
      >
        Return home
      </Link>
    </div>
  );
}
