import { NextResponse } from "next/server";
import { pingDb } from "@/lib/db";

export const runtime = "nodejs";

/** Readiness — Postgres via PgBouncer (SELECT 1). */
export async function GET() {
  try {
    const dbOk = await pingDb();
    if (!dbOk) {
      return NextResponse.json(
        { ok: false, service: "bookfellow-web", db: "fail" },
        { status: 503 },
      );
    }
    return NextResponse.json({
      ok: true,
      service: "bookfellow-web",
      phase: "P4",
      db: "ok",
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : "db error";
    return NextResponse.json(
      { ok: false, service: "bookfellow-web", db: "error", error: message },
      { status: 503 },
    );
  }
}
