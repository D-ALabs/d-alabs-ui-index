import type { ThemeName } from "./data";

/* ===========================================================================
   Theme-reactive browser chrome — ported from the d-alabs-website theme system.
   Keeps the favicon and the mobile-toolbar / "tab" colour matched to the active
   skin. The source site had a binary light/dark toggle; this index has a
   tri-state skin (Lab / Dark / Ark), so the two dark skins share the dark
   favicon and each skin points theme-color at its own page background.
=========================================================================== */

// theme-color drives the mobile browser toolbar / PWA chrome; match each skin's
// real page background (see `themes` in data.ts) so the chrome reads as an
// extension of the page rather than a seam.
const THEME_COLOR: Record<ThemeName, string> = {
  Lab: "#F5F2EA",
  Dark: "#0D1522",
  Ark: "#081426",
};

// Lab is the only light skin, so it gets the navy-flask favicon that reads on a
// light tab; the dark skins get the cream-flask favicon.
function faviconFor(theme: ThemeName): string {
  return theme === "Lab" ? "/favicon-light.svg" : "/favicon-dark.svg";
}

function syncThemeColor(color: string) {
  let meta = document.querySelector<HTMLMetaElement>('meta[name="theme-color"]');
  if (!meta) {
    meta = document.createElement("meta");
    meta.name = "theme-color";
    document.head.appendChild(meta);
  }
  meta.setAttribute("content", color);
}

function syncFavicon(href: string) {
  let link = document.getElementById("dal-favicon") as HTMLLinkElement | null;
  if (!link) {
    link = document.createElement("link");
    link.id = "dal-favicon";
    link.rel = "icon";
    // type + sizes="any" are load-bearing: they make Chrome and Firefox score
    // this SVG above Next's streamed favicon.ico <link>.
    link.type = "image/svg+xml";
    link.setAttribute("sizes", "any");
  }
  link.setAttribute("href", href);
  // Re-append so our <link> stays last among the icon links — Firefox picks the
  // last suitable icon in document order, and Next streams its favicon.ico link
  // in after the pre-paint script has run.
  document.head.appendChild(link);
}

// Apply every chrome surface that should track the active skin. Safe to call on
// mount and on each theme change; it reuses the JS-owned <link>/<meta> the
// pre-paint script installs.
export function applyThemeChrome(theme: ThemeName) {
  syncThemeColor(THEME_COLOR[theme]);
  syncFavicon(faviconFor(theme));
  document.documentElement.style.colorScheme = theme === "Lab" ? "light" : "dark";
}
