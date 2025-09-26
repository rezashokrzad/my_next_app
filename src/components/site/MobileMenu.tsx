"use client";
import Link from "next/link";
import { NAV_MENUS } from "@/lib/menus";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function MobileMenu(){
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        aria-label="Open menu"
        onClick={()=>setOpen(true)}
        className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg border"
        style={{ borderColor: "color-mix(in oklab, var(--color-fg) 18%, transparent)" }}
        >
        <span className="flex flex-col items-center justify-center gap-1.5">
            <span className="block w-6 h-0.5 rounded-full bg-[var(--color-fg)]" />
            <span className="block w-6 h-0.5 rounded-full bg-[var(--color-fg)]" />
            <span className="block w-6 h-0.5 rounded-full bg-[var(--color-fg)]" />
        </span>
        </button>


      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 z-[60] bg-black/40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={()=>setOpen(false)}
            />
            <motion.aside
              className="fixed inset-y-0 right-0 z-[61] w-80 max-w-[85vw] bg-[var(--color-bg)] border-l p-4"
              style={{ borderColor: "color-mix(in oklab, var(--color-fg) 18%, transparent)" }}
              initial={{ x: 40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 40, opacity: 0 }}
              transition={{ type: "tween", duration: .18 }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="text-sm font-semibold opacity-70">Menu</div>
                <button className="text-sm px-3 py-1 rounded-xl border"
                        onClick={()=>setOpen(false)}
                        style={{ borderColor: "color-mix(in oklab, var(--color-fg) 18%, transparent)" }}>
                  Close
                </button>
              </div>

              <nav className="space-y-4">
                {NAV_MENUS.map((m)=>(
                  <div key={m.title}>
                    <div className="text-xs uppercase tracking-wide opacity-60 mb-2">{m.title}</div>
                    {Array.isArray(m.items) && m.items.length > 0 && (
                        <ul className="space-y-1.5">
                          {m.items.map((it) => (
                            <li key={it.href}>
                              <Link href={it.href} className="block px-3 py-2 rounded-xl hover:bg-black/5 dark:hover:bg-white/10">
                                {it.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                  </div>
                ))}
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
