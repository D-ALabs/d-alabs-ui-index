"use client";

import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
} from "react";
import { UIContext, type UIContextValue } from "./context";
import {
  arkAccents,
  caps,
  darkAccents,
  faqs,
  labAccents,
  sections,
  themes,
  type ThemeName,
} from "./data";
import Nav from "./sections/Nav";
import Toast from "./sections/Toast";
import ConfirmModal from "./sections/ConfirmModal";
import SideRail from "./sections/SideRail";
import Hero from "./sections/Hero";
import Foundations from "./sections/Foundations";
import Typography from "./sections/Typography";
import Buttons from "./sections/Buttons";
import Badges from "./sections/Badges";
import Cards from "./sections/Cards";
import NavigationSection from "./sections/NavigationSection";
import Forms from "./sections/Forms";
import Feedback from "./sections/Feedback";
import DataDisplay from "./sections/DataDisplay";
import Interactive from "./sections/Interactive";
import MotionSection from "./sections/MotionSection";
import Patterns from "./sections/Patterns";
import Footer from "./sections/Footer";
import { applyThemeChrome } from "./themeChrome";

const GRAIN_URL =
  "url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22140%22 height=%22140%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%222%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22/%3E%3C/svg%3E')";

function hexA(hex: string, a: number): string {
  const n = parseInt(hex.slice(1), 16);
  return (
    "rgba(" + ((n >> 16) & 255) + "," + ((n >> 8) & 255) + "," + (n & 255) + "," + a + ")"
  );
}

type Countable = HTMLElement & { _c?: boolean };
type Magnetic = HTMLElement & { _m?: boolean };

export default function UIIndexApp() {
  const [theme, setTheme] = useState<ThemeName>("Lab");
  const [labAccent, setLabAccent] = useState("Monochrome");
  const [darkAccent, setDarkAccent] = useState("Paper");
  const [arkAccent, setArkAccent] = useState("Gold");
  const [cap, setCap] = useState(0);
  const [joined, setJoined] = useState(false);
  const [copied, setCopied] = useState(false);
  const [toastMsg, setToastMsg] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [switchOn, setSwitchOn] = useState(true);
  const [faq, setFaq] = useState(0);
  const [active, setActive] = useState("fnd");
  const [scrolled, setScrolled] = useState(false);
  const [isNarrow, setIsNarrow] = useState(false);

  const toastT = useRef<ReturnType<typeof setTimeout> | null>(null);

  const lab = theme === "Lab";
  const dark = theme === "Dark";
  const ark = theme === "Ark";
  const t = themes[theme];

  const accents = lab ? labAccents : dark ? darkAccents : arkAccents;
  const curAcc = lab ? labAccent : dark ? darkAccent : arkAccent;
  const acc = (accents.find((a) => a.name === curAcc) || accents[0]).hex;
  const accentInk = lab ? "#F5F2EA" : dark ? "#16202E" : "#081426";
  const soft = lab && acc === "#16202E" ? "rgba(22,32,46,.08)" : hexA(acc, 0.15);
  const shBtn = lab
    ? "0 12px 30px -14px " + hexA(acc, 0.75)
    : dark
      ? "0 14px 34px -16px " + hexA(acc, 0.35)
      : "0 14px 34px -16px " + hexA(acc, 0.85);

  const motionOn = useCallback(() => {
    if (
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return false;
    return true;
  }, []);

  const countUp = useCallback((el: HTMLElement, target: number) => {
    const dec = parseInt(el.getAttribute("data-dec") || "0", 10);
    const dur = 1300;
    const start = performance.now();
    const fmt = (v: number) =>
      v.toLocaleString("en-US", { minimumFractionDigits: dec, maximumFractionDigits: dec });
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / dur);
      el.textContent = fmt(target * (1 - Math.pow(1 - p, 3)));
      if (p < 1) requestAnimationFrame(tick);
      else el.textContent = fmt(target);
    };
    requestAnimationFrame(tick);
  }, []);

  const checkCounts = useCallback(() => {
    if (!motionOn()) return;
    const vh = window.innerHeight || 800;
    document.querySelectorAll<Countable>("[data-count]").forEach((el) => {
      if (el._c) return;
      const r = el.getBoundingClientRect();
      if (r.bottom > 4 && r.top < vh * 0.88) {
        el._c = true;
        countUp(el, parseFloat(el.getAttribute("data-count") || "0"));
      }
    });
  }, [countUp, motionOn]);

  const applyMotion = useCallback(() => {
    const on = motionOn();
    document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((el) => {
      if (!on) {
        el.style.animation = "none";
        el.style.opacity = "1";
        el.style.transform = "none";
      }
    });
    document.querySelectorAll<HTMLElement>("[data-loop]").forEach((el) => {
      el.style.animationPlayState = on ? "running" : "paused";
    });
    document.querySelectorAll<SVGSVGElement>("#dal-root svg").forEach((s) => {
      try {
        if (on) {
          s.unpauseAnimations();
        } else {
          s.pauseAnimations();
        }
      } catch {}
    });
  }, [motionOn]);

  const setupMagnetic = useCallback(() => {
    document.querySelectorAll<Magnetic>("[data-magnetic]").forEach((el) => {
      if (el._m) return;
      el._m = true;
      el.addEventListener("mousemove", (ev: MouseEvent) => {
        const r = el.getBoundingClientRect();
        el.style.transform =
          "translate(" +
          (ev.clientX - (r.left + r.width / 2)) * 0.16 +
          "px," +
          (ev.clientY - (r.top + r.height / 2)) * 0.26 +
          "px)";
      });
      el.addEventListener("mouseleave", () => {
        el.style.transform = "translate(0,0)";
      });
    });
  }, []);

  // Keep the document body in sync with the active skin.
  useEffect(() => {
    document.body.style.background = t.bg;
  }, [t]);

  // Keep the favicon + browser chrome (theme-color, color-scheme) in sync with
  // the active skin — the navy-flask icon on the light Lab skin, the cream-flask
  // icon on the dark Dark/Ark skins. Runs on mount and on every theme change.
  useEffect(() => {
    applyThemeChrome(theme);
  }, [theme]);

  // Mount: scroll/resize listeners, scrollspy observer, staggered count checks.
  useEffect(() => {
    let raf: number | null = null;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = null;
        const sc = (window.scrollY || 0) > 24;
        checkCounts();
        setScrolled(sc);
      });
    };
    const onResize = () => {
      setIsNarrow(window.innerWidth <= 1060);
    };
    onResize();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.getAttribute("data-spy") || "");
        });
      },
      { rootMargin: "-38% 0px -55% 0px" },
    );
    document.querySelectorAll("[data-spy]").forEach((el) => spy.observe(el));
    const timers = [150, 600, 1400].map((ms) => setTimeout(() => checkCounts(), ms));
    const toastTimer = toastT;
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      spy.disconnect();
      timers.forEach((id) => clearTimeout(id));
      if (raf) cancelAnimationFrame(raf);
      if (toastTimer.current) clearTimeout(toastTimer.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // componentDidUpdate parity: re-arm motion, magnetic and counters every render.
  useEffect(() => {
    applyMotion();
    setupMagnetic();
    checkCounts();
  });

  const rootStyle = useMemo(() => {
    const vars: Record<string, string> = {};
    Object.keys(t).forEach((k) => {
      vars["--" + k] = t[k];
    });
    vars["--accent"] = acc;
    vars["--accent-ink"] = accentInk;
    vars["--accent-soft"] = soft;
    vars["--orbit-bg"] = "transparent";
    vars["--orbit-grid"] = t.grid;
    vars["--orbit-ink"] = t.ink;
    vars["--orbit-accent"] = acc;
    vars["--orbit-soft"] = soft;
    vars["--sh-btn"] = shBtn;
    vars["--liquid"] = ark ? "#E8C074" : dark ? "#E9DFD1" : "#16202E";
    vars["--inv-bg"] = ark ? acc : "#F5F2EA";
    vars["--inv-tx"] = ark ? "#081426" : "#16202E";
    return {
      position: "relative",
      overflowX: "clip",
      minHeight: "100vh",
      background: "var(--bg)",
      color: "var(--ink)",
      transition: "background-color .45s ease, color .45s ease",
      ...vars,
    } as CSSProperties;
  }, [t, acc, accentInk, soft, shBtn, ark, dark]);

  const grainStyle: CSSProperties = {
    position: "fixed",
    inset: 0,
    zIndex: 9999,
    pointerEvents: "none",
    opacity: lab ? 0.04 : 0.05,
    mixBlendMode: lab ? "multiply" : "screen",
    backgroundImage: GRAIN_URL,
  };

  const c = cap;
  const capItem = caps[c] || caps[0];
  const accKeySetter = lab ? setLabAccent : dark ? setDarkAccent : setArkAccent;

  const value: UIContextValue = {
    year: new Date().getFullYear(),
    navBg: scrolled
      ? lab
        ? "rgba(245,242,234,0.82)"
        : dark
          ? "rgba(19,29,42,0.82)"
          : "rgba(8,20,38,0.82)"
      : "rgba(0,0,0,0)",
    navBlur: scrolled ? "saturate(150%) blur(14px)" : "none",
    navBorder: scrolled
      ? "1px solid " +
        (lab ? "#E3DDCF" : dark ? "rgba(238,234,224,.14)" : "rgba(217,174,99,0.16)")
      : "1px solid transparent",
    navShadow: scrolled
      ? lab
        ? "0 1px 0 rgba(22,32,46,.04), 0 10px 34px -22px rgba(22,32,46,.5)"
        : "0 1px 0 rgba(0,0,0,.2), 0 10px 34px -22px rgba(0,0,0,.7)"
      : "none",
    metaDisplay: isNarrow ? "none" : "inline",
    railDisplay: isNarrow ? "none" : "block",
    setLab: () => setTheme("Lab"),
    setDrk: () => setTheme("Dark"),
    setArk: () => setTheme("Ark"),
    segLabBg: lab ? "var(--accent)" : "transparent",
    segLabCol: lab ? "var(--accent-ink)" : "var(--faint)",
    segDrkBg: dark ? "var(--accent)" : "transparent",
    segDrkCol: dark ? "var(--accent-ink)" : "var(--faint)",
    segArkBg: ark ? "var(--accent)" : "transparent",
    segArkCol: ark ? "var(--accent-ink)" : "var(--faint)",
    navItems: sections.map((s) => ({
      num: s.num,
      name: s.name,
      href: "#" + s.id,
      col: active === s.id ? "var(--ink)" : "var(--sub)",
      numCol: active === s.id ? "var(--accent)" : "var(--faint)",
      bg: active === s.id ? "var(--surface2)" : "transparent",
      w: active === s.id ? 600 : 500,
    })),
    capList: caps.map((x, i) => ({
      name: x.title,
      on: () => setCap(i),
      col:
        i === c
          ? lab
            ? "#16202E"
            : dark
              ? "#F5F2EA"
              : "#F2ECDD"
          : lab
            ? "#737D89"
            : dark
              ? "#8A93A0"
              : "#8193A8",
      bd:
        i === c
          ? "var(--accent)"
          : lab
            ? "#E4DECF"
            : dark
              ? "rgba(238,234,224,.14)"
              : "rgba(217,174,99,0.16)",
      bg:
        i === c
          ? lab
            ? "#FFFFFF"
            : dark
              ? "rgba(238,234,224,.08)"
              : "rgba(217,174,99,0.10)"
          : lab
            ? "rgba(252,251,247,.45)"
            : dark
              ? "rgba(26,38,52,.5)"
              : "rgba(12,26,46,0.5)",
      dot: i === c ? "var(--accent)" : lab ? "#C9C2B2" : dark ? "#4A5666" : "#3C4D64",
    })),
    capTitle: capItem.title,
    capDesc: capItem.d,
    capTags: capItem.t,
    capIndexLabel: "0" + (c + 1) + " / 04",
    joined,
    notJoined: !joined,
    joinWaitlist: (e) => {
      if (e && e.preventDefault) e.preventDefault();
      setJoined(true);
    },
    resetWaitlist: () => setJoined(false),
    copied,
    toastMsg,
    copyHex: (e) => {
      const hex = e.currentTarget.getAttribute("data-hex") || "";
      try {
        navigator.clipboard.writeText(hex);
      } catch {}
      if (toastT.current) clearTimeout(toastT.current);
      setCopied(true);
      setToastMsg("COPIED " + hex);
      toastT.current = setTimeout(() => setCopied(false), 1600);
    },
    replayAnim: (e) => {
      const el = e.currentTarget.querySelector<HTMLElement>("[data-anim]");
      if (!el) return;
      const a = el.style.animation || getComputedStyle(el).animation;
      el.style.animation = "none";
      void el.offsetWidth;
      el.style.animation =
        a && a !== "none" ? a : "revealUp .85s cubic-bezier(.16,1,.3,1) both";
    },
    replayCount: (e) => {
      const el = e.currentTarget.querySelector<HTMLElement>("[data-recount]");
      if (el) countUp(el, parseFloat(el.getAttribute("data-recount") || "0"));
    },
    switchBg: switchOn ? "var(--accent)" : "var(--bd)",
    knobX: switchOn ? "21px" : "0px",
    switchLabel: switchOn ? "ON" : "OFF",
    toggleSwitch: () => setSwitchOn((s) => !s),
    showToastDemo: () => {
      if (toastT.current) clearTimeout(toastT.current);
      setCopied(true);
      setToastMsg("CHANGES SAVED — RUN 214");
      toastT.current = setTimeout(() => setCopied(false), 1600);
    },
    modalOpen,
    openModal: () => setModalOpen(true),
    closeModal: () => setModalOpen(false),
    closeOnOverlay: (e) => {
      if (e.target === e.currentTarget) setModalOpen(false);
    },
    faqList: faqs.map((f, i) => ({
      q: f.q,
      a: f.a,
      on: () => setFaq(faq === i ? -1 : i),
      sym: faq === i ? "−" : "+",
      bodyDisplay: faq === i ? "block" : "none",
    })),
    accentDots: accents.map((a) => ({
      name: a.name,
      hex: a.hex,
      on: () => accKeySetter(a.name),
      bd: a.name === curAcc ? "var(--ink)" : "var(--bd)",
      sh: a.name === curAcc ? "0 0 0 3px var(--accent-soft)" : "none",
    })),
    accentLabel: theme + " accent — " + curAcc,
  };

  return (
    <UIContext.Provider value={value}>
      <div id="dal-root" style={rootStyle}>
        <div data-grain="" style={grainStyle} />
        <Nav />
        <Toast />
        <ConfirmModal />
        <div
          id="top"
          style={{
            maxWidth: "1360px",
            margin: "0 auto",
            padding: "0 clamp(20px,4vw,44px)",
            display: "flex",
            gap: "clamp(28px,4vw,56px)",
            alignItems: "flex-start",
          }}
        >
          <SideRail />
          <main style={{ flex: 1, minWidth: 0 }}>
            <Hero />
            <Foundations />
            <Typography />
            <Buttons />
            <Badges />
            <Cards />
            <NavigationSection />
            <Forms />
            <Feedback />
            <DataDisplay />
            <Interactive />
            <MotionSection />
            <Patterns />
            <Footer />
          </main>
        </div>
      </div>
    </UIContext.Provider>
  );
}
