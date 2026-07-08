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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${hankenGrotesk.variable} ${spaceGrotesk.variable} ${spaceMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
