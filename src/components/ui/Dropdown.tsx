"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Link from "next/link";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import type { Menu } from "@/lib/menus";

type Coords = { top: number; left: number; triggerW: number };

const MIN_W = 150;       // aesthetic minimum width
const MAX_W = 420;       // optional max (long text will wrap)
const GAP   = 10;        // space from trigger

export default function Dropdown({ menu }: { menu: Menu }) {
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const panelRef   = useRef<HTMLDivElement | null>(null);

  const [open, setOpen] = useState(false);
  const [coords, setCoords] = useState<Coords | null>(null);

  // measure trigger rect
  const measureTrigger = () => {
    const el = triggerRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    setCoords({ top: r.bottom + GAP, left: r.left, triggerW: r.width });
  };

  // open on hover/focus with measurement
  const openMenu = () => {
    measureTrigger();
    setOpen(true);
  };

  // hover intent to prevent flicker when traversing to panel
  let closeTimer: ReturnType<typeof setTimeout> | null = null;
  const scheduleClose = () => {
    if (closeTimer) clearTimeout(closeTimer);
    closeTimer = setTimeout(() => setOpen(false), 120);
  };
  const cancelClose = () => {
    if (closeTimer) clearTimeout(closeTimer);
  };

  // clamp left after the panel has an actual width
  const clampToViewport = () => {
    if (!coords) return;
    const panelW = Math.max(
      MIN_W,
      Math.min(panelRef.current?.offsetWidth ?? coords.triggerW, MAX_W)
    );
    const vw = window.innerWidth;
    const clampedLeft = Math.min(
      Math.max(8, coords.left),                 // keep a small margin
      vw - panelW - 8
    );
    // set again only if changed to avoid loops
    if (clampedLeft !== coords.left) {
      setCoords({ ...coords, left: clampedLeft });
    }
  };

  // after mount/update when open, clamp based on actual width
  useLayoutEffect(() => {
    if (open) clampToViewport();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  // recalc on resize/scroll while open
  useEffect(() => {
    if (!open) return;
    const onChange = () => {
      measureTrigger();
      // next frame, clamp using latest panel width
      requestAnimationFrame(clampToViewport);
    };
    window.addEventListener("resize", onChange);
    window.addEventListener("scroll", onChange, true);
    return () => {
      window.removeEventListener("resize", onChange);
      window.removeEventListener("scroll", onChange, true);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  // close on ESC
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // computed panel styles
  const panelWidth = Math.max(MIN_W, Math.min(coords?.triggerW ?? MIN_W, MAX_W));

  return (
    <>
      <button
        ref={triggerRef}
        onMouseEnter={openMenu}
        onFocus={openMenu}
        onMouseLeave={scheduleClose}
        className="px-3 py-2 rounded-xl text-sm font-medium hover:bg-black/5 dark:hover:bg-white/5 transition"
        aria-haspopup="menu"
        aria-expanded={open}
      >
        {menu.title}
      </button>

      {typeof document !== "undefined" &&
        createPortal(
          <AnimatePresence>
            {open && coords && (
              <motion.div
                ref={panelRef}
                onMouseEnter={cancelClose}
                onMouseLeave={scheduleClose}
                role="menu"
                initial={{ opacity: 0, scale: 0.98, y: 4 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98, y: 4 }}
                transition={{ duration: 0.12, ease: "easeOut" }}
                className="rounded-2xl border bg-[var(--color-bg)] elev-2 overflow-hidden"
                style={{
                  position: "fixed",
                  top: coords.top,
                  left: coords.left,      // gets clamped after first paint
                  minWidth: panelWidth,   // fixed nice width
                  maxWidth: MAX_W,
                  zIndex: 80,
                  borderColor:
                    "color-mix(in oklab, var(--color-fg) 18%, transparent)",
                }}
              >
                <ul className="py-2">
                  {menu.items.map((it) => (
                    <li key={it.href}>
                      <Link
                        href={it.href}
                        role="menuitem"
                        onClick={() => setOpen(false)}
                        className="block px-4 py-2 text-sm hover:bg-black/5 dark:hover:bg-white/10"
                      >
                        {it.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </>
  );
}
