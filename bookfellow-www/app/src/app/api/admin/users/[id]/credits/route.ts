import { NextResponse } from "next/server";
import { requireAdmin } from "@/lib/auth";
import { setCompanionCredits } from "@/lib/admin";

export const runtime = "nodejs";

type Body = {
  companion_credits?: unknown;
  masterSecret?: unknown;
};

export async function POST(
  req: Request,
  context: { params: Promise<{ id: string }> },
) {
  const gate = await requireAdmin(req.headers);
  if (!gate.ok) {
    return NextResponse.json(
      { ok: false, error: gate.status === 401 ? "Unauthorized" : "Forbidden" },
      { status: gate.status },
    );
  }

  const { id } = await context.params;
  if (!id) {
    return NextResponse.json({ ok: false, error: "Missing user id" }, { status: 400 });
  }

  let body: Body;
  try {
    body = (await req.json()) as Body;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  try {
    const result = await setCompanionCredits(
      gate.user,
      id,
      body.companion_credits,
      body.masterSecret,
    );
    if (!result.ok) {
      return NextResponse.json(
        {
          ok: false,
          error: result.error,
          ...(result.anomaly ? { anomaly: true } : {}),
          ...(result.failCount != null ? { failCount: result.failCount } : {}),
          ...(result.actorDisabled ? { actorDisabled: true } : {}),
        },
        { status: result.status },
      );
    }
    return NextResponse.json({
      ok: true,
      companion_credits: result.companion_credits,
      anomaly: result.anomaly,
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : "credits update failed";
    return NextResponse.json({ ok: false, error: message }, { status: 500 });
  }
}
