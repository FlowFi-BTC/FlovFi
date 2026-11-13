"use client";

import type { MouseEvent } from "react";

import type { Feature } from "@/lib/content/marketing";

import { FeatureIcon, StarMark } from "./icons";
import { CornerCard } from "./ui/CornerCard";
import { Reveal } from "./ui/Reveal";

type FeatureCardProps = {
  feature: Feature;
  index: number;
};

export function FeatureCard({ feature, index }: FeatureCardProps) {
  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty(
      "--spot-x",
      `${event.clientX - rect.left}px`
    );
    event.currentTarget.style.setProperty(
      "--spot-y",
      `${event.clientY - rect.top}px`
    );
  };

  return (
    <Reveal delay={(index % 3) * 100} className="h-full">
      <div
        onMouseMove={handleMouseMove}
        className="group/spot h-full"
      >
        <CornerCard
          className="h-full"
          background="#0d1219"
          notch={62}
          topLeft={
            <span className="flex size-9 items-center justify-center text-white/75">
              <FeatureIcon name={feature.icon} className="size-8" />
            </span>
          }
          topRight={
            <div className="flex items-center gap-3">
              <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-white/35">
                {feature.tag}
              </span>
              <StarMark className="size-2.5 text-white/20 transition-colors group-hover/spot:text-brand-soft" />
            </div>
          }
          bodyClassName="relative flex min-h-[230px] flex-col overflow-hidden p-6 pt-7"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover/spot:opacity-100"
            style={{
              background:
                "radial-gradient(280px circle at var(--spot-x, 50%) calc(var(--spot-y, 50%) - 62px), rgba(96,165,250,0.12), transparent 65%)",
            }}
          />

          <h3 className="relative max-w-[280px] text-[21px] font-medium leading-[1.08] tracking-[-0.035em] text-white xl:text-[23px]">
            {feature.title}
          </h3>

          <p className="relative mt-auto pt-8 text-[13px] leading-relaxed text-white/50">
            {feature.description}
          </p>
        </CornerCard>
      </div>
    </Reveal>
  );
}
