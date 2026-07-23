import { betterAuth } from "better-auth";
import { APIError } from "better-auth/api";
import { haveIBeenPwned } from "better-auth/plugins";
import { Pool, type Pool as PgPool } from "pg";
import { getPool } from "@/lib/db";
import { consumeInvite, findValidInvite } from "@/lib/invites";

const BUILD_PLACEHOLDER_SECRET = "build-placeholder-secret-not-for-runtime";

function appUrl(): string {
  return (
    process.env.BETTER_AUTH_URL ||
    process.env.BOOKFELLOW_APP_URL ||
    "http://192.168.1.200:4003"
  );
}

function adminEmails(): Set<string> {
  const raw = process.env.BOOKFELLOW_ADMIN_EMAILS || "";
  return new Set(
    raw
      .split(",")
      .map((e) => e.trim().toLowerCase())
      .filter(Boolean),
  );
}

function localPart(email: string): string {
  const at = email.indexOf("@");
  return at > 0 ? email.slice(0, at) : email;
}

/** Real secret at runtime; placeholder only when DATABASE_URL is absent (next build). */
function authSecret(): string {
  const secret = (process.env.BETTER_AUTH_SECRET || "").trim();
  const isRuntime = Boolean(process.env.DATABASE_URL);
  if (isRuntime) {
    if (!secret || secret === BUILD_PLACEHOLDER_SECRET) {
      throw new Error(
        "BETTER_AUTH_SECRET must be set to a non-placeholder value at runtime",
      );
    }
    return secret;
  }
  return secret || BUILD_PLACEHOLDER_SECRET;
}

/** Pool for Better Auth — real singleton at runtime; inert stub during `next build`. */
function authDatabase(): PgPool {
  if (process.env.DATABASE_URL) {
    return getPool();
  }
  return new Pool({
    connectionString: "postgresql://build:build@127.0.0.1:1/build",
    max: 1,
  });
}

export const auth = betterAuth({
  database: authDatabase(),
  secret: authSecret(),
  baseURL: appUrl(),
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: false,
    minPasswordLength: 12,
  },
  session: {
    // Documented in docs/runbooks/account-auth-admin.md (ASVS V7)
    expiresIn: 60 * 60 * 24 * 7, // 7 days absolute
    updateAge: 60 * 60 * 24, // refresh once per day when used
  },
  rateLimit: {
    enabled: true,
    storage: "database",
    window: 60,
    max: 100,
    customRules: {
      "/sign-in/email": { window: 10, max: 3 },
      "/sign-up/email": { window: 60, max: 5 },
      "/request-password-reset": { window: 60, max: 3 },
      "/forget-password": { window: 60, max: 3 },
      "/reset-password": { window: 60, max: 5 },
    },
  },
  plugins: [haveIBeenPwned()],
  user: {
    additionalFields: {
      role: {
        type: "string",
        required: true,
        defaultValue: "user",
        input: false,
      },
      disabledAt: {
        type: "date",
        required: false,
        input: false,
        fieldName: "disabled_at",
      },
      pendingRedeemCode: {
        type: "string",
        required: false,
        input: true,
        fieldName: "pending_redeem_code",
      },
      inviteTokenInput: {
        type: "string",
        required: true,
        input: true,
        fieldName: "invite_token_input",
      },
      inviteId: {
        type: "string",
        required: false,
        input: false,
        fieldName: "invite_id",
      },
    },
  },
  databaseHooks: {
    user: {
      create: {
        before: async (user) => {
          const email = (user.email || "").toLowerCase();
          const role = adminEmails().has(email) ? "admin" : "user";
          const name =
            user.name && user.name.trim().length > 0
              ? user.name
              : localPart(email);
          const raw = (
            user as { pendingRedeemCode?: string | null }
          ).pendingRedeemCode;
          const trimmed =
            typeof raw === "string" ? raw.trim() : raw == null ? "" : String(raw).trim();
          const inviteRaw = (
            user as { inviteTokenInput?: string | null }
          ).inviteTokenInput;
          const inviteToken =
            typeof inviteRaw === "string"
              ? inviteRaw.trim()
              : inviteRaw == null
                ? ""
                : String(inviteRaw).trim();
          const invite = await findValidInvite(email, inviteToken);
          if (!invite.ok) {
            throw new APIError("BAD_REQUEST", { message: invite.error });
          }
          return {
            data: {
              ...user,
              email,
              name,
              role,
              emailVerified: true,
              pendingRedeemCode: trimmed.length > 0 ? trimmed : null,
              inviteTokenInput: null,
              inviteId: invite.inviteId,
            },
          };
        },
        after: async (user) => {
          const inviteId = (user as { inviteId?: string | null }).inviteId;
          if (!inviteId) {
            throw new APIError("BAD_REQUEST", {
              message: "Invite required",
            });
          }
          const ok = await consumeInvite(inviteId, user.id);
          if (!ok) {
            const pool = getPool();
            await pool.query(`DELETE FROM "session" WHERE "userId" = $1`, [
              user.id,
            ]);
            await pool.query(`DELETE FROM "account" WHERE "userId" = $1`, [
              user.id,
            ]);
            await pool.query(`DELETE FROM "user" WHERE "id" = $1`, [user.id]);
            throw new APIError("BAD_REQUEST", {
              message: "Invite already used",
            });
          }
        },
      },
    },
    session: {
      create: {
        before: async (session) => {
          const pool = getPool();
          const res = await pool.query<{ disabled_at: Date | null }>(
            `SELECT "disabled_at" FROM "user" WHERE "id" = $1`,
            [session.userId],
          );
          if (res.rows[0]?.disabled_at) {
            throw new APIError("FORBIDDEN", { message: "Account disabled" });
          }
          return { data: session };
        },
      },
    },
  },
});

/** Plan 5 disable path — wipe sessions for a user. */
export async function revokeUserSessions(userId: string): Promise<void> {
  const pool = getPool();
  await pool.query(`DELETE FROM "session" WHERE "userId" = $1`, [userId]);
}

export type SessionUser = {
  id: string;
  email: string;
  name: string;
  role: string;
  disabledAt?: Date | null;
};

export async function getSessionUser(
  headers: Headers,
): Promise<SessionUser | null> {
  const session = await auth.api.getSession({ headers });
  if (!session?.user) return null;
  const u = session.user as SessionUser & { disabledAt?: Date | string | null };
  if (u.disabledAt) return null;
  return {
    id: u.id,
    email: u.email,
    name: u.name,
    role: u.role || "user",
    disabledAt: u.disabledAt ?? null,
  };
}

export type RequireAdminResult =
  | { ok: true; user: SessionUser }
  | { ok: false; status: 401 | 403 };

/** Node layouts / route handlers only — not Edge middleware. */
export async function requireAdmin(
  headers: Headers,
): Promise<RequireAdminResult> {
  const user = await getSessionUser(headers);
  if (!user) return { ok: false, status: 401 };
  if (user.role !== "admin") return { ok: false, status: 403 };
  return { ok: true, user };
}
