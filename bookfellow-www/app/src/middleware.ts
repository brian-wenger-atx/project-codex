import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Do not bounce /sign-in or /create-account based on cookie presence alone.
 * Stale/invalid session cookies (common after lab resets) would redirect Home
 * while getSessionUser still shows signed-out — Sign in appears to do nothing.
 * Session validity is enforced in Node via getSessionUser / requireAdmin.
 */
export function middleware(_request: NextRequest) {
  return NextResponse.next();
}

export const config = {
  matcher: ["/sign-in", "/create-account"],
};
