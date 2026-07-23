"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { primaryNavFor, type ShellUser } from "./nav";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

function navLinkClass(active: boolean) {
  return `rounded-lg px-3 py-2.5 text-sm transition-colors ${
    active
      ? "bg-[color:var(--sidebar-active)] text-[color:var(--sidebar-ink)]"
      : "text-[color:var(--sidebar-muted)] hover:bg-[color:var(--sidebar-active)] hover:text-[color:var(--sidebar-ink)]"
  }`;
}

export function Sidebar({ user }: { user: ShellUser | null }) {
  const pathname = usePathname();
  const items = primaryNavFor(user);
  const showAdmin = user?.role === "admin";

  return (
    <aside
      className="shell-sidebar fixed inset-y-0 left-0 z-30 flex w-[var(--sidebar-width)] flex-col border-r border-[color:var(--sidebar-elevated)] bg-[color:var(--sidebar)] text-[color:var(--sidebar-ink)]"
      aria-label="Primary"
    >
      <div className="flex flex-col gap-1 px-5 pb-4 pt-[max(1.25rem,var(--safe-top))]">
        <p className="m-0 font-[family-name:var(--font-display)] text-lg tracking-wide">
          Bookfellow
        </p>
      </div>
      <nav className="flex flex-1 flex-col px-3 pb-6" aria-label="Main">
        {/* Primary + admin sit flush; bottom slot reserved for account/user chrome (M2). */}
        <div className="flex flex-col gap-1">
          {items.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={navLinkClass(active)}
                aria-current={active ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
          {showAdmin ? (
            <Link
              href="/admin"
              className={navLinkClass(isActive(pathname, "/admin"))}
              aria-current={isActive(pathname, "/admin") ? "page" : undefined}
            >
              Admin
            </Link>
          ) : null}
        </div>
        <div className="mt-auto flex flex-col gap-1 pt-4">
          {/* Account / user control lands here in M2 — no separator above it */}
        </div>
      </nav>
    </aside>
  );
}
