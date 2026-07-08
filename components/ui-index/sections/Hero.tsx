"use client";

export default function Hero() {
  return (
    <header data-screen-label="Hero" style={{ position: "relative", padding: "158px 0 84px" }}>
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(var(--grid) 1px,transparent 1px),linear-gradient(90deg,var(--grid) 1px,transparent 1px)",
          backgroundSize: "46px 46px",
          WebkitMaskImage: "radial-gradient(ellipse 78% 82% at 32% 40%,#000 16%,transparent 78%)",
          maskImage: "radial-gradient(ellipse 78% 82% at 32% 40%,#000 16%,transparent 78%)",
          pointerEvents: "none",
        }}
      ></div>
      <div style={{ position: "relative" }}>
        <div
          data-reveal=""
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            padding: "7px 15px 7px 12px",
            border: "1px solid var(--pill-bd)",
            borderRadius: "100px",
            background: "var(--surface2)",
            fontFamily: "'Space Mono',monospace",
            fontSize: "12px",
            letterSpacing: ".16em",
            textTransform: "uppercase",
            color: "var(--sub)",
          }}
        >
          <span
            data-loop=""
            style={{
              width: "7px",
              height: "7px",
              borderRadius: "50%",
              background: "var(--accent)",
              animation: "blink 2.4s ease-in-out infinite",
            }}
          ></span>{" "}
          D-ALabs&nbsp;design&nbsp;index
        </div>
        <h1
          data-reveal=""
          style={{
            animationDelay: ".08s",
            fontFamily: "'Space Grotesk',sans-serif",
            fontWeight: 600,
            fontSize: "clamp(2.4rem,4.6vw,3.9rem)",
            lineHeight: "1.03",
            letterSpacing: "-.03em",
            margin: "22px 0 0",
            maxWidth: "16ch",
            color: "var(--ink)",
          }}
        >
          Every part of D-ALabs. One index.
        </h1>
        <p
          data-reveal=""
          style={{
            animationDelay: ".16s",
            margin: "22px 0 0",
            fontSize: "clamp(1.04rem,1.3vw,1.2rem)",
            lineHeight: "1.6",
            color: "var(--sub)",
            maxWidth: "52ch",
          }}
        >
          The complete component inventory of the D-ALabs site and the Ark membership — tokens,
          type, buttons, cards, motion, and full patterns. Flip the switch above to see every
          specimen in the Lab, Dark, or Ark skin.
        </p>
        <div
          data-reveal=""
          style={{
            animationDelay: ".24s",
            display: "flex",
            alignItems: "center",
            gap: "14px",
            marginTop: "40px",
            fontFamily: "'Space Mono',monospace",
            fontSize: "12px",
            letterSpacing: ".08em",
            textTransform: "uppercase",
            color: "var(--faint)",
            flexWrap: "wrap",
          }}
        >
          <span
            style={{ display: "inline-block", width: "34px", height: "1px", background: "var(--bd-hov)" }}
          ></span>{" "}
          12 sections<span style={{ color: "var(--bd-hov)" }}>/</span>61 specimens<span style={{ color: "var(--bd-hov)" }}>/</span>3 typefaces<span style={{ color: "var(--bd-hov)" }}>/</span>3 skins
        </div>
      </div>
    </header>
  );
}
