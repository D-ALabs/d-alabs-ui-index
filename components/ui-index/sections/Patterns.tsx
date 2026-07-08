/* eslint-disable @next/next/no-img-element */
"use client";

export default function Patterns() {
  return (
    <section id="pat" data-spy="pat" data-screen-label="09 Patterns" style={{ padding: "64px 0 0", borderTop: "1px solid var(--bd2)", marginTop: "40px" }}>
      <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "16px", flexWrap: "wrap" }}>
        <div>
          <div style={{ fontFamily: "'Space Mono',monospace", fontSize: "12px", letterSpacing: ".2em", textTransform: "uppercase", color: "var(--accent)" }}><span style={{ opacity: .5 }}>[</span>&nbsp; 12 — Patterns &nbsp;<span style={{ opacity: .5 }}>]</span></div>
          <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 600, fontSize: "clamp(1.7rem,3vw,2.4rem)", lineHeight: 1.08, letterSpacing: "-.025em", margin: "14px 0 0", color: "var(--ink)" }}>Full sections, ready to lift.</h2>
        </div>
        <span style={{ fontFamily: "'Space Mono',monospace", fontSize: "11.5px", letterSpacing: ".12em", color: "var(--faint)" }}>04 items</span>
      </div>

      <div style={{ marginTop: "34px", display: "flex", flexDirection: "column", gap: "18px" }}>
        <div style={{ border: "1px solid var(--bd)", borderRadius: "16px", background: "var(--surface)", overflow: "hidden" }}>
          <div style={{ display: "flex", justifyContent: "space-between", gap: "10px", padding: "12px 18px", borderBottom: "1px solid var(--bd2)", fontFamily: "'Space Mono',monospace", fontSize: "11px", letterSpacing: ".14em", textTransform: "uppercase", color: "var(--faint)" }}><span>PT-01 · Hero orbit</span><span>Signature visual</span></div>
          <div style={{ padding: "40px 24px", display: "grid", placeItems: "center", backgroundColor: "var(--orbit-bg)", backgroundImage: "linear-gradient(var(--orbit-grid) 1px,transparent 1px),linear-gradient(90deg,var(--orbit-grid) 1px,transparent 1px)", backgroundSize: "40px 40px", transition: "background-color .45s ease" }}>
            <div style={{ position: "relative", width: "min(300px,72vw)", aspectRatio: "0.96 / 1", display: "grid", placeItems: "center" }}>
              <div data-loop="" style={{ position: "absolute", width: "150%", height: "150%", borderRadius: "50%", background: "radial-gradient(circle at 50% 48%, var(--orbit-soft), transparent 62%)", animation: "glowPulse 5.5s ease-in-out infinite" }}></div>
              <svg viewBox="0 0 400 400" style={{ position: "absolute", width: "136%", height: "136%" }} aria-hidden="true"><circle cx="200" cy="200" r="178" fill="none" stroke="var(--orbit-ink)" strokeOpacity=".09" strokeWidth="1"></circle><circle cx="200" cy="200" r="130" fill="none" stroke="var(--orbit-ink)" strokeOpacity=".06" strokeWidth="1" strokeDasharray="2 8"></circle></svg>
              <div data-loop="" style={{ position: "absolute", width: "64%", aspectRatio: "1", border: "1px solid var(--orbit-accent)", borderRadius: "50%", opacity: 0, animation: "ringPulse 4.8s ease-out infinite" }}></div>
              <div data-loop="" style={{ position: "absolute", width: "64%", aspectRatio: "1", border: "1px solid var(--orbit-accent)", borderRadius: "50%", opacity: 0, animation: "ringPulse 4.8s ease-out 2.4s infinite" }}></div>
              <div data-loop="" style={{ position: "absolute", top: "8%", left: "6%", width: "9px", height: "9px", borderRadius: "50%", background: "var(--orbit-accent)", opacity: .4, animation: "floatY 6s ease-in-out infinite" }}></div>
              <div data-loop="" style={{ position: "absolute", top: "16%", right: "4%", width: "6px", height: "6px", borderRadius: "50%", background: "var(--orbit-accent)", opacity: .3, animation: "floatY2 7.5s ease-in-out infinite" }}></div>
              <div data-loop="" style={{ position: "absolute", bottom: "14%", left: "3%", width: "5px", height: "5px", borderRadius: "50%", background: "var(--orbit-accent)", opacity: .3, animation: "floatY2 8s ease-in-out .6s infinite" }}></div>
              <div data-loop="" style={{ position: "absolute", bottom: "9%", right: "5%", width: "8px", height: "8px", borderRadius: "50%", background: "var(--orbit-accent)", opacity: .34, animation: "floatY 7s ease-in-out 1.2s infinite" }}></div>
              <div data-loop="" style={{ position: "relative", width: "76%", animation: "floatBob 5.5s ease-in-out infinite" }}>
                <img src="/assets/flask.png" alt="" aria-hidden="true" style={{ width: "100%", height: "auto", display: "var(--show-fn)", filter: "var(--flask-fx) drop-shadow(0 28px 44px rgba(22,32,46,.26))" }} /><img src="/assets/flask-gold.png" alt="" aria-hidden="true" style={{ width: "100%", height: "auto", display: "var(--show-fg)", filter: "drop-shadow(0 28px 44px rgba(0,0,0,.5))" }} />
                <svg viewBox="0 0 970 1033" preserveAspectRatio="xMidYMid meet" aria-hidden="true" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }}>
                  <defs><clipPath id="dalLiquid2"><polygon points="307,596 663,596 701,672 727,723 777,827 812,899 780,946 210,946 158,899 193,827 243,723 269,672"></polygon></clipPath></defs>
                  <g clipPath="url(#dalLiquid2)">
                    <path fill="var(--liquid)" d="M-260,632 q60,-20 120,0 t120,0 t120,0 t120,0 t120,0 t120,0 t120,0 t120,0 t120,0 t120,0 t120,0 t120,0 t120,0 L1300,1140 L-260,1140 Z"><animateTransform attributeName="transform" type="translate" from="0 0" to="-240 0" dur="7s" repeatCount="indefinite" /></path>
                    <path fill="var(--liquid)" opacity="0.45" d="M-260,640 q60,18 120,0 t120,0 t120,0 t120,0 t120,0 t120,0 t120,0 t120,0 t120,0 t120,0 t120,0 t120,0 t120,0 L1300,1140 L-260,1140 Z"><animateTransform attributeName="transform" type="translate" from="-240 0" to="0 0" dur="5.5s" repeatCount="indefinite" /></path>
                    <circle cx="424" cy="880" r="11" fill="var(--bubble)"><animate attributeName="cy" values="905;694" dur="3.4s" repeatCount="indefinite" /><animate attributeName="opacity" values="0;0.85;0.85;0" dur="3.4s" repeatCount="indefinite" /></circle>
                    <circle cx="548" cy="900" r="8" fill="var(--bubble)"><animate attributeName="cy" values="915;706" dur="4.2s" begin="0.8s" repeatCount="indefinite" /><animate attributeName="opacity" values="0;0.8;0.8;0" dur="4.2s" begin="0.8s" repeatCount="indefinite" /></circle>
                    <circle cx="476" cy="860" r="6" fill="var(--bubble)"><animate attributeName="cy" values="884;700" dur="3.6s" begin="1.5s" repeatCount="indefinite" /><animate attributeName="opacity" values="0;0.8;0.8;0" dur="3.6s" begin="1.5s" repeatCount="indefinite" /></circle>
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div style={{ border: "1px solid var(--bd)", borderRadius: "16px", background: "var(--surface)", overflow: "hidden" }}>
          <div style={{ display: "flex", justifyContent: "space-between", gap: "10px", padding: "12px 18px", borderBottom: "1px solid var(--bd2)", fontFamily: "'Space Mono',monospace", fontSize: "11px", letterSpacing: ".14em", textTransform: "uppercase", color: "var(--faint)" }}><span>PT-02 · Process strip</span><span>Bordered columns</span></div>
          <div style={{ padding: "26px 24px 30px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(170px,1fr))", gap: 0, borderTop: "1px solid var(--bd)" }}>
              <div style={{ padding: "22px 18px 6px 0", borderRight: "1px solid var(--bd)" }}><div style={{ fontFamily: "'Space Mono',monospace", fontSize: "13px", color: "var(--accent)", letterSpacing: ".1em" }}>01</div><h3 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 600, fontSize: "1.18rem", margin: "12px 0 0", color: "var(--ink)" }}>Hypothesize</h3><p style={{ margin: "8px 0 0", color: "var(--sub)", fontSize: ".93rem", lineHeight: 1.5 }}>Frame the problem as a testable bet.</p></div>
              <div style={{ padding: "22px 18px 6px", borderRight: "1px solid var(--bd)" }}><div style={{ fontFamily: "'Space Mono',monospace", fontSize: "13px", color: "var(--accent)", letterSpacing: ".1em" }}>02</div><h3 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 600, fontSize: "1.18rem", margin: "12px 0 0", color: "var(--ink)" }}>Prototype</h3><p style={{ margin: "8px 0 0", color: "var(--sub)", fontSize: ".93rem", lineHeight: 1.5 }}>A working proof in weeks, not quarters.</p></div>
              <div style={{ padding: "22px 18px 6px", borderRight: "1px solid var(--bd)" }}><div style={{ fontFamily: "'Space Mono',monospace", fontSize: "13px", color: "var(--accent)", letterSpacing: ".1em" }}>03</div><h3 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 600, fontSize: "1.18rem", margin: "12px 0 0", color: "var(--ink)" }}>Evaluate</h3><p style={{ margin: "8px 0 0", color: "var(--sub)", fontSize: ".93rem", lineHeight: 1.5 }}>Measure against honest baselines.</p></div>
              <div style={{ padding: "22px 0 6px 18px" }}><div style={{ fontFamily: "'Space Mono',monospace", fontSize: "13px", color: "var(--accent)", letterSpacing: ".1em" }}>04</div><h3 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 600, fontSize: "1.18rem", margin: "12px 0 0", color: "var(--ink)" }}>Ship</h3><p style={{ margin: "8px 0 0", color: "var(--sub)", fontSize: ".93rem", lineHeight: 1.5 }}>Deploy with observability and guardrails.</p></div>
            </div>
          </div>
        </div>

        <div style={{ border: "1px solid var(--bd)", borderRadius: "16px", background: "var(--surface)", overflow: "hidden" }}>
          <div style={{ display: "flex", justifyContent: "space-between", gap: "10px", padding: "12px 18px", borderBottom: "1px solid var(--bd2)", fontFamily: "'Space Mono',monospace", fontSize: "11px", letterSpacing: ".14em", textTransform: "uppercase", color: "var(--faint)" }}><span>PT-03 · Stats band</span><span>Count-up on scroll</span></div>
          <div style={{ position: "relative", overflow: "hidden", background: "var(--deep)", color: "var(--deep-ink)", padding: "44px clamp(20px,4vw,44px)" }}>
            <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(var(--grid-deep) 1px,transparent 1px),linear-gradient(90deg,var(--grid-deep) 1px,transparent 1px)", backgroundSize: "52px 52px", WebkitMaskImage: "radial-gradient(ellipse 70% 120% at 50% 50%,#000,transparent 75%)", maskImage: "radial-gradient(ellipse 70% 120% at 50% 50%,#000,transparent 75%)" }}></div>
            <div style={{ position: "relative", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(150px,1fr))", gap: "28px 20px" }}>
              <div><div style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 600, fontSize: "clamp(2rem,3.4vw,2.8rem)", letterSpacing: "-.03em", lineHeight: 1 }}><span data-count="40" data-dec="0">40</span>+</div><div style={{ fontFamily: "'Space Mono',monospace", fontSize: "11.5px", letterSpacing: ".06em", color: "var(--deep-faint)", marginTop: "10px", textTransform: "uppercase" }}>models in production</div></div>
              <div><div style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 600, fontSize: "clamp(2rem,3.4vw,2.8rem)", letterSpacing: "-.03em", lineHeight: 1 }}><span data-count="9" data-dec="0">9</span> wk</div><div style={{ fontFamily: "'Space Mono',monospace", fontSize: "11.5px", letterSpacing: ".06em", color: "var(--deep-faint)", marginTop: "10px", textTransform: "uppercase" }}>median to prototype</div></div>
              <div><div style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 600, fontSize: "clamp(2rem,3.4vw,2.8rem)", letterSpacing: "-.03em", lineHeight: 1 }}><span data-count="99.9" data-dec="1">99.9</span>%</div><div style={{ fontFamily: "'Space Mono',monospace", fontSize: "11.5px", letterSpacing: ".06em", color: "var(--deep-faint)", marginTop: "10px", textTransform: "uppercase" }}>eval-gated releases</div></div>
              <div><div style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 600, fontSize: "clamp(2rem,3.4vw,2.8rem)", letterSpacing: "-.03em", lineHeight: 1 }}><span data-count="12" data-dec="0">12</span>M</div><div style={{ fontFamily: "'Space Mono',monospace", fontSize: "11.5px", letterSpacing: ".06em", color: "var(--deep-faint)", marginTop: "10px", textTransform: "uppercase" }}>inferences / day</div></div>
            </div>
          </div>
        </div>

        <div style={{ border: "1px solid var(--bd)", borderRadius: "16px", background: "var(--surface)", overflow: "hidden" }}>
          <div style={{ display: "flex", justifyContent: "space-between", gap: "10px", padding: "12px 18px", borderBottom: "1px solid var(--bd2)", fontFamily: "'Space Mono',monospace", fontSize: "11px", letterSpacing: ".14em", textTransform: "uppercase", color: "var(--faint)" }}><span>PT-04 · CTA band</span><span>Closer</span></div>
          <div style={{ position: "relative", overflow: "hidden", background: "var(--deep)", color: "var(--deep-ink)", padding: "64px clamp(20px,4vw,44px)", textAlign: "center" }}>
            <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(var(--grid-deep) 1px,transparent 1px),linear-gradient(90deg,var(--grid-deep) 1px,transparent 1px)", backgroundSize: "48px 48px", WebkitMaskImage: "radial-gradient(ellipse 70% 90% at 50% 30%,#000,transparent 72%)", maskImage: "radial-gradient(ellipse 70% 90% at 50% 30%,#000,transparent 72%)" }}></div>
            <div data-loop="" style={{ position: "absolute", top: "50%", right: "-40px", transform: "translateY(-50%)", width: "220px", height: "220px", opacity: .5, animation: "floatBob 6s ease-in-out infinite" }}><img src="/assets/flask.png" alt="" aria-hidden="true" style={{ height: "100%", width: "auto", display: "block", filter: "brightness(0) invert(1) opacity(.14)" }} /></div>
            <div style={{ position: "relative" }}>
              <div style={{ fontFamily: "'Space Mono',monospace", fontSize: "12px", letterSpacing: ".18em", textTransform: "uppercase", color: "var(--deep-faint)" }}><span style={{ opacity: .6 }}>[</span>&nbsp; Start an experiment &nbsp;<span style={{ opacity: .6 }}>]</span></div>
              <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 600, fontSize: "clamp(1.8rem,3.6vw,2.9rem)", lineHeight: 1.04, letterSpacing: "-.03em", margin: "18px auto 0", maxWidth: "18ch" }}>Bring us your hardest problem.</h2>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "13px", justifyContent: "center", marginTop: "30px" }}>
                <a href="#pat" data-magnetic="" style={{ display: "inline-flex", alignItems: "center", gap: "9px", padding: "15px 26px", borderRadius: "11px", background: "var(--inv-bg)", color: "var(--inv-tx)", fontSize: "15.5px", fontWeight: 600, transition: "transform .35s cubic-bezier(.2,.9,.3,1.2), box-shadow .3s", boxShadow: "0 14px 34px -14px rgba(0,0,0,.6)" }}>Request a demo<span style={{ fontSize: "16px", lineHeight: 1 }}>→</span></a>
                <a href="#pat" className="hov-chip" style={{ display: "inline-flex", alignItems: "center", gap: "9px", padding: "15px 24px", borderRadius: "11px", border: "1px solid var(--chip-bd)", color: "var(--deep-ink)", fontSize: "15.5px", fontWeight: 600, transition: "border-color .25s, background-color .25s" }}>Join the waitlist</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
