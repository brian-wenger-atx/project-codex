"use client";

import { useCallback, useEffect, useState } from "react";

type HealthJson = { ok?: boolean; [key: string]: unknown };

export default function HealthPage() {
  const [live, setLive] = useState<HealthJson | null>(null);
  const [ready, setReady] = useState<HealthJson | null>(null);
  const [error, setError] = useState<string | null>(null);

  const load = useCallback(async () => {
    setError(null);
    try {
      const [a, b] = await Promise.all([
        fetch("/api/health").then((r) => r.json()),
        fetch("/api/health/ready").then((r) => r.json()),
      ]);
      setLive(a);
      setReady(b);
    } catch (e) {
      setError(e instanceof Error ? e.message : "fetch failed");
    }
  }, []);

  useEffect(() => {
    void load();
  }, [load]);

  return (
    <div className="flex flex-col gap-6">
      <header>
        <h1 className="m-0 font-[family-name:var(--font-display)] text-2xl font-normal sm:text-3xl">
          Health
        </h1>
        <p className="mt-2 text-[color:var(--ink-muted)]">
          Service health checks.
        </p>
      </header>
      <button
        type="button"
        onClick={() => void load()}
        className="inline-flex min-h-11 w-fit items-center rounded-lg border border-[color:var(--border)] px-4"
      >
        Refresh
      </button>
      {error ? <p className="text-red-700">{error}</p> : null}
      <div className="grid gap-4 sm:grid-cols-2">
        <pre className="overflow-auto rounded-xl bg-[color:var(--canvas-elevated)] p-4 text-sm shadow-sm ring-1 ring-[color:var(--border)]">
          {JSON.stringify(live, null, 2) || "…"}
        </pre>
        <pre className="overflow-auto rounded-xl bg-[color:var(--canvas-elevated)] p-4 text-sm shadow-sm ring-1 ring-[color:var(--border)]">
          {JSON.stringify(ready, null, 2) || "…"}
        </pre>
      </div>
    </div>
  );
}
