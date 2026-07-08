/* eslint-disable @next/next/no-img-element */
"use client";

import { useUI } from "../context";

export default function Nav() {
  const ui = useUI();
  return (
    <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, transition: "background-color .4s ease, box-shadow .4s ease, border-color .4s ease", background: ui.navBg, WebkitBackdropFilter: ui.navBlur, backdropFilter: ui.navBlur, borderBottom: ui.navBorder, boxShadow: ui.navShadow }}>
      <div style={{ maxWidth: "1360px", margin: "0 auto", padding: "0 clamp(20px,4vw,44px)", height: "68px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "20px" }}>
        <a href="#top" aria-label="D-ALabs UI Index" style={{ display: "flex", alignItems: "center", gap: "13px", minWidth: 0 }}>
          <img src="/assets/logo-dark.png" alt="D-ALabs" style={{ height: "23px", width: "auto", display: "var(--show-ld)", filter: "var(--logo-f)" }} />
          <img src="/assets/logo-light.png" alt="D-ALabs" style={{ height: "23px", width: "auto", display: "var(--show-ll)" }} />
          <span style={{ width: "1px", height: "19px", background: "var(--bd)", flex: "0 0 auto" }}></span>
          <span style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 600, fontSize: "17px", letterSpacing: ".01em", color: "var(--ink)", whiteSpace: "nowrap" }}>UI&nbsp;Index</span>
        </a>
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <span style={{ display: ui.metaDisplay, fontFamily: "'Space Mono',monospace", fontSize: "11px", letterSpacing: ".16em", textTransform: "uppercase", color: "var(--faint)" }}>61 specimens · 3 skins</span>
          <div style={{ display: "flex", alignItems: "center", gap: "4px", padding: "4px", border: "1px solid var(--bd)", borderRadius: "100px", background: "var(--surface2)" }}>
            <button onClick={ui.setLab} style={{ padding: "7px 16px", borderRadius: "100px", border: "none", cursor: "pointer", fontFamily: "'Space Mono',monospace", fontSize: "11.5px", letterSpacing: ".14em", textTransform: "uppercase", transition: "all .3s", background: ui.segLabBg, color: ui.segLabCol }}>Lab</button>
            <button onClick={ui.setDrk} style={{ padding: "7px 16px", borderRadius: "100px", border: "none", cursor: "pointer", fontFamily: "'Space Mono',monospace", fontSize: "11.5px", letterSpacing: ".14em", textTransform: "uppercase", transition: "all .3s", background: ui.segDrkBg, color: ui.segDrkCol }}>Dark</button>
            <button onClick={ui.setArk} style={{ padding: "7px 16px", borderRadius: "100px", border: "none", cursor: "pointer", fontFamily: "'Space Mono',monospace", fontSize: "11.5px", letterSpacing: ".14em", textTransform: "uppercase", transition: "all .3s", background: ui.segArkBg, color: ui.segArkCol }}>Ark</button>
          </div>
        </div>
      </div>
    </nav>
  );
}
