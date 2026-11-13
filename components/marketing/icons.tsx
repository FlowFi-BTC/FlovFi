import type { SVGProps } from "react";

import type { FeatureIconName } from "@/lib/content/marketing";

type IconProps = SVGProps<SVGSVGElement>;

/**
 * Line-icon set for the marketing page. Icons are decorative by default:
 * every icon has an adjacent text label, so screen readers can skip the SVG.
 */
export function FeatureIcon({
  name,
  ...props
}: { name: FeatureIconName } & IconProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {name === "bitcoin" && (
        <>
          <circle cx="24" cy="24" r="16" />
          <path d="M17 15h8.2a4.8 4.8 0 0 1 0 9.6H17V15Zm0 9.6h9.5a4.8 4.8 0 0 1 0 9.6H17V24.6Z" />
          <path d="M20.5 11.5v3.5M27 11.5v3.5M20.5 33v3.5M27 33v3.5" />
        </>
      )}

      {name === "shield" && (
        <>
          <path d="M24 7.5 38 13v9.5c0 7.7-5.5 13-14 16.5-8.5-3.5-14-8.8-14-16.5V13L24 7.5Z" />
          <path d="m17.5 23.5 4.2 4.2 9-9.4" />
        </>
      )}

      {name === "identity" && (
        <>
          <path d="M9 18V9h9M39 18V9h-9M39 30v9h-9M9 30v9h9" />
          <circle cx="24" cy="20" r="5" />
          <path d="M14 37c0-7.5 20-7.5 20 0" />
        </>
      )}

      {name === "privacy" && (
        <>
          <path d="M14 6h13l7 7v29H14V6Z" />
          <path d="M27 6v7h7" />
          <rect x="20" y="24" width="8" height="7" rx="1.5" />
          <path d="M21.5 24v-2.2a2.5 2.5 0 0 1 5 0V24M24 27.5v1.5" />
        </>
      )}

      {name === "clock" && (
        <>
          <circle cx="24" cy="24" r="16" />
          <path d="M24 14v10l6 4" />
          <path d="M11 24h3M34 24h3M24 11v3M24 34v3" />
        </>
      )}

      {name === "lifecycle" && (
        <>
          <path d="M15 14a12 12 0 0 1 18 5" />
          <path d="M33 14v5h-5" />
          <path d="M33 34a12 12 0 0 1-18-5" />
          <path d="M15 34v-5h5" />
          <circle cx="24" cy="24" r="3" fill="currentColor" stroke="none" />
        </>
      )}
    </svg>
  );
}

export function ArrowUpRight({ className, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}

export function ArrowRight({ className, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <path d="M4 12h16M14 6l6 6-6 6" />
    </svg>
  );
}

export function CheckIcon({ className, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <path d="m4.5 12.5 5 5 10-11" />
    </svg>
  );
}

export function StarMark({ className, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 10 10"
      fill="currentColor"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <path d="M5 .6l1.3 2.9 3.1.3-2.3 2.1.7 3.1L5 7.4 2.2 9l.7-3.1L.6 3.8l3.1-.3z" />
    </svg>
  );
}

export function BitcoinGlyph({ className, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <circle cx="12" cy="12" r="8.5" />
      <path d="M9 7.5h4.1a2.4 2.4 0 0 1 0 4.8H9V7.5Zm0 4.8h4.8a2.4 2.4 0 0 1 0 4.8H9v-4.8Z" />
      <path d="M10.5 5.5v2M13.5 5.5v2M10.5 16.5v2M13.5 16.5v2" />
    </svg>
  );
}

export function GithubIcon({ className, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-1.05-.01-1.9-2.78.62-3.37-1.2-3.37-1.2-.45-1.18-1.11-1.5-1.11-1.5-.91-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05a9.3 9.3 0 0 1 5 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.8-4.57 5.05.36.32.68.95.68 1.92 0 1.39-.01 2.5-.01 2.84 0 .27.18.59.69.49A10.22 10.22 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z" />
    </svg>
  );
}
