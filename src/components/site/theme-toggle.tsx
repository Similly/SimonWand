"use client";

import { useTheme } from "@/components/providers/theme-provider";

type ThemeToggleProps = {
  toLightLabel: string;
  toDarkLabel: string;
};

export function ThemeToggle({ toLightLabel, toDarkLabel }: ThemeToggleProps) {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? toLightLabel : toDarkLabel}
      className="inline-flex size-9 items-center justify-center rounded-md border border-[var(--border)] bg-[var(--surface)] text-[var(--text-primary)] transition-colors hover:bg-[var(--surface-2)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus-ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]"
    >
      <span aria-hidden>{isDark ? "☀" : "☾"}</span>
    </button>
  );
}
