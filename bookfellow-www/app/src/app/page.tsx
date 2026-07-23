import Link from "next/link";
import { headers } from "next/headers";
import { getSessionUser } from "@/lib/auth";
import { SignOutButton } from "@/components/auth/SignOutButton";

export default async function HomePage() {
  const user = await getSessionUser(await headers());

  return (
    <div className="flex flex-col gap-6">
      <header>
        <h1 className="m-0 font-[family-name:var(--font-display)] text-3xl font-normal tracking-wide sm:text-4xl">
          Bookfellow
        </h1>
        <p className="mt-2 text-base text-[color:var(--ink-muted)] sm:text-lg">
          Your personal reading companion
        </p>
      </header>

      {user ? (
        <div className="flex flex-col gap-2 text-sm">
          <p className="m-0">
            Signed in as <strong>{user.email}</strong>
          </p>
          <SignOutButton />
        </div>
      ) : (
        <ul className="m-0 flex list-none flex-col gap-2 p-0 sm:flex-row sm:gap-4">
          <li>
            <Link
              href="/create-account"
              className="inline-flex min-h-11 items-center rounded-lg bg-[color:var(--accent)] px-4 text-white"
            >
              Create account
            </Link>
          </li>
          <li>
            <Link
              href="/sign-in"
              className="inline-flex min-h-11 items-center rounded-lg border border-[color:var(--border)] px-4"
            >
              Sign in
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
}
