import { NextResponse } from "next/server";
import { requireAdmin } from "@/lib/auth";
import { disableUser, enableUser } from "@/lib/admin";

export const runtime = "nodejs";

type Body = {
  action?: string;
  masterSecret?: string;
  /** @deprecated Plan 5 name — still accepted */
  peerSecret?: string;
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

  let body: Body = {};
  try {
    body = (await req.json()) as Body;
  } catch {
    body = {};
  }

  const action = body.action;
  if (action !== "disable" && action !== "enable") {
    return NextResponse.json(
      { ok: false, error: "action must be disable or enable" },
      { status: 400 },
    );
  }

  const masterSecret = body.masterSecret ?? body.peerSecret;

  try {
    if (action === "disable") {
      const result = await disableUser(gate.user, id, masterSecret);
      if (!result.ok) {
        return NextResponse.json(
          { ok: false, error: result.error },
          { status: result.status },
        );
      }
      return NextResponse.json({ ok: true, disabled: true });
    }

    const result = await enableUser(gate.user, id);
    if (!result.ok) {
      return NextResponse.json(
        { ok: false, error: result.error },
        { status: result.status },
      );
    }
    return NextResponse.json({ ok: true, disabled: false });
  } catch (err) {
    const message = err instanceof Error ? err.message : "status change failed";
    return NextResponse.json({ ok: false, error: message }, { status: 500 });
  }
}
