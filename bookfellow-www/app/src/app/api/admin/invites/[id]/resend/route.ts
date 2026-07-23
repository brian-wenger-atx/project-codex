import { NextResponse } from "next/server";
import { requireAdmin } from "@/lib/auth";
import { resendInvite } from "@/lib/invites";

export const runtime = "nodejs";

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
    return NextResponse.json({ ok: false, error: "Missing invite id" }, { status: 400 });
  }

  const result = await resendInvite(gate.user, id);
  if (!result.ok) {
    return NextResponse.json(
      { ok: false, error: result.error },
      { status: result.status },
    );
  }
  return NextResponse.json({ ok: true, invite: result.invite });
}
