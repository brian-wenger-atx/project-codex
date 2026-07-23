"use client";

import { useState } from "react";
import { LabBadge } from "@/components/shell/LabBadge";

type SmokeResult = { ok?: boolean; [key: string]: unknown };

async function postSmoke(mode?: string): Promise<SmokeResult> {
  const q = mode ? `?mode=${encodeURIComponent(mode)}` : "";
  const res = await fetch(`/api/queue/smoke${q}`, { method: "POST" });
  return res.json();
}

export default function QueuePage() {
  const [result, setResult] = useState<SmokeResult | null>(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function run(mode?: string) {
    setBusy(true);
    setError(null);
    try {
      setResult(await postSmoke(mode));
    } catch (e) {
      setError(e instanceof Error ? e.message : "request failed");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="flex flex-col gap-6">
      <header>
        <div className="flex flex-wrap items-center gap-2">
          <h1 className="m-0 font-[family-name:var(--font-display)] text-2xl font-normal sm:text-3xl">
            Queue smoke
          </h1>
          <LabBadge />
        </div>
        <p className="mt-2 text-[color:var(--ink-muted)]">
          Lab-only tools. Enqueues BullMQ jobs and can seed stale claims — not a product surface.
        </p>
      </header>

      <div
        className="rounded-xl border border-amber-700/30 bg-amber-50 px-4 py-3 text-sm text-amber-950"
        role="status"
      >
        <strong className="font-medium">Lab warning:</strong> These actions hit live Redis/Postgres
        on the NAS lab. Admin session required — do not expose this path on a public hostname.
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <button
          type="button"
          disabled={busy}
          onClick={() => void run()}
          className="inline-flex min-h-11 items-center justify-center rounded-lg bg-[color:var(--accent)] px-4 text-white disabled:opacity-50"
        >
          Once
        </button>
        <button
          type="button"
          disabled={busy}
          onClick={() => void run("double")}
          className="inline-flex min-h-11 items-center justify-center rounded-lg border border-[color:var(--border)] px-4 disabled:opacity-50"
        >
          Double-enqueue
        </button>
        <button
          type="button"
          disabled={busy}
          onClick={() => void run("staleClaim")}
          className="inline-flex min-h-11 items-center justify-center rounded-lg border border-[color:var(--border)] px-4 disabled:opacity-50"
        >
          Stale claim
        </button>
      </div>

      {error ? <p className="text-red-700">{error}</p> : null}
      {result ? (
        <pre className="overflow-auto rounded-xl bg-[color:var(--canvas-elevated)] p-4 text-sm shadow-sm ring-1 ring-[color:var(--border)]">
          {JSON.stringify(result, null, 2)}
        </pre>
      ) : null}
    </div>
  );
}
