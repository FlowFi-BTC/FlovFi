import Link from "next/link";

import { site } from "@/lib/content/marketing";

import { ArrowUpRight, BitcoinGlyph, StarMark } from "./icons";
import { CornerCard } from "./ui/CornerCard";

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-ink py-20 lg:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-grid opacity-20"
      />

      <div className="relative mx-auto max-w-[1500px] px-5 lg:px-10">
        <CornerCard
          background="#0b1017"
          notch={78}
          className="mx-auto max-w-[1200px]"
          topLeft={
            <span className="flex size-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-brand-soft">
              <BitcoinGlyph className="size-6" />
            </span>
          }
          topRight={
            <div className="flex items-center gap-3 font-mono text-[9px] uppercase tracking-[0.16em] text-white/35">
              <span>sBTC</span>
              <StarMark className="size-2.5 text-white/20" />
            </div>
          }
          bodyClassName="relative overflow-hidden p-8 sm:p-12 lg:p-16"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-20 size-[420px] rounded-full bg-brand/15 blur-[110px]"
          />

          <div className="relative">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-brand-soft">
              The pilot is live
            </p>

            <h2 className="mt-5 max-w-[760px] text-balance text-4xl font-medium leading-[0.98] tracking-[-0.05em] text-white sm:text-5xl lg:text-[64px]">
              Put Bitcoin capital to work in the real economy.
            </h2>

            <p className="mt-5 max-w-[560px] text-[15px] leading-relaxed text-white/55">
              Explore the testnet app, or read the grant application behind the
              first pilot.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href={site.links.app}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3.5 text-[14px] font-semibold text-white transition-colors hover:bg-brand-bright"
              >
                Launch the app
                <ArrowUpRight className="size-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>

              <Link
                href={site.links.grant}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 rounded-full border border-line px-6 py-3.5 text-[14px] font-semibold text-white/75 transition-colors hover:border-white/25 hover:text-white"
              >
                Read the grant
                <ArrowUpRight className="size-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </div>

            <p className="mt-7 font-mono text-[9px] uppercase tracking-[0.14em] text-white/40">
              Live on Stacks testnet · Unaudited pilot
            </p>
          </div>
        </CornerCard>
      </div>
    </section>
  );
}
