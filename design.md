# FlovFi Marketing Design System

A practical guide for the next developer touching the marketing surface. The
goal is not to freeze the design — it is to make the existing visual language
easy to extend without re-inventing spacing, type, colour, or the corner
geometry that gives the page its character.

---

## 1. Principles

1. **Institutional, not playful.** Dark surfaces, restrained colour, precise
   mono labels, and generous spacing. No gradients-for-decoration, no glassy
   cards everywhere, no emoji.
2. **Technical honesty.** The page describes a testnet pilot with unaudited
   contracts. Copy never implies a production marketplace, a pooled fund, an
   audit, or a guarantee. Every limitation named in the grant documents stays
   visible.
3. **One idea per section.** A section gets a label, a headline, a short lead,
   and one visual or grid. If a section needs two competing visuals, split it.
4. **Motion is a hint, not a feature.** Reveal-on-scroll, a cycling lifecycle,
   a word rise. Anything that loops stops for `prefers-reduced-motion`.
5. **Content lives in data, not JSX.** Marketing copy, links, and feature lists
   belong in `lib/content/marketing.ts`. Components should be layout-only.

---

## 2. Typography

**Sans:** Inter (`next/font/google`, `--font-inter`).
**Mono:** JetBrains Mono (`next/font/google`, `--font-jetbrains-mono`).

Inter carries every headline, paragraph, button, and nav item. JetBrains Mono is
reserved for metadata: eyebrows, tags, contract names, status badges, small
numerals, and addresses. Never use mono for a full sentence.

| Role | Classes | Notes |
|---|---|---|
| Display H1 | `text-[48px] sm:text-6xl lg:text-[82px] font-medium leading-[0.95] tracking-[-0.055em]` | Hero only. One per page. |
| Section H2 | `text-4xl sm:text-5xl lg:text-[56px] font-medium leading-[1.02] tracking-[-0.045em]` | Use `text-balance`. |
| Card H3 | `text-[21px] xl:text-[23px] font-medium leading-[1.08] tracking-[-0.035em]` | Feature cards. |
| Body large | `text-[17px] lg:text-[19px] leading-[1.55] text-white/60` | Hero lead. |
| Body | `text-[14px] lg:text-[15px] leading-relaxed text-white/55` | Section leads, card copy. |
| Small | `text-[12px] text-white/50` | Footer, supporting copy. |
| Eyebrow / label | `font-mono text-[9px]–[10px] uppercase tracking-[0.14em]–[0.18em] text-white/35` | Always uppercase. |
| Numeral | `font-mono font-semibold tracking-[-0.04em]` | Stats, step numbers. |

**Rules**

- Tracking tightens as size increases: display `-0.055em`, H2 `-0.045em`, card
  H3 `-0.035em`. Body copy keeps normal tracking.
- Do not use pure white for paragraphs. `text-white/55` to `text-white/60` is
  the default; pure white is for headings and active states.
- Uppercase mono is metadata, not a heading style. Pair it with a real heading.

---

## 3. Colour

Brand tokens are declared as plain CSS variables in `app/globals.css` and then
mapped into Tailwind via `@theme inline`. Use the utility names, not raw hex.

| Token | Value | Utility | Use |
|---|---|---|---|
| `--ink` | `#05070a` | `bg-ink` | Page background |
| `--ink-raised` | `#080b10` | `bg-ink-raised` | Alternating dark band |
| `--panel` | `#0d1117` | `bg-panel` | Cards, panels |
| `--panel-2` | `#121821` | `bg-panel-2` | Nested surfaces |
| `--paper` | `#eae7e1` | `bg-paper` | Light “how it works” section |
| `--paper-soft` | `#f4f3f0` | `bg-paper-soft` | Light secondary surface |
| `--line` | `rgb(255 255 255 / .10)` | `border-line` | Default hairline |
| `--line-strong` | `rgb(255 255 255 / .20)` | `border-line-strong` | Hover / emphasis border |
| `--brand` | `#2563eb` | `bg-brand`, `text-brand` | Primary action |
| `--brand-bright` | `#3b82f6` | `bg-brand-bright` | Primary hover |
| `--brand-soft` | `#60a5fa` | `text-brand-soft` | Links, accents on dark |
| `--signal` | `#34d399` | `bg-signal`, `text-signal` | Live / success dot only |

**Usage notes**

- Blue is an action and information colour, not a background wash. Large areas
  stay ink/panel; blue appears in buttons, links, thin rules, and one soft glow.
- Emerald (`--signal`) is reserved for “live” / “testnet” status dots. Do not
  use it for generic success copy or decoration.
- On light (`bg-paper`) surfaces, use `text-[#07090c]`, `text-black/55`,
  `border-black/15`. Do not reuse white-alpha tokens there.
- shadcn’s semantic tokens (`--background`, `--card`, `--border`, etc.) are
  mapped to the same dark palette in `.dark`, so future shadcn components sit
  correctly next to the marketing surface.

---

## 4. Layout & rhythm

- **Max width:** `max-w-[1500px]`, horizontal padding `px-5 lg:px-10`.
- **Section padding:** `py-24 lg:py-32`. The hero is taller:
  `pt-36 pb-20 lg:pt-40 lg:pb-28` — the extra top space clears the fixed
  floating navigation.
- **Grid gaps:** `gap-4` for card grids, `gap-12`–`gap-14` for two-column
  editorial sections.
- **Card padding:** `p-6` default, `p-7 lg:p-8` for larger cards.
- **Vertical rhythm inside a section:** label → `mt-5` heading → `mt-5` lead →
  `mt-14`/`mt-16` content.
- **Anchor offset:** `[id]` gets `scroll-margin-top: 5rem` globally. The
  floating navigation overlays the top edge of a section, but every section has
  enough internal top padding that headings stay clear.

Breakpoints follow Tailwind defaults. The only custom breakpoint behaviour of
note is the stepped process section: it is stacked below `lg` and becomes a
continuous stepped row at `lg` and above.

---

## 5. Surfaces

### Standard panel

```tsx
<div className="rounded-2xl border border-line bg-panel/60">
  ...
</div>
```

Use for status lists, tables, and quiet containers. No shadow unless it is
floating over content.

### Floating navigation

The header is a floating panel, not a full-width bar. It is `fixed` with a
`px-3 pt-3 sm:px-5 sm:pt-5` gutter, a `max-w-[1280px]` inner panel, and
`rounded-2xl border` + `backdrop-blur-2xl`.

- **Resting state:** `bg-ink/60` with a hairline border and a soft inset top
  highlight. The hero atmosphere shows through the blur.
- **Scrolled state:** after 8px, the panel becomes `bg-ink/85` with a stronger
  border and drop shadow. It never becomes fully opaque.
- **Desktop:** a three-column grid, `1fr auto 1fr` — brand left, audience tabs
  exactly centred, status + CTA right.
- **Mobile:** two rows inside the same panel — brand + CTA on top, audience tabs
  below, separated by a `border-t`.
- **Audience tabs:** a segmented control with “For Business” and
  “For Capital Provider”. The active segment uses `bg-white/[0.09]` and
  `aria-current="location"`; it links to the section that speaks to that
  audience.
- **Hide / reveal:** after `120px`, scrolling down translates the panel up and
  fades it out; scrolling up by more than `8px` brings it back down. The
  transition is `500ms` on transform and opacity. Near the top the bar is always
  visible. While hidden the header is `inert`, so it cannot trap keyboard focus.
- **Do not** replace this with `sticky`. The fixed panel is part of the visual
  identity, and the hero padding is tuned for it.

### Scooped corners

`LifecycleTimeline` uses concave corners at the top-left and bottom-right. They
are produced by the `corner-scoop-tl-br` utility in `app/globals.css`:

```css
@utility corner-scoop-tl-br {
  corner-shape: scoop round scoop round;
}
```

`corner-shape` follows the same four-value order as `border-radius`: top-left,
top-right, bottom-right, bottom-left. Pair the utility with a matching
`rounded-*` radius (`rounded-[20px]` today). The border and background follow
the concave curve, so no radial-gradient patch is needed.

Browsers without `corner-shape` fall back to four normal convex corners — the
layout and content are unchanged. Do not use the utility on a card that relies
on square inner corners; the scoop is a deliberate break in the surface.

### L-shaped corner card

This is the signature surface. It is an L made of two rectangles plus an
inverted fillet:

```
        notch
          ↓
   ┌──────┐──────────────┐
   │ icon │     tab      │  ← tab starts at x = notch
   │      │              │
   ├──────┘──────────────┤  ← body starts at y = notch
   │       body          │
   └─────────────────────┘
          ↑
     inverted fillet
```

**Geometry**

- Notch: `64px` (default), `62px` for feature cards, `58px` for compact
  architecture cards, `78px` for the CTA.
- Tab height: `notch + 12px`.
- Radii: tab `rounded-tl-[10px] rounded-tr-[12px]`, body `rounded-[12px]`.
- Fillet: `12×12px`, positioned at
  `left: notch - 12; top: notch - 12`, with
  `radial-gradient(circle at 0 0, transparent 11.5px, var(--card-bg) 12px)`.
- The notch is empty space for an icon. Do not put body copy inside it.

The implementation lives in
`components/marketing/ui/CornerCard.tsx`. Define the card colour through the
`background` prop; the fillet is built from the same value.

```tsx
<CornerCard
  background="#0d1219"
  notch={62}
  topLeft={<FeatureIcon name="bitcoin" className="size-8" />}
  topRight={<span className="font-mono text-[9px] uppercase">sBTC</span>}
  bodyClassName="p-6 pt-7"
>
  <h3>Bitcoin, not a stablecoin substitute.</h3>
  <p>...</p>
</CornerCard>
```

### Stepped panel row

The “how it works” section uses three dark panels on the paper background. The
steps are created by different heights, not transforms:

| Panel | Height | Top offset (tallest = 640) |
|---|---|---|
| 01 | `520px` | `120px` |
| 02 | `580px` | `60px` |
| 03 | `640px` | `0px` |

- Panels are bottom-aligned: `lg:flex-row lg:items-end`.
- Outer corners are rounded; inner top corners are square and bridged by the
  same 12px inverted fillet.
- Fillet positions: `top: 108px` (120 − 12) and `top: 48px` (60 − 12).
- Fillets are hidden below `lg`, where the panels stack with `rounded-2xl`.
- The fillet colour must match the panel background exactly (`#090c11` today).

If you change a panel height, update the corresponding fillet offset. This is
the one place where the geometry is coupled to layout constants.

---

## 6. Motion

Keyframes and animation tokens live in `app/globals.css`:

| Token | Utility | Use |
|---|---|---|
| `rise` | `animate-rise` | Hero word reveal |
| `fade-up` | `animate-fade-up` | Hero copy / CTA entrance |
| `twinkle` | inline `animation` | Star field |
| `marquee` | `animate-marquee` | Available for logo strips |
| `float` | `animate-float` | Available for floating cards |
| `scan` | `animate-scan` | Available for accent lines |
| `dash` | `animate-dash` | Available for SVG connectors |
| `glow` | `animate-glow` | Available for primary CTA emphasis |
| `lock-pulse` | `animate-lock-pulse` | Available for lock/vault motifs |
| `orb` | `animate-orb` | Available for soft glows |

**Rules**

- Entrance animation is one-shot. Never loop a whole section.
- `Reveal` (`components/marketing/ui/Reveal.tsx`) is the standard viewport
  reveal. It disconnects after the first intersection and skips motion when
  `prefers-reduced-motion: reduce` is set. It only animates `transform`, never
  `opacity`, so copy stays readable if JavaScript or hydration is delayed.
- The lifecycle timeline pauses on hover and jumps to the settled state under
  reduced motion.
- The floating navbar hides on scroll-down and reveals on scroll-up. Keep the
  120px threshold and the 8px direction dead-zone; they prevent flicker on
  trackpads. The animation is transform + opacity only.
- Keep the global reduced-motion reset at the bottom of `globals.css`. It
  neutralises any animation you forget to guard.

---

## 7. Component structure

```
app/
  layout.tsx                    Root layout: Inter + JetBrains Mono, metadata
  globals.css                   Tokens, keyframes, base styles, utilities
  (marketing)/page.tsx          Server component; composes sections only
components/
  GradientASCII.tsx             WebGL hero atmosphere (client)
  marketing/
    Navbar.tsx                  Client: floating bar, scroll hide/reveal
    Hero.tsx
    ProofStrip.tsx
    ProcessSection.tsx          Stepped panels
    ArchitectureSection.tsx
    FeaturesSection.tsx
    FeatureCard.tsx             Client: pointer spotlight
    SecuritySection.tsx
    CTASection.tsx
    Footer.tsx
    icons.tsx                   Line-icon set + brand glyphs
    ui/
      Brand.tsx
      CornerCard.tsx
      Pill.tsx
      Reveal.tsx                Client
      SectionHeading.tsx
      Stars.tsx                 Client
      Words.tsx
    visuals/
      HeroBackdrop.tsx
      LifecycleTimeline.tsx     Client
lib/
  content/marketing.ts          All copy, links, contract IDs, feature data
```

**Rules**

- Sections are server components by default. Add `"use client"` only for
  state, effects, or event handlers.
- A section imports data from `lib/content/marketing.ts`; it does not hardcode
  copy.
- Client islands should be small: `Navbar`, `FeatureCard`, `Reveal`, `Stars`,
  `LifecycleTimeline`, `GradientASCII`.
- `HeroBackdrop` is a server component that renders the client `GradientASCII`.
  Keep the wrapper `pointer-events-none` so the canvas never blocks links.
- Shared visual primitives go in `components/marketing/ui/`. Do not duplicate
  the fillet math in a section.

---

## 8. Content rules

- **Source of truth:** `flowfi-contracts/grant-application/*` and the
  repository root `README.md`. If a claim is not in those documents, do not
  ship it.
- **Status language:** “Live on Stacks testnet”, “Unaudited pilot”, “Ahead of
  mainnet”. Never “audited”, “live on mainnet”, or “insured”.
- **Scope language:** “one real pilot cycle”, “one verified business, one
  capital provider”. Never imply a marketplace, a pooled fund, a consumer
  investment product, or an automated KYB system.
- **Contract names:** write `flowfi-registry` and `flowfi-escrow` in mono.
  Do not shorten them to “the contract” when the distinction matters.
- **Links:** external links use `target="_blank" rel="noreferrer"`. The app is
  `https://flowfi-btc.vercel.app/`; docs are in the GitHub repository.
- **Risk copy:** keep the risk disclosure link visible in the security section
  and the disclaimer in the footer. They are part of the product’s honesty, not
  legal boilerplate to hide.

---

## 9. Accessibility

- **Contrast:** section leads use `text-white/55`; card copy uses
  `text-white/50`. Never go below `text-white/40` for text that carries
  meaning. Metadata at `/30` is decorative only.
- **Focus:** the global `:focus-visible` outline is brand blue with a 3px
  offset. Do not remove it.
- **Reduced motion:** every looping animation must have a reduced-motion path.
  The global reset is a safety net, not a substitute for the JS guards in
  `Reveal`, `Stars`, and `LifecycleTimeline`.
- **Floating navbar:** while hidden it is `inert`, so links cannot receive
  focus off-screen. The audience tabs expose the selected segment with
  `aria-current="location"`.
- **Semantics:** one `<h1>` per page; sections use `<section>` with an
  accessible name or a heading; decorative SVG uses `aria-hidden="true"`.
- **Links:** icon-only links need an `aria-label`. The brand link already has
  one.
- **Pointer effects:** the feature-card spotlight is decorative. It must not
  be required to read the card.

---

## 10. Adding a section

1. Add copy and links to `lib/content/marketing.ts` with a narrow type.
2. Create `components/marketing/YourSection.tsx` as a server component.
3. Use `SectionHeading` for the label/headline/lead rhythm.
4. Choose one surface: standard panel, `CornerCard`, or stepped panels. Do not
   mix all three in one section.
5. Wrap the content in `Reveal` if it enters below the fold.
6. Add the section to `app/(marketing)/page.tsx` in narrative order.
7. Add a nav item only if the section is a primary destination.
8. Check at `375px`, `768px`, `1024px`, and `1440px`.
9. Run `npm run lint` and `npm run build`.

**Do not**

- Add a new colour to a component without adding a token first.
- Use a rounded card with a shadow on a dark section; use the hairline.
- Put a looping animation above the fold that cannot be paused.
- Copy a “partner” logo or claim that is not in the grant documents.
- Reuse the L-card for long-form body copy. It is a card, not an article.
