import { betterAuth } from "better-auth";
import { APIError } from "better-auth/api";
import { Pool, type Pool as PgPool } from "pg";
import { getPool } from "@/lib/db";

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
  },
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
          return {
            data: {
              ...user,
              email,
              name,
              role,
            },
          };
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
