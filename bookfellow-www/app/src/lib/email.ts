/**
 * Cloudflare Email Sending REST client (Plan 6).
 * Fail closed when account id / API token unset.
 */

export type SendEmailInput = {
  to: string | string[];
  subject: string;
  text: string;
  html?: string;
  from?: { address: string; name?: string };
};

export type SendEmailResult =
  | { ok: true; delivered: string[]; queued: string[] }
  | { ok: false; error: string };

const DEFAULT_FROM = {
  address: "invites@bookfellow.io",
  name: "Bookfellow",
};

function cfConfig():
  | { ok: true; accountId: string; token: string }
  | { ok: false; error: string } {
  const accountId = (process.env.CLOUDFLARE_ACCOUNT_ID || "").trim();
  const token = (process.env.CLOUDFLARE_EMAIL_API_TOKEN || "").trim();
  if (!accountId || !token) {
    return {
      ok: false,
      error:
        "Cloudflare Email Sending is not configured (CLOUDFLARE_ACCOUNT_ID + CLOUDFLARE_EMAIL_API_TOKEN)",
    };
  }
  return { ok: true, accountId, token };
}

export function emailSendingConfigured(): boolean {
  return cfConfig().ok;
}

export async function sendEmail(
  input: SendEmailInput,
): Promise<SendEmailResult> {
  const cfg = cfConfig();
  if (!cfg.ok) return cfg;

  const from = input.from ?? DEFAULT_FROM;
  const url = `https://api.cloudflare.com/client/v4/accounts/${cfg.accountId}/email/sending/send`;

  let res: Response;
  try {
    res = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${cfg.token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        to: input.to,
        from: { address: from.address, name: from.name },
        subject: input.subject,
        text: input.text,
        ...(input.html ? { html: input.html } : {}),
      }),
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : "email send failed";
    return { ok: false, error: message };
  }

  let body: {
    success?: boolean;
    errors?: { message?: string }[];
    result?: {
      delivered?: string[];
      queued?: string[];
      permanent_bounces?: string[];
    };
  };
  try {
    body = (await res.json()) as typeof body;
  } catch {
    return {
      ok: false,
      error: `Cloudflare Email Sending HTTP ${res.status} (non-JSON)`,
    };
  }

  if (!res.ok || !body.success) {
    const detail =
      body.errors?.map((e) => e.message).filter(Boolean).join("; ") ||
      `HTTP ${res.status}`;
    return { ok: false, error: `Cloudflare Email Sending: ${detail}` };
  }

  const delivered = body.result?.delivered ?? [];
  const queued = body.result?.queued ?? [];
  const bounced = body.result?.permanent_bounces ?? [];
  if (bounced.length > 0 && delivered.length === 0 && queued.length === 0) {
    return {
      ok: false,
      error: `Cloudflare Email Sending permanent bounce: ${bounced.join(", ")}`,
    };
  }

  return { ok: true, delivered, queued };
}

export function adminAlertEmails(): string[] {
  const raw = process.env.BOOKFELLOW_ADMIN_EMAILS || "";
  return [
    ...new Set(
      raw
        .split(",")
        .map((e) => e.trim().toLowerCase())
        .filter(Boolean),
    ),
  ];
}

export function appBaseUrl(): string {
  const raw =
    process.env.BOOKFELLOW_APP_URL ||
    process.env.BETTER_AUTH_URL ||
    "http://192.168.1.200:4003";
  return raw.replace(/\/+$/, "");
}
