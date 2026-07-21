import { NextResponse } from "next/server";
import { enqueuePackBuildSmoke } from "@/lib/queue";

export const runtime = "nodejs";

/** Lab-only: enqueue one BullMQ job for worker smoke. */
export async function POST() {
  try {
    const id = await enqueuePackBuildSmoke();
    return NextResponse.json({ ok: true, jobId: id });
  } catch (err) {
    const message = err instanceof Error ? err.message : "enqueue failed";
    return NextResponse.json({ ok: false, error: message }, { status: 500 });
  }
}
