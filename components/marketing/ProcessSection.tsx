import { processSteps } from "@/lib/content/marketing";
import { cn } from "@/lib/utils";

import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";

/**
 * Three dark panels stepping upward across the light section.
 *
 * The panel tops are 520 / 580 / 640px tall, so the steps sit at 120px and
 * 60px. The 12×12 radial-gradient squares are inverted fillets that smooth
 * the two concave corners where the panel tops meet.
 */
const panelHeights = [
  "lg:h-[520px]",
  "lg:h-[580px]",
  "lg:h-[640px]",
] as const;

const panelRadii = [
  "rounded-2xl lg:rounded-l-2xl lg:rounded-tr-none lg:rounded-br-none",
  "rounded-2xl lg:rounded-none lg:rounded-tl-2xl",
  "rounded-2xl lg:rounded-none lg:rounded-tl-2xl lg:rounded-tr-2xl lg:rounded-br-2xl",
] as const;

export function ProcessSection() {
  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden bg-paper py-24 text-[#07090c] lg:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-grid-light opacity-60"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(37,99,235,0.10),transparent_48%)]"
      />

      <div className="relative mx-auto max-w-[1500px] px-5 lg:px-10">
        <Reveal>
          <SectionHeading
            tone="light"
            eyebrow="How it works"
            title={
              <>
                One receivable. One provider.
                <br className="hidden lg:block" /> One complete cycle.
              </>
            }
            lead="The pilot is deliberately narrow: one verified business, one real invoice, one independent sBTC provider. The mechanics are on-chain from registration to settlement."
            className="max-w-[860px]"
          />
        </Reveal>

        <Reveal delay={120} className="relative mt-16">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:gap-0">
            {processSteps.map((step, index) => (
              <article
                key={step.number}
                className={cn(
                  "relative flex flex-col overflow-hidden bg-[#090c11] p-7 text-white lg:flex-1 lg:p-9 xl:p-10",
                  panelHeights[index],
                  panelRadii[index]
                )}
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-2 top-1 text-[92px] font-medium leading-none tracking-[-0.08em] text-white/[0.035]"
                >
                  {step.number}
                </span>

                <div className="relative flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.16em] text-white/35">
                  <span>{step.number}</span>
                  <span className="rounded-full border border-line px-2 py-0.5">
                    {step.tag}
                  </span>
                </div>

                <div className="relative mt-10">
                  <h3 className="max-w-[300px] text-[26px] font-medium leading-[1.02] tracking-[-0.04em] text-white xl:text-[30px]">
                    {step.title}
                  </h3>
                  <p className="mt-4 max-w-[310px] text-[13px] leading-relaxed text-white/50">
                    {step.description}
                  </p>
                </div>

                <ul className="relative mt-auto space-y-2 pt-8">
                  {step.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2 text-[11px] leading-snug text-white/45"
                    >
                      <span className="mt-px font-mono text-brand-soft">+</span>
                      {point}
                    </li>
                  ))}
                </ul>

                <div className="relative mt-6 border-t border-white/10 pt-3 font-mono text-[9px] uppercase tracking-[0.14em] text-white/35">
                  {step.contract}
                </div>
              </article>
            ))}
          </div>

          {/* Inverted fillets at the two concave top corners. */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 hidden lg:block"
          >
            <div
              className="absolute left-[calc(33.3333%_-_12px)] top-[108px] size-3"
              style={{
                background:
                  "radial-gradient(circle at 0 0, transparent 11.5px, #090c11 12px)",
              }}
            />
            <div
              className="absolute left-[calc(66.6667%_-_12px)] top-[48px] size-3"
              style={{
                background:
                  "radial-gradient(circle at 0 0, transparent 11.5px, #090c11 12px)",
              }}
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
