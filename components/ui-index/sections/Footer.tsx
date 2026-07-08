/* eslint-disable @next/next/no-img-element */
"use client";

import { useUI } from "../context";

export default function Footer() {
  const ui = useUI();
  return (
    <footer
      data-screen-label="Footer"
      style={{
        marginTop: "72px",
        padding: "36px 0 44px",
        borderTop: "1px solid var(--bd2)",
        display: "flex",
        flexWrap: "wrap",
        gap: "18px 32px",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <span style={{ display: "flex", alignItems: "center", gap: "13px" }}>
        <img
          src="/assets/logo-dark.png"
          alt="D-ALabs"
          style={{ height: "20px", width: "auto", display: "var(--show-ld)", filter: "var(--logo-f)" }}
        />
        <img
          src="/assets/logo-light.png"
          alt="D-ALabs"
          style={{ height: "20px", width: "auto", display: "var(--show-ll)" }}
        />
        <span style={{ width: "1px", height: "17px", background: "var(--bd)" }}></span>
        <span
          style={{
            fontFamily: "'Space Mono',monospace",
            fontSize: "11.5px",
            letterSpacing: ".14em",
            textTransform: "uppercase",
            color: "var(--faint)",
          }}
        >
          Ultimate UI Index
        </span>
      </span>
      <span
        style={{
          fontFamily: "'Space Mono',monospace",
          fontSize: "11.5px",
          letterSpacing: ".08em",
          color: "var(--faint)",
        }}
      >
        © {ui.year} D-ALabs · Built for the curious.
      </span>
    </footer>
  );
}
