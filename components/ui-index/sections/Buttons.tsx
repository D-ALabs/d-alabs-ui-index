"use client";

export default function Buttons() {
  return (
    <section id="btn" data-spy="btn" data-screen-label="03 Buttons" style={{ padding: "64px 0 30px", borderTop: "1px solid var(--bd2)", marginTop: "40px" }}>
      <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "16px", flexWrap: "wrap" }}>
        <div>
          <div style={{ fontFamily: "'Space Mono',monospace", fontSize: "12px", letterSpacing: ".2em", textTransform: "uppercase", color: "var(--accent)" }}><span style={{ opacity: ".5" }}>[</span>&nbsp; 03 — Buttons &amp; links &nbsp;<span style={{ opacity: ".5" }}>]</span></div>
          <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 600, fontSize: "clamp(1.7rem,3vw,2.4rem)", lineHeight: "1.08", letterSpacing: "-.025em", margin: "14px 0 0", color: "var(--ink)" }}>Actions.</h2>
        </div>
        <span style={{ fontFamily: "'Space Mono',monospace", fontSize: "11.5px", letterSpacing: ".12em", color: "var(--faint)" }}>06 items</span>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "18px", marginTop: "34px" }}>
        <div style={{ border: "1px solid var(--bd)", borderRadius: "16px", background: "var(--surface)", overflow: "hidden" }}>
          <div style={{ display: "flex", justifyContent: "space-between", gap: "10px", padding: "12px 18px", borderBottom: "1px solid var(--bd2)", fontFamily: "'Space Mono',monospace", fontSize: "11px", letterSpacing: ".14em", textTransform: "uppercase", color: "var(--faint)" }}><span>BT-01 · Primary</span><span>Magnetic</span></div>
          <div style={{ padding: "38px 24px", display: "grid", placeItems: "center", backgroundImage: "linear-gradient(var(--grid) 1px,transparent 1px),linear-gradient(90deg,var(--grid) 1px,transparent 1px)", backgroundSize: "32px 32px" }}>
            <a href="#btn" data-magnetic="" style={{ display: "inline-flex", alignItems: "center", gap: "9px", padding: "15px 26px", borderRadius: "11px", background: "var(--accent)", color: "var(--accent-ink)", fontSize: "16px", fontWeight: 600, transition: "transform .35s cubic-bezier(.2,.9,.3,1.2), box-shadow .3s", boxShadow: "var(--sh-btn)" }}>Request a demo<span style={{ fontSize: "17px", lineHeight: "1" }}>→</span></a>
          </div>
          <div style={{ padding: "10px 18px", borderTop: "1px solid var(--bd2)", fontFamily: "'Space Mono',monospace", fontSize: "10.5px", letterSpacing: ".1em", color: "var(--faint)" }}>radius 11 · pad 15×26 · 600 · follows cursor</div>
        </div>
        <div style={{ border: "1px solid var(--bd)", borderRadius: "16px", background: "var(--surface)", overflow: "hidden" }}>
          <div style={{ display: "flex", justifyContent: "space-between", gap: "10px", padding: "12px 18px", borderBottom: "1px solid var(--bd2)", fontFamily: "'Space Mono',monospace", fontSize: "11px", letterSpacing: ".14em", textTransform: "uppercase", color: "var(--faint)" }}><span>BT-02 · Secondary</span><span>Outline</span></div>
          <div style={{ padding: "38px 24px", display: "grid", placeItems: "center", backgroundImage: "linear-gradient(var(--grid) 1px,transparent 1px),linear-gradient(90deg,var(--grid) 1px,transparent 1px)", backgroundSize: "32px 32px" }}>
            <a href="#btn" className="hov-accent" style={{ display: "inline-flex", alignItems: "center", gap: "9px", padding: "15px 24px", borderRadius: "11px", border: "1px solid var(--bd-hov)", color: "var(--ink)", fontSize: "16px", fontWeight: 600, transition: "border-color .25s, background-color .25s" }}>View our work</a>
          </div>
          <div style={{ padding: "10px 18px", borderTop: "1px solid var(--bd2)", fontFamily: "'Space Mono',monospace", fontSize: "10.5px", letterSpacing: ".1em", color: "var(--faint)" }}>1px line · fills accent-soft on hover</div>
        </div>
        <div style={{ border: "1px solid var(--bd)", borderRadius: "16px", background: "var(--surface)", overflow: "hidden" }}>
          <div style={{ display: "flex", justifyContent: "space-between", gap: "10px", padding: "12px 18px", borderBottom: "1px solid var(--bd2)", fontFamily: "'Space Mono',monospace", fontSize: "11px", letterSpacing: ".14em", textTransform: "uppercase", color: "var(--faint)" }}><span>BT-03 · Inverse</span><span>On deep</span></div>
          <div style={{ padding: "38px 24px", display: "flex", flexWrap: "wrap", gap: "12px", alignItems: "center", justifyContent: "center", background: "var(--deep)", backgroundImage: "linear-gradient(var(--grid-deep) 1px,transparent 1px),linear-gradient(90deg,var(--grid-deep) 1px,transparent 1px)", backgroundSize: "32px 32px" }}>
            <a href="#btn" style={{ display: "inline-flex", alignItems: "center", gap: "9px", padding: "14px 24px", borderRadius: "11px", background: "var(--inv-bg)", color: "var(--inv-tx)", fontSize: "15px", fontWeight: 600, boxShadow: "0 14px 34px -14px rgba(0,0,0,.6)" }}>Request a demo<span style={{ fontSize: "16px", lineHeight: "1" }}>→</span></a>
            <a href="#btn" className="hov-chip" style={{ display: "inline-flex", alignItems: "center", gap: "9px", padding: "14px 22px", borderRadius: "11px", border: "1px solid var(--chip-bd)", color: "var(--deep-ink)", fontSize: "15px", fontWeight: 600, transition: "border-color .25s, background-color .25s" }}>Join the waitlist</a>
          </div>
          <div style={{ padding: "10px 18px", borderTop: "1px solid var(--bd2)", fontFamily: "'Space Mono',monospace", fontSize: "10.5px", letterSpacing: ".1em", color: "var(--faint)" }}>inverse fill + ghost pair · CTA bands</div>
        </div>
        <div style={{ border: "1px solid var(--bd)", borderRadius: "16px", background: "var(--surface)", overflow: "hidden" }}>
          <div style={{ display: "flex", justifyContent: "space-between", gap: "10px", padding: "12px 18px", borderBottom: "1px solid var(--bd2)", fontFamily: "'Space Mono',monospace", fontSize: "11px", letterSpacing: ".14em", textTransform: "uppercase", color: "var(--faint)" }}><span>BT-04 · Compact</span><span>Nav CTA</span></div>
          <div style={{ padding: "38px 24px", display: "grid", placeItems: "center", backgroundImage: "linear-gradient(var(--grid) 1px,transparent 1px),linear-gradient(90deg,var(--grid) 1px,transparent 1px)", backgroundSize: "32px 32px" }}>
            <a href="#btn" style={{ display: "inline-flex", alignItems: "center", gap: "7px", padding: "10px 18px", borderRadius: "10px", background: "var(--accent)", color: "var(--accent-ink)", fontSize: "14px", fontWeight: 600, boxShadow: "var(--sh-btn)" }}>Request a demo<span style={{ fontSize: "15px", lineHeight: "1" }}>→</span></a>
          </div>
          <div style={{ padding: "10px 18px", borderTop: "1px solid var(--bd2)", fontFamily: "'Space Mono',monospace", fontSize: "10.5px", letterSpacing: ".1em", color: "var(--faint)" }}>radius 10 · pad 10×18 · 14px</div>
        </div>
        <div style={{ border: "1px solid var(--bd)", borderRadius: "16px", background: "var(--surface)", overflow: "hidden" }}>
          <div style={{ display: "flex", justifyContent: "space-between", gap: "10px", padding: "12px 18px", borderBottom: "1px solid var(--bd2)", fontFamily: "'Space Mono',monospace", fontSize: "11px", letterSpacing: ".14em", textTransform: "uppercase", color: "var(--faint)" }}><span>BT-05 · Text link</span><span>Arrow</span></div>
          <div style={{ padding: "38px 24px", display: "flex", flexDirection: "column", alignItems: "center", gap: "14px", backgroundImage: "linear-gradient(var(--grid) 1px,transparent 1px),linear-gradient(90deg,var(--grid) 1px,transparent 1px)", backgroundSize: "32px 32px" }}>
            <a href="#btn" style={{ fontSize: "14.5px", fontWeight: 600, color: "var(--accent)", display: "inline-flex", alignItems: "center", gap: "7px" }}>All notes <span>→</span></a>
            <a href="#btn" style={{ fontSize: "14px", fontWeight: 600, color: "var(--accent)", display: "inline-flex", alignItems: "center", gap: "7px" }}>Scope a sprint <span>→</span></a>
          </div>
          <div style={{ padding: "10px 18px", borderTop: "1px solid var(--bd2)", fontFamily: "'Space Mono',monospace", fontSize: "10.5px", letterSpacing: ".1em", color: "var(--faint)" }}>600 · accent · card footers</div>
        </div>
        <div style={{ border: "1px solid var(--bd)", borderRadius: "16px", background: "var(--surface)", overflow: "hidden" }}>
          <div style={{ display: "flex", justifyContent: "space-between", gap: "10px", padding: "12px 18px", borderBottom: "1px solid var(--bd2)", fontFamily: "'Space Mono',monospace", fontSize: "11px", letterSpacing: ".14em", textTransform: "uppercase", color: "var(--faint)" }}><span>BT-06 · Icon button</span><span>Burger / close</span></div>
          <div style={{ padding: "38px 24px", display: "flex", gap: "14px", alignItems: "center", justifyContent: "center", backgroundImage: "linear-gradient(var(--grid) 1px,transparent 1px),linear-gradient(90deg,var(--grid) 1px,transparent 1px)", backgroundSize: "32px 32px" }}>
            <span style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: "5px", width: "44px", height: "44px", alignItems: "center", border: "1px solid var(--bd)", borderRadius: "11px", background: "var(--surface2)" }}><span style={{ display: "block", width: "18px", height: "2px", borderRadius: "2px", background: "var(--ink)" }}></span><span style={{ display: "block", width: "18px", height: "2px", borderRadius: "2px", background: "var(--ink)" }}></span></span>
            <span style={{ display: "grid", placeItems: "center", width: "44px", height: "44px", border: "1px solid var(--bd)", borderRadius: "11px", background: "var(--surface)", fontSize: "22px", color: "var(--ink)" }}>×</span>
          </div>
          <div style={{ padding: "10px 18px", borderTop: "1px solid var(--bd2)", fontFamily: "'Space Mono',monospace", fontSize: "10.5px", letterSpacing: ".1em", color: "var(--faint)" }}>44×44 hit target · radius 11</div>
        </div>
      </div>
    </section>
  );
}
