import { NextResponse } from "next/server";
import { requireAdmin } from "@/lib/auth";
import { listInvitesForAdmin, mintInvite } from "@/lib/invites";
import { emailSendingConfigured } from "@/lib/email";

export const runtime = "nodejs";

export async function GET(req: Request) {
  const gate = await requireAdmin(req.headers);
  if (!gate.ok) {
    return NextResponse.json(
      { ok: false, error: gate.status === 401 ? "Unauthorized" : "Forbidden" },
      { status: gate.status },
    );
  }

  try {
    const invites = await listInvitesForAdmin();
    return NextResponse.json({
      ok: true,
      emailConfigured: emailSendingConfigured(),
      invites,
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : "list failed";
    return NextResponse.json({ ok: false, error: message }, { status: 500 });
  }
}

export async function POST(req: Request) {
  const gate = await requireAdmin(req.headers);
  if (!gate.ok) {
    return NextResponse.json(
      { ok: false, error: gate.status === 401 ? "Unauthorized" : "Forbidden" },
      { status: gate.status },
    );
  }

  let body: { email?: unknown };
  try {
    body = (await req.json()) as { email?: unknown };
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const email = typeof body.email === "string" ? body.email : "";
  const result = await mintInvite(gate.user, email);
  if (!result.ok) {
    return NextResponse.json(
      { ok: false, error: result.error },
      { status: result.status },
    );
  }
  return NextResponse.json({ ok: true, invite: result.invite });
}
