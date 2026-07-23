import { NextResponse } from "next/server";
import { requireAdmin } from "@/lib/auth";
import {
  enqueuePackBuild,
  enqueuePackBuildSmoke,
  seedStaleClaim,
} from "@/lib/queue";

export const runtime = "nodejs";

/**
 * Lab-only queue smoke — admin session required.
 * ?mode=double — enqueue same jobId twice (post-complete skip proof)
 * ?mode=staleClaim — seed stale claimed row then enqueue (reclaim proof)
 */
export async function POST(req: Request) {
  const gate = await requireAdmin(req.headers);
  if (!gate.ok) {
    return NextResponse.json(
      { ok: false, error: gate.status === 401 ? "Unauthorized" : "Forbidden" },
      { status: gate.status },
    );
  }

  try {
    const url = new URL(req.url);
    const mode = url.searchParams.get("mode") || "once";

    if (mode === "double") {
      const jobId = `double-${Date.now()}`;
      const a = await enqueuePackBuild(jobId);
      const b = await enqueuePackBuild(jobId);
      return NextResponse.json({
        ok: true,
        mode,
        jobId,
        bullmqIds: [a, b],
        note: "Worker should claim once and skip the second after complete",
      });
    }

    if (mode === "staleClaim") {
      const jobId = `stale-${Date.now()}`;
      await seedStaleClaim(jobId, "lab-stale", 120);
      const bullmqId = await enqueuePackBuild(jobId, "lab-stale");
      return NextResponse.json({
        ok: true,
        mode,
        jobId,
        bullmqId,
        note: "Worker should reclaim stale claimed and complete",
      });
    }

    const id = await enqueuePackBuildSmoke();
    return NextResponse.json({ ok: true, mode: "once", jobId: id });
  } catch (err) {
    const message = err instanceof Error ? err.message : "enqueue failed";
    return NextResponse.json({ ok: false, error: message }, { status: 500 });
  }
}
