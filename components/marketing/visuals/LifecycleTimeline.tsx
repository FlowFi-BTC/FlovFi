"use client";

import { useEffect, useState } from "react";

import { lifecycleSteps } from "@/lib/content/marketing";
import { cn } from "@/lib/utils";

import { CheckIcon } from "../icons";

const STEP_DURATION_MS = 2800;

/**
 * Animated receivable lifecycle.
 *
 * The card is intentionally readable without JavaScript: every step is present
 * in the markup and the active state only adds emphasis.
 */
export function LifecycleTimeline() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const frame = requestAnimationFrame(() =>
        setActive(lifecycleSteps.length - 1)
      );
      return () => cancelAnimationFrame(frame);
    }

    if (paused) return;

    const interval = window.setInterval(() => {
      setActive((current) => (current + 1) % lifecycleSteps.length);
    }, STEP_DURATION_MS);

    return () => window.clearInterval(interval);
  }, [paused]);

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      className="relative overflow-hidden rounded-[20px] border border-line bg-[#080b10]/90 shadow-[0_30px_120px_-40px_rgba(37,99,235,0.45)] backdrop-blur-xl corner-scoop-tl-br"
    >
      <div className="flex items-center justify-between border-b border-line px-6 py-4">
        <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-white/45">
          <span className="size-1.5 rounded-full bg-signal" />
          Receivable lifecycle
        </div>
        <span className="rounded-full border border-line px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.14em] text-white/45">
          Testnet
        </span>
      </div>

      <div className="grid grid-cols-2 gap-px border-b border-line bg-line">
        <div className="bg-[#080b10] px-6 py-4">
          <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-white/35">
            Instrument
          </p>
          <p className="mt-1 text-[13px] font-medium text-white/80">
            Trade receivable
          </p>
        </div>
        <div className="bg-[#080b10] px-6 py-4">
          <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-white/35">
            Asset
          </p>
          <p className="mt-1 text-[13px] font-medium text-white/80">
            sBTC · SIP-010
          </p>
        </div>
      </div>

      <ol aria-label="Receivable lifecycle" className="p-6">
        {lifecycleSteps.map((step, index) => {
          const done = index < active;
          const current = index === active;

          return (
            <li
              key={step.id}
              className="relative flex gap-4 pb-5 last:pb-0"
            >
              {index < lifecycleSteps.length - 1 ? (
                <span
                  aria-hidden="true"
                  className="absolute left-[11px] top-6 h-[calc(100%_-_12px)] w-px bg-white/10"
                >
                  <span
                    className={cn(
                      "block w-px bg-brand transition-all duration-700",
                      done ? "h-full" : "h-0"
                    )}
                  />
                </span>
              ) : null}

              <span
                className={cn(
                  "relative mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full border transition-colors duration-500",
                  done && "border-brand bg-brand text-white",
                  current &&
                    "border-brand bg-brand/15 text-brand-soft",
                  !done &&
                    !current &&
                    "border-white/10 bg-white/[0.03] text-white/25"
                )}
              >
                {done ? (
                  <CheckIcon className="size-3" />
                ) : current ? (
                  <span className="size-2 animate-ping rounded-full bg-brand-soft" />
                ) : (
                  <span className="size-1 rounded-full bg-current" />
                )}
              </span>

              <div
                className={cn(
                  "min-w-0 flex-1 transition-opacity duration-500",
                  done || current ? "opacity-100" : "opacity-55"
                )}
              >
                <div className="flex items-start justify-between gap-3">
                  <p className="text-[13px] font-semibold leading-tight text-white">
                    {step.label}
                  </p>
                  <span
                    className={cn(
                      "shrink-0 rounded border px-1.5 py-0.5 font-mono text-[8px] uppercase tracking-[0.12em]",
                      current
                        ? "border-brand/40 bg-brand/10 text-brand-soft"
                        : "border-white/10 text-white/35"
                    )}
                  >
                    {step.status}
                  </span>
                </div>
                <p className="mt-1 text-[12px] leading-relaxed text-white/50">
                  {step.detail}
                </p>
                <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.14em] text-white/35">
                  {step.contract}
                </p>
              </div>
            </li>
          );
        })}
      </ol>

      <div className="border-t border-line px-6 py-3 font-mono text-[9px] uppercase tracking-[0.14em] text-white/30">
        Status transitions recorded by the registry
      </div>
    </div>
  );
}
