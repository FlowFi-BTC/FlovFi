import Link from "next/link";

import { security, site } from "@/lib/content/marketing";
import { cn } from "@/lib/utils";

import { ArrowUpRight, CheckIcon } from "./icons";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";

export function SecuritySection() {
  return (
    <section
      id="security"
      className="relative overflow-hidden border-b border-line bg-ink-raised py-24 lg:py-32"
    >
      <div className="mx-auto max-w-[1500px] px-5 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <Reveal>
            <SectionHeading
              eyebrow={security.eyebrow}
              title={security.title}
              lead={security.description}
            />

            <Link
              href={site.links.risk}
              target="_blank"
              rel="noreferrer"
              className="group mt-7 inline-flex items-center gap-2 text-[13px] font-semibold text-white transition-colors hover:text-brand-soft"
            >
              Read the risk disclosure
              <ArrowUpRight className="size-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </Reveal>

          <Reveal delay={120}>
            <div className="overflow-hidden rounded-2xl border border-line bg-panel/60">
              {security.items.map((item, index) => (
                <div
                  key={item.title}
                  className={cn(
                    "flex gap-4 p-6",
                    index > 0 && "border-t border-line"
                  )}
                >
                  <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full border border-brand/30 bg-brand/10 text-brand-soft">
                    <CheckIcon className="size-3.5" />
                  </span>
                  <div>
                    <p className="text-[14px] font-semibold text-white">
                      {item.title}
                    </p>
                    <p className="mt-1 text-[12px] leading-relaxed text-white/50">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {security.chips.map((chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-line px-3 py-1 font-mono text-[9px] uppercase tracking-[0.14em] text-white/35"
                >
                  {chip}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
