export function LabBadge({ tone = "light" }: { tone?: "light" | "dark" }) {
  const cls =
    tone === "dark"
      ? "border border-[color:var(--sidebar-muted)] text-[color:var(--sidebar-muted)]"
      : "border border-[color:var(--border)] text-[color:var(--ink-muted)]";
  return (
    <span
      className={`inline-flex items-center rounded px-1.5 py-0.5 text-[0.65rem] font-medium uppercase tracking-[0.14em] ${cls}`}
    >
      Lab
    </span>
  );
}
