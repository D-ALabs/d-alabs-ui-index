"use client";

import { useUI } from "../context";

export default function ConfirmModal() {
  const ui = useUI();
  return (
    ui.modalOpen && (
      <div
        onClick={ui.closeOnOverlay}
        style={{
          position: "fixed",
          inset: "0",
          zIndex: 10001,
          background: "rgba(6,12,20,.55)",
          WebkitBackdropFilter: "blur(7px)",
          backdropFilter: "blur(7px)",
          display: "grid",
          placeItems: "center",
          padding: "20px",
        }}
      >
        <div
          style={{
            position: "relative",
            width: "min(460px,94vw)",
            background: "var(--surface)",
            border: "1px solid var(--bd)",
            borderRadius: "18px",
            padding: "34px 32px 28px",
            boxShadow: "0 40px 90px -40px rgba(0,0,0,.6)",
          }}
        >
          <button
            onClick={ui.closeModal}
            aria-label="Close"
            style={{
              position: "absolute",
              top: "14px",
              right: "14px",
              width: "38px",
              height: "38px",
              border: "1px solid var(--bd)",
              borderRadius: "10px",
              background: "var(--surface2)",
              fontSize: "19px",
              color: "var(--ink)",
              cursor: "pointer",
            }}
          >
            ×
          </button>
          <div
            style={{
              fontFamily: "'Space Mono',monospace",
              fontSize: "11.5px",
              letterSpacing: ".18em",
              textTransform: "uppercase",
              color: "var(--accent)",
            }}
          >
            <span style={{ opacity: ".5" }}>[</span>&nbsp; Confirm &nbsp;<span style={{ opacity: ".5" }}>]</span>
          </div>
          <h3
            style={{
              fontFamily: "'Space Grotesk',sans-serif",
              fontWeight: 600,
              fontSize: "1.5rem",
              letterSpacing: "-.02em",
              margin: "16px 0 0",
              color: "var(--ink)",
            }}
          >
            Archive this experiment?
          </h3>
          <p style={{ margin: "12px 0 0", color: "var(--sub)", fontSize: "1rem", lineHeight: "1.6" }}>
            Runs, evals, and notes stay readable. The experiment simply stops accepting new traffic.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginTop: "26px" }}>
            <button
              onClick={ui.closeModal}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "13px 22px",
                borderRadius: "11px",
                border: "none",
                background: "var(--accent)",
                color: "var(--accent-ink)",
                fontSize: "15px",
                fontWeight: 600,
                cursor: "pointer",
                boxShadow: "var(--sh-btn)",
              }}
            >
              Archive it<span style={{ fontSize: "16px", lineHeight: "1" }}>→</span>
            </button>
            <button
              onClick={ui.closeModal}
              style={{
                display: "inline-flex",
                alignItems: "center",
                padding: "13px 20px",
                borderRadius: "11px",
                border: "1px solid var(--bd-hov)",
                background: "transparent",
                color: "var(--ink)",
                fontSize: "15px",
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              Keep running
            </button>
          </div>
        </div>
      </div>
    )
  );
}
