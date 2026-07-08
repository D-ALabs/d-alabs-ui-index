/* eslint-disable @next/next/no-img-element */
"use client";

import { useUI } from "../context";

export default function MotionSection() {
  const ui = useUI();
  return (
    <section id="mot" data-spy="mot" data-screen-label="08 Motion" style={{ padding: "64px 0 30px", borderTop: "1px solid var(--bd2)", marginTop: "40px" }}>
      <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "16px", flexWrap: "wrap" }}>
        <div>
          <div style={{ fontFamily: "'Space Mono',monospace", fontSize: "12px", letterSpacing: ".2em", textTransform: "uppercase", color: "var(--accent)" }}><span style={{ opacity: ".5" }}>[</span>&nbsp; 11 — Motion &nbsp;<span style={{ opacity: ".5" }}>]</span></div>
          <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 600, fontSize: "clamp(1.7rem,3vw,2.4rem)", lineHeight: "1.08", letterSpacing: "-.025em", margin: "14px 0 0", color: "var(--ink)" }}>Slow, calm, deliberate.</h2>
        </div>
        <span style={{ fontFamily: "'Space Mono',monospace", fontSize: "11.5px", letterSpacing: ".12em", color: "var(--faint)" }}>08 items</span>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: "18px", marginTop: "34px" }}>
        <button onClick={ui.replayAnim} style={{ textAlign: "left", cursor: "pointer", padding: "0", border: "1px solid var(--bd)", borderRadius: "16px", background: "var(--surface)", overflow: "hidden", fontFamily: "inherit" }}>
          <span style={{ display: "flex", justifyContent: "space-between", gap: "10px", padding: "12px 16px", borderBottom: "1px solid var(--bd2)", fontFamily: "'Space Mono',monospace", fontSize: "10.5px", letterSpacing: ".12em", textTransform: "uppercase", color: "var(--faint)" }}><span>MO-01 · revealUp</span><span>↻</span></span>
          <span style={{ display: "grid", placeItems: "center", height: "130px" }}><span data-anim="" style={{ display: "block", width: "64px", height: "42px", borderRadius: "10px", background: "var(--surface)", border: "1px solid var(--bd-hov)", boxShadow: "var(--sh-card)", animation: "revealUp .85s cubic-bezier(.16,1,.3,1) both" }}></span></span>
          <span style={{ display: "block", padding: "9px 16px", borderTop: "1px solid var(--bd2)", fontFamily: "'Space Mono',monospace", fontSize: "10px", letterSpacing: ".08em", color: "var(--faint)" }}>.85s · cubic-bezier(.16,1,.3,1) · click ↻</span>
        </button>
        <div style={{ border: "1px solid var(--bd)", borderRadius: "16px", background: "var(--surface)", overflow: "hidden" }}>
          <span style={{ display: "flex", justifyContent: "space-between", gap: "10px", padding: "12px 16px", borderBottom: "1px solid var(--bd2)", fontFamily: "'Space Mono',monospace", fontSize: "10.5px", letterSpacing: ".12em", textTransform: "uppercase", color: "var(--faint)" }}><span>MO-02 · floatBob</span><span>∞</span></span>
          <span style={{ display: "grid", placeItems: "center", height: "130px" }}><span data-loop="" style={{ display: "grid", placeItems: "center", padding: "12px 18px", borderRadius: "12px", background: "var(--orbit-bg)", transition: "background-color .45s ease", animation: "floatBob 5.5s ease-in-out infinite" }}><img src="/assets/flask.png" alt="" style={{ height: "58px", width: "auto", display: "var(--show-fn)", filter: "var(--flask-fx)" }} /><img src="/assets/flask-gold.png" alt="" style={{ height: "58px", width: "auto", display: "var(--show-fg)" }} /></span></span>
          <span style={{ display: "block", padding: "9px 16px", borderTop: "1px solid var(--bd2)", fontFamily: "'Space Mono',monospace", fontSize: "10px", letterSpacing: ".08em", color: "var(--faint)" }}>5.5s · ease-in-out · −11px</span>
        </div>
        <div style={{ border: "1px solid var(--bd)", borderRadius: "16px", background: "var(--surface)", overflow: "hidden" }}>
          <span style={{ display: "flex", justifyContent: "space-between", gap: "10px", padding: "12px 16px", borderBottom: "1px solid var(--bd2)", fontFamily: "'Space Mono',monospace", fontSize: "10.5px", letterSpacing: ".12em", textTransform: "uppercase", color: "var(--faint)" }}><span>MO-03 · ringPulse</span><span>∞</span></span>
          <span style={{ display: "grid", placeItems: "center", height: "130px", position: "relative" }}><span data-loop="" style={{ position: "absolute", width: "64px", height: "64px", border: "1px solid var(--accent)", borderRadius: "50%", opacity: "0", animation: "ringPulse 4.8s ease-out infinite" }}></span><span data-loop="" style={{ position: "absolute", width: "64px", height: "64px", border: "1px solid var(--accent)", borderRadius: "50%", opacity: "0", animation: "ringPulse 4.8s ease-out 2.4s infinite" }}></span><span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "var(--accent)" }}></span></span>
          <span style={{ display: "block", padding: "9px 16px", borderTop: "1px solid var(--bd2)", fontFamily: "'Space Mono',monospace", fontSize: "10px", letterSpacing: ".08em", color: "var(--faint)" }}>4.8s · ease-out · ×2 offset 2.4s</span>
        </div>
        <div style={{ border: "1px solid var(--bd)", borderRadius: "16px", background: "var(--surface)", overflow: "hidden" }}>
          <span style={{ display: "flex", justifyContent: "space-between", gap: "10px", padding: "12px 16px", borderBottom: "1px solid var(--bd2)", fontFamily: "'Space Mono',monospace", fontSize: "10.5px", letterSpacing: ".12em", textTransform: "uppercase", color: "var(--faint)" }}><span>MO-04 · glowPulse</span><span>∞</span></span>
          <span style={{ display: "grid", placeItems: "center", height: "130px" }}><span data-loop="" style={{ width: "84px", height: "84px", borderRadius: "50%", background: "radial-gradient(circle, var(--accent-soft), transparent 65%)", animation: "glowPulse 5.5s ease-in-out infinite" }}></span></span>
          <span style={{ display: "block", padding: "9px 16px", borderTop: "1px solid var(--bd2)", fontFamily: "'Space Mono',monospace", fontSize: "10px", letterSpacing: ".08em", color: "var(--faint)" }}>5.5s · scale 1→1.07 · opacity .55→1</span>
        </div>
        <div style={{ border: "1px solid var(--bd)", borderRadius: "16px", background: "var(--surface)", overflow: "hidden" }}>
          <span style={{ display: "flex", justifyContent: "space-between", gap: "10px", padding: "12px 16px", borderBottom: "1px solid var(--bd2)", fontFamily: "'Space Mono',monospace", fontSize: "10.5px", letterSpacing: ".12em", textTransform: "uppercase", color: "var(--faint)" }}><span>MO-05 · blink</span><span>∞</span></span>
          <span style={{ display: "grid", placeItems: "center", height: "130px" }}><span style={{ display: "inline-flex", alignItems: "center", gap: "10px", fontFamily: "'Space Mono',monospace", fontSize: "11.5px", letterSpacing: ".16em", textTransform: "uppercase", color: "var(--sub)" }}><span data-loop="" style={{ width: "7px", height: "7px", borderRadius: "50%", background: "var(--accent)", animation: "blink 2.4s ease-in-out infinite" }}></span>Live</span></span>
          <span style={{ display: "block", padding: "9px 16px", borderTop: "1px solid var(--bd2)", fontFamily: "'Space Mono',monospace", fontSize: "10px", letterSpacing: ".08em", color: "var(--faint)" }}>2.4s · opacity 1→.25</span>
        </div>
        <div style={{ border: "1px solid var(--bd)", borderRadius: "16px", background: "var(--surface)", overflow: "hidden" }}>
          <span style={{ display: "flex", justifyContent: "space-between", gap: "10px", padding: "12px 16px", borderBottom: "1px solid var(--bd2)", fontFamily: "'Space Mono',monospace", fontSize: "10.5px", letterSpacing: ".12em", textTransform: "uppercase", color: "var(--faint)" }}><span>MO-06 · starGlow</span><span>Ark · ∞</span></span>
          <span style={{ display: "grid", placeItems: "center", height: "130px", background: "#050E1D" }}><svg viewBox="0 0 200 200" data-loop="" style={{ width: "74px", height: "74px", transformBox: "fill-box", transformOrigin: "center", animation: "starGlow 5s ease-in-out infinite" }} aria-hidden="true"><polygon points="100,28 105,89 129,71 111,95 172,100 111,105 129,129 105,111 100,172 95,111 71,129 89,105 28,100 89,95 71,71 95,89" fill="rgba(232,192,116,0.7)"></polygon></svg></span>
          <span style={{ display: "block", padding: "9px 16px", borderTop: "1px solid var(--bd2)", fontFamily: "'Space Mono',monospace", fontSize: "10px", letterSpacing: ".08em", color: "var(--faint)" }}>5s · scale 1→1.14 · CTA decor</span>
        </div>
        <div style={{ border: "1px solid var(--bd)", borderRadius: "16px", background: "var(--surface)", overflow: "hidden" }}>
          <span style={{ display: "flex", justifyContent: "space-between", gap: "10px", padding: "12px 16px", borderBottom: "1px solid var(--bd2)", fontFamily: "'Space Mono',monospace", fontSize: "10.5px", letterSpacing: ".12em", textTransform: "uppercase", color: "var(--faint)" }}><span>MO-07 · marquee</span><span>∞</span></span>
          <span style={{ display: "grid", alignItems: "center", height: "130px", overflow: "hidden", WebkitMaskImage: "linear-gradient(90deg,transparent,#000 15%,#000 85%,transparent)", maskImage: "linear-gradient(90deg,transparent,#000 15%,#000 85%,transparent)" }}><span data-loop="" style={{ display: "flex", gap: "38px", width: "max-content", alignItems: "center", animation: "marquee 18s linear infinite", fontFamily: "'Space Grotesk',sans-serif", fontWeight: 600, fontSize: "17px", color: "var(--marq)" }}><span>Northwind</span><span>Halcyon</span><span>Atlas&nbsp;Bio</span><span>Vega</span><span>Northwind</span><span>Halcyon</span><span>Atlas&nbsp;Bio</span><span>Vega</span></span></span>
          <span style={{ display: "block", padding: "9px 16px", borderTop: "1px solid var(--bd2)", fontFamily: "'Space Mono',monospace", fontSize: "10px", letterSpacing: ".08em", color: "var(--faint)" }}>34s · linear · −50% loop</span>
        </div>
        <button onClick={ui.replayCount} style={{ textAlign: "left", cursor: "pointer", padding: "0", border: "1px solid var(--bd)", borderRadius: "16px", background: "var(--surface)", overflow: "hidden", fontFamily: "inherit" }}>
          <span style={{ display: "flex", justifyContent: "space-between", gap: "10px", padding: "12px 16px", borderBottom: "1px solid var(--bd2)", fontFamily: "'Space Mono',monospace", fontSize: "10.5px", letterSpacing: ".12em", textTransform: "uppercase", color: "var(--faint)" }}><span>MO-08 · countUp</span><span>↻</span></span>
          <span style={{ display: "grid", placeItems: "center", height: "130px" }}><span style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 600, fontSize: "2.8rem", letterSpacing: "-.04em", color: "var(--stat)" }}><span data-recount="99.9" data-dec="1">99.9</span>%</span></span>
          <span style={{ display: "block", padding: "9px 16px", borderTop: "1px solid var(--bd2)", fontFamily: "'Space Mono',monospace", fontSize: "10px", letterSpacing: ".08em", color: "var(--faint)" }}>1.3s · cubic ease-out · click ↻</span>
        </button>
      </div>
    </section>
  );
}
