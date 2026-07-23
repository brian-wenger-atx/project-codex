import { NextResponse } from "next/server";
import { getSessionUser } from "@/lib/auth";
import {
  getAccountPrefs,
  patchAccountPrefs,
  type PrefsObject,
} from "@/lib/account-prefs";

export const runtime = "nodejs";

function isPlainObject(value: unknown): value is PrefsObject {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value);
}

export async function GET(req: Request) {
  const user = await getSessionUser(req.headers);
  if (!user) {
    return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
  }

  try {
    const row = await getAccountPrefs(user.id);
    return NextResponse.json({
      ok: true,
      prefs: row.prefs,
      companion_credits: row.companion_credits,
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : "prefs read failed";
    return NextResponse.json({ ok: false, error: message }, { status: 500 });
  }
}

export async function PATCH(req: Request) {
  const user = await getSessionUser(req.headers);
  if (!user) {
    return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const patch =
    isPlainObject(body) && isPlainObject(body.prefs)
      ? body.prefs
      : isPlainObject(body)
        ? body
        : null;

  if (!patch || Object.keys(patch).length === 0) {
    return NextResponse.json(
      { ok: false, error: "Expected prefs object to merge" },
      { status: 400 },
    );
  }

  // Clients must not write credits via this route (Plan 5 admin only).
  if ("companion_credits" in patch) {
    return NextResponse.json(
      { ok: false, error: "companion_credits is read-only here" },
      { status: 400 },
    );
  }

  try {
    const row = await patchAccountPrefs(user.id, patch);
    return NextResponse.json({
      ok: true,
      prefs: row.prefs,
      companion_credits: row.companion_credits,
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : "prefs write failed";
    return NextResponse.json({ ok: false, error: message }, { status: 500 });
  }
}
