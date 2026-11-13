import { proofStats, stack } from "@/lib/content/marketing";

export function ProofStrip() {
  return (
    <section aria-label="Project status" className="border-b border-line bg-ink-raised">
      <div className="mx-auto max-w-[1500px] px-5 lg:px-10">
        <div className="grid grid-cols-2 gap-px bg-line lg:grid-cols-4">
          {proofStats.map((stat) => (
            <div key={stat.label} className="bg-ink-raised px-1 py-7 sm:px-6">
              <p className="font-mono text-2xl font-semibold tracking-[-0.04em] text-white lg:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 text-[12px] font-medium text-white/70">
                {stat.label}
              </p>
              <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.12em] text-white/40">
                {stat.detail}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-[1500px] border-t border-line px-5 py-6 lg:px-10">
        <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
          <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-white/30">
            Built on
          </span>

          {stack.map((item) => (
            <span
              key={item.label}
              className="inline-flex items-baseline gap-2"
            >
              <span className="text-[12px] font-semibold text-white/70">
                {item.label}
              </span>
              <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-white/35">
                {item.detail}
              </span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
