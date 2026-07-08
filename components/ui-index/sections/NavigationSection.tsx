/* eslint-disable @next/next/no-img-element */
"use client";

export default function NavigationSection() {
  return (
    <section id="nvg" data-spy="nvg" data-screen-label="06 Navigation" style={{ padding: "64px 0 30px", borderTop: "1px solid var(--bd2)", marginTop: "40px" }}>
      <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "16px", flexWrap: "wrap" }}>
        <div>
          <div style={{ fontFamily: "'Space Mono',monospace", fontSize: "12px", letterSpacing: ".2em", textTransform: "uppercase", color: "var(--accent)" }}><span style={{ opacity: ".5" }}>[</span>&nbsp; 06 — Navigation &nbsp;<span style={{ opacity: ".5" }}>]</span></div>
          <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 600, fontSize: "clamp(1.7rem,3vw,2.4rem)", lineHeight: "1.08", letterSpacing: "-.025em", margin: "14px 0 0", color: "var(--ink)" }}>Ways in, ways around.</h2>
        </div>
        <span style={{ fontFamily: "'Space Mono',monospace", fontSize: "11.5px", letterSpacing: ".12em", color: "var(--faint)" }}>03 items</span>
      </div>

      <div style={{ marginTop: "34px", display: "flex", flexDirection: "column", gap: "18px" }}>
        <div style={{ border: "1px solid var(--bd)", borderRadius: "16px", background: "var(--surface)", overflow: "hidden" }}>
          <div style={{ display: "flex", justifyContent: "space-between", gap: "10px", padding: "12px 18px", borderBottom: "1px solid var(--bd2)", fontFamily: "'Space Mono',monospace", fontSize: "11px", letterSpacing: ".14em", textTransform: "uppercase", color: "var(--faint)" }}><span>NV-01 · Top bar</span><span>Fixed · blurs on scroll · hides going down</span></div>
          <div style={{ padding: "26px 22px", backgroundImage: "linear-gradient(var(--grid) 1px,transparent 1px),linear-gradient(90deg,var(--grid) 1px,transparent 1px)", backgroundSize: "32px 32px" }}>
            <div style={{ border: "1px solid var(--bd)", borderRadius: "14px", background: "var(--bg)", padding: "0 22px", height: "64px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "18px", boxShadow: "0 10px 34px -22px rgba(0,0,0,.4)" }}>
              <span style={{ display: "flex", alignItems: "center" }}><img src="/assets/logo-dark.png" alt="D-ALabs" style={{ height: "21px", width: "auto", display: "var(--show-ld)", filter: "var(--logo-f)" }} /><img src="/assets/logo-light.png" alt="D-ALabs" style={{ height: "21px", width: "auto", display: "var(--show-ll)" }} /></span>
              <span style={{ display: "flex", alignItems: "center", gap: "24px", fontSize: "14px", fontWeight: 500, color: "var(--sub)", flexWrap: "wrap", overflow: "hidden", maxHeight: "22px" }}>
                <a href="#nvg" className="hov-ink" style={{ transition: "color .2s", whiteSpace: "nowrap" }}>Work</a>
                <a href="#nvg" className="hov-ink" style={{ transition: "color .2s", whiteSpace: "nowrap" }}>Capabilities</a>
                <a href="#nvg" className="hov-ink" style={{ transition: "color .2s", whiteSpace: "nowrap" }}>Process</a>
                <a href="#nvg" className="hov-ink" style={{ transition: "color .2s", whiteSpace: "nowrap" }}>Notes</a>
              </span>
              <a href="#nvg" style={{ display: "inline-flex", alignItems: "center", gap: "7px", padding: "9px 16px", borderRadius: "10px", background: "var(--accent)", color: "var(--accent-ink)", fontSize: "13.5px", fontWeight: 600, whiteSpace: "nowrap" }}>Request a demo<span style={{ fontSize: "14px", lineHeight: "1" }}>→</span></a>
            </div>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "18px" }}>
          <div style={{ border: "1px solid var(--bd)", borderRadius: "16px", background: "var(--surface)", overflow: "hidden" }}>
            <div style={{ display: "flex", justifyContent: "space-between", gap: "10px", padding: "12px 18px", borderBottom: "1px solid var(--bd2)", fontFamily: "'Space Mono',monospace", fontSize: "11px", letterSpacing: ".14em", textTransform: "uppercase", color: "var(--faint)" }}><span>NV-02 · Mobile menu</span><span>Overlay</span></div>
            <div style={{ padding: "26px 22px", display: "grid", placeItems: "center", backgroundImage: "linear-gradient(var(--grid) 1px,transparent 1px),linear-gradient(90deg,var(--grid) 1px,transparent 1px)", backgroundSize: "32px 32px" }}>
              <div style={{ position: "relative", width: "min(100%,320px)", height: "400px", border: "1px solid var(--bd)", borderRadius: "22px", background: "var(--bg)", overflow: "hidden", padding: "58px 26px 22px", display: "flex", flexDirection: "column" }}>
                <span style={{ position: "absolute", top: "12px", right: "14px", display: "grid", placeItems: "center", width: "38px", height: "38px", border: "1px solid var(--bd)", borderRadius: "10px", background: "var(--surface)", fontSize: "19px", color: "var(--ink)" }}>×</span>
                <a href="#nvg" style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: "24px", fontWeight: 600, padding: "11px 0", borderBottom: "1px solid var(--bd2)", color: "var(--ink)" }}>Work</a>
                <a href="#nvg" style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: "24px", fontWeight: 600, padding: "11px 0", borderBottom: "1px solid var(--bd2)", color: "var(--ink)" }}>Capabilities</a>
                <a href="#nvg" style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: "24px", fontWeight: 600, padding: "11px 0", borderBottom: "1px solid var(--bd2)", color: "var(--ink)" }}>Process</a>
                <a href="#nvg" style={{ marginTop: "auto", display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "8px", padding: "14px 20px", borderRadius: "12px", background: "var(--accent)", color: "var(--accent-ink)", fontSize: "15px", fontWeight: 600 }}>Request a demo →</a>
              </div>
            </div>
          </div>
          <div style={{ border: "1px solid var(--bd)", borderRadius: "16px", background: "var(--surface)", overflow: "hidden" }}>
            <div style={{ display: "flex", justifyContent: "space-between", gap: "10px", padding: "12px 18px", borderBottom: "1px solid var(--bd2)", fontFamily: "'Space Mono',monospace", fontSize: "11px", letterSpacing: ".14em", textTransform: "uppercase", color: "var(--faint)" }}><span>NV-03 · Footer</span><span>Deep band</span></div>
            <div style={{ padding: "26px 22px", backgroundImage: "linear-gradient(var(--grid) 1px,transparent 1px),linear-gradient(90deg,var(--grid) 1px,transparent 1px)", backgroundSize: "32px 32px" }}>
              <div style={{ borderRadius: "14px", background: "var(--deep2)", padding: "30px 28px 20px", color: "var(--deep-ink)" }}>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "26px 40px", justifyContent: "space-between", paddingBottom: "24px", borderBottom: "1px solid rgba(255,255,255,.1)" }}>
                  <div style={{ maxWidth: "230px" }}>
                    <img src="/assets/logo-dark.png" alt="D-ALabs" style={{ height: "22px", width: "auto", filter: "brightness(0) invert(1)" }} />
                    <p style={{ margin: "12px 0 0", color: "var(--deep-faint)", fontSize: "13.5px", lineHeight: "1.55" }}>An applied AI lab turning frontier research into products people trust.</p>
                  </div>
                  <div style={{ display: "flex", gap: "40px" }}>
                    <div><div style={{ fontFamily: "'Space Mono',monospace", fontSize: "10.5px", letterSpacing: ".16em", textTransform: "uppercase", color: "var(--deep-faint)", marginBottom: "10px" }}>Company</div><div style={{ display: "flex", flexDirection: "column", gap: "7px", fontSize: "13.5px", color: "var(--deep-sub)" }}><a href="#nvg" className="hov-deep-ink" style={{ transition: "color .2s" }}>About</a><a href="#nvg" className="hov-deep-ink" style={{ transition: "color .2s" }}>Work</a><a href="#nvg" className="hov-deep-ink" style={{ transition: "color .2s" }}>Notes</a></div></div>
                    <div><div style={{ fontFamily: "'Space Mono',monospace", fontSize: "10.5px", letterSpacing: ".16em", textTransform: "uppercase", color: "var(--deep-faint)", marginBottom: "10px" }}>Connect</div><div style={{ display: "flex", flexDirection: "column", gap: "7px", fontSize: "13.5px", color: "var(--deep-sub)" }}><a href="#nvg" className="hov-deep-ink" style={{ transition: "color .2s" }}>hello@d-alabs.com</a><a href="#nvg" className="hov-deep-ink" style={{ transition: "color .2s" }}>LinkedIn</a><a href="#nvg" className="hov-deep-ink" style={{ transition: "color .2s" }}>GitHub</a></div></div>
                  </div>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", justifyContent: "space-between", paddingTop: "14px", fontSize: "12px", color: "var(--deep-faint)" }}><span>© 2026 D-ALabs</span><span style={{ fontFamily: "'Space Mono',monospace", letterSpacing: ".04em" }}>Built for the curious.</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
