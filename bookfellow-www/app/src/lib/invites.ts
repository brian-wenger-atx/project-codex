/**
 * Invite mint / validate / consume / resend (Plan 6).
 * Store token hash only; raw token emailed once (and on resend).
 */
import { createHash, randomBytes, randomUUID } from "node:crypto";
import { getDb, getPool } from "@/lib/db";
import { appBaseUrl, sendEmail } from "@/lib/email";

const INVITE_TTL_DAYS = 14;

type InviteActor = { id: string };

async function auditInvite(
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

export type InviteRow = {
  id: string;
  email: string;
  created_by: string;
  created_at: Date | string;
  expires_at: Date | string;
  used_at: Date | string | null;
  used_by: string | null;
  status: "pending" | "used" | "expired";
};

export type MintResult =
  | { ok: true; invite: InviteRow }
  | { ok: false; error: string; status: number };

function hashToken(raw: string): string {
  return createHash("sha256").update(raw, "utf8").digest("hex");
}

function normalizeEmail(email: string): string {
  return email.trim().toLowerCase();
}

function statusFor(row: {
  used_at: Date | string | null;
  expires_at: Date | string;
}): InviteRow["status"] {
  if (row.used_at) return "used";
  if (new Date(row.expires_at).getTime() <= Date.now()) return "expired";
  return "pending";
}

function toInviteRow(row: {
  id: string;
  email: string;
  created_by: string;
  created_at: Date | string;
  expires_at: Date | string;
  used_at: Date | string | null;
  used_by: string | null;
}): InviteRow {
  return {
    ...row,
    status: statusFor(row),
  };
}

function inviteEmailBodies(rawToken: string, email: string): {
  subject: string;
  text: string;
  html: string;
} {
  const link = `${appBaseUrl()}/create-account?invite=${encodeURIComponent(rawToken)}`;
  const subject = "Your Bookfellow invite";
  const text = [
    "You're invited to create a Bookfellow account.",
    "",
    `Open this link: ${link}`,
    "",
    `Or paste this invite code on Create account: ${rawToken}`,
    "",
    `This invite is for ${email} and expires in ${INVITE_TTL_DAYS} days.`,
  ].join("\n");
  const html = [
    "<p>You're invited to create a Bookfellow account.</p>",
    `<p><a href="${link}">Create your account</a></p>`,
    `<p>Or paste this invite code on Create account:</p>`,
    `<p><code>${rawToken}</code></p>`,
    `<p>This invite is for ${email} and expires in ${INVITE_TTL_DAYS} days.</p>`,
  ].join("");
  return { subject, text, html };
}

export async function listInvitesForAdmin(): Promise<InviteRow[]> {
  const db = getDb();
  const res = await db.query<{
    id: string;
    email: string;
    created_by: string;
    created_at: Date | string;
    expires_at: Date | string;
    used_at: Date | string | null;
    used_by: string | null;
  }>(
    `SELECT id, email, created_by, created_at, expires_at, used_at, used_by
     FROM invites
     ORDER BY created_at DESC
     LIMIT 200`,
  );
  return res.rows.map(toInviteRow);
}

export async function mintInvite(
  actor: InviteActor,
  emailRaw: string,
): Promise<MintResult> {
  const email = normalizeEmail(emailRaw);
  if (!email || !email.includes("@")) {
    return { ok: false, error: "Valid email required", status: 400 };
  }

  const rawToken = randomBytes(32).toString("base64url");
  const tokenHash = hashToken(rawToken);
  const id = randomUUID();
  const expiresAt = new Date(
    Date.now() + INVITE_TTL_DAYS * 24 * 60 * 60 * 1000,
  );

  const db = getDb();
  try {
    await db.query(
      `INSERT INTO invites (id, token_hash, email, created_by, expires_at)
       VALUES ($1, $2, $3, $4, $5)`,
      [id, tokenHash, email, actor.id, expiresAt.toISOString()],
    );
  } catch (err) {
    const message = err instanceof Error ? err.message : "mint failed";
    return { ok: false, error: message, status: 500 };
  }

  const bodies = inviteEmailBodies(rawToken, email);
  const sent = await sendEmail({
    to: email,
    subject: bodies.subject,
    text: bodies.text,
    html: bodies.html,
  });
  if (!sent.ok) {
    await db.query(`DELETE FROM invites WHERE id = $1 AND used_at IS NULL`, [
      id,
    ]);
    return { ok: false, error: sent.error, status: 503 };
  }

  await auditInvite(actor.id, "invite_mint", {
    invite_id: id,
    email,
    expires_at: expiresAt.toISOString(),
  });

  const row = await db.query<{
    id: string;
    email: string;
    created_by: string;
    created_at: Date | string;
    expires_at: Date | string;
    used_at: Date | string | null;
    used_by: string | null;
  }>(
    `SELECT id, email, created_by, created_at, expires_at, used_at, used_by
     FROM invites WHERE id = $1`,
    [id],
  );
  const invite = row.rows[0];
  if (!invite) {
    return { ok: false, error: "Invite missing after mint", status: 500 };
  }
  return { ok: true, invite: toInviteRow(invite) };
}

export async function resendInvite(
  actor: InviteActor,
  inviteId: string,
): Promise<MintResult> {
  const db = getDb();
  const res = await db.query<{
    id: string;
    email: string;
    token_hash: string;
    created_by: string;
    created_at: Date | string;
    expires_at: Date | string;
    used_at: Date | string | null;
    used_by: string | null;
  }>(
    `SELECT id, email, token_hash, created_by, created_at, expires_at, used_at, used_by
     FROM invites WHERE id = $1`,
    [inviteId],
  );
  const row = res.rows[0];
  if (!row) {
    return { ok: false, error: "Invite not found", status: 404 };
  }
  const status = statusFor(row);
  if (status === "used") {
    return { ok: false, error: "Invite already used", status: 409 };
  }
  if (status === "expired") {
    return { ok: false, error: "Invite expired — mint a new one", status: 409 };
  }

  // Resend requires the raw token; we only store the hash.
  // Mint a rotation: new token hash for same invite row (invalidate old email links).
  const rawToken = randomBytes(32).toString("base64url");
  const tokenHash = hashToken(rawToken);
  await db.query(
    `UPDATE invites SET token_hash = $2 WHERE id = $1 AND used_at IS NULL`,
    [inviteId, tokenHash],
  );

  const bodies = inviteEmailBodies(rawToken, row.email);
  const sent = await sendEmail({
    to: row.email,
    subject: bodies.subject,
    text: bodies.text,
    html: bodies.html,
  });
  if (!sent.ok) {
    // Roll back rotation so prior emailed token still works if send failed
    await db.query(
      `UPDATE invites SET token_hash = $2 WHERE id = $1 AND used_at IS NULL`,
      [inviteId, row.token_hash],
    );
    return { ok: false, error: sent.error, status: 503 };
  }

  await auditInvite(actor.id, "invite_resend", {
    invite_id: inviteId,
    email: row.email,
  });

  return {
    ok: true,
    invite: toInviteRow(row),
  };
}

/** Validate invite for signup email; returns invite id. Does not consume. */
export async function findValidInvite(
  emailRaw: string,
  rawToken: string,
): Promise<{ ok: true; inviteId: string } | { ok: false; error: string }> {
  const email = normalizeEmail(emailRaw);
  const token = (rawToken || "").trim();
  if (!email || !token) {
    return { ok: false, error: "Invite code required" };
  }
  const tokenHash = hashToken(token);
  const pool = getPool();
  const res = await pool.query<{
    id: string;
    email: string;
    expires_at: Date;
    used_at: Date | null;
  }>(
    `SELECT id, email, expires_at, used_at FROM invites WHERE token_hash = $1`,
    [tokenHash],
  );
  const row = res.rows[0];
  if (!row) {
    return { ok: false, error: "Invalid invite code" };
  }
  if (row.used_at) {
    return { ok: false, error: "Invite already used" };
  }
  if (new Date(row.expires_at).getTime() <= Date.now()) {
    return { ok: false, error: "Invite expired" };
  }
  if (normalizeEmail(row.email) !== email) {
    return { ok: false, error: "Invite email does not match" };
  }
  return { ok: true, inviteId: row.id };
}

/** Consume invite for user; returns false if already used (race). */
export async function consumeInvite(
  inviteId: string,
  userId: string,
): Promise<boolean> {
  const pool = getPool();
  const res = await pool.query(
    `UPDATE invites
     SET used_at = now(), used_by = $2
     WHERE id = $1 AND used_at IS NULL AND expires_at > now()`,
    [inviteId, userId],
  );
  return (res.rowCount ?? 0) > 0;
}
