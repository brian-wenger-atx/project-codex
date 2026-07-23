export type ShellUser = {
  id: string;
  email: string;
  role: string;
};

/** Always shown in the primary nav. */
export const PRIMARY_NAV = [{ href: "/", label: "Home" }] as const;

/** Shown only when signed out. */
export const AUTH_NAV = [
  { href: "/sign-in", label: "Sign in" },
  { href: "/create-account", label: "Create account" },
] as const;

export function primaryNavFor(user: ShellUser | null) {
  if (user) return [...PRIMARY_NAV];
  return [...PRIMARY_NAV, ...AUTH_NAV];
}
