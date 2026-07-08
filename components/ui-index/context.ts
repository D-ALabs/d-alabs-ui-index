"use client";

import { createContext, useContext } from "react";

export interface NavItem {
  num: string;
  name: string;
  href: string;
  col: string;
  numCol: string;
  bg: string;
  w: number;
}

export interface CapTab {
  name: string;
  on: () => void;
  col: string;
  bd: string;
  bg: string;
  dot: string;
}

export interface FaqItem {
  q: string;
  a: string;
  on: () => void;
  sym: string;
  bodyDisplay: string;
}

export interface AccentDot {
  name: string;
  hex: string;
  on: () => void;
  bd: string;
  sh: string;
}

export interface UIContextValue {
  year: number;
  navBg: string;
  navBlur: string;
  navBorder: string;
  navShadow: string;
  metaDisplay: string;
  railDisplay: string;
  setLab: () => void;
  setDrk: () => void;
  setArk: () => void;
  segLabBg: string;
  segLabCol: string;
  segDrkBg: string;
  segDrkCol: string;
  segArkBg: string;
  segArkCol: string;
  navItems: NavItem[];
  capList: CapTab[];
  capTitle: string;
  capDesc: string;
  capTags: string[];
  capIndexLabel: string;
  joined: boolean;
  notJoined: boolean;
  joinWaitlist: (e: React.FormEvent) => void;
  resetWaitlist: () => void;
  copied: boolean;
  toastMsg: string;
  copyHex: (e: React.MouseEvent<HTMLElement>) => void;
  replayAnim: (e: React.MouseEvent<HTMLElement>) => void;
  replayCount: (e: React.MouseEvent<HTMLElement>) => void;
  switchBg: string;
  knobX: string;
  switchLabel: string;
  toggleSwitch: () => void;
  showToastDemo: () => void;
  modalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
  closeOnOverlay: (e: React.MouseEvent<HTMLElement>) => void;
  faqList: FaqItem[];
  accentDots: AccentDot[];
  accentLabel: string;
}

export const UIContext = createContext<UIContextValue | null>(null);

export function useUI(): UIContextValue {
  const ctx = useContext(UIContext);
  if (!ctx) throw new Error("useUI must be used within UIIndexApp");
  return ctx;
}
