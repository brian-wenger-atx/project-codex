import Link from "next/link";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { getSessionUser } from "@/lib/auth";
import { AdminSubnav } from "@/components/admin/AdminSubnav";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getSessionUser(await headers());
  if (!user) {
    redirect("/sign-in");
  }
  if (user.role !== "admin") {
    return (
      <div className="flex flex-col gap-4">
        <h1 className="m-0 font-[family-name:var(--font-display)] text-2xl font-normal sm:text-3xl">
          Forbidden
        </h1>
        <p className="m-0 text-[color:var(--ink-muted)]">
          Admin tools are for admins only.
        </p>
        <Link
          href="/"
          className="inline-flex min-h-11 w-fit items-center justify-center rounded-lg border border-[color:var(--border)] px-4"
        >
          Home
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6">
      <header>
        <h1 className="m-0 font-[family-name:var(--font-display)] text-2xl font-normal sm:text-3xl">
          Admin
        </h1>
        <p className="mt-2 text-[color:var(--ink-muted)]">
          Manage users, credits, and invites.
        </p>
        <AdminSubnav />
      </header>
      {children}
    </div>
  );
}
