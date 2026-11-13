import type { CSSProperties, ReactNode } from "react";

import { cn } from "@/lib/utils";

type CornerCardProps = {
  children: ReactNode;
  /** Sits in the notch at the top-left. Usually an icon or a step number. */
  topLeft?: ReactNode;
  /** Sits on the tab at the top-right. Usually a tag or metadata. */
  topRight?: ReactNode;
  className?: string;
  bodyClassName?: string;
  /** Solid colour only — the radial fillet is built from this value. */
  background?: string;
  /** Size of the square notch, in pixels. */
  notch?: number;
};

/**
 * The signature L-shaped card from the reference design.
 *
 * Geometry:
 *   - the tab occupies the top-right, starting at x = notch
 *   - the body starts at y = notch
 *   - a 12×12 radial-gradient square rounds the concave corner between them
 *
 * Keep the notch empty; it is the card's breathing room, not padding.
 */
export function CornerCard({
  children,
  topLeft,
  topRight,
  className,
  bodyClassName,
  background = "var(--panel)",
  notch = 64,
}: CornerCardProps) {
  const style = {
    "--corner-card-bg": background,
    "--corner-notch": `${notch}px`,
  } as CSSProperties;

  return (
    <div
      className={cn("relative flex flex-col", className)}
      style={style}
    >
      {/* Tab: top-right arm of the L. */}
      <div
        aria-hidden="true"
        className="absolute right-0 top-0 left-[var(--corner-notch)] h-[calc(var(--corner-notch)_+_12px)] rounded-tl-[10px] rounded-tr-[12px] bg-[var(--corner-card-bg)]"
      />

      {/* Inverted fillet: rounds the inside corner of the L. */}
      <div
        aria-hidden="true"
        className="absolute left-[calc(var(--corner-notch)_-_12px)] top-[calc(var(--corner-notch)_-_12px)] size-3"
        style={{
          background:
            "radial-gradient(circle at 0 0, transparent 11.5px, var(--corner-card-bg) 12px)",
        }}
      />

      {/* Body: bottom arm of the L. */}
      <div
        className={cn(
          "relative mt-[var(--corner-notch)] grow rounded-[12px] bg-[var(--corner-card-bg)]",
          bodyClassName ?? "p-6"
        )}
      >
        {children}
      </div>

      {topLeft ? (
        <div className="absolute left-4 top-4 z-10">{topLeft}</div>
      ) : null}

      {topRight ? (
        <div className="absolute right-4 top-4 z-10">{topRight}</div>
      ) : null}
    </div>
  );
}
