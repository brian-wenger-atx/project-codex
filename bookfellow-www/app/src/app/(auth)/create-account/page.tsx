import { CreateAccountForm } from "@/components/auth/CreateAccountForm";

type Props = {
  searchParams: Promise<{ redeem?: string; invite?: string }>;
};

export default async function CreateAccountPage({ searchParams }: Props) {
  const sp = await searchParams;
  const initialRedeem =
    typeof sp.redeem === "string" ? sp.redeem.trim() : "";
  const initialInvite =
    typeof sp.invite === "string" ? sp.invite.trim() : "";
  return (
    <CreateAccountForm
      initialRedeem={initialRedeem}
      initialInvite={initialInvite}
    />
  );
}
