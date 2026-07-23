import { NextResponse } from "next/server";
import { requireAdmin } from "@/lib/auth";
import { listUsersForAdmin } from "@/lib/admin";

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
    const users = await listUsersForAdmin();
    return NextResponse.json({
      ok: true,
      actor_user_id: gate.user.id,
      users: users.map((u) => ({
        id: u.id,
        email: u.email,
        name: u.name,
        role: u.role,
        companion_credits: u.companion_credits,
        disabled_at: u.disabled_at,
        credits_frozen_at: u.credits_frozen_at,
        createdAt: u.createdAt,
      })),
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : "list failed";
    return NextResponse.json({ ok: false, error: message }, { status: 500 });
  }
}
