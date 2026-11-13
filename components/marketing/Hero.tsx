import Link from "next/link";

import { hero, site } from "@/lib/content/marketing";

import { ArrowRight, ArrowUpRight } from "./icons";
import { Pill } from "./ui/Pill";
import { Stars } from "./ui/Stars";
import { Words } from "./ui/Words";
import { HeroBackdrop } from "./visuals/HeroBackdrop";
import { LifecycleTimeline } from "./visuals/LifecycleTimeline";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden border-b border-line">
      <HeroBackdrop />
      <Stars />

      <div className="relative z-10 mx-auto grid max-w-[1500px] items-center gap-14 px-5 pb-20 pt-36 lg:min-h-[780px] lg:grid-cols-[1.08fr_0.92fr] lg:gap-10 lg:px-10 lg:pb-28 lg:pt-40">
        <div className="relative">
          <div className="animate-fade-up">
            <Pill>{hero.eyebrow}</Pill>
          </div>

          <h1 className="mt-7 max-w-[780px] text-[48px] font-medium leading-[0.95] tracking-[-0.055em] text-balance text-white sm:text-6xl lg:text-[82px]">
            <Words text={hero.title[0]} base={120} />
            <br />
            <span className="text-white/45">
              <Words text={hero.title[1]} base={360} />
            </span>
          </h1>

          <p className="mt-8 max-w-[640px] animate-fade-up text-[17px] leading-[1.55] text-white/60 [animation-delay:650ms] lg:text-[19px]">
            {hero.lead}
          </p>

          <div className="mt-9 flex animate-fade-up flex-wrap items-center gap-3 [animation-delay:800ms]">
            <Link
              href={hero.primaryCta.href}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3.5 text-[14px] font-semibold text-white transition-colors hover:bg-brand-bright"
            >
              {hero.primaryCta.label}
              <ArrowUpRight className="size-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>

            <Link
              href={hero.secondaryCta.href}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-line px-6 py-3.5 text-[14px] font-semibold text-white/75 transition-colors hover:border-white/25 hover:text-white"
            >
              {hero.secondaryCta.label}
              <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
          </div>

          <div className="mt-8 flex animate-fade-up flex-wrap items-center gap-x-5 gap-y-2 font-mono text-[9px] uppercase tracking-[0.15em] text-white/45 [animation-delay:950ms]">
            <span className="inline-flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-signal" />
              {hero.status}
            </span>
            <span className="hidden h-3 w-px bg-white/15 sm:block" />
            <span>{hero.note}</span>
          </div>
        </div>

        <div className="relative w-full max-w-[560px] animate-fade-up [animation-delay:300ms] lg:justify-self-end">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-8 rounded-[36px] bg-brand/10 blur-3xl"
          />
          <LifecycleTimeline />
          <p className="mt-4 text-center font-mono text-[9px] uppercase tracking-[0.14em] text-white/25">
            Live state machine · {site.product}
          </p>
        </div>
      </div>
    </section>
  );
}
