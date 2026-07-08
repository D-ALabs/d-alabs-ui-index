export type ThemeName = "Lab" | "Dark" | "Ark";

export interface Accent {
  name: string;
  hex: string;
}

export const labAccents: Accent[] = [
  { name: "Monochrome", hex: "#16202E" },
  { name: "Mint", hex: "#13B981" },
  { name: "Blue", hex: "#3B6FE0" },
  { name: "Amber", hex: "#D98A2B" },
];

export const arkAccents: Accent[] = [
  { name: "Gold", hex: "#D9AE63" },
  { name: "Amber", hex: "#E2A338" },
  { name: "Ivory", hex: "#E9E1CC" },
  { name: "Bronze", hex: "#C98C49" },
];

export const darkAccents: Accent[] = [
  { name: "Paper", hex: "#EEEAE0" },
  { name: "Mint", hex: "#13B981" },
  { name: "Blue", hex: "#3B6FE0" },
  { name: "Amber", hex: "#D98A2B" },
];

export interface Capability {
  title: string;
  d: string;
  t: string[];
}

export const caps: Capability[] = [
  {
    title: "Applied research",
    d: "We turn frontier papers into systems you can ship — grounded in measurement, not vibes. Evaluation harnesses come first, then the models that beat them.",
    t: ["Evals & benchmarks", "Fine-tuning", "RAG / retrieval", "Agentic workflows"],
  },
  {
    title: "ML engineering",
    d: "Production pipelines that stay fast and observable under real load. From data ingestion to deploy, with the guardrails that keep models honest.",
    t: ["Inference at scale", "Observability", "Data pipelines", "Guardrails"],
  },
  {
    title: "Product design",
    d: "Interfaces that make intelligence legible. We design for trust and uncertainty — not just the happy-path output.",
    t: ["Interaction design", "Prototyping", "Design systems", "Trust & UX"],
  },
  {
    title: "AI strategy",
    d: "Where to apply AI, where not to, and how to sequence it. A roadmap your team can actually execute — and the enablement to own it.",
    t: ["Opportunity mapping", "Roadmaps", "Build vs. buy", "Team enablement"],
  },
];

export interface Faq {
  q: string;
  a: string;
}

export const faqs: Faq[] = [
  {
    q: "How fast is a first prototype?",
    a: "Median nine weeks from kickoff to a working proof, measured on your real data — not a demo dataset.",
  },
  {
    q: "Who owns the code and the models?",
    a: "You do. Everything ships into your repos, your cloud, your keys. We hand over the eval harness too.",
  },
  {
    q: "What if AI is the wrong answer?",
    a: "We say so early. A meaningful share of our sprints end with a cheaper, simpler recommendation.",
  },
];

export interface SectionDef {
  id: string;
  num: string;
  name: string;
}

export const sections: SectionDef[] = [
  { id: "fnd", num: "01", name: "Foundations" },
  { id: "typ", num: "02", name: "Typography" },
  { id: "btn", num: "03", name: "Buttons" },
  { id: "bdg", num: "04", name: "Badges & meta" },
  { id: "crd", num: "05", name: "Cards" },
  { id: "nvg", num: "06", name: "Navigation" },
  { id: "frm", num: "07", name: "Forms" },
  { id: "fbk", num: "08", name: "Feedback" },
  { id: "dat", num: "09", name: "Data display" },
  { id: "int", num: "10", name: "Interactive" },
  { id: "mot", num: "11", name: "Motion" },
  { id: "pat", num: "12", name: "Patterns" },
];

export const themes: Record<ThemeName, Record<string, string>> = {
  Lab: {
    bg: "#F5F2EA", surface: "#FCFBF7", surface2: "rgba(252,251,247,.55)", deep: "#16202E", deep2: "#0E1620",
    panel: "#16202E", "panel-bd": "rgba(0,0,0,0)", ink: "#16202E", ink2: "#1B2737", sub: "#54606E", faint: "#8A93A0",
    bd: "#E4DECF", bd2: "#E9E4D8", "bd-hov": "#CDC6B5", stat: "#16202E",
    grid: "rgba(22,32,46,.05)", "grid-deep": "rgba(255,255,255,.04)",
    "deep-ink": "#EEEAE0", "deep-sub": "#AEB6C0", "deep-faint": "#97A1AD",
    "chip-bd": "rgba(238,234,224,.18)", "chip-bg": "rgba(238,234,224,.04)", "chip-tx": "#D7DCE2",
    "pill-bd": "#E0DAC9", "pill-tx": "#6B7480", marq: "rgba(22,32,46,.4)", "input-bd": "rgba(255,255,255,.16)",
    "av-bg": "#16202E", "av-tx": "#F5F2EA", "av-bd": "rgba(0,0,0,0)",
    "sh-card": "0 26px 52px -32px rgba(22,32,46,.42)",
    "show-ld": "block", "show-ll": "none", "logo-f": "none", "show-fn": "block", "show-fg": "none", bubble: "#EFEBE0", "flask-fx": "invert(0)",
  },
  Dark: {
    bg: "#0D1522", surface: "#131D2D", surface2: "rgba(19,29,45,.55)", deep: "#080F1A", deep2: "#060B14",
    panel: "#0A1424", "panel-bd": "rgba(237,232,220,.12)", ink: "#EDE8DC", ink2: "#E4DFD2", sub: "#93A1B3", faint: "#6C7A8C",
    bd: "rgba(237,232,220,.14)", bd2: "rgba(237,232,220,.09)", "bd-hov": "rgba(237,232,220,.32)", stat: "#EDE8DC",
    grid: "rgba(237,232,220,.05)", "grid-deep": "rgba(255,255,255,.04)",
    "deep-ink": "#EDE8DC", "deep-sub": "#A5B1C0", "deep-faint": "#7E8A99",
    "chip-bd": "rgba(237,232,220,.18)", "chip-bg": "rgba(237,232,220,.05)", "chip-tx": "#D7DCE2",
    "pill-bd": "rgba(237,232,220,.22)", "pill-tx": "#A5B1C0", marq: "rgba(237,232,220,.4)", "input-bd": "rgba(237,232,220,.18)",
    "av-bg": "#EDE8DC", "av-tx": "#16202E", "av-bd": "rgba(0,0,0,0)",
    "sh-card": "0 28px 54px -30px rgba(0,0,0,.7)",
    "show-ld": "block", "show-ll": "none", "logo-f": "invert(1)", "show-fn": "block", "show-fg": "none", bubble: "#10141F", "flask-fx": "invert(1)",
  },
  Ark: {
    bg: "#081426", surface: "#0E1D34", surface2: "rgba(11,26,48,.5)", deep: "#050E1D", deep2: "#04101F",
    panel: "#0A1830", "panel-bd": "rgba(217,174,99,.18)", ink: "#F4EEE0", ink2: "#EBE6D8", sub: "#9FB1C6", faint: "#6E8198",
    bd: "rgba(217,174,99,.22)", bd2: "rgba(217,174,99,.13)", "bd-hov": "rgba(217,174,99,.45)", stat: "#E8C074",
    grid: "rgba(217,174,99,.06)", "grid-deep": "rgba(217,174,99,.05)",
    "deep-ink": "#EBE6D8", "deep-sub": "#9FB1C6", "deep-faint": "#7E8EA2",
    "chip-bd": "rgba(217,174,99,.22)", "chip-bg": "rgba(217,174,99,.05)", "chip-tx": "#D7C8A4",
    "pill-bd": "rgba(217,174,99,.28)", "pill-tx": "#9FB1C6", marq: "rgba(199,207,218,.42)", "input-bd": "rgba(217,174,99,.22)",
    "av-bg": "#0A1426", "av-tx": "#E8C074", "av-bd": "rgba(217,174,99,.38)",
    "sh-card": "0 28px 54px -30px rgba(0,0,0,.75)",
    "show-ld": "none", "show-ll": "block", "logo-f": "none", "show-fn": "none", "show-fg": "block", bubble: "#0E1D34", "flask-fx": "invert(1)",
  },
};
