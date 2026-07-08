# d-alabs-ui-index

The complete component inventory of the D-ALabs site and the Ark membership —
tokens, type, buttons, cards, motion, and full patterns, viewable in three
skins (**Lab / Dark / Ark**).

A 1:1 Next.js port of the `Ultimate UI Index.dc.html` design from the
[D-ALabs UI Design list](https://claude.ai/design/p/b32db433-bce2-4282-81b0-dd9bdb2ab983)
Claude Design project.

## Stack

- **Next.js 16** (App Router, Turbopack) · **React 19** · TypeScript
- Fonts self-hosted via `next/font` (Hanken Grotesk, Space Grotesk, Space Mono),
  with `adjustFontFallback` disabled so glyphs the webfonts lack (`→`, `−`, …)
  fall through to the same system fonts as the original design.
- All specimen styling is inline, exactly as authored in the design source;
  only keyframes, hover/focus states (ported from the design runtime's
  `style-hover` / `style-focus` attributes), and base resets live in
  `app/globals.css`.

## Structure

```
app/                      layout (fonts, metadata), globals.css, page
components/ui-index/
  data.ts                 theme tokens (3 skins), accents, sections, copy
  context.ts              shared UI context consumed by every section
  UIIndexApp.tsx          state engine: theme/accent vars, scrollspy,
                          count-up, magnetic buttons, toast/modal/tabs
  sections/               Nav, Hero, 12 numbered sections, Footer, …
public/assets/            wordmark + flask marks from the design project
```

## Run

```bash
npm install
npm run dev    # http://localhost:3000
```

## Known deviations from the claude.ai/design preview

Both are cases where the port follows the **authored source** and the design
tool's preview runtime deviates from it:

1. **Film-grain swatch (Foundations)** — the preview runtime mangles the
   `feTurbulence` attributes inside the data-URI (`baseFrequency` →
   `sc-camel-base-frequency`), silently flattening the noise. The port renders
   the authored `baseFrequency=0.85`, so the grain is slightly crisper.
2. **Waitlist form (Interactive)** — the preview runtime drops the authored
   `required` attribute on the email input (React treats `required=""` as
   false), so the preview submits an empty form. The port keeps `required`.
