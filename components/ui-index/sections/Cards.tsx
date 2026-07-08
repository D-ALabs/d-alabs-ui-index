"use client";

export default function Cards() {
  return (
    <section id="crd" data-spy="crd" data-screen-label="05 Cards" style={{ padding: "64px 0 30px", borderTop: "1px solid var(--bd2)", marginTop: "40px" }}>
      <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "16px", flexWrap: "wrap" }}>
        <div>
          <div style={{ fontFamily: "'Space Mono',monospace", fontSize: "12px", letterSpacing: ".2em", textTransform: "uppercase", color: "var(--accent)" }}><span style={{ opacity: ".5" }}>[</span>&nbsp; 05 — Cards &nbsp;<span style={{ opacity: ".5" }}>]</span></div>
          <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 600, fontSize: "clamp(1.7rem,3vw,2.4rem)", lineHeight: "1.08", letterSpacing: "-.025em", margin: "14px 0 0", color: "var(--ink)" }}>Five cards carry the whole site.</h2>
        </div>
        <span style={{ fontFamily: "'Space Mono',monospace", fontSize: "11.5px", letterSpacing: ".12em", color: "var(--faint)" }}>05 items</span>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "18px", marginTop: "34px", alignItems: "start" }}>
        <div>
          <div style={{ fontFamily: "'Space Mono',monospace", fontSize: "11px", letterSpacing: ".14em", textTransform: "uppercase", color: "var(--faint)", marginBottom: "10px" }}>CR-01 · Service / tier card</div>
          <div style={{ position: "relative", background: "var(--surface)", border: "1px solid var(--bd)", borderRadius: "16px", padding: "30px 28px 26px", transition: "transform .45s cubic-bezier(.16,1,.3,1), box-shadow .45s, border-color .45s" }} className="hov-lift">
            <div style={{ fontFamily: "'Space Mono',monospace", fontSize: "13px", color: "var(--faint)", letterSpacing: ".08em" }}>01</div>
            <h3 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 600, fontSize: "1.5rem", letterSpacing: "-.02em", margin: "16px 0 0", color: "var(--ink)" }}>Product studio</h3>
            <p style={{ margin: "12px 0 0", color: "var(--sub)", fontSize: "1.02rem", lineHeight: "1.6" }}>We design and build intelligent products end to end — discovery, prototype, and a production launch your users actually trust.</p>
            <div style={{ marginTop: "22px", fontSize: "14px", fontWeight: 600, color: "var(--accent)", display: "flex", alignItems: "center", gap: "7px" }}>Start a build <span>→</span></div>
          </div>
        </div>
        <div>
          <div style={{ fontFamily: "'Space Mono',monospace", fontSize: "11px", letterSpacing: ".14em", textTransform: "uppercase", color: "var(--faint)", marginBottom: "10px" }}>CR-02 · Metric card</div>
          <div style={{ background: "var(--surface)", border: "1px solid var(--bd)", borderRadius: "16px", padding: "30px 28px", transition: "transform .45s cubic-bezier(.16,1,.3,1), box-shadow .45s, border-color .45s" }} className="hov-lift">
            <div style={{ display: "inline-flex", padding: "5px 11px", borderRadius: "100px", border: "1px solid var(--pill-bd)", fontFamily: "'Space Mono',monospace", fontSize: "11px", letterSpacing: ".1em", textTransform: "uppercase", color: "var(--pill-tx)" }}>LLM · Fintech</div>
            <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 600, fontSize: "clamp(2.4rem,4vw,3.2rem)", letterSpacing: "-.04em", margin: "26px 0 0", color: "var(--stat)" }}>−64%</div>
            <div style={{ fontFamily: "'Space Mono',monospace", fontSize: "12px", letterSpacing: ".06em", color: "var(--faint)", marginTop: "4px" }}>support resolution time</div>
            <h3 style={{ fontWeight: 600, fontSize: "1.18rem", margin: "20px 0 0", color: "var(--ink2)", lineHeight: "1.4" }}>A support copilot that deflects the busywork</h3>
          </div>
        </div>
        <div>
          <div style={{ fontFamily: "'Space Mono',monospace", fontSize: "11px", letterSpacing: ".14em", textTransform: "uppercase", color: "var(--faint)", marginBottom: "10px" }}>CR-03 · Note card</div>
          <a href="#crd" style={{ display: "block", background: "var(--surface)", border: "1px solid var(--bd)", borderRadius: "16px", padding: "28px 26px", transition: "transform .45s cubic-bezier(.16,1,.3,1), box-shadow .45s, border-color .45s" }} className="hov-lift">
            <div style={{ fontFamily: "'Space Mono',monospace", fontSize: "11px", letterSpacing: ".12em", textTransform: "uppercase", color: "var(--accent)" }}>Evaluation</div>
            <h3 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 600, fontSize: "1.34rem", letterSpacing: "-.015em", margin: "18px 0 0", color: "var(--ink)", lineHeight: "1.25" }}>Evals are the product</h3>
            <p style={{ margin: "12px 0 0", color: "var(--sub)", fontSize: ".99rem", lineHeight: "1.55" }}>Why we write the measurement before we write the model — and what changes when you do.</p>
            <div style={{ marginTop: "22px", fontFamily: "'Space Mono',monospace", fontSize: "12px", color: "var(--faint)" }}>Jun 2026 · 6 min</div>
          </a>
        </div>
        <div>
          <div style={{ fontFamily: "'Space Mono',monospace", fontSize: "11px", letterSpacing: ".14em", textTransform: "uppercase", color: "var(--faint)", marginBottom: "10px" }}>CR-04 · Testimonial</div>
          <div style={{ background: "var(--surface)", border: "1px solid var(--bd)", borderRadius: "18px", padding: "32px 30px" }}>
            <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: "1.34rem", color: "var(--ink)", lineHeight: "1.4", letterSpacing: "-.01em" }}>“They told us where <em style={{ fontStyle: "normal", color: "var(--accent)", borderBottom: "2px solid var(--accent)" }}>not</em> to use AI. That honesty is why we trust everything they did build.”</div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginTop: "24px" }}>
              <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: "var(--av-bg)", border: "1px solid var(--av-bd)", color: "var(--av-tx)", display: "grid", placeItems: "center", fontFamily: "'Space Grotesk',sans-serif", fontWeight: 600, fontSize: "15px" }}>MK</div>
              <div><div style={{ fontWeight: 600, color: "var(--ink)", fontSize: "15px" }}>Head of Product</div><div style={{ fontSize: "13.5px", color: "var(--faint)", fontFamily: "'Space Mono',monospace" }}>Health technology</div></div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ marginTop: "18px" }}>
        <div style={{ fontFamily: "'Space Mono',monospace", fontSize: "11px", letterSpacing: ".14em", textTransform: "uppercase", color: "var(--faint)", marginBottom: "10px" }}>CR-05 · Team panel</div>
        <div style={{ background: "var(--surface)", border: "1px solid var(--bd)", borderRadius: "20px", padding: "32px 30px", display: "flex", flexWrap: "wrap", gap: "26px", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ fontFamily: "'Space Mono',monospace", fontSize: "11.5px", letterSpacing: ".16em", textTransform: "uppercase", color: "var(--faint)" }}>The people you’ll work with</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "14px" }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "9px", width: "72px" }}><div style={{ width: "58px", height: "58px", borderRadius: "50%", background: "var(--av-bg)", border: "1px solid var(--av-bd)", color: "var(--av-tx)", display: "grid", placeItems: "center", fontFamily: "'Space Grotesk',sans-serif", fontWeight: 600, fontSize: "19px" }}>AR</div><div style={{ fontSize: "11.5px", color: "var(--faint)", textAlign: "center", fontFamily: "'Space Mono',monospace" }}>Research</div></div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "9px", width: "72px" }}><div style={{ width: "58px", height: "58px", borderRadius: "50%", background: "var(--av-bg)", border: "1px solid var(--av-bd)", color: "var(--av-tx)", display: "grid", placeItems: "center", fontFamily: "'Space Grotesk',sans-serif", fontWeight: 600, fontSize: "19px" }}>JL</div><div style={{ fontSize: "11.5px", color: "var(--faint)", textAlign: "center", fontFamily: "'Space Mono',monospace" }}>ML eng</div></div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "9px", width: "72px" }}><div style={{ width: "58px", height: "58px", borderRadius: "50%", background: "var(--av-bg)", border: "1px solid var(--av-bd)", color: "var(--av-tx)", display: "grid", placeItems: "center", fontFamily: "'Space Grotesk',sans-serif", fontWeight: 600, fontSize: "19px" }}>MK</div><div style={{ fontSize: "11.5px", color: "var(--faint)", textAlign: "center", fontFamily: "'Space Mono',monospace" }}>Design</div></div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "9px", width: "72px" }}><div style={{ width: "58px", height: "58px", borderRadius: "50%", background: "var(--av-bg)", border: "1px solid var(--av-bd)", color: "var(--av-tx)", display: "grid", placeItems: "center", fontFamily: "'Space Grotesk',sans-serif", fontWeight: 600, fontSize: "19px" }}>SP</div><div style={{ fontSize: "11.5px", color: "var(--faint)", textAlign: "center", fontFamily: "'Space Mono',monospace" }}>Product</div></div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "9px", width: "72px" }}><div style={{ width: "58px", height: "58px", borderRadius: "50%", background: "var(--av-bg)", border: "1px solid var(--av-bd)", color: "var(--av-tx)", display: "grid", placeItems: "center", fontFamily: "'Space Grotesk',sans-serif", fontWeight: 600, fontSize: "19px" }}>TN</div><div style={{ fontSize: "11.5px", color: "var(--faint)", textAlign: "center", fontFamily: "'Space Mono',monospace" }}>Eng</div></div>
          </div>
        </div>
      </div>
    </section>
  );
}
