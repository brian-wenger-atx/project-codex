"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const linkBase =
  "inline-flex min-h-11 items-center border-b-2 px-3 text-sm";

export function AdminSubnav() {
  const pathname = usePathname();
  const usersActive = pathname.startsWith("/admin/users") || pathname === "/admin";
  const invitesActive = pathname.startsWith("/admin/invites");

  return (
    <nav
      className="mt-4 flex gap-1 border-b border-[color:var(--border)]"
      aria-label="Admin sections"
    >
      <Link
        href="/admin/users"
        className={`${linkBase} ${
          usersActive
            ? "border-[color:var(--accent)]"
            : "border-transparent hover:border-[color:var(--ink-muted)]"
        }`}
        aria-current={usersActive ? "page" : undefined}
      >
        Users
      </Link>
      <Link
        href="/admin/invites"
        className={`${linkBase} ${
          invitesActive
            ? "border-[color:var(--accent)]"
            : "border-transparent hover:border-[color:var(--ink-muted)]"
        }`}
        aria-current={invitesActive ? "page" : undefined}
      >
        Invites
      </Link>
    </nav>
  );
}
