import { NextResponse } from "next/server";
import Stripe from "stripe";

export const runtime = "nodejs";

/**
 * Hard rule 2: preserve raw body bytes with req.text() — never req.json().
 * Test/dummy secrets are OK in P2.
 */
export async function POST(req: Request) {
  const rawBody = await req.text();
  const signature = req.headers.get("stripe-signature");
  const secret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!secret) {
    return NextResponse.json(
      { ok: false, error: "STRIPE_WEBHOOK_SECRET not set" },
      { status: 500 },
    );
  }

  if (!signature) {
    return NextResponse.json({ ok: false, error: "missing stripe-signature" }, { status: 400 });
  }

  try {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "sk_test_placeholder");
    const event = stripe.webhooks.constructEvent(rawBody, signature, secret);
    return NextResponse.json({ ok: true, type: event.type, id: event.id });
  } catch (err) {
    const message = err instanceof Error ? err.message : "verify failed";
    return NextResponse.json({ ok: false, error: message }, { status: 400 });
  }
}
