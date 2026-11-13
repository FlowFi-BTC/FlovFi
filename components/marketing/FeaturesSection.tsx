import { features } from "@/lib/content/marketing";

import { FeatureCard } from "./FeatureCard";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";

export function FeaturesSection() {
  return (
    <section
      id="product"
      className="relative overflow-hidden border-b border-line bg-ink py-24 lg:py-32"
    >
      <div className="relative mx-auto max-w-[1500px] px-5 lg:px-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <Reveal>
            <SectionHeading
              eyebrow="Why FlowFi"
              title={
                <>
                  Built narrow.
                  <br />
                  On purpose.
                </>
              }
              lead="Six design decisions that keep the pilot honest, the state auditable, and the capital where it belongs."
            />
          </Reveal>

          <Reveal delay={120}>
            <p className="max-w-[340px] font-mono text-[10px] uppercase leading-relaxed tracking-[0.14em] text-white/35">
              No marketplace. No pooled fund. No consumer investment product.
              One financing primitive, built to be proven.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.id}
              feature={feature}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
