export const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/health", label: "Health" },
  { href: "/queue", label: "Queue smoke" },
] as const;

export type NavHref = (typeof NAV_ITEMS)[number]["href"];
