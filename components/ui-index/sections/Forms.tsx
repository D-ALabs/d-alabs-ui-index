"use client";

import { useUI } from "../context";

export default function Forms() {
  const ui = useUI();
  return (
    <section id="frm" data-spy="frm" data-screen-label="07 Forms" style={{ padding: "64px 0 30px", borderTop: "1px solid var(--bd2)", marginTop: "40px" }}>
      <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "16px", flexWrap: "wrap" }}>
        <div>
          <div style={{ fontFamily: "'Space Mono',monospace", fontSize: "12px", letterSpacing: ".2em", textTransform: "uppercase", color: "var(--accent)" }}><span style={{ opacity: ".5" }}>[</span>&nbsp; 07 — Forms &amp; inputs &nbsp;<span style={{ opacity: ".5" }}>]</span></div>
          <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 600, fontSize: "clamp(1.7rem,3vw,2.4rem)", lineHeight: "1.08", letterSpacing: "-.025em", margin: "14px 0 0", color: "var(--ink)" }}>Ask precisely.</h2>
        </div>
        <span style={{ fontFamily: "'Space Mono',monospace", fontSize: "11.5px", letterSpacing: ".12em", color: "var(--faint)" }}>06 items</span>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "18px", marginTop: "34px" }}>
        <div style={{ border: "1px solid var(--bd)", borderRadius: "16px", background: "var(--surface)", overflow: "hidden" }}>
          <div style={{ display: "flex", justifyContent: "space-between", gap: "10px", padding: "12px 18px", borderBottom: "1px solid var(--bd2)", fontFamily: "'Space Mono',monospace", fontSize: "11px", letterSpacing: ".14em", textTransform: "uppercase", color: "var(--faint)" }}><span>FM-01 · Text input</span><span>Focus = accent</span></div>
          <div style={{ padding: "28px 24px", display: "flex", flexDirection: "column", gap: "18px" }}>
            <div>
              <div style={{ fontFamily: "'Space Mono',monospace", fontSize: "10.5px", letterSpacing: ".14em", textTransform: "uppercase", color: "var(--faint)", marginBottom: "7px" }}>Work email</div>
              <input type="email" placeholder="you@company.com" style={{ width: "100%", padding: "13px 17px", borderRadius: "11px", border: "1px solid var(--bd)", background: "var(--surface2)", color: "var(--ink)", fontSize: "15px", outline: "none", transition: "border-color .25s" }} className="foc-accent" />
              <div style={{ fontFamily: "'Space Mono',monospace", fontSize: "10.5px", letterSpacing: ".06em", color: "var(--faint)", marginTop: "7px" }}>We reply within two days.</div>
            </div>
            <div style={{ opacity: ".5" }}>
              <div style={{ fontFamily: "'Space Mono',monospace", fontSize: "10.5px", letterSpacing: ".14em", textTransform: "uppercase", color: "var(--faint)", marginBottom: "7px" }}>Disabled</div>
              <input type="text" disabled defaultValue="locked@d-alabs.com" style={{ width: "100%", padding: "13px 17px", borderRadius: "11px", border: "1px dashed var(--bd)", background: "transparent", color: "var(--faint)", fontSize: "15px", outline: "none" }} />
            </div>
          </div>
        </div>
        <div style={{ border: "1px solid var(--bd)", borderRadius: "16px", background: "var(--surface)", overflow: "hidden" }}>
          <div style={{ display: "flex", justifyContent: "space-between", gap: "10px", padding: "12px 18px", borderBottom: "1px solid var(--bd2)", fontFamily: "'Space Mono',monospace", fontSize: "11px", letterSpacing: ".14em", textTransform: "uppercase", color: "var(--faint)" }}><span>FM-02 · Select</span><span>Native</span></div>
          <div style={{ padding: "28px 24px" }}>
            <div style={{ fontFamily: "'Space Mono',monospace", fontSize: "10.5px", letterSpacing: ".14em", textTransform: "uppercase", color: "var(--faint)", marginBottom: "7px" }}>Engagement</div>
            <div style={{ position: "relative" }}>
              <select style={{ appearance: "none", width: "100%", padding: "13px 40px 13px 17px", borderRadius: "11px", border: "1px solid var(--bd)", background: "var(--surface2)", color: "var(--ink)", fontSize: "15px", outline: "none", cursor: "pointer", transition: "border-color .25s" }} className="foc-accent">
                <option>Research sprint</option>
                <option>Product studio</option>
                <option>Production engineering</option>
              </select>
              <span style={{ position: "absolute", right: "16px", top: "50%", transform: "translateY(-50%)", pointerEvents: "none", color: "var(--faint)", fontSize: "12px" }}>▾</span>
            </div>
            <div style={{ fontFamily: "'Space Mono',monospace", fontSize: "10.5px", letterSpacing: ".06em", color: "var(--faint)", marginTop: "7px" }}>4–8 weeks · fixed scope</div>
          </div>
        </div>
        <div style={{ border: "1px solid var(--bd)", borderRadius: "16px", background: "var(--surface)", overflow: "hidden" }}>
          <div style={{ display: "flex", justifyContent: "space-between", gap: "10px", padding: "12px 18px", borderBottom: "1px solid var(--bd2)", fontFamily: "'Space Mono',monospace", fontSize: "11px", letterSpacing: ".14em", textTransform: "uppercase", color: "var(--faint)" }}><span>FM-03 · Textarea</span><span>Resize-y</span></div>
          <div style={{ padding: "28px 24px" }}>
            <div style={{ fontFamily: "'Space Mono',monospace", fontSize: "10.5px", letterSpacing: ".14em", textTransform: "uppercase", color: "var(--faint)", marginBottom: "7px" }}>The problem</div>
            <textarea rows={3} placeholder="Tell us what you’re building, and what’s in the way." style={{ width: "100%", padding: "13px 17px", borderRadius: "11px", border: "1px solid var(--bd)", background: "var(--surface2)", color: "var(--ink)", fontSize: "15px", lineHeight: "1.55", outline: "none", resize: "vertical", fontFamily: "inherit", transition: "border-color .25s" }} className="foc-accent"></textarea>
            <div style={{ display: "flex", justifyContent: "flex-end", fontFamily: "'Space Mono',monospace", fontSize: "10.5px", letterSpacing: ".06em", color: "var(--faint)", marginTop: "7px" }}>0 / 600</div>
          </div>
        </div>
        <div style={{ border: "1px solid var(--bd)", borderRadius: "16px", background: "var(--surface)", overflow: "hidden" }}>
          <div style={{ display: "flex", justifyContent: "space-between", gap: "10px", padding: "12px 18px", borderBottom: "1px solid var(--bd2)", fontFamily: "'Space Mono',monospace", fontSize: "11px", letterSpacing: ".14em", textTransform: "uppercase", color: "var(--faint)" }}><span>FM-04 · Check &amp; radio</span><span>accent-color</span></div>
          <div style={{ padding: "28px 24px", display: "flex", gap: "32px", flexWrap: "wrap", justifyContent: "center" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "11px" }}>
              <label style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "14.5px", color: "var(--ink)", cursor: "pointer" }}><input type="checkbox" defaultChecked style={{ accentColor: "var(--accent)", width: "17px", height: "17px", margin: 0 }} />Monthly briefing</label>
              <label style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "14.5px", color: "var(--ink)", cursor: "pointer" }}><input type="checkbox" style={{ accentColor: "var(--accent)", width: "17px", height: "17px", margin: 0 }} />Demo nights</label>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "11px" }}>
              <label style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "14.5px", color: "var(--ink)", cursor: "pointer" }}><input type="radio" name="tier" defaultChecked style={{ accentColor: "var(--accent)", width: "17px", height: "17px", margin: 0 }} />Crew</label>
              <label style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "14.5px", color: "var(--ink)", cursor: "pointer" }}><input type="radio" name="tier" style={{ accentColor: "var(--accent)", width: "17px", height: "17px", margin: 0 }} />Navigator</label>
            </div>
          </div>
        </div>
        <div style={{ border: "1px solid var(--bd)", borderRadius: "16px", background: "var(--surface)", overflow: "hidden" }}>
          <div style={{ display: "flex", justifyContent: "space-between", gap: "10px", padding: "12px 18px", borderBottom: "1px solid var(--bd2)", fontFamily: "'Space Mono',monospace", fontSize: "11px", letterSpacing: ".14em", textTransform: "uppercase", color: "var(--faint)" }}><span>FM-05 · Toggle</span><span>Live</span></div>
          <div style={{ padding: "32px 24px", display: "flex", flexDirection: "column", gap: "18px", alignItems: "center" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
              <button onClick={ui.toggleSwitch} aria-label="Toggle" style={{ position: "relative", width: "48px", height: "27px", borderRadius: "100px", border: "1px solid var(--bd)", background: ui.switchBg, cursor: "pointer", transition: "background .3s", padding: 0, flex: "0 0 auto" }}>
                <span style={{ position: "absolute", top: "2.5px", left: "2.5px", width: "20px", height: "20px", borderRadius: "50%", background: "var(--surface)", boxShadow: "0 2px 6px rgba(0,0,0,.3)", transform: `translateX(${ui.knobX})`, transition: "transform .3s cubic-bezier(.2,.9,.3,1.2)" }}></span>
              </button>
              <span style={{ fontSize: "14.5px", color: "var(--ink)" }}>Eval-gated releases</span>
              <span style={{ fontFamily: "'Space Mono',monospace", fontSize: "10.5px", letterSpacing: ".14em", color: "var(--faint)" }}>{ui.switchLabel}</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "14px", opacity: ".45" }}>
              <span style={{ position: "relative", width: "48px", height: "27px", borderRadius: "100px", border: "1px dashed var(--bd)", background: "transparent", display: "inline-block" }}><span style={{ position: "absolute", top: "2.5px", left: "2.5px", width: "20px", height: "20px", borderRadius: "50%", background: "var(--bd)" }}></span></span>
              <span style={{ fontSize: "14.5px", color: "var(--faint)" }}>Disabled</span>
            </div>
          </div>
        </div>
        <div style={{ border: "1px solid var(--bd)", borderRadius: "16px", background: "var(--surface)", overflow: "hidden" }}>
          <div style={{ display: "flex", justifyContent: "space-between", gap: "10px", padding: "12px 18px", borderBottom: "1px solid var(--bd2)", fontFamily: "'Space Mono',monospace", fontSize: "11px", letterSpacing: ".14em", textTransform: "uppercase", color: "var(--faint)" }}><span>FM-06 · Search</span><span>⌘K</span></div>
          <div style={{ padding: "32px 24px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "11px", border: "1px solid var(--bd)", borderRadius: "100px", padding: "11px 18px", background: "var(--surface2)" }}>
              <svg viewBox="0 0 20 20" width="15" height="15" style={{ color: "var(--faint)", flex: "0 0 auto" }} aria-hidden="true"><circle cx="9" cy="9" r="6" fill="none" stroke="currentColor" strokeWidth="1.6"></circle><line x1="13.5" y1="13.5" x2="18" y2="18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"></line></svg>
              <input type="text" placeholder="Search notes, runs, models…" style={{ border: "none", background: "transparent", outline: "none", color: "var(--ink)", fontSize: "15px", flex: 1, minWidth: 0, padding: 0 }} />
              <span style={{ flex: "0 0 auto", padding: "3px 8px", border: "1px solid var(--bd)", borderRadius: "7px", fontFamily: "'Space Mono',monospace", fontSize: "10.5px", color: "var(--faint)" }}>⌘K</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
