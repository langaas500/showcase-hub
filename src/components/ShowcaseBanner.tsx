"use client";

import { useState, useEffect } from "react";

const STORAGE_KEY = "sbl_showcase_banner_dismissed";

export default function ShowcaseBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY) !== "1") {
      setVisible(true);
    }
  }, []);

  if (!visible) return null;

  function dismiss() {
    sessionStorage.setItem(STORAGE_KEY, "1");
    setVisible(false);
  }

  return (
    <div className="relative bg-gray-900/90 backdrop-blur border-b border-white/10 px-4 py-2.5">
      <div className="mx-auto max-w-5xl flex items-center justify-center gap-3 flex-wrap text-sm">
        <span className="inline-block bg-white/15 text-white text-[11px] font-semibold tracking-wider uppercase px-2.5 py-0.5 rounded-full">
          Showcase
        </span>
        <span className="text-white/70">
          Eksempel på ferdig håndverkerside. Leveres med ditt navn, fag og
          telefon.
        </span>
      </div>
      <button
        onClick={dismiss}
        aria-label="Lukk showcase-banner"
        className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white transition-colors text-lg leading-none p-1"
      >
        &times;
      </button>
    </div>
  );
}
