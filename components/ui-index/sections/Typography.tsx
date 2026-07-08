"use client";

export default function Typography() {
  return (
    <section id="typ" data-spy="typ" data-screen-label="02 Typography" style={{ padding: "64px 0 30px", borderTop: "1px solid var(--bd2)", marginTop: "40px" }}>
      <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "16px", flexWrap: "wrap" }}>
        <div>
          <div style={{ fontFamily: "'Space Mono',monospace", fontSize: "12px", letterSpacing: ".2em", textTransform: "uppercase", color: "var(--accent)" }}><span style={{ opacity: ".5" }}>[</span>&nbsp; 02 — Typography &nbsp;<span style={{ opacity: ".5" }}>]</span></div>
          <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 600, fontSize: "clamp(1.7rem,3vw,2.4rem)", lineHeight: 1.08, letterSpacing: "-.025em", margin: "14px 0 0", color: "var(--ink)" }}>Three voices, one bench.</h2>
        </div>
        <span style={{ fontFamily: "'Space Mono',monospace", fontSize: "11.5px", letterSpacing: ".12em", color: "var(--faint)" }}>06 items</span>
      </div>

      <div style={{ border: "1px solid var(--bd)", borderRadius: "16px", background: "var(--surface)", overflow: "hidden", marginTop: "34px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "minmax(150px,210px) 1fr", gap: "20px", padding: "28px 26px", borderBottom: "1px solid var(--bd2)", alignItems: "center" }}>
          <div style={{ fontFamily: "'Space Mono',monospace", fontSize: "10.5px", letterSpacing: ".1em", lineHeight: 2, color: "var(--faint)", textTransform: "uppercase" }}>T-01 · Display<br /><span style={{ color: "var(--sub)" }}>Space Grotesk 600</span><br />3.8rem · −.03em · 1.03</div>
          <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 600, fontSize: "clamp(1.9rem,3.6vw,3.2rem)", lineHeight: 1.03, letterSpacing: "-.03em", color: "var(--ink)", overflowWrap: "break-word" }}>Frontier AI, engineered to ship.</div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "minmax(150px,210px) 1fr", gap: "20px", padding: "28px 26px", borderBottom: "1px solid var(--bd2)", alignItems: "center" }}>
          <div style={{ fontFamily: "'Space Mono',monospace", fontSize: "10.5px", letterSpacing: ".1em", lineHeight: 2, color: "var(--faint)", textTransform: "uppercase" }}>T-02 · Section<br /><span style={{ color: "var(--sub)" }}>Space Grotesk 600</span><br />3rem · −.025em · 1.08</div>
          <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 600, fontSize: "clamp(1.5rem,2.6vw,2.3rem)", lineHeight: 1.08, letterSpacing: "-.025em", color: "var(--ink)" }}>Three ways to put a lab to work.</div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "minmax(150px,210px) 1fr", gap: "20px", padding: "28px 26px", borderBottom: "1px solid var(--bd2)", alignItems: "center" }}>
          <div style={{ fontFamily: "'Space Mono',monospace", fontSize: "10.5px", letterSpacing: ".1em", lineHeight: 2, color: "var(--faint)", textTransform: "uppercase" }}>T-03 · Card title<br /><span style={{ color: "var(--sub)" }}>Space Grotesk 600</span><br />1.5rem · −.02em</div>
          <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 600, fontSize: "1.5rem", letterSpacing: "-.02em", color: "var(--ink)" }}>Production engineering</div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "minmax(150px,210px) 1fr", gap: "20px", padding: "28px 26px", borderBottom: "1px solid var(--bd2)", alignItems: "center" }}>
          <div style={{ fontFamily: "'Space Mono',monospace", fontSize: "10.5px", letterSpacing: ".1em", lineHeight: 2, color: "var(--faint)", textTransform: "uppercase" }}>T-04 · Body<br /><span style={{ color: "var(--sub)" }}>Hanken Grotesk 400</span><br />17px · 1.65</div>
          <p style={{ fontSize: "17px", lineHeight: 1.65, color: "var(--sub)", maxWidth: "56ch" }}>We design, build, and ship intelligent software — from the first hypothesis to production at scale. Measured by what reaches production, not what gets demoed.</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "minmax(150px,210px) 1fr", gap: "20px", padding: "28px 26px", borderBottom: "1px solid var(--bd2)", alignItems: "center" }}>
          <div style={{ fontFamily: "'Space Mono',monospace", fontSize: "10.5px", letterSpacing: ".1em", lineHeight: 2, color: "var(--faint)", textTransform: "uppercase" }}>T-05 · Mono label<br /><span style={{ color: "var(--sub)" }}>Space Mono 400</span><br />12px · .2em · caps</div>
          <div style={{ fontFamily: "'Space Mono',monospace", fontSize: "12px", letterSpacing: ".2em", textTransform: "uppercase", color: "var(--accent)" }}><span style={{ opacity: ".5" }}>[</span>&nbsp; 04 — How we work &nbsp;<span style={{ opacity: ".5" }}>]</span></div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "minmax(150px,210px) 1fr", gap: "20px", padding: "28px 26px", alignItems: "center" }}>
          <div style={{ fontFamily: "'Space Mono',monospace", fontSize: "10.5px", letterSpacing: ".1em", lineHeight: 2, color: "var(--faint)", textTransform: "uppercase" }}>T-06 · Stat numeral<br /><span style={{ color: "var(--sub)" }}>Space Grotesk 600</span><br />3.4rem · −.04em</div>
          <div style={{ display: "flex", alignItems: "baseline", gap: "22px", flexWrap: "wrap" }}>
            <span style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 600, fontSize: "clamp(2.2rem,4vw,3.2rem)", letterSpacing: "-.04em", color: "var(--stat)" }}>−64%</span>
            <span style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 600, fontSize: "clamp(2.2rem,4vw,3.2rem)", letterSpacing: "-.04em", color: "var(--stat)" }}>9 wks</span>
            <span style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 600, fontSize: "clamp(2.2rem,4vw,3.2rem)", letterSpacing: "-.04em", color: "var(--stat)" }}>40ms</span>
          </div>
        </div>
      </div>
    </section>
  );
}
