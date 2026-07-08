"use client";

import { useUI } from "../context";

export default function Feedback() {
  const ui = useUI();
  return (
    <section id="fbk" data-spy="fbk" data-screen-label="08 Feedback" style={{ padding: "64px 0 30px", borderTop: "1px solid var(--bd2)", marginTop: "40px" }}>
      <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "16px", flexWrap: "wrap" }}>
        <div>
          <div style={{ fontFamily: "'Space Mono',monospace", fontSize: "12px", letterSpacing: ".2em", textTransform: "uppercase", color: "var(--accent)" }}><span style={{ opacity: ".5" }}>[</span>&nbsp; 08 — Feedback &amp; overlays &nbsp;<span style={{ opacity: ".5" }}>]</span></div>
          <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 600, fontSize: "clamp(1.7rem,3vw,2.4rem)", lineHeight: "1.08", letterSpacing: "-.025em", margin: "14px 0 0", color: "var(--ink)" }}>Tell the truth about state.</h2>
        </div>
        <span style={{ fontFamily: "'Space Mono',monospace", fontSize: "11.5px", letterSpacing: ".12em", color: "var(--faint)" }}>06 items</span>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "18px", marginTop: "34px" }}>
        <div style={{ border: "1px solid var(--bd)", borderRadius: "16px", background: "var(--surface)", overflow: "hidden" }}>
          <div style={{ display: "flex", justifyContent: "space-between", gap: "10px", padding: "12px 18px", borderBottom: "1px solid var(--bd2)", fontFamily: "'Space Mono',monospace", fontSize: "11px", letterSpacing: ".14em", textTransform: "uppercase", color: "var(--faint)" }}><span>FB-01 · Alerts</span><span>Signal / caution / fault</span></div>
          <div style={{ padding: "24px", display: "flex", flexDirection: "column", gap: "10px" }}>
            <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", padding: "14px 16px", border: "1px solid var(--bd)", borderRadius: "12px", background: "var(--surface2)" }}>
              <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#13B981", marginTop: "6px", flex: "0 0 auto" }}></span>
              <div style={{ flex: "1", minWidth: "0" }}><div style={{ fontFamily: "'Space Mono',monospace", fontSize: "10.5px", letterSpacing: ".14em", textTransform: "uppercase", color: "#13B981" }}>Signal</div><div style={{ fontSize: "14px", color: "var(--sub)", lineHeight: "1.5", marginTop: "2px" }}>Eval suite passed — 99.9% gate cleared for release.</div></div>
              <span style={{ color: "var(--faint)", fontSize: "16px", lineHeight: "1", cursor: "pointer" }}>×</span>
            </div>
            <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", padding: "14px 16px", border: "1px solid var(--bd)", borderRadius: "12px", background: "var(--surface2)" }}>
              <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#D98A2B", marginTop: "6px", flex: "0 0 auto" }}></span>
              <div style={{ flex: "1", minWidth: "0" }}><div style={{ fontFamily: "'Space Mono',monospace", fontSize: "10.5px", letterSpacing: ".14em", textTransform: "uppercase", color: "#D98A2B" }}>Caution</div><div style={{ fontSize: "14px", color: "var(--sub)", lineHeight: "1.5", marginTop: "2px" }}>Latency p95 drifting above budget on the ranking model.</div></div>
              <span style={{ color: "var(--faint)", fontSize: "16px", lineHeight: "1", cursor: "pointer" }}>×</span>
            </div>
            <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", padding: "14px 16px", border: "1px solid var(--bd)", borderRadius: "12px", background: "var(--surface2)" }}>
              <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#C25E54", marginTop: "6px", flex: "0 0 auto" }}></span>
              <div style={{ flex: "1", minWidth: "0" }}><div style={{ fontFamily: "'Space Mono',monospace", fontSize: "10.5px", letterSpacing: ".14em", textTransform: "uppercase", color: "#C25E54" }}>Fault</div><div style={{ fontSize: "14px", color: "var(--sub)", lineHeight: "1.5", marginTop: "2px" }}>Ingestion pipeline halted — schema mismatch in run 214.</div></div>
              <span style={{ color: "var(--faint)", fontSize: "16px", lineHeight: "1", cursor: "pointer" }}>×</span>
            </div>
          </div>
        </div>
        <div style={{ border: "1px solid var(--bd)", borderRadius: "16px", background: "var(--surface)", overflow: "hidden", display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", justifyContent: "space-between", gap: "10px", padding: "12px 18px", borderBottom: "1px solid var(--bd2)", fontFamily: "'Space Mono',monospace", fontSize: "11px", letterSpacing: ".14em", textTransform: "uppercase", color: "var(--faint)" }}><span>FB-02 · Toast</span><span>Live</span></div>
          <div style={{ padding: "32px 24px", display: "flex", flexDirection: "column", gap: "20px", alignItems: "center", flex: "1", justifyContent: "center" }}>
            <span style={{ display: "inline-flex", alignItems: "center", gap: "9px", padding: "11px 20px", borderRadius: "100px", background: "var(--deep)", color: "var(--deep-ink)", fontFamily: "'Space Mono',monospace", fontSize: "12px", letterSpacing: ".12em", boxShadow: "0 18px 44px -18px rgba(0,0,0,.55)" }}><span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "var(--deep-ink)" }}></span>COPIED&nbsp;#16202E</span>
            <button onClick={ui.showToastDemo} className="hov-accent" style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "11px 20px", borderRadius: "11px", border: "1px solid var(--bd-hov)", background: "transparent", color: "var(--ink)", fontSize: "14px", fontWeight: 600, cursor: "pointer", transition: "border-color .25s, background-color .25s" }}>Fire a toast</button>
          </div>
          <div style={{ padding: "10px 18px", borderTop: "1px solid var(--bd2)", fontFamily: "'Space Mono',monospace", fontSize: "10.5px", letterSpacing: ".1em", color: "var(--faint)" }}>bottom-center · 1.6s · mono caps</div>
        </div>
        <div style={{ border: "1px solid var(--bd)", borderRadius: "16px", background: "var(--surface)", overflow: "hidden", display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", justifyContent: "space-between", gap: "10px", padding: "12px 18px", borderBottom: "1px solid var(--bd2)", fontFamily: "'Space Mono',monospace", fontSize: "11px", letterSpacing: ".14em", textTransform: "uppercase", color: "var(--faint)" }}><span>FB-03 · Dialog</span><span>Live</span></div>
          <div style={{ padding: "32px 24px", display: "grid", placeItems: "center", flex: "1", backgroundImage: "linear-gradient(var(--grid) 1px,transparent 1px),linear-gradient(90deg,var(--grid) 1px,transparent 1px)", backgroundSize: "32px 32px" }}>
            <button onClick={ui.openModal} style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "13px 24px", borderRadius: "11px", border: "none", background: "var(--accent)", color: "var(--accent-ink)", fontSize: "15px", fontWeight: 600, cursor: "pointer", boxShadow: "var(--sh-btn)" }}>Open dialog</button>
          </div>
          <div style={{ padding: "10px 18px", borderTop: "1px solid var(--bd2)", fontFamily: "'Space Mono',monospace", fontSize: "10.5px", letterSpacing: ".1em", color: "var(--faint)" }}>scrim blur 7px · closes on scrim click</div>
        </div>
        <div style={{ border: "1px solid var(--bd)", borderRadius: "16px", background: "var(--surface)", overflow: "hidden", display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", justifyContent: "space-between", gap: "10px", padding: "12px 18px", borderBottom: "1px solid var(--bd2)", fontFamily: "'Space Mono',monospace", fontSize: "11px", letterSpacing: ".14em", textTransform: "uppercase", color: "var(--faint)" }}><span>FB-04 · Tooltip</span><span>Spec</span></div>
          <div style={{ padding: "30px 24px", display: "flex", flexDirection: "column", alignItems: "center", flex: "1", justifyContent: "center" }}>
            <span style={{ padding: "8px 13px", borderRadius: "9px", background: "var(--deep)", color: "var(--deep-ink)", fontSize: "13px", lineHeight: "1.4" }}>Blocks deploys under 99% recall</span>
            <span style={{ width: "9px", height: "9px", background: "var(--deep)", transform: "rotate(45deg)", marginTop: "-5px" }}></span>
            <span style={{ marginTop: "9px", display: "inline-flex", alignItems: "center", padding: "10px 18px", borderRadius: "10px", border: "1px solid var(--bd-hov)", color: "var(--ink)", fontSize: "14px", fontWeight: 600 }}>Eval gate</span>
          </div>
          <div style={{ padding: "10px 18px", borderTop: "1px solid var(--bd2)", fontFamily: "'Space Mono',monospace", fontSize: "10.5px", letterSpacing: ".1em", color: "var(--faint)" }}>on hover · 150ms delay · deep fill</div>
        </div>
        <div style={{ border: "1px solid var(--bd)", borderRadius: "16px", background: "var(--surface)", overflow: "hidden" }}>
          <div style={{ display: "flex", justifyContent: "space-between", gap: "10px", padding: "12px 18px", borderBottom: "1px solid var(--bd2)", fontFamily: "'Space Mono',monospace", fontSize: "11px", letterSpacing: ".14em", textTransform: "uppercase", color: "var(--faint)" }}><span>FB-05 · Progress</span><span>Determinate / gates</span></div>
          <div style={{ padding: "32px 24px", display: "flex", flexDirection: "column", gap: "24px" }}>
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", fontFamily: "'Space Mono',monospace", fontSize: "10.5px", letterSpacing: ".12em", textTransform: "uppercase", color: "var(--faint)", marginBottom: "8px" }}><span>Training</span><span>64%</span></div>
              <div style={{ height: "8px", borderRadius: "100px", background: "var(--surface2)", border: "1px solid var(--bd)", overflow: "hidden" }}><div style={{ width: "64%", height: "100%", borderRadius: "100px", background: "var(--accent)" }}></div></div>
            </div>
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", fontFamily: "'Space Mono',monospace", fontSize: "10.5px", letterSpacing: ".12em", textTransform: "uppercase", color: "var(--faint)", marginBottom: "8px" }}><span>Eval gates</span><span>3 / 4</span></div>
              <div style={{ display: "flex", gap: "6px" }}><span style={{ flex: "1", height: "8px", borderRadius: "100px", background: "var(--accent)" }}></span><span style={{ flex: "1", height: "8px", borderRadius: "100px", background: "var(--accent)" }}></span><span style={{ flex: "1", height: "8px", borderRadius: "100px", background: "var(--accent)" }}></span><span style={{ flex: "1", height: "8px", borderRadius: "100px", background: "var(--surface2)", border: "1px solid var(--bd)" }}></span></div>
            </div>
          </div>
        </div>
        <div style={{ border: "1px solid var(--bd)", borderRadius: "16px", background: "var(--surface)", overflow: "hidden" }}>
          <div style={{ display: "flex", justifyContent: "space-between", gap: "10px", padding: "12px 18px", borderBottom: "1px solid var(--bd2)", fontFamily: "'Space Mono',monospace", fontSize: "11px", letterSpacing: ".14em", textTransform: "uppercase", color: "var(--faint)" }}><span>FB-06 · Skeleton</span><span>Shimmer 1.6s</span></div>
          <div style={{ padding: "32px 24px", display: "flex", gap: "16px", alignItems: "flex-start" }}>
            <span data-loop="" style={{ width: "44px", height: "44px", borderRadius: "50%", flex: "0 0 auto", background: "linear-gradient(90deg, var(--bd2) 30%, var(--surface2) 50%, var(--bd2) 70%)", backgroundSize: "200% 100%", animation: "shimmer 1.6s linear infinite" }}></span>
            <span style={{ flex: "1", display: "flex", flexDirection: "column", gap: "10px" }}>
              <span data-loop="" style={{ display: "block", height: "13px", width: "60%", borderRadius: "6px", background: "linear-gradient(90deg, var(--bd2) 30%, var(--surface2) 50%, var(--bd2) 70%)", backgroundSize: "200% 100%", animation: "shimmer 1.6s linear infinite" }}></span>
              <span data-loop="" style={{ display: "block", height: "13px", width: "100%", borderRadius: "6px", background: "linear-gradient(90deg, var(--bd2) 30%, var(--surface2) 50%, var(--bd2) 70%)", backgroundSize: "200% 100%", animation: "shimmer 1.6s linear .15s infinite" }}></span>
              <span data-loop="" style={{ display: "block", height: "13px", width: "42%", borderRadius: "6px", background: "linear-gradient(90deg, var(--bd2) 30%, var(--surface2) 50%, var(--bd2) 70%)", backgroundSize: "200% 100%", animation: "shimmer 1.6s linear .3s infinite" }}></span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
