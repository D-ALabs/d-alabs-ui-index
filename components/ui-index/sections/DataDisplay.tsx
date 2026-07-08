"use client";

import { useUI } from "../context";

export default function DataDisplay() {
  const ui = useUI();
  return (
    <section id="dat" data-spy="dat" data-screen-label="09 Data display" style={{ padding: "64px 0 30px", borderTop: "1px solid var(--bd2)", marginTop: "40px" }}>
      <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "16px", flexWrap: "wrap" }}>
        <div>
          <div style={{ fontFamily: "'Space Mono',monospace", fontSize: "12px", letterSpacing: ".2em", textTransform: "uppercase", color: "var(--accent)" }}><span style={{ opacity: ".5" }}>[</span>&nbsp; 09 — Data display &nbsp;<span style={{ opacity: ".5" }}>]</span></div>
          <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 600, fontSize: "clamp(1.7rem,3vw,2.4rem)", lineHeight: "1.08", letterSpacing: "-.025em", margin: "14px 0 0", color: "var(--ink)" }}>Structure for the record.</h2>
        </div>
        <span style={{ fontFamily: "'Space Mono',monospace", fontSize: "11.5px", letterSpacing: ".12em", color: "var(--faint)" }}>05 items</span>
      </div>

      <div style={{ border: "1px solid var(--bd)", borderRadius: "16px", background: "var(--surface)", overflow: "hidden", marginTop: "34px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", gap: "10px", padding: "12px 18px", borderBottom: "1px solid var(--bd2)", fontFamily: "'Space Mono',monospace", fontSize: "11px", letterSpacing: ".14em", textTransform: "uppercase", color: "var(--faint)" }}><span>DT-01 · Table</span><span>Run manifest</span></div>
        <div style={{ padding: "10px 24px 20px", overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "14.5px", minWidth: "520px" }}>
            <thead>
              <tr>
                <th style={{ textAlign: "left", padding: "12px 14px 10px", borderBottom: "1px solid var(--bd)", fontFamily: "'Space Mono',monospace", fontSize: "10.5px", letterSpacing: ".14em", textTransform: "uppercase", color: "var(--faint)", fontWeight: 400 }}>Experiment</th>
                <th style={{ textAlign: "left", padding: "12px 14px 10px", borderBottom: "1px solid var(--bd)", fontFamily: "'Space Mono',monospace", fontSize: "10.5px", letterSpacing: ".14em", textTransform: "uppercase", color: "var(--faint)", fontWeight: 400 }}>Status</th>
                <th style={{ textAlign: "left", padding: "12px 14px 10px", borderBottom: "1px solid var(--bd)", fontFamily: "'Space Mono',monospace", fontSize: "10.5px", letterSpacing: ".14em", textTransform: "uppercase", color: "var(--faint)", fontWeight: 400 }}>Eval</th>
                <th style={{ textAlign: "right", padding: "12px 14px 10px", borderBottom: "1px solid var(--bd)", fontFamily: "'Space Mono',monospace", fontSize: "10.5px", letterSpacing: ".14em", textTransform: "uppercase", color: "var(--faint)", fontWeight: 400 }}>Updated</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: "13px 14px", borderBottom: "1px solid var(--bd2)", fontFamily: "'Space Grotesk',sans-serif", fontWeight: 600, color: "var(--ink)" }}>Support copilot</td>
                <td style={{ padding: "13px 14px", borderBottom: "1px solid var(--bd2)" }}><span style={{ display: "inline-flex", alignItems: "center", gap: "7px", padding: "4px 11px", borderRadius: "100px", border: "1px solid var(--pill-bd)", fontFamily: "'Space Mono',monospace", fontSize: "10.5px", letterSpacing: ".1em", textTransform: "uppercase", color: "var(--pill-tx)" }}><span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#13B981" }} />Live</span></td>
                <td style={{ padding: "13px 14px", borderBottom: "1px solid var(--bd2)", fontFamily: "'Space Mono',monospace", fontSize: "13px", color: "var(--sub)" }}>99.2%</td>
                <td style={{ padding: "13px 14px", borderBottom: "1px solid var(--bd2)", fontFamily: "'Space Mono',monospace", fontSize: "13px", color: "var(--faint)", textAlign: "right" }}>Jun 30</td>
              </tr>
              <tr>
                <td style={{ padding: "13px 14px", borderBottom: "1px solid var(--bd2)", fontFamily: "'Space Grotesk',sans-serif", fontWeight: 600, color: "var(--ink)" }}>Clinical search</td>
                <td style={{ padding: "13px 14px", borderBottom: "1px solid var(--bd2)" }}><span style={{ display: "inline-flex", alignItems: "center", gap: "7px", padding: "4px 11px", borderRadius: "100px", border: "1px solid var(--pill-bd)", fontFamily: "'Space Mono',monospace", fontSize: "10.5px", letterSpacing: ".1em", textTransform: "uppercase", color: "var(--pill-tx)" }}><span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#D98A2B" }} />Training</span></td>
                <td style={{ padding: "13px 14px", borderBottom: "1px solid var(--bd2)", fontFamily: "'Space Mono',monospace", fontSize: "13px", color: "var(--sub)" }}>97.8%</td>
                <td style={{ padding: "13px 14px", borderBottom: "1px solid var(--bd2)", fontFamily: "'Space Mono',monospace", fontSize: "13px", color: "var(--faint)", textAlign: "right" }}>Jul 02</td>
              </tr>
              <tr>
                <td style={{ padding: "13px 14px", fontFamily: "'Space Grotesk',sans-serif", fontWeight: 600, color: "var(--ink)" }}>Ranking v4</td>
                <td style={{ padding: "13px 14px" }}><span style={{ display: "inline-flex", alignItems: "center", gap: "7px", padding: "4px 11px", borderRadius: "100px", border: "1px solid var(--pill-bd)", fontFamily: "'Space Mono',monospace", fontSize: "10.5px", letterSpacing: ".1em", textTransform: "uppercase", color: "var(--pill-tx)" }}><span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--faint)" }} />Queued</span></td>
                <td style={{ padding: "13px 14px", fontFamily: "'Space Mono',monospace", fontSize: "13px", color: "var(--faint)" }}>—</td>
                <td style={{ padding: "13px 14px", fontFamily: "'Space Mono',monospace", fontSize: "13px", color: "var(--faint)", textAlign: "right" }}>Jul 05</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "18px", marginTop: "18px", alignItems: "start" }}>
        <div style={{ border: "1px solid var(--bd)", borderRadius: "16px", background: "var(--surface)", overflow: "hidden" }}>
          <div style={{ display: "flex", justifyContent: "space-between", gap: "10px", padding: "12px 18px", borderBottom: "1px solid var(--bd2)", fontFamily: "'Space Mono',monospace", fontSize: "11px", letterSpacing: ".14em", textTransform: "uppercase", color: "var(--faint)" }}><span>DT-02 · Accordion</span><span>Live</span></div>
          <div style={{ padding: "8px 24px 14px" }}>
            {ui.faqList.map((it, i) => (
              <div key={i} style={{ borderBottom: "1px solid var(--bd2)" }}>
                <button onClick={it.on} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "14px", width: "100%", textAlign: "left", padding: "17px 0", border: "none", background: "none", cursor: "pointer", fontFamily: "'Space Grotesk',sans-serif", fontWeight: 600, fontSize: "16px", color: "var(--ink)" }}>{it.q}<span style={{ fontFamily: "'Space Mono',monospace", fontSize: "17px", color: "var(--accent)", flex: "0 0 auto" }}>{it.sym}</span></button>
                <div style={{ display: it.bodyDisplay, padding: "0 0 17px", color: "var(--sub)", fontSize: "14.5px", lineHeight: "1.6", maxWidth: "56ch" }}>{it.a}</div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          <div style={{ border: "1px solid var(--bd)", borderRadius: "16px", background: "var(--surface)", overflow: "hidden" }}>
            <div style={{ display: "flex", justifyContent: "space-between", gap: "10px", padding: "12px 18px", borderBottom: "1px solid var(--bd2)", fontFamily: "'Space Mono',monospace", fontSize: "11px", letterSpacing: ".14em", textTransform: "uppercase", color: "var(--faint)" }}><span>DT-03 · Pagination</span><span>Squares</span></div>
            <div style={{ padding: "26px 24px", display: "flex", gap: "6px", justifyContent: "center", alignItems: "center", flexWrap: "wrap" }}>
              <span style={{ display: "grid", placeItems: "center", width: "36px", height: "36px", borderRadius: "10px", border: "1px solid var(--bd)", color: "var(--sub)", fontSize: "15px", cursor: "pointer" }}>←</span>
              <span style={{ display: "grid", placeItems: "center", width: "36px", height: "36px", borderRadius: "10px", background: "var(--accent)", color: "var(--accent-ink)", fontFamily: "'Space Mono',monospace", fontSize: "13px" }}>1</span>
              <span style={{ display: "grid", placeItems: "center", width: "36px", height: "36px", borderRadius: "10px", border: "1px solid var(--bd)", color: "var(--sub)", fontFamily: "'Space Mono',monospace", fontSize: "13px", cursor: "pointer" }}>2</span>
              <span style={{ display: "grid", placeItems: "center", width: "36px", height: "36px", borderRadius: "10px", border: "1px solid var(--bd)", color: "var(--sub)", fontFamily: "'Space Mono',monospace", fontSize: "13px", cursor: "pointer" }}>3</span>
              <span style={{ display: "grid", placeItems: "center", width: "36px", height: "36px", color: "var(--faint)", fontFamily: "'Space Mono',monospace", fontSize: "13px" }}>…</span>
              <span style={{ display: "grid", placeItems: "center", width: "36px", height: "36px", borderRadius: "10px", border: "1px solid var(--bd)", color: "var(--sub)", fontFamily: "'Space Mono',monospace", fontSize: "13px", cursor: "pointer" }}>12</span>
              <span style={{ display: "grid", placeItems: "center", width: "36px", height: "36px", borderRadius: "10px", border: "1px solid var(--bd)", color: "var(--sub)", fontSize: "15px", cursor: "pointer" }}>→</span>
            </div>
          </div>
          <div style={{ border: "1px solid var(--bd)", borderRadius: "16px", background: "var(--surface)", overflow: "hidden" }}>
            <div style={{ display: "flex", justifyContent: "space-between", gap: "10px", padding: "12px 18px", borderBottom: "1px solid var(--bd2)", fontFamily: "'Space Mono',monospace", fontSize: "11px", letterSpacing: ".14em", textTransform: "uppercase", color: "var(--faint)" }}><span>DT-04 · Breadcrumb</span><span>Mono caps</span></div>
            <div style={{ padding: "26px 24px", display: "flex", gap: "10px", justifyContent: "center", fontFamily: "'Space Mono',monospace", fontSize: "12px", letterSpacing: ".1em", textTransform: "uppercase" }}>
              <a href="#top" style={{ color: "var(--faint)", transition: "color .2s" }} className="hov-ink">Index</a><span style={{ color: "var(--bd-hov)" }}>/</span><a href="#crd" style={{ color: "var(--faint)", transition: "color .2s" }} className="hov-ink">Components</a><span style={{ color: "var(--bd-hov)" }}>/</span><span style={{ color: "var(--ink)" }}>Buttons</span>
            </div>
          </div>
          <div style={{ border: "1px solid var(--bd)", borderRadius: "16px", background: "var(--surface)", overflow: "hidden" }}>
            <div style={{ display: "flex", justifyContent: "space-between", gap: "10px", padding: "12px 18px", borderBottom: "1px solid var(--bd2)", fontFamily: "'Space Mono',monospace", fontSize: "11px", letterSpacing: ".14em", textTransform: "uppercase", color: "var(--faint)" }}><span>DT-05 · Stepper</span><span>Run stages</span></div>
            <div style={{ padding: "28px 24px", display: "flex", alignItems: "flex-start", justifyContent: "center" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px", width: "82px" }}>
                <span style={{ width: "28px", height: "28px", borderRadius: "50%", background: "var(--accent)", color: "var(--accent-ink)", display: "grid", placeItems: "center", fontFamily: "'Space Mono',monospace", fontSize: "11px" }}>01</span>
                <span style={{ fontFamily: "'Space Mono',monospace", fontSize: "10px", letterSpacing: ".1em", textTransform: "uppercase", color: "var(--sub)", textAlign: "center" }}>Hypothesize</span>
              </div>
              <span style={{ flex: "1", maxWidth: "70px", height: "1px", background: "var(--accent)", marginTop: "14px" }} />
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px", width: "82px" }}>
                <span style={{ width: "28px", height: "28px", borderRadius: "50%", border: "1px solid var(--accent)", background: "var(--accent-soft)", color: "var(--accent)", display: "grid", placeItems: "center", fontFamily: "'Space Mono',monospace", fontSize: "11px" }}>02</span>
                <span style={{ fontFamily: "'Space Mono',monospace", fontSize: "10px", letterSpacing: ".1em", textTransform: "uppercase", color: "var(--ink)", textAlign: "center" }}>Prototype</span>
              </div>
              <span style={{ flex: "1", maxWidth: "70px", height: "1px", background: "var(--bd)", marginTop: "14px" }} />
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px", width: "82px" }}>
                <span style={{ width: "28px", height: "28px", borderRadius: "50%", border: "1px solid var(--bd)", color: "var(--faint)", display: "grid", placeItems: "center", fontFamily: "'Space Mono',monospace", fontSize: "11px" }}>03</span>
                <span style={{ fontFamily: "'Space Mono',monospace", fontSize: "10px", letterSpacing: ".1em", textTransform: "uppercase", color: "var(--faint)", textAlign: "center" }}>Evaluate</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
