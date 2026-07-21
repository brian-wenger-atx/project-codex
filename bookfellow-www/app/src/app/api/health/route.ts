import { NextResponse } from "next/server";

export const runtime = "nodejs";

/** Liveness — process up (compose may prefer /api/health/ready). */
export async function GET() {
  return NextResponse.json({
    ok: true,
    service: "bookfellow-web",
    phase: "P4",
  });
}
