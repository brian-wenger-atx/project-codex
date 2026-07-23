"use client";

import { FormEvent, useCallback, useEffect, useState } from "react";

type Invite = {
  id: string;
  email: string;
  created_by: string;
  created_at: string;
  expires_at: string;
  used_at: string | null;
  used_by: string | null;
  status: "pending" | "used" | "expired";
};

const fieldClass =
  "min-h-11 rounded-lg border border-[color:var(--ink-muted)]/30 bg-white px-3 text-base";

export function AdminInvitesPanel() {
  const [invites, setInvites] = useState<Invite[]>([]);
  const [emailConfigured, setEmailConfigured] = useState(true);
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [busyId, setBusyId] = useState<string | null>(null);

  const load = useCallback(async () => {
    setError(null);
    const res = await fetch("/api/admin/invites");
    const data = (await res.json()) as {
      ok?: boolean;
      error?: string;
      emailConfigured?: boolean;
      invites?: Invite[];
    };
    if (!res.ok || !data.ok) {
      setError(data.error || `Load failed (${res.status})`);
      return;
    }
    setEmailConfigured(data.emailConfigured !== false);
    setInvites(data.invites ?? []);
  }, []);

  useEffect(() => {
    void load();
  }, [load]);

  async function onMint(e: FormEvent) {
    e.preventDefault();
    setBusy(true);
    setError(null);
    try {
      const res = await fetch("/api/admin/invites", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = (await res.json()) as { ok?: boolean; error?: string };
      if (!res.ok || !data.ok) {
        setError(data.error || `Mint failed (${res.status})`);
        return;
      }
      setEmail("");
      await load();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Mint failed");
    } finally {
      setBusy(false);
    }
  }

  async function onResend(id: string) {
    setBusyId(id);
    setError(null);
    try {
      const res = await fetch(`/api/admin/invites/${id}/resend`, {
        method: "POST",
      });
      const data = (await res.json()) as { ok?: boolean; error?: string };
      if (!res.ok || !data.ok) {
        setError(data.error || `Resend failed (${res.status})`);
        return;
      }
      await load();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Resend failed");
    } finally {
      setBusyId(null);
    }
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap items-center gap-2">
        <h2 className="m-0 text-lg font-medium">Invites</h2>
      </div>

      {!emailConfigured ? (
        <p className="m-0 text-sm text-amber-800" role="status">
          Cloudflare Email Sending is not configured. Set{" "}
          <code>CLOUDFLARE_ACCOUNT_ID</code> and{" "}
          <code>CLOUDFLARE_EMAIL_API_TOKEN</code> in secrets before minting.
        </p>
      ) : null}

      <form onSubmit={onMint} className="flex max-w-md flex-col gap-3">
        <label className="flex flex-col gap-1 text-sm">
          Email
          <input
            type="email"
            required
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={fieldClass}
          />
        </label>
        <button
          type="submit"
          disabled={busy || !emailConfigured}
          className="inline-flex min-h-11 items-center justify-center rounded-lg bg-[color:var(--accent)] px-4 text-white disabled:opacity-50"
        >
          {busy ? "Sending…" : "Mint & email invite"}
        </button>
      </form>

      {error ? (
        <p className="m-0 text-sm text-red-700" role="alert">
          {error}
        </p>
      ) : null}

      <div className="overflow-x-auto">
        <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-[color:var(--ink-muted)]/30">
              <th className="py-2 pr-3 font-medium">Email</th>
              <th className="py-2 pr-3 font-medium">Status</th>
              <th className="py-2 pr-3 font-medium">Expires</th>
              <th className="py-2 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {invites.length === 0 ? (
              <tr>
                <td colSpan={4} className="py-4 text-[color:var(--ink-muted)]">
                  No invites yet.
                </td>
              </tr>
            ) : (
              invites.map((inv) => (
                <tr
                  key={inv.id}
                  className="border-b border-[color:var(--ink-muted)]/20"
                >
                  <td className="py-2 pr-3">{inv.email}</td>
                  <td className="py-2 pr-3 capitalize">{inv.status}</td>
                  <td className="py-2 pr-3">
                    {new Date(inv.expires_at).toLocaleString()}
                  </td>
                  <td className="py-2">
                    {inv.status === "pending" ? (
                      <button
                        type="button"
                        disabled={busyId === inv.id || !emailConfigured}
                        onClick={() => void onResend(inv.id)}
                        className="min-h-11 underline disabled:opacity-50"
                      >
                        {busyId === inv.id ? "Sending…" : "Resend"}
                      </button>
                    ) : (
                      <span className="text-[color:var(--ink-muted)]">—</span>
                    )}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
