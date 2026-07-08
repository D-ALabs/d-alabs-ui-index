"use client";

export default function Badges() {
  return (
    <section id="bdg" data-spy="bdg" data-screen-label="04 Badges" style={{ padding: "64px 0 30px", borderTop: "1px solid var(--bd2)", marginTop: "40px" }}>
      <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "16px", flexWrap: "wrap" }}>
        <div>
          <div style={{ fontFamily: "'Space Mono',monospace", fontSize: "12px", letterSpacing: ".2em", textTransform: "uppercase", color: "var(--accent)" }}><span style={{ opacity: ".5" }}>[</span>&nbsp; 04 — Badges &amp; meta &nbsp;<span style={{ opacity: ".5" }}>]</span></div>
          <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 600, fontSize: "clamp(1.7rem,3vw,2.4rem)", lineHeight: "1.08", letterSpacing: "-.025em", margin: "14px 0 0", color: "var(--ink)" }}>Small print, big system.</h2>
        </div>
        <span style={{ fontFamily: "'Space Mono',monospace", fontSize: "11.5px", letterSpacing: ".12em", color: "var(--faint)" }}>05 items</span>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "18px", marginTop: "34px" }}>
        <div style={{ border: "1px solid var(--bd)", borderRadius: "16px", background: "var(--surface)", overflow: "hidden" }}>
          <div style={{ display: "flex", justifyContent: "space-between", gap: "10px", padding: "12px 18px", borderBottom: "1px solid var(--bd2)", fontFamily: "'Space Mono',monospace", fontSize: "11px", letterSpacing: ".14em", textTransform: "uppercase", color: "var(--faint)" }}><span>BD-01 · Status badge</span><span>Live dot</span></div>
          <div style={{ padding: "36px 24px", display: "grid", placeItems: "center" }}>
            <span style={{ display: "inline-flex", alignItems: "center", gap: "10px", padding: "7px 15px 7px 12px", border: "1px solid var(--pill-bd)", borderRadius: "100px", background: "var(--surface2)", fontFamily: "'Space Mono',monospace", fontSize: "12px", letterSpacing: ".16em", textTransform: "uppercase", color: "var(--sub)" }}><span data-loop="" style={{ width: "7px", height: "7px", borderRadius: "50%", background: "var(--accent)", animation: "blink 2.4s ease-in-out infinite" }}></span>Applied&nbsp;AI&nbsp;Lab</span>
          </div>
        </div>
        <div style={{ border: "1px solid var(--bd)", borderRadius: "16px", background: "var(--surface)", overflow: "hidden" }}>
          <div style={{ display: "flex", justifyContent: "space-between", gap: "10px", padding: "12px 18px", borderBottom: "1px solid var(--bd2)", fontFamily: "'Space Mono',monospace", fontSize: "11px", letterSpacing: ".14em", textTransform: "uppercase", color: "var(--faint)" }}><span>BD-02 · Eyebrow</span><span>Section label</span></div>
          <div style={{ padding: "36px 24px", display: "flex", flexDirection: "column", gap: "12px", alignItems: "center" }}>
            <span style={{ fontFamily: "'Space Mono',monospace", fontSize: "12px", letterSpacing: ".2em", textTransform: "uppercase", color: "var(--accent)" }}><span style={{ opacity: ".5" }}>[</span>&nbsp; 01 — What we do &nbsp;<span style={{ opacity: ".5" }}>]</span></span>
            <span style={{ fontFamily: "'Space Mono',monospace", fontSize: "11.5px", letterSpacing: ".16em", textTransform: "uppercase", color: "var(--faint)" }}>01 / 04</span>
          </div>
        </div>
        <div style={{ border: "1px solid var(--bd)", borderRadius: "16px", background: "var(--surface)", overflow: "hidden" }}>
          <div style={{ display: "flex", justifyContent: "space-between", gap: "10px", padding: "12px 18px", borderBottom: "1px solid var(--bd2)", fontFamily: "'Space Mono',monospace", fontSize: "11px", letterSpacing: ".14em", textTransform: "uppercase", color: "var(--faint)" }}><span>BD-03 · Category pill</span><span>Cards</span></div>
          <div style={{ padding: "36px 24px", display: "flex", flexWrap: "wrap", gap: "10px", justifyContent: "center" }}>
            <span style={{ display: "inline-flex", padding: "5px 11px", borderRadius: "100px", border: "1px solid var(--pill-bd)", fontFamily: "'Space Mono',monospace", fontSize: "11px", letterSpacing: ".1em", textTransform: "uppercase", color: "var(--pill-tx)" }}>LLM · Fintech</span>
            <span style={{ display: "inline-flex", padding: "5px 11px", borderRadius: "100px", border: "1px solid var(--pill-bd)", fontFamily: "'Space Mono',monospace", fontSize: "11px", letterSpacing: ".1em", textTransform: "uppercase", color: "var(--pill-tx)" }}>RAG · Health</span>
            <span style={{ display: "inline-flex", padding: "5px 11px", borderRadius: "100px", border: "1px solid var(--pill-bd)", fontFamily: "'Space Mono',monospace", fontSize: "11px", letterSpacing: ".1em", textTransform: "uppercase", color: "var(--pill-tx)" }}>Early access</span>
          </div>
        </div>
        <div style={{ border: "1px solid var(--bd)", borderRadius: "16px", background: "var(--surface)", overflow: "hidden" }}>
          <div style={{ display: "flex", justifyContent: "space-between", gap: "10px", padding: "12px 18px", borderBottom: "1px solid var(--bd2)", fontFamily: "'Space Mono',monospace", fontSize: "11px", letterSpacing: ".14em", textTransform: "uppercase", color: "var(--faint)" }}><span>BD-04 · Tag chip</span><span>On panel</span></div>
          <div style={{ padding: "30px 24px", display: "flex", flexWrap: "wrap", gap: "9px", justifyContent: "center", background: "var(--panel)", borderTop: "1px solid var(--panel-bd)" }}>
            <span style={{ padding: "8px 14px", borderRadius: "100px", border: "1px solid var(--chip-bd)", background: "var(--chip-bg)", fontSize: "13.5px", color: "var(--chip-tx)", fontFamily: "'Space Mono',monospace", letterSpacing: ".02em" }}>Evals &amp; benchmarks</span>
            <span style={{ padding: "8px 14px", borderRadius: "100px", border: "1px solid var(--chip-bd)", background: "var(--chip-bg)", fontSize: "13.5px", color: "var(--chip-tx)", fontFamily: "'Space Mono',monospace", letterSpacing: ".02em" }}>Fine-tuning</span>
            <span style={{ padding: "8px 14px", borderRadius: "100px", border: "1px solid var(--chip-bd)", background: "var(--chip-bg)", fontSize: "13.5px", color: "var(--chip-tx)", fontFamily: "'Space Mono',monospace", letterSpacing: ".02em" }}>Guardrails</span>
          </div>
        </div>
        <div style={{ border: "1px solid var(--bd)", borderRadius: "16px", background: "var(--surface)", overflow: "hidden" }}>
          <div style={{ display: "flex", justifyContent: "space-between", gap: "10px", padding: "12px 18px", borderBottom: "1px solid var(--bd2)", fontFamily: "'Space Mono',monospace", fontSize: "11px", letterSpacing: ".14em", textTransform: "uppercase", color: "var(--faint)" }}><span>BD-05 · Meta lines</span><span>Slash divider</span></div>
          <div style={{ padding: "36px 24px", display: "flex", flexDirection: "column", gap: "14px", alignItems: "center" }}>
            <span style={{ display: "flex", gap: "22px", fontFamily: "'Space Mono',monospace", fontSize: "12px", letterSpacing: ".08em", textTransform: "uppercase", color: "var(--faint)" }}>Est. 2021<span style={{ color: "var(--bd-hov)" }}>/</span>Remote-first<span style={{ color: "var(--bd-hov)" }}>/</span>14 people</span>
            <span style={{ fontFamily: "'Space Mono',monospace", fontSize: "12px", color: "var(--faint)" }}>Jun 2026 · 6 min</span>
          </div>
        </div>
      </div>
    </section>
  );
}
