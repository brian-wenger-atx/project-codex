"use client";

import { FormEvent, useCallback, useEffect, useState } from "react";

type AdminUser = {
  id: string;
  email: string;
  name: string;
  role: string;
  companion_credits: number;
  disabled_at: string | null;
  credits_frozen_at: string | null;
  createdAt: string;
};

const fieldClass =
  "min-h-11 rounded-lg border border-[color:var(--ink-muted)]/30 bg-white px-3 text-base";

export function AdminUsersPanel() {
  const [actorId, setActorId] = useState<string | null>(null);
  const [users, setUsers] = useState<AdminUser[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [busyId, setBusyId] = useState<string | null>(null);
  const [creditDraft, setCreditDraft] = useState<Record<string, string>>({});
  const [masterSecret, setMasterSecret] = useState("");
  const [pendingPeerDisable, setPendingPeerDisable] = useState<string | null>(
    null,
  );
  const [pendingCreditUser, setPendingCreditUser] = useState<string | null>(
    null,
  );
  const [pendingUnfreeze, setPendingUnfreeze] = useState<string | null>(null);

  const load = useCallback(async () => {
    setError(null);
    const res = await fetch("/api/admin/users");
    const data = (await res.json()) as {
      ok?: boolean;
      error?: string;
      actor_user_id?: string;
      users?: AdminUser[];
    };
    if (!res.ok || !data.ok) {
      setError(data.error || `Load failed (${res.status})`);
      return;
    }
    setActorId(data.actor_user_id ?? null);
    setUsers(data.users ?? []);
    const drafts: Record<string, string> = {};
    for (const u of data.users ?? []) {
      drafts[u.id] = String(u.companion_credits);
    }
    setCreditDraft(drafts);
  }, []);

  useEffect(() => {
    void load();
  }, [load]);

  async function setStatus(userId: string, action: "disable" | "enable") {
    setBusyId(userId);
    setError(null);
    try {
      const body: { action: string; masterSecret?: string } = { action };
      if (action === "disable" && masterSecret) {
        body.masterSecret = masterSecret;
      }
      const res = await fetch(`/api/admin/users/${userId}/status`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const data = (await res.json()) as { ok?: boolean; error?: string };
      if (!res.ok || !data.ok) {
        setError(data.error || `Status change failed (${res.status})`);
        return;
      }
      setPendingPeerDisable(null);
      setMasterSecret("");
      await load();
    } catch (e) {
      setError(e instanceof Error ? e.message : "Status change failed");
    } finally {
      setBusyId(null);
    }
  }

  async function onDisableClick(u: AdminUser) {
    if (u.role === "admin") {
      setPendingPeerDisable(u.id);
      setPendingCreditUser(null);
      setPendingUnfreeze(null);
      setError(null);
      return;
    }
    if (
      !window.confirm(
        `Disable ${u.email}? They will be signed out and cannot sign in.`,
      )
    ) {
      return;
    }
    await setStatus(u.id, "disable");
  }

  async function confirmPeerDisable(e: FormEvent) {
    e.preventDefault();
    if (!pendingPeerDisable) return;
    const target = users.find((u) => u.id === pendingPeerDisable);
    if (
      !window.confirm(
        `Disable admin ${target?.email ?? pendingPeerDisable}? Requires the off-site master secret.`,
      )
    ) {
      return;
    }
    await setStatus(pendingPeerDisable, "disable");
  }

  async function setCredits(userId: string, withSecret = false) {
    const raw = creditDraft[userId];
    const current = users.find((u) => u.id === userId)?.companion_credits ?? 0;
    const next = Number(raw);
    const isLargeIncrease =
      Number.isFinite(next) &&
      next > current &&
      (next - current >= 100 || next >= 500);

    if (isLargeIncrease && !withSecret) {
      setPendingCreditUser(userId);
      setPendingPeerDisable(null);
      setPendingUnfreeze(null);
      setError(null);
      return;
    }

    if (
      !window.confirm(`Set companion credits to ${raw} for this user?`)
    ) {
      return;
    }

    setBusyId(userId);
    setError(null);
    try {
      const body: { companion_credits: string; masterSecret?: string } = {
        companion_credits: raw,
      };
      if (withSecret || isLargeIncrease) {
        body.masterSecret = masterSecret;
      }
      const res = await fetch(`/api/admin/users/${userId}/credits`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const data = (await res.json()) as {
        ok?: boolean;
        error?: string;
        anomaly?: boolean;
        actorDisabled?: boolean;
      };
      if (!res.ok || !data.ok) {
        setError(data.error || `Credits update failed (${res.status})`);
        if (data.actorDisabled) {
          window.location.href = "/sign-in";
        }
        return;
      }
      setPendingCreditUser(null);
      setMasterSecret("");
      await load();
    } catch (e) {
      setError(e instanceof Error ? e.message : "Credits update failed");
    } finally {
      setBusyId(null);
    }
  }

  async function confirmCreditWithSecret(e: FormEvent) {
    e.preventDefault();
    if (!pendingCreditUser) return;
    await setCredits(pendingCreditUser, true);
  }

  async function clearFreeze(userId: string) {
    setBusyId(userId);
    setError(null);
    try {
      const res = await fetch(`/api/admin/users/${userId}/freeze`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "clear",
          masterSecret,
        }),
      });
      const data = (await res.json()) as { ok?: boolean; error?: string };
      if (!res.ok || !data.ok) {
        setError(data.error || `Unfreeze failed (${res.status})`);
        return;
      }
      setPendingUnfreeze(null);
      setMasterSecret("");
      await load();
    } catch (e) {
      setError(e instanceof Error ? e.message : "Unfreeze failed");
    } finally {
      setBusyId(null);
    }
  }

  async function confirmUnfreeze(e: FormEvent) {
    e.preventDefault();
    if (!pendingUnfreeze) return;
    await clearFreeze(pendingUnfreeze);
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap items-center gap-2">
        <h2 className="m-0 text-lg font-medium">Users</h2>
      </div>

      {error ? (
        <p className="text-sm text-red-700" role="alert">
          {error}
        </p>
      ) : null}

      {pendingPeerDisable ? (
        <form
          onSubmit={(e) => void confirmPeerDisable(e)}
          className="flex max-w-md flex-col gap-3 rounded-lg border border-[color:var(--border)] p-4"
        >
          <p className="m-0 text-sm">
            Disabling another admin requires the master secret from NAS secrets
            (not settable here).
          </p>
          <label className="flex flex-col gap-1 text-sm">
            Master secret
            <input
              type="password"
              autoComplete="off"
              value={masterSecret}
              onChange={(e) => setMasterSecret(e.target.value)}
              className={fieldClass}
              required
            />
          </label>
          <div className="flex flex-wrap gap-2">
            <button
              type="submit"
              disabled={busyId === pendingPeerDisable}
              className="inline-flex min-h-11 items-center justify-center rounded-lg bg-[color:var(--accent)] px-4 text-white disabled:opacity-50"
            >
              Confirm disable
            </button>
            <button
              type="button"
              onClick={() => {
                setPendingPeerDisable(null);
                setMasterSecret("");
              }}
              className="inline-flex min-h-11 items-center justify-center rounded-lg border border-[color:var(--border)] px-4"
            >
              Cancel
            </button>
          </div>
        </form>
      ) : null}

      {pendingCreditUser ? (
        <form
          onSubmit={(e) => void confirmCreditWithSecret(e)}
          className="flex max-w-md flex-col gap-3 rounded-lg border border-[color:var(--border)] p-4"
        >
          <p className="m-0 text-sm">
            Large credit increase requires the off-site master secret. Three
            failed attempts in one hour disable your admin account.
          </p>
          <label className="flex flex-col gap-1 text-sm">
            Master secret
            <input
              type="password"
              autoComplete="off"
              value={masterSecret}
              onChange={(e) => setMasterSecret(e.target.value)}
              className={fieldClass}
              required
            />
          </label>
          <div className="flex flex-wrap gap-2">
            <button
              type="submit"
              disabled={busyId === pendingCreditUser}
              className="inline-flex min-h-11 items-center justify-center rounded-lg bg-[color:var(--accent)] px-4 text-white disabled:opacity-50"
            >
              Set credits
            </button>
            <button
              type="button"
              onClick={() => {
                setPendingCreditUser(null);
                setMasterSecret("");
              }}
              className="inline-flex min-h-11 items-center justify-center rounded-lg border border-[color:var(--border)] px-4"
            >
              Cancel
            </button>
          </div>
        </form>
      ) : null}

      {pendingUnfreeze ? (
        <form
          onSubmit={(e) => void confirmUnfreeze(e)}
          className="flex max-w-md flex-col gap-3 rounded-lg border border-[color:var(--border)] p-4"
        >
          <p className="m-0 text-sm">
            Clear credit freeze with the off-site master secret.
          </p>
          <label className="flex flex-col gap-1 text-sm">
            Master secret
            <input
              type="password"
              autoComplete="off"
              value={masterSecret}
              onChange={(e) => setMasterSecret(e.target.value)}
              className={fieldClass}
              required
            />
          </label>
          <div className="flex flex-wrap gap-2">
            <button
              type="submit"
              disabled={busyId === pendingUnfreeze}
              className="inline-flex min-h-11 items-center justify-center rounded-lg bg-[color:var(--accent)] px-4 text-white disabled:opacity-50"
            >
              Clear freeze
            </button>
            <button
              type="button"
              onClick={() => {
                setPendingUnfreeze(null);
                setMasterSecret("");
              }}
              className="inline-flex min-h-11 items-center justify-center rounded-lg border border-[color:var(--border)] px-4"
            >
              Cancel
            </button>
          </div>
        </form>
      ) : null}

      <div className="-mx-1 overflow-x-auto">
        <table className="w-full min-w-[44rem] border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-[color:var(--border)] text-[color:var(--ink-muted)]">
              <th className="px-2 py-2 font-medium">Email</th>
              <th className="px-2 py-2 font-medium">Role</th>
              <th className="px-2 py-2 font-medium">Credits</th>
              <th className="px-2 py-2 font-medium">Status</th>
              <th className="px-2 py-2 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => {
              const isSelf = u.id === actorId;
              const disabled = Boolean(u.disabled_at);
              const frozen = Boolean(u.credits_frozen_at);
              return (
                <tr
                  key={u.id}
                  className="border-b border-[color:var(--border)]/60 align-top"
                >
                  <td className="px-2 py-3">
                    <div className="font-medium">{u.email}</div>
                    <div className="text-[color:var(--ink-muted)]">{u.name}</div>
                  </td>
                  <td className="px-2 py-3">{u.role}</td>
                  <td className="px-2 py-3">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
                      <input
                        type="text"
                        inputMode="numeric"
                        pattern="[0-9]*"
                        value={creditDraft[u.id] ?? ""}
                        onChange={(e) =>
                          setCreditDraft((d) => ({
                            ...d,
                            [u.id]: e.target.value,
                          }))
                        }
                        className={`${fieldClass} w-24`}
                        aria-label={`Credits for ${u.email}`}
                      />
                      <button
                        type="button"
                        disabled={busyId === u.id}
                        onClick={() => void setCredits(u.id)}
                        className="inline-flex min-h-11 items-center justify-center rounded-lg border border-[color:var(--border)] px-3 disabled:opacity-50"
                      >
                        Set
                      </button>
                    </div>
                  </td>
                  <td className="px-2 py-3">
                    <div>{disabled ? "Disabled" : "Active"}</div>
                    {frozen ? (
                      <div className="text-amber-800">Credits frozen</div>
                    ) : null}
                  </td>
                  <td className="px-2 py-3">
                    <div className="flex flex-col gap-2">
                      {isSelf ? (
                        <span className="text-[color:var(--ink-muted)]">
                          (you)
                        </span>
                      ) : disabled ? (
                        <button
                          type="button"
                          disabled={busyId === u.id}
                          onClick={() => void setStatus(u.id, "enable")}
                          className="inline-flex min-h-11 items-center justify-center rounded-lg border border-[color:var(--border)] px-3 disabled:opacity-50"
                        >
                          Enable
                        </button>
                      ) : (
                        <button
                          type="button"
                          disabled={busyId === u.id}
                          onClick={() => void onDisableClick(u)}
                          className="inline-flex min-h-11 items-center justify-center rounded-lg border border-red-700/40 px-3 text-red-800 disabled:opacity-50"
                        >
                          Disable
                        </button>
                      )}
                      {frozen ? (
                        <button
                          type="button"
                          disabled={busyId === u.id}
                          onClick={() => {
                            setPendingUnfreeze(u.id);
                            setPendingPeerDisable(null);
                            setPendingCreditUser(null);
                            setError(null);
                          }}
                          className="inline-flex min-h-11 items-center justify-center rounded-lg border border-amber-700/40 px-3 text-amber-900 disabled:opacity-50"
                        >
                          Unfreeze
                        </button>
                      ) : null}
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {users.length === 0 && !error ? (
        <p className="text-[color:var(--ink-muted)]">No users yet.</p>
      ) : null}
    </div>
  );
}
