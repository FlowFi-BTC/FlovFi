import GradientASCII from "@/components/GradientASCII";

/**
 * Atmospheric hero layer: a restrained ASCII gradient, a blue radial bloom,
 * and the shared grid. Everything here is decorative and non-interactive.
 */
export function HeroBackdrop() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
    >
      <div
        className="absolute inset-x-0 top-0 h-[820px] opacity-[0.55]"
        style={{
          maskImage:
            "linear-gradient(to bottom, black 0%, black 55%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 0%, black 55%, transparent 100%)",
        }}
      >
        <GradientASCII
          colors={["#1d4ed8", "#38bdf8", "#22d3ee", "#0b1220"]}
          shape="horizon"
          characters=" .·•+"
          cellSize={20}
          density={0.62}
          glyphOpacity={0.6}
          glow={0.28}
          depthOfField={0}
          flicker={0.16}
          softness={0.55}
          scale={1}
          flow={0.35}
          speed={0.6}
          gradientOpacity={0.85}
          grain={0.06}
          variation={0}
          mouseInteraction={false}
          scrambleRadius={0.1}
          clickEffect="none"
          intro
          lightMode={false}
        />
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(37,99,235,0.22),transparent_58%)]" />
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-transparent to-ink" />
    </div>
  );
}
