"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle(){
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(()=>setMounted(true), []);
  if(!mounted) return null;

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={()=> setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle color theme"
      className="fixed right-4 bottom-4 z-[70] flex items-center gap-2 rounded-full border px-3 py-2 shadow-lg backdrop-blur"
      style={{
        borderColor: "color-mix(in oklab, var(--color-fg) 18%, transparent)",
        background: "color-mix(in oklab, var(--color-bg) 70%, transparent)"
      }}
    >
      {/* sun */}
      <svg width="16" height="16" viewBox="0 0 24 24" className={!isDark ? "" : "opacity-40"} aria-hidden>
        <path d="M12 4V2m0 20v-2M4 12H2m20 0h-2M5.64 5.64L4.22 4.22m15.56 15.56-1.42-1.42M18.36 5.64l1.42-1.42M5.64 18.36 4.22 19.78" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" fill="none"/>
      </svg>

      {/* track */}
      <span
        className="relative w-10 h-5 rounded-full border"
        style={{ borderColor:"color-mix(in oklab, var(--color-fg) 18%, transparent)" }}
      >
        <span
          className="absolute left-0.5 top-1/2 -translate-y-1/2 h-4 w-4 rounded-full transition-transform"
          style={{
            background:"var(--color-fg)",
            // 20px travel: track 40 - (2px + 2px padding) - knob 16 = 20
            transform: `translateX(${isDark ? 20 : 0}px)`
          }}
        />
      </span>

      {/* moon */}
      <svg width="16" height="16" viewBox="0 0 24 24" className={isDark ? "" : "opacity-40"} aria-hidden>
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      </svg>
    </button>
  );
}
