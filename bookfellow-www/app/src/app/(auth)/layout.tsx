import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { getSessionUser } from "@/lib/auth";

/** Soft-redirect signed-in users off auth pages (valid session only). */
export default async function AuthGuestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getSessionUser(await headers());
  if (user) {
    redirect("/");
  }
  return children;
}
