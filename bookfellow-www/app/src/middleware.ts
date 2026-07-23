import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Cookie-presence gate for redirects only (Better Auth guidance).
 * Full session + disabled_at checks happen in layouts/API via getSessionUser.
 */
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const isAuthPage =
    pathname === "/sign-in" || pathname === "/create-account";
  const sessionCookie =
    request.cookies.get("better-auth.session_token") ||
    request.cookies.get("__Secure-better-auth.session_token");

  if (isAuthPage && sessionCookie) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/sign-in", "/create-account"],
};
