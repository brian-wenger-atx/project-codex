import type { Metadata, Viewport } from "next";
import { Figtree, Instrument_Serif } from "next/font/google";
import { headers } from "next/headers";
import { AppShell } from "@/components/shell/AppShell";
import { getSessionUser } from "@/lib/auth";
import "./globals.css";

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-instrument-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bookfellow",
  description: "Your personal reading companion.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSessionUser(await headers());
  const user = session
    ? { id: session.id, email: session.email, role: session.role }
    : null;

  return (
    <html lang="en" className={`${figtree.variable} ${instrumentSerif.variable}`}>
      <body>
        <AppShell user={user}>{children}</AppShell>
      </body>
    </html>
  );
}
