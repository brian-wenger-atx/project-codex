/**
 * P38 account preferences — server SoT (not localStorage).
 * PATCH deep-merges top-level domains and nested keys under each.
 */
import { getDb } from "@/lib/db";

export type PrefsObject = Record<string, unknown>;

/** Locked account-scoped defaults (Plan 3 consult). */
export const DEFAULT_PREFS: PrefsObject = {
  appearance: {
    background: "slate",
    accent: "harbor",
    theme: "system",
  },
  library: {
    viewMode: "covers",
    size: "M",
    sortMode: "recent",
    customOrder: [],
    pinMode: "recent",
    pins: [],
  },
  reading: {
    openCompanionByDefault: true,
    overviewCompactPhone: true,
  },
  rail: {
    collapsed: false,
  },
};

function isPlainObject(value: unknown): value is PrefsObject {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value);
}

/** Deep-merge patch into base (objects merge; arrays/scalars replace). */
export function deepMergePrefs(
  base: PrefsObject,
  patch: PrefsObject,
): PrefsObject {
  const out: PrefsObject = { ...base };
  for (const [key, value] of Object.entries(patch)) {
    const existing = out[key];
    if (isPlainObject(value) && isPlainObject(existing)) {
      out[key] = deepMergePrefs(existing, value);
    } else {
      out[key] = value;
    }
  }
  return out;
}

export type AccountPrefsRow = {
  prefs: PrefsObject;
  companion_credits: number;
};

async function ensurePrefsRow(userId: string): Promise<PrefsObject> {
  const db = getDb();
  const existing = await db.query<{ prefs: PrefsObject }>(
    `SELECT prefs FROM account_preferences WHERE user_id = $1`,
    [userId],
  );
  if (existing.rows[0]) {
    return existing.rows[0].prefs;
  }
  const prefs = structuredClone(DEFAULT_PREFS);
  await db.query(
    `INSERT INTO account_preferences (user_id, prefs, updated_at)
     VALUES ($1, $2::jsonb, now())
     ON CONFLICT (user_id) DO NOTHING`,
    [userId, JSON.stringify(prefs)],
  );
  const again = await db.query<{ prefs: PrefsObject }>(
    `SELECT prefs FROM account_preferences WHERE user_id = $1`,
    [userId],
  );
  return again.rows[0]?.prefs ?? prefs;
}

async function readCredits(userId: string): Promise<number> {
  const db = getDb();
  const res = await db.query<{ companion_credits: number }>(
    `SELECT companion_credits FROM "user" WHERE id = $1`,
    [userId],
  );
  return res.rows[0]?.companion_credits ?? 0;
}

/** Lazy-create defaults; return prefs + credits. */
export async function getAccountPrefs(
  userId: string,
): Promise<AccountPrefsRow> {
  const prefs = await ensurePrefsRow(userId);
  const companion_credits = await readCredits(userId);
  return { prefs, companion_credits };
}

/** Deep-merge patch into stored prefs; credits unchanged. */
export async function patchAccountPrefs(
  userId: string,
  patch: PrefsObject,
): Promise<AccountPrefsRow> {
  const db = getDb();
  const current = await ensurePrefsRow(userId);
  const merged = deepMergePrefs(current, patch);
  await db.query(
    `UPDATE account_preferences
     SET prefs = $2::jsonb, updated_at = now()
     WHERE user_id = $1`,
    [userId, JSON.stringify(merged)],
  );
  const companion_credits = await readCredits(userId);
  return { prefs: merged, companion_credits };
}
