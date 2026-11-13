"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { site } from "@/lib/content/marketing";
import { cn } from "@/lib/utils";

import { ArrowUpRight } from "./icons";
import { Brand } from "./ui/Brand";

/**
 * Scroll distance before the bar is allowed to hide. Keeping this well below
 * the hero keeps the bar visible while the page is at rest near the top.
 */
const HIDE_AFTER = 120;

/** Pointer/trackpad noise below this delta is ignored. */
const DIRECTION_DELTA = 8;

const audiences = [
  {
    id: "business",
    label: "For Business",
    href: "#how-it-works",
  },
  {
    id: "capital",
    label: "For Capital Provider",
    href: "#architecture",
  },
] as const;

type AudienceId = (typeof audiences)[number]["id"];

function AudienceTabs({
  active,
  onSelect,
}: {
  active: AudienceId;
  onSelect: (id: AudienceId) => void;
}) {
  return (
    <nav
      aria-label="Choose your path"
      className="flex w-full items-center gap-1 rounded-full border border-line bg-white/[0.03] p-1 md:w-auto"
    >
      {audiences.map((audience) => {
        const isActive = audience.id === active;

        return (
          <Link
            key={audience.id}
            href={audience.href}
            onClick={() => onSelect(audience.id)}
            aria-current={isActive ? "location" : undefined}
            className={cn(
              "flex-1 rounded-full px-3.5 py-1.5 text-center text-[11px] font-medium transition-colors duration-300 md:flex-none sm:text-[12px]",
              isActive
                ? "bg-white/[0.09] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"
                : "text-white/45 hover:bg-white/[0.04] hover:text-white/80"
            )}
          >
            {audience.label}
          </Link>
        );
      })}
    </nav>
  );
}

export function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<AudienceId>("business");
  const lastY = useRef(0);
  const frame = useRef<number | null>(null);

  useEffect(() => {
    lastY.current = window.scrollY;

    const initial = window.requestAnimationFrame(() =>
      setScrolled(window.scrollY > 8)
    );

    const onScroll = () => {
      if (frame.current !== null) return;

      frame.current = window.requestAnimationFrame(() => {
        const y = window.scrollY;
        const delta = y - lastY.current;

        if (y < HIDE_AFTER) {
          setHidden(false);
        } else if (delta > DIRECTION_DELTA) {
          setHidden(true);
        } else if (delta < -DIRECTION_DELTA) {
          setHidden(false);
        }

        setScrolled(y > 8);
        lastY.current = y;
        frame.current = null;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.cancelAnimationFrame(initial);

      if (frame.current !== null) {
        window.cancelAnimationFrame(frame.current);
      }
    };
  }, []);

  return (
    <header
      inert={hidden}
      className={cn(
        "fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-5",
        "transition-[transform,opacity] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform motion-reduce:transition-none",
        hidden
          ? "pointer-events-none -translate-y-[calc(100%+1rem)] opacity-0"
          : "translate-y-0 opacity-100"
      )}
    >
      <div
        className={cn(
          "mx-auto max-w-[1280px] overflow-hidden rounded-2xl border backdrop-blur-2xl",
          "transition-[background-color,border-color,box-shadow] duration-500",
          scrolled
            ? "border-white/15 bg-ink/85 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_24px_64px_-28px_rgba(0,0,0,0.92)]"
            : "border-line bg-ink/60 shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_16px_48px_-30px_rgba(0,0,0,0.75)]"
        )}
      >
        <div className="flex h-16 items-center justify-between gap-3 px-3 sm:px-4 md:grid md:grid-cols-[1fr_auto_1fr] md:px-5">
          <Brand priority />

          <div className="hidden md:flex md:justify-center">
            <AudienceTabs active={active} onSelect={setActive} />
          </div>

          <div className="flex items-center justify-end gap-3">
            <span className="hidden items-center gap-2 font-mono text-[9px] uppercase tracking-[0.16em] text-white/40 xl:flex">
              <span className="size-1.5 rounded-full bg-signal" />
              Stacks testnet
            </span>

            <Link
              href={site.links.app}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-brand px-4 py-2.5 text-[12px] font-semibold text-white transition-colors hover:bg-brand-bright sm:px-5 sm:text-[13px]"
            >
              Launch app
              <ArrowUpRight className="size-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>

        <div className="border-t border-line/70 px-3 py-2 md:hidden">
          <AudienceTabs active={active} onSelect={setActive} />
        </div>
      </div>
    </header>
  );
}
