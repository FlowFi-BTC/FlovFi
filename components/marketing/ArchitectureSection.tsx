import Link from "next/link";

import { protocolContracts, site } from "@/lib/content/marketing";

import { ArrowUpRight, FeatureIcon, StarMark } from "./icons";
import { CornerCard } from "./ui/CornerCard";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";

export function ArchitectureSection() {
  return (
    <section
      id="architecture"
      className="relative overflow-hidden border-b border-line bg-ink py-24 lg:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-grid opacity-30"
      />

      <div className="relative mx-auto max-w-[1500px] px-5 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <Reveal>
            <SectionHeading
              eyebrow="Protocol architecture"
              title={
                <>
                  Two contracts.
                  <br />
                  One clean boundary.
                </>
              }
              lead="The registry owns identity, verification, and receivable state. The escrow owns every satoshi. Neither contract does the other's job."
            />

            <div className="mt-8 border-l border-brand/50 pl-5">
              <p className="max-w-[430px] text-[14px] leading-relaxed text-white/60">
                The registry never touches sBTC. The escrow never decides who
                is verified. That separation is the reason the pilot is small
                enough to audit.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href={site.links.registry}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 font-mono text-[9px] uppercase tracking-[0.14em] text-white/50 transition-colors hover:border-white/25 hover:text-white"
              >
                Registry on Explorer
                <ArrowUpRight className="size-3" />
              </Link>
              <Link
                href={site.links.escrow}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 font-mono text-[9px] uppercase tracking-[0.14em] text-white/50 transition-colors hover:border-white/25 hover:text-white"
              >
                Escrow on Explorer
                <ArrowUpRight className="size-3" />
              </Link>
            </div>
          </Reveal>

          <div>
            <div className="grid gap-4">
              {protocolContracts.map((contract, index) => (
                <Reveal key={contract.id} delay={index * 120}>
                  <CornerCard
                    background="#0d1219"
                    notch={58}
                    topLeft={
                      <span className="flex size-8 items-center justify-center rounded-lg bg-white/[0.04] text-white/70">
                        <FeatureIcon
                          name={contract.icon}
                          className="size-5"
                        />
                      </span>
                    }
                    topRight={
                      <div className="flex items-center gap-3 font-mono text-[9px] uppercase tracking-[0.16em] text-white/35">
                        <span>{contract.index}</span>
                        <StarMark className="size-2.5 text-white/20" />
                      </div>
                    }
                    bodyClassName="p-6 lg:p-7"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="font-mono text-[15px] font-semibold tracking-[-0.02em] text-white">
                        {contract.name}
                      </h3>
                      <span className="rounded-full border border-line px-2 py-0.5 font-mono text-[8px] uppercase tracking-[0.14em] text-white/40">
                        {contract.kind}
                      </span>
                    </div>

                    <p className="mt-3 max-w-[560px] text-[14px] leading-relaxed text-white/55">
                      {contract.description}
                    </p>

                    <ul className="mt-5 grid gap-2 sm:grid-cols-3">
                      {contract.points.map((point) => (
                        <li
                          key={point}
                          className="flex gap-2 text-[11px] leading-snug text-white/45"
                        >
                          <span className="mt-1 size-1 shrink-0 rounded-full bg-brand-soft" />
                          {point}
                        </li>
                      ))}
                    </ul>

                    <Link
                      href={contract.href}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-5 inline-flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.14em] text-brand-soft transition-colors hover:text-white"
                    >
                      View contract
                      <ArrowUpRight className="size-3" />
                    </Link>
                  </CornerCard>
                </Reveal>
              ))}
            </div>

            <div className="mt-2 flex items-center justify-between border-t border-line pt-4 font-mono text-[9px] uppercase tracking-[0.14em] text-white/40">
              <span>Registry owns state</span>
              <span>Escrow owns value</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
