import { redirect } from "next/navigation";

type Props = {
  params: Promise<{ code: string }>;
};

/** P9 thin short-link → Create account with redeem prefill (no unlock). */
export default async function RedeemShortLinkPage({ params }: Props) {
  const { code: raw } = await params;
  let decoded = raw;
  try {
    decoded = decodeURIComponent(raw);
  } catch {
    decoded = raw;
  }
  const code = decoded.trim();
  if (!code) {
    redirect("/create-account");
  }
  redirect(`/create-account?redeem=${encodeURIComponent(code)}`);
}
