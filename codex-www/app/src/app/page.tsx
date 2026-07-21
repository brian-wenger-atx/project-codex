import Link from "next/link";

export default function HomePage() {
  return (
    <main className="mx-auto flex min-h-dvh max-w-md flex-col items-center justify-center px-6 py-10 text-center sm:max-w-lg md:max-w-xl">
      <h1 className="m-0 text-3xl font-normal tracking-wide sm:text-4xl md:text-5xl">
        Project Codex
      </h1>
      <p className="mt-3 text-base leading-relaxed text-[color:var(--muted)] sm:text-lg">
        Lab scaffold on :4003. Built mobile-first — production home is cloud.
      </p>
      <p className="mt-8 text-xs uppercase tracking-[0.12em] text-[color:var(--muted)]">
        <Link href="/api/health" className="underline-offset-4 hover:underline">
          Health
        </Link>
        <span aria-hidden="true"> · </span>
        P2
      </p>
    </main>
  );
}
