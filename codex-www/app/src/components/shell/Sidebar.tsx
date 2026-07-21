"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LabBadge } from "./LabBadge";
import { NAV_ITEMS } from "./nav";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside
      className="shell-sidebar fixed inset-y-0 left-0 z-30 w-[var(--sidebar-width)] flex-col border-r border-[color:var(--sidebar-elevated)] bg-[color:var(--sidebar)] text-[color:var(--sidebar-ink)]"
      aria-label="Primary"
    >
      <div className="flex flex-col gap-1 px-5 pb-4 pt-[max(1.25rem,var(--safe-top))]">
        <div className="flex items-center gap-2">
          <p className="m-0 font-[family-name:var(--font-display)] text-lg tracking-wide">
            Project Codex
          </p>
          <LabBadge tone="dark" />
        </div>
        <p className="m-0 text-sm text-[color:var(--sidebar-muted)]">lab</p>
      </div>
      <nav className="flex flex-1 flex-col gap-1 px-3 pb-6">
        {NAV_ITEMS.map((item) => {
          const active = isActive(pathname, item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-lg px-3 py-2.5 text-sm transition-colors ${
                active
                  ? "bg-[color:var(--sidebar-active)] text-[color:var(--sidebar-ink)]"
                  : "text-[color:var(--sidebar-muted)] hover:bg-[color:var(--sidebar-active)] hover:text-[color:var(--sidebar-ink)]"
              }`}
              aria-current={active ? "page" : undefined}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
