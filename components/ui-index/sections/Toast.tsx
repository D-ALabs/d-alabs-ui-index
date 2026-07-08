"use client";

import { useUI } from "../context";

export default function Toast() {
  const ui = useUI();
  return (
    <>
      {ui.copied && (
        <div
          style={{
            position: "fixed",
            bottom: "26px",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 10000,
            display: "flex",
            alignItems: "center",
            gap: "9px",
            padding: "11px 20px",
            borderRadius: "100px",
            background: "var(--deep)",
            color: "var(--deep-ink)",
            fontFamily: "'Space Mono',monospace",
            fontSize: "12px",
            letterSpacing: ".12em",
            boxShadow: "0 18px 44px -18px rgba(0,0,0,.55)",
          }}
        >
          <span
            style={{
              width: "7px",
              height: "7px",
              borderRadius: "50%",
              background: "var(--deep-ink)",
            }}
          ></span>{ui.toastMsg}
        </div>
      )}
    </>
  );
}
