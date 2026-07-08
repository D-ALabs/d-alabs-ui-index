"use client";

import { useUI } from "../context";

export default function SideRail() {
  const ui = useUI();
  return (
    <aside style={{ display: ui.railDisplay, flex: "0 0 192px", position: "sticky", top: "96px", paddingTop: "150px" }}>
      <div style={{ fontFamily: "'Space Mono',monospace", fontSize: "11px", letterSpacing: ".18em", textTransform: "uppercase", color: "var(--faint)", paddingBottom: "14px", borderBottom: "1px solid var(--bd2)", marginBottom: "14px" }}>Index</div>
      <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
        {ui.navItems.map((it, i) => (
          <a key={i} href={it.href} className="hov-ink" style={{ display: "flex", alignItems: "center", gap: "11px", padding: "8px 10px", marginLeft: "-10px", borderRadius: "9px", fontSize: "14px", fontWeight: it.w, color: it.col, background: it.bg, transition: "color .25s, background-color .25s" }}>
            <span style={{ fontFamily: "'Space Mono',monospace", fontSize: "11px", letterSpacing: ".06em", color: it.numCol }}>{it.num}</span>{it.name}
          </a>
        ))}
      </div>
      <div style={{ marginTop: "26px", paddingTop: "16px", borderTop: "1px solid var(--bd2)", fontFamily: "'Space Mono',monospace", fontSize: "10.5px", letterSpacing: ".1em", lineHeight: "2", color: "var(--faint)", textTransform: "uppercase" }}>Sources<br /><span style={{ color: "var(--sub)" }}>d-alabs.com</span><br /><span style={{ color: "var(--sub)" }}>d-alabs · ark</span></div>
    </aside>
  );
}
