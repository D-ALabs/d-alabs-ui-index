"use client";

import { useUI } from "../context";

export default function Interactive() {
  const ui = useUI();
  return (
    <section id="int" data-spy="int" data-screen-label="07 Interactive" style={{ padding: "64px 0 30px", borderTop: "1px solid var(--bd2)", marginTop: "40px" }}>
      <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "16px", flexWrap: "wrap" }}>
        <div>
          <div style={{ fontFamily: "'Space Mono',monospace", fontSize: "12px", letterSpacing: ".2em", textTransform: "uppercase", color: "var(--accent)" }}><span style={{ opacity: ".5" }}>[</span>&nbsp; 10 — Interactive &nbsp;<span style={{ opacity: ".5" }}>]</span></div>
          <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 600, fontSize: "clamp(1.7rem,3vw,2.4rem)", lineHeight: 1.08, letterSpacing: "-.025em", margin: "14px 0 0", color: "var(--ink)" }}>Working parts. Try them.</h2>
        </div>
        <span style={{ fontFamily: "'Space Mono',monospace", fontSize: "11.5px", letterSpacing: ".12em", color: "var(--faint)" }}>03 items</span>
      </div>

      <div style={{ border: "1px solid var(--bd)", borderRadius: "16px", background: "var(--surface)", overflow: "hidden", marginTop: "34px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", gap: "10px", padding: "12px 18px", borderBottom: "1px solid var(--bd2)", fontFamily: "'Space Mono',monospace", fontSize: "11px", letterSpacing: ".14em", textTransform: "uppercase", color: "var(--faint)" }}><span>IN-01 · Capability tabs</span><span>Live</span></div>
        <div style={{ padding: "24px", display: "grid", gridTemplateColumns: "minmax(200px,0.85fr) 1.4fr", gap: "16px", alignItems: "start" }} data-cap-grid="">
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {ui.capList.map((tab, i) => (
              <button key={i} onClick={tab.on} style={{ display: "flex", alignItems: "center", gap: "13px", width: "100%", textAlign: "left", padding: "15px 17px", borderRadius: "13px", border: `1px solid ${tab.bd}`, background: tab.bg, color: tab.col, fontFamily: "'Space Grotesk',sans-serif", fontWeight: 600, fontSize: "15.5px", cursor: "pointer", transition: "all .3s" }}>
                <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: tab.dot, flex: "0 0 auto", transition: "background .3s" }}></span>{tab.name}
              </button>
            ))}
          </div>
          <div style={{ background: "var(--panel)", border: "1px solid var(--panel-bd)", color: "var(--deep-ink)", borderRadius: "18px", padding: "clamp(24px,3vw,38px)", minHeight: "280px", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(var(--grid-deep) 1px,transparent 1px),linear-gradient(90deg,var(--grid-deep) 1px,transparent 1px)", backgroundSize: "40px 40px", WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 80% 10%,#000,transparent 70%)", maskImage: "radial-gradient(ellipse 80% 80% at 80% 10%,#000,transparent 70%)" }}></div>
            <div style={{ position: "relative" }}>
              <div style={{ fontFamily: "'Space Mono',monospace", fontSize: "11.5px", letterSpacing: ".16em", textTransform: "uppercase", color: "var(--deep-faint)" }}>{ui.capIndexLabel}</div>
              <h3 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 600, fontSize: "clamp(1.4rem,2.2vw,1.9rem)", letterSpacing: "-.02em", margin: "14px 0 0" }}>{ui.capTitle}</h3>
              <p style={{ margin: "14px 0 0", color: "var(--deep-sub)", fontSize: "1.02rem", lineHeight: 1.62, maxWidth: "46ch" }}>{ui.capDesc}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "9px", marginTop: "22px" }}>
                {ui.capTags.map((t, i) => (
                  <span key={i} style={{ padding: "8px 14px", borderRadius: "100px", border: "1px solid var(--chip-bd)", background: "var(--chip-bg)", fontSize: "13px", color: "var(--chip-tx)", fontFamily: "'Space Mono',monospace", letterSpacing: ".02em" }}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "18px", marginTop: "18px" }}>
        <div style={{ border: "1px solid var(--bd)", borderRadius: "16px", background: "var(--surface)", overflow: "hidden" }}>
          <div style={{ display: "flex", justifyContent: "space-between", gap: "10px", padding: "12px 18px", borderBottom: "1px solid var(--bd2)", fontFamily: "'Space Mono',monospace", fontSize: "11px", letterSpacing: ".14em", textTransform: "uppercase", color: "var(--faint)" }}><span>IN-02 · Waitlist form</span><span>Live</span></div>
          <div style={{ padding: "30px 24px", background: "var(--deep2)", borderTop: "1px solid var(--panel-bd)" }}>
            <form onSubmit={ui.joinWaitlist} style={{ maxWidth: "380px", margin: "0 auto" }}>
              {ui.joined && (
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "9px", padding: "14px 18px", borderRadius: "11px", background: "var(--chip-bg)", border: "1px solid var(--chip-bd)", color: "var(--deep-ink)", fontSize: "15px", fontWeight: 500 }}>✓&nbsp; You’re on the list.<button type="button" onClick={ui.resetWaitlist} style={{ border: "none", background: "none", cursor: "pointer", fontFamily: "'Space Mono',monospace", fontSize: "11px", letterSpacing: ".12em", color: "var(--deep-faint)", textTransform: "uppercase" }}>reset</button></div>
              )}
              {ui.notJoined && (
                <div style={{ display: "flex", gap: "8px" }}>
                  <input type="email" required placeholder="you@company.com" style={{ flex: 1, minWidth: 0, padding: "13px 17px", borderRadius: "11px", border: "1px solid var(--input-bd)", background: "rgba(255,255,255,.03)", color: "var(--deep-ink)", fontSize: "15px", outline: "none" }} />
                  <button type="submit" style={{ padding: "13px 20px", borderRadius: "11px", border: "none", background: "var(--accent)", color: "var(--accent-ink)", fontSize: "14.5px", fontWeight: 600, cursor: "pointer", whiteSpace: "nowrap" }}>Join</button>
                </div>
              )}
            </form>
          </div>
          <div style={{ padding: "10px 18px", borderTop: "1px solid var(--bd2)", fontFamily: "'Space Mono',monospace", fontSize: "10.5px", letterSpacing: ".1em", color: "var(--faint)" }}>input + join · swaps to confirmation state</div>
        </div>
        <div style={{ border: "1px solid var(--bd)", borderRadius: "16px", background: "var(--surface)", overflow: "hidden" }}>
          <div style={{ display: "flex", justifyContent: "space-between", gap: "10px", padding: "12px 18px", borderBottom: "1px solid var(--bd2)", fontFamily: "'Space Mono',monospace", fontSize: "11px", letterSpacing: ".14em", textTransform: "uppercase", color: "var(--faint)" }}><span>IN-03 · Accent system</span><span>Sets --accent</span></div>
          <div style={{ padding: "30px 24px", display: "flex", flexDirection: "column", gap: "18px", alignItems: "center" }}>
            <div style={{ display: "flex", gap: "12px" }}>
              {ui.accentDots.map((d, i) => (
                <button key={i} onClick={d.on} aria-label={d.name} className="hov-scale" style={{ width: "38px", height: "38px", borderRadius: "50%", cursor: "pointer", background: d.hex, border: `2px solid ${d.bd}`, boxShadow: d.sh, transition: "transform .25s, box-shadow .25s" }}></button>
              ))}
            </div>
            <div style={{ fontFamily: "'Space Mono',monospace", fontSize: "11px", letterSpacing: ".14em", textTransform: "uppercase", color: "var(--faint)" }}>{ui.accentLabel}</div>
            <p style={{ fontSize: ".95rem", color: "var(--sub)", textAlign: "center", maxWidth: "38ch", margin: 0 }}>One variable re-tints every eyebrow, dot, link and button on this page.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
