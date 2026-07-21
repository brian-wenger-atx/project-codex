import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-6">
      <header>
        <h1 className="m-0 font-[family-name:var(--font-display)] text-3xl font-normal tracking-wide sm:text-4xl">
          Project Codex
        </h1>
        <p className="mt-2 text-base text-[color:var(--ink-muted)] sm:text-lg">
          Lab shell on :4003 — mobile hamburger, landscape sidebar. Production home is cloud.
        </p>
      </header>
      <ul className="m-0 flex list-none flex-col gap-2 p-0 sm:flex-row sm:gap-4">
        <li>
          <Link
            href="/health"
            className="inline-flex min-h-11 items-center rounded-lg bg-[color:var(--accent-soft)] px-4 text-[color:var(--accent)]"
          >
            Health
          </Link>
        </li>
        <li>
          <Link
            href="/queue"
            className="inline-flex min-h-11 items-center rounded-lg border border-[color:var(--border)] px-4"
          >
            Queue smoke
          </Link>
        </li>
      </ul>
    </div>
  );
}
