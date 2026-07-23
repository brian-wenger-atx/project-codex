import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
  baseURL:
    typeof window !== "undefined"
      ? window.location.origin
      : process.env.BETTER_AUTH_URL ||
        process.env.BOOKFELLOW_APP_URL ||
        "http://192.168.1.200:4003",
});
