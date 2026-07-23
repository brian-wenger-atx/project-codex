/**
 * Admin + credit security helpers (Plan 5 / 5b).
 * Master secret is env-only (never settable via website).
 */
import { createHash, timingSafeEqual } from "node:crypto";
import { getDb, getPool } from "@/lib/db";
import { revokeUserSessions, type SessionUser } from "@/lib/auth";

export type AdminUserRow = {
  id: string;
  email: string;
  name: string;
  role: string;
  companion_credits: number;
  disabled_at: Date | string | null;
  credits_frozen_at: Date | string | null;
  createdAt: Date | string;
};

const CREDITS_HARD_MAX = 1_000_000;
/** Positive delta that requires master secret. */
const CREDITS_ANOMALY_DELTA = 100;
/** Absolute value that always counts as anomalous increase. */
const CREDITS_ANOMALY_ABS = 500;
const CREDITS_RATE_LIMIT = 5;
const CREDITS_RATE_WINDOW_MS = 30_000;
const MASTER_FAIL_WINDOW_MS = 60 * 60 * 1000;
const MASTER_FAIL_NOTIFY_AT = 2;
const MASTER_FAIL_DISABLE_AT = 3;

const AUTHORIZED_CREDIT_ACTIONS = [
  "credits_set",
  "credits_set_anomaly",
  "credits_trusted_grant",
] as const;

export async function writeAdminAudit(
  actorUserId: string,
  action: string,
  payload: Record<string, unknown>,
): Promise<void> {
  const db = getDb();
  await db.query(
    `INSERT INTO admin_audit (actor_user_id, action, payload)
     VALUES ($1, $2, $3::jsonb)`,
    [actorUserId, action, JSON.stringify(payload)],
  );
}

/** Plan 6 — audit + CF email to every BOOKFELLOW_ADMIN_EMAILS address. */
export async function queueAdminNotify(
  actorUserId: string,
  event: string,
  payload: Record<string, unknown>,
): Promise<void> {
  await writeAdminAudit(actorUserId, "admin_notify_pending", {
    event,
    ...payload,
  });

  const { adminAlertEmails, sendEmail } = await import("@/lib/email");
  const recipients = adminAlertEmails();
  if (recipients.length === 0) {
    await writeAdminAudit(actorUserId, "admin_notify_skipped", {
      event,
      reason: "BOOKFELLOW_ADMIN_EMAILS empty",
    });
    return;
  }

  const subject = `[Bookfellow] Admin alert: ${event}`;
  const detail = JSON.stringify({ event, actorUserId, ...payload }, null, 2);
  const text = `Bookfellow admin alert\n\n${detail}\n`;
  const sent = await sendEmail({
    to: recipients,
    subject,
    text,
    from: { address: "invites@bookfellow.io", name: "Bookfellow Alerts" },
  });
  await writeAdminAudit(actorUserId, sent.ok ? "admin_notify_sent" : "admin_notify_failed", {
    event,
    recipients,
    ...(sent.ok
      ? { delivered: sent.delivered, queued: sent.queued }
      : { error: sent.error }),
  });
}

export async function listUsersForAdmin(): Promise<AdminUserRow[]> {
  const db = getDb();
  const res = await db.query<AdminUserRow>(
    `SELECT id, email, name, role, companion_credits, disabled_at,
            credits_frozen_at, "createdAt"
     FROM "user"
     ORDER BY "createdAt" ASC`,
  );
  return res.rows;
}

export async function getUserForAdmin(
  userId: string,
): Promise<AdminUserRow | null> {
  const db = getDb();
  const res = await db.query<AdminUserRow>(
    `SELECT id, email, name, role, companion_credits, disabled_at,
            credits_frozen_at, "createdAt"
     FROM "user" WHERE id = $1`,
    [userId],
  );
  return res.rows[0] ?? null;
}

function masterSecretExpected(): string {
  const primary = (process.env.BOOKFELLOW_ADMIN_MASTER_SECRET || "").trim();
  if (primary) return primary;
  // One-release fallback during rename migrate
  return (process.env.BOOKFELLOW_ADMIN_PEER_DISABLE_SECRET || "").trim();
}

export function adminMasterSecretOk(provided: unknown): boolean {
  const expected = masterSecretExpected();
  if (!expected) return false;
  if (typeof provided !== "string" || provided.length === 0) return false;
  const a = createHash("sha256").update(provided, "utf8").digest();
  const b = createHash("sha256").update(expected, "utf8").digest();
  return timingSafeEqual(a, b);
}

export function adminMasterSecretConfigured(): boolean {
  return Boolean(masterSecretExpected());
}

export type DisableResult =
  | { ok: true }
  | { ok: false; status: 400 | 403 | 404; error: string };

/** Punitive / system disable — may target self (bypasses self-disable guard). */
export async function forceDisableUser(
  actorId: string,
  targetId: string,
  reason: string,
): Promise<void> {
  const db = getDb();
  await db.query(
    `UPDATE "user" SET disabled_at = now(), "updatedAt" = now() WHERE id = $1`,
    [targetId],
  );
  await revokeUserSessions(targetId);
  await writeAdminAudit(actorId, "user_force_disable", {
    target_user_id: targetId,
    reason,
  });
}

export async function disableUser(
  actor: SessionUser,
  targetId: string,
  masterSecret: unknown,
): Promise<DisableResult> {
  if (actor.id === targetId) {
    await writeAdminAudit(actor.id, "user_disable_blocked_self", {
      target_user_id: targetId,
    });
    return { ok: false, status: 403, error: "Cannot disable your own account" };
  }

  const target = await getUserForAdmin(targetId);
  if (!target) {
    return { ok: false, status: 404, error: "User not found" };
  }

  if (target.disabled_at) {
    return { ok: false, status: 400, error: "User already disabled" };
  }

  if (target.role === "admin") {
    if (!adminMasterSecretConfigured()) {
      await writeAdminAudit(actor.id, "user_disable_blocked_master_secret_unset", {
        target_user_id: targetId,
      });
      return {
        ok: false,
        status: 403,
        error:
          "Master secret is not configured (set BOOKFELLOW_ADMIN_MASTER_SECRET in NAS secrets only)",
      };
    }
    if (!adminMasterSecretOk(masterSecret)) {
      await writeAdminAudit(actor.id, "user_disable_blocked_master_secret", {
        target_user_id: targetId,
      });
      return {
        ok: false,
        status: 403,
        error: "Peer-admin disable requires the off-site master secret",
      };
    }
  }

  const db = getDb();
  await db.query(
    `UPDATE "user" SET disabled_at = now(), "updatedAt" = now() WHERE id = $1`,
    [targetId],
  );
  await revokeUserSessions(targetId);
  await writeAdminAudit(actor.id, "user_disable", {
    target_user_id: targetId,
    target_role: target.role,
    peer_admin: target.role === "admin",
  });
  return { ok: true };
}

export async function enableUser(
  actor: SessionUser,
  targetId: string,
): Promise<DisableResult> {
  const target = await getUserForAdmin(targetId);
  if (!target) {
    return { ok: false, status: 404, error: "User not found" };
  }
  if (!target.disabled_at) {
    return { ok: false, status: 400, error: "User is not disabled" };
  }

  const db = getDb();
  await db.query(
    `UPDATE "user" SET disabled_at = NULL, "updatedAt" = now() WHERE id = $1`,
    [targetId],
  );
  await writeAdminAudit(actor.id, "user_enable", {
    target_user_id: targetId,
    target_role: target.role,
  });
  return { ok: true };
}

export type CreditsParse =
  | { ok: true; value: number }
  | { ok: false; error: string };

export function parseAbsoluteCredits(raw: unknown): CreditsParse {
  if (typeof raw === "boolean" || raw === null || raw === undefined) {
    return { ok: false, error: "companion_credits must be an integer ≥ 0" };
  }
  if (typeof raw === "string") {
    const trimmed = raw.trim();
    if (!/^\d+$/.test(trimmed)) {
      return { ok: false, error: "companion_credits must be an integer ≥ 0" };
    }
    const n = Number(trimmed);
    if (!Number.isSafeInteger(n) || n < 0 || n > CREDITS_HARD_MAX) {
      return {
        ok: false,
        error: `companion_credits must be an integer 0…${CREDITS_HARD_MAX}`,
      };
    }
    return { ok: true, value: n };
  }
  if (typeof raw === "number") {
    if (!Number.isSafeInteger(raw) || raw < 0 || raw > CREDITS_HARD_MAX) {
      return {
        ok: false,
        error: `companion_credits must be an integer 0…${CREDITS_HARD_MAX}`,
      };
    }
    return { ok: true, value: raw };
  }
  return { ok: false, error: "companion_credits must be an integer ≥ 0" };
}

/** Increase-only anomaly (Plan 5b). */
export function isAnomalousCreditIncrease(
  before: number,
  after: number,
): boolean {
  if (after <= before) return false;
  const delta = after - before;
  return delta >= CREDITS_ANOMALY_DELTA || after >= CREDITS_ANOMALY_ABS;
}

async function recentCreditSetCount(actorId: string): Promise<number> {
  const db = getDb();
  const res = await db.query<{ n: string }>(
    `SELECT COUNT(*)::text AS n FROM admin_audit
     WHERE actor_user_id = $1
       AND action IN ('credits_set', 'credits_set_anomaly')
       AND created_at > now() - make_interval(secs => $2)`,
    [actorId, CREDITS_RATE_WINDOW_MS / 1000],
  );
  return Number(res.rows[0]?.n ?? 0);
}

async function countMasterSecretFails(actorId: string): Promise<number> {
  const db = getDb();
  const res = await db.query<{ n: string }>(
    `SELECT COUNT(*)::text AS n FROM admin_audit
     WHERE actor_user_id = $1
       AND action = 'credits_master_secret_fail'
       AND created_at > now() - make_interval(secs => $2)`,
    [actorId, MASTER_FAIL_WINDOW_MS / 1000],
  );
  return Number(res.rows[0]?.n ?? 0);
}

export type SetCreditsResult =
  | {
      ok: true;
      companion_credits: number;
      anomaly: boolean;
    }
  | {
      ok: false;
      status: 400 | 403 | 404 | 429;
      error: string;
      anomaly?: boolean;
      failCount?: number;
      actorDisabled?: boolean;
    };

export async function setCompanionCredits(
  actor: SessionUser,
  targetId: string,
  rawCredits: unknown,
  masterSecret: unknown,
): Promise<SetCreditsResult> {
  const parsed = parseAbsoluteCredits(rawCredits);
  if (!parsed.ok) {
    await writeAdminAudit(actor.id, "credits_set_blocked_invalid", {
      target_user_id: targetId,
      raw:
        typeof rawCredits === "string" || typeof rawCredits === "number"
          ? rawCredits
          : String(rawCredits),
      error: parsed.error,
    });
    return { ok: false, status: 400, error: parsed.error };
  }

  const target = await getUserForAdmin(targetId);
  if (!target) {
    return { ok: false, status: 404, error: "User not found" };
  }

  const before = target.companion_credits;
  const after = parsed.value;
  const delta = after - before;
  const isIncrease = after > before;
  const anomaly = isAnomalousCreditIncrease(before, after);

  if (target.credits_frozen_at && isIncrease) {
    await writeAdminAudit(actor.id, "credits_set_blocked_frozen", {
      target_user_id: targetId,
      before,
      after,
      delta,
    });
    return {
      ok: false,
      status: 403,
      error: "Credits are frozen for this user — clear freeze before increasing",
    };
  }

  if (anomaly) {
    if (!adminMasterSecretConfigured()) {
      await writeAdminAudit(actor.id, "credits_set_blocked_master_secret_unset", {
        target_user_id: targetId,
        before,
        after,
        delta,
      });
      return {
        ok: false,
        status: 403,
        anomaly: true,
        error:
          "Large credit increase requires BOOKFELLOW_ADMIN_MASTER_SECRET (NAS secrets)",
      };
    }
    if (!adminMasterSecretOk(masterSecret)) {
      await writeAdminAudit(actor.id, "credits_master_secret_fail", {
        target_user_id: targetId,
        before,
        after,
        delta,
      });
      const failCount = await countMasterSecretFails(actor.id);
      if (failCount === MASTER_FAIL_NOTIFY_AT) {
        await queueAdminNotify(actor.id, "credits_master_secret_fail_threshold", {
          failCount,
          target_user_id: targetId,
        });
      }
      if (failCount >= MASTER_FAIL_DISABLE_AT) {
        await forceDisableUser(
          actor.id,
          actor.id,
          "credits_master_secret_fail_threshold",
        );
        await queueAdminNotify(actor.id, "credits_master_secret_actor_disabled", {
          failCount,
          target_user_id: targetId,
        });
        return {
          ok: false,
          status: 403,
          anomaly: true,
          failCount,
          actorDisabled: true,
          error:
            "Too many failed master-secret attempts — your admin account is disabled",
        };
      }
      return {
        ok: false,
        status: 403,
        anomaly: true,
        failCount,
        error: `Large credit increase requires the off-site master secret (fail ${failCount}/${MASTER_FAIL_DISABLE_AT} in 1h)`,
      };
    }
  }

  const recent = await recentCreditSetCount(actor.id);
  if (recent >= CREDITS_RATE_LIMIT) {
    await writeAdminAudit(actor.id, "credits_set_blocked_rate", {
      target_user_id: targetId,
      before,
      after,
      recent,
    });
    return {
      ok: false,
      status: 429,
      error: "Too many credit changes — wait a moment and try again",
    };
  }

  const db = getDb();
  await db.query(
    `UPDATE "user" SET companion_credits = $1, "updatedAt" = now() WHERE id = $2`,
    [after, targetId],
  );
  await writeAdminAudit(
    actor.id,
    anomaly ? "credits_set_anomaly" : "credits_set",
    {
      target_user_id: targetId,
      before,
      after,
      delta,
      anomaly,
    },
  );
  if (anomaly) {
    await queueAdminNotify(actor.id, "credits_set_anomaly_ok", {
      target_user_id: targetId,
      before,
      after,
      delta,
    });
  }
  return { ok: true, companion_credits: after, anomaly };
}

export type FreezeResult =
  | { ok: true }
  | { ok: false; status: 400 | 403 | 404; error: string };

export async function clearCreditsFreeze(
  actor: SessionUser,
  targetId: string,
  masterSecret: unknown,
): Promise<FreezeResult> {
  if (!adminMasterSecretConfigured() || !adminMasterSecretOk(masterSecret)) {
    await writeAdminAudit(actor.id, "credits_freeze_clear_blocked_secret", {
      target_user_id: targetId,
    });
    return {
      ok: false,
      status: 403,
      error: "Clearing credit freeze requires the off-site master secret",
    };
  }
  const target = await getUserForAdmin(targetId);
  if (!target) {
    return { ok: false, status: 404, error: "User not found" };
  }
  if (!target.credits_frozen_at) {
    return { ok: false, status: 400, error: "User is not credit-frozen" };
  }
  const db = getDb();
  await db.query(
    `UPDATE "user" SET credits_frozen_at = NULL, "updatedAt" = now() WHERE id = $1`,
    [targetId],
  );
  await writeAdminAudit(actor.id, "credits_freeze_clear", {
    target_user_id: targetId,
  });
  return { ok: true };
}

/**
 * Trusted product grant (purchases / redeem fulfill / bundles).
 * Same-txn balance bump + credits_trusted_grant audit. Bypasses freeze.
 * System actor id: use a stable ops user or the calling service principal.
 */
export async function grantCompanionCreditsTrusted(args: {
  actorUserId: string;
  targetUserId: string;
  delta: number;
  source: string;
  ref?: string;
}): Promise<{ ok: true; companion_credits: number } | { ok: false; error: string }> {
  if (!Number.isSafeInteger(args.delta) || args.delta === 0) {
    return { ok: false, error: "delta must be a non-zero safe integer" };
  }
  const pool = getPool();
  const client = await pool.connect();
  try {
    await client.query("BEGIN");
    const cur = await client.query<{ companion_credits: number }>(
      `SELECT companion_credits FROM "user" WHERE id = $1 FOR UPDATE`,
      [args.targetUserId],
    );
    const row = cur.rows[0];
    if (!row) {
      await client.query("ROLLBACK");
      return { ok: false, error: "User not found" };
    }
    const before = row.companion_credits;
    const after = before + args.delta;
    if (after < 0 || after > CREDITS_HARD_MAX) {
      await client.query("ROLLBACK");
      return { ok: false, error: "Resulting credits out of range" };
    }
    await client.query(
      `UPDATE "user" SET companion_credits = $1, "updatedAt" = now() WHERE id = $2`,
      [after, args.targetUserId],
    );
    await client.query(
      `INSERT INTO admin_audit (actor_user_id, action, payload)
       VALUES ($1, 'credits_trusted_grant', $2::jsonb)`,
      [
        args.actorUserId,
        JSON.stringify({
          target_user_id: args.targetUserId,
          before,
          after,
          delta: args.delta,
          source: args.source,
          ref: args.ref ?? null,
        }),
      ],
    );
    await client.query("COMMIT");
    return { ok: true, companion_credits: after };
  } catch (err) {
    try {
      await client.query("ROLLBACK");
    } catch {
      /* ignore */
    }
    throw err;
  } finally {
    client.release();
  }
}

export { AUTHORIZED_CREDIT_ACTIONS };
