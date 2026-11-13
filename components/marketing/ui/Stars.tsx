"use client";

import { useEffect, useState } from "react";

type Star = {
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
  opacity: number;
};

type StarsProps = {
  count?: number;
};

/**
 * Sparse, deterministic-looking star field. Values are generated after mount
 * so the server and client never disagree on random positions.
 */
export function Stars({ count = 90 }: StarsProps) {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const frame = requestAnimationFrame(() => {
      setStars(
        Array.from({ length: count }, () => ({
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 1.4 + 0.6,
          delay: Math.random() * 7,
          duration: 4 + Math.random() * 5,
          opacity: 0.15 + Math.random() * 0.5,
        }))
      );
    });

    return () => cancelAnimationFrame(frame);
  }, [count]);

  if (stars.length === 0) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
    >
      {stars.map((star, index) => (
        <span
          key={index}
          className="absolute rounded-full bg-white"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: star.size,
            height: star.size,
            opacity: star.opacity,
            animation: `twinkle ${star.duration}s ease-in-out ${star.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}
