import { MobileNav } from "./MobileNav";
import { Sidebar } from "./Sidebar";

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-dvh bg-[color:var(--canvas)] text-[color:var(--ink)]">
      <Sidebar />
      <div className="shell-main">
        <MobileNav />
        <main className="px-4 py-6 pb-[max(1.5rem,var(--safe-bottom))] pl-[max(1rem,var(--safe-left))] pr-[max(1rem,var(--safe-right))] sm:px-6 sm:py-8">
          <div className="mx-auto w-full max-w-3xl">{children}</div>
        </main>
      </div>
    </div>
  );
}
