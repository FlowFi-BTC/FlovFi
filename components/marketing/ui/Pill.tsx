import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type PillProps = {
  children: ReactNode;
  tone?: "dark" | "light";
  className?: string;
};

/**
 * Small technical eyebrow. Used at the top of every section so the page has a
 * consistent "label → headline → body" rhythm.
 */
export function Pill({ children, tone = "dark", className }: PillProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-3 py-1.5 font-mono text-[10px] font-semibold uppercase tracking-[0.16em]",
        tone === "light"
          ? "border-black/15 bg-black/[0.03] text-black/55"
          : "border-line bg-white/[0.03] text-white/55",
        className
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          "size-1.5 rounded-full",
          tone === "light" ? "bg-brand" : "bg-brand-soft"
        )}
      />
      {children}
    </span>
  );
}
