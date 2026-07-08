import type { Metadata } from "next";
import { Hanken_Grotesk, Space_Grotesk, Space_Mono } from "next/font/google";
import "./globals.css";

// adjustFontFallback is disabled so glyphs the webfonts lack (→, −, …) fall
// through to the same system fonts as the original 'X', system-ui/sans-serif
// stacks, instead of the synthesized Arial-based fallback.
const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-hanken",
  display: "swap",
  adjustFontFallback: false,
  fallback: ["system-ui", "sans-serif"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
  adjustFontFallback: false,
  fallback: ["sans-serif"],
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
  display: "swap",
  adjustFontFallback: false,
  fallback: ["monospace"],
});

export const metadata: Metadata = {
  title: "D-ALabs — UI Index",
  description:
    "The complete component inventory of the D-ALabs site and the Ark membership — tokens, type, buttons, cards, motion, and full patterns.",
};

// Install the theme-reactive favicon + browser-chrome colour before first paint
// so the branded SVG icon shows immediately instead of a frame of favicon.ico.
// The index always mounts in the light "Lab" skin (theme isn't persisted), so
// the pre-paint default is light; ThemeToggle-style updates then flow through
// applyThemeChrome() in UIIndexApp. Mirrors the d-alabs-website theme script.
const THEME_PRELOAD = `(function(){try{var m=document.querySelector('meta[name="theme-color"]');if(!m){m=document.createElement('meta');m.setAttribute('name','theme-color');document.head.appendChild(m);}m.setAttribute('content','#F5F2EA');var f=document.getElementById('dal-favicon');if(!f){f=document.createElement('link');f.id='dal-favicon';f.rel='icon';f.type='image/svg+xml';f.setAttribute('sizes','any');document.head.appendChild(f);}f.setAttribute('href','/favicon-light.svg');document.documentElement.style.colorScheme='light';}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${hankenGrotesk.variable} ${spaceGrotesk.variable} ${spaceMono.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_PRELOAD }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
