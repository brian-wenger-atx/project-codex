import { NextResponse } from "next/server";
import { requireAdmin } from "@/lib/auth";
import { clearCreditsFreeze } from "@/lib/admin";

export const runtime = "nodejs";

type Body = {
  action?: string;
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

  if (body.action !== "clear") {
    return NextResponse.json(
      { ok: false, error: "action must be clear" },
      { status: 400 },
    );
  }

  try {
    const result = await clearCreditsFreeze(gate.user, id, body.masterSecret);
    if (!result.ok) {
      return NextResponse.json(
        { ok: false, error: result.error },
        { status: result.status },
      );
    }
    return NextResponse.json({ ok: true, frozen: false });
  } catch (err) {
    const message = err instanceof Error ? err.message : "freeze clear failed";
    return NextResponse.json({ ok: false, error: message }, { status: 500 });
  }
}
