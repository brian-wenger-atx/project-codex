"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import { LabBadge } from "./LabBadge";
import { NAV_ITEMS } from "./nav";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function MobileNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    close();
  }, [pathname, close]);

  useEffect(() => {
    if (!open) {
      document.body.classList.remove("drawer-open");
      return;
    }
    document.body.classList.add("drawer-open");
    firstLinkRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        close();
        buttonRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.classList.remove("drawer-open");
    };
  }, [open, close]);

  return (
    <>
      <header className="shell-mobile-bar sticky top-0 z-40 items-center justify-between gap-3 border-b border-[color:var(--border)] bg-[color:var(--canvas-elevated)] px-4 py-3 pt-[max(0.75rem,var(--safe-top))] pl-[max(1rem,var(--safe-left))] pr-[max(1rem,var(--safe-right))]">
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <p className="m-0 truncate font-[family-name:var(--font-display)] text-base tracking-wide">
              Bookfellow
            </p>
            <LabBadge />
          </div>
          <p className="m-0 text-xs text-[color:var(--ink-muted)]">lab</p>
        </div>
        <button
          ref={buttonRef}
          type="button"
          className="inline-flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-lg border border-[color:var(--border)] bg-[color:var(--canvas)]"
          aria-expanded={open}
          aria-controls={panelId}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="block h-0.5 w-5 rounded bg-[color:var(--ink)]" />
          <span className="block h-0.5 w-5 rounded bg-[color:var(--ink)]" />
          <span className="block h-0.5 w-5 rounded bg-[color:var(--ink)]" />
        </button>
      </header>

      {open ? (
        <div className="shell-mobile-bar fixed inset-0 z-50" role="presentation">
          <button
            type="button"
            className="absolute inset-0 bg-black/40"
            aria-label="Close menu"
            onClick={() => {
              close();
              buttonRef.current?.focus();
            }}
          />
          <nav
            id={panelId}
            className="absolute inset-y-0 right-0 flex w-[min(20rem,88vw)] flex-col bg-[color:var(--sidebar)] text-[color:var(--sidebar-ink)] shadow-xl pt-[max(1rem,var(--safe-top))] pb-[max(1rem,var(--safe-bottom))] pl-4 pr-[max(1rem,var(--safe-right))]"
            aria-label="Mobile"
          >
            <div className="mb-4 flex items-center justify-between gap-2">
              <div>
                <p className="m-0 font-[family-name:var(--font-display)] text-lg">Bookfellow</p>
                <p className="m-0 text-sm text-[color:var(--sidebar-muted)]">lab</p>
              </div>
              <LabBadge tone="dark" />
            </div>
            <ul className="m-0 flex list-none flex-col gap-1 p-0">
              {NAV_ITEMS.map((item, i) => {
                const active = isActive(pathname, item.href);
                return (
                  <li key={item.href}>
                    <Link
                      ref={i === 0 ? firstLinkRef : undefined}
                      href={item.href}
                      className={`block rounded-lg px-3 py-3 text-base ${
                        active
                          ? "bg-[color:var(--sidebar-active)]"
                          : "text-[color:var(--sidebar-muted)]"
                      }`}
                      aria-current={active ? "page" : undefined}
                      onClick={close}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      ) : null}
    </>
  );
}
