import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

import { Pill } from "./Pill";

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  tone?: "dark" | "light";
  align?: "left" | "center";
  className?: string;
};

/**
 * Shared section header. Keep one of these per section so the vertical rhythm
 * and type scale stay consistent across the page.
 */
export function SectionHeading({
  eyebrow,
  title,
  lead,
  tone = "dark",
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-[780px]",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      <Pill tone={tone}>{eyebrow}</Pill>

      <h2
        className={cn(
          "mt-5 text-balance text-4xl font-medium leading-[1.02] tracking-[-0.045em] sm:text-5xl lg:text-[56px]",
          tone === "light" ? "text-[#07090c]" : "text-white"
        )}
      >
        {title}
      </h2>

      {lead ? (
        <p
          className={cn(
            "mt-5 max-w-[650px] text-[15px] leading-relaxed lg:text-base",
            align === "center" && "mx-auto",
            tone === "light" ? "text-black/55" : "text-white/55"
          )}
        >
          {lead}
        </p>
      ) : null}
    </div>
  );
}
