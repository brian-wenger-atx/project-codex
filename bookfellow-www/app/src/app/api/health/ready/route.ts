import { NextResponse } from "next/server";
import { pingDb } from "@/lib/db";
import { pingRedis } from "@/lib/queue";

export const runtime = "nodejs";

/** Readiness — Postgres via PgBouncer + Redis. Fail closed if either is down. */
export async function GET() {
  try {
    const [dbOk, redisOk] = await Promise.all([pingDb(), pingRedis()]);
    if (!dbOk || !redisOk) {
      return NextResponse.json(
        {
          ok: false,
          service: "bookfellow-web",
          db: dbOk ? "ok" : "fail",
          redis: redisOk ? "ok" : "fail",
        },
        { status: 503 },
      );
    }
    return NextResponse.json({
      ok: true,
      service: "bookfellow-web",
      phase: "M1",
      db: "ok",
      redis: "ok",
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : "ready error";
    return NextResponse.json(
      {
        ok: false,
        service: "bookfellow-web",
        db: "error",
        redis: "error",
        error: message,
      },
      { status: 503 },
    );
  }
}
