"use client";

import Link from "next/link";
import Container from "@/components/ui/Container";
import Logo from "@/components/site/Logo";
import Dropdown from "@/components/ui/Dropdown";
import { NAV_MENUS } from "@/lib/menus";
import MobileMenu from "@/components/site/MobileMenu";
import { useEffect, useRef, useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const popRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);

  // close search when clicking outside
  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (!open) return;
      const t = e.target as Node;
      if (popRef.current?.contains(t) || btnRef.current?.contains(t)) return;
      setOpen(false);
    }
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, [open]);

  return (
    <header
      id="site-header"
      className="sticky top-0 z-50 bg-transparent shadow-none border-0"
      style={{ isolation: "isolate" }} // ensures header sits above hero blends
    >
      <Container className="flex items-center gap-4 h-20">
        {/* LEFT: logo + title */}
        <div className="flex items-center gap-3 relative z-50">
          <Logo showText />
          {/* <Link
            href="/"
            className="text-lg md:text-xl font-semibold text-[var(--color-ink)] dark:text-[var(--color-main)]"
          >
            Ministry Of Meaning
          </Link> */}
        </div>

        <div className="flex-1" />

        {/* RIGHT: [Menu pill] → [Contact black] → [Search icon] */}
        <div className="hidden md:flex items-center gap-4 relative z-50">
          {/* MENU PILL */}
          <nav
            aria-label="Primary"
            className="relative overflow-visible flex items-center gap-6 h-14 px-5 rounded-2xl border shadow-lg"
            style={{
              // inline CSS variables beat any legacy class tinting
              backgroundColor: "var(--header-pill-bg)",
              color: "var(--header-pill-fg)",
              mixBlendMode: "normal",
              borderColor: "rgb(0 0 0 / 0.10)",
            }}
          >
            {NAV_MENUS.map((m) => 
            m.href ? (
                <Link
                  key={m.title}
                  href={m.href}
                  className="px-3 py-2 rounded-xl font-medium hover:opacity-80 transition"
                >
                  {m.title}
                </Link>
              ) : (
                <Dropdown key={m.title} menu={m} />
              )
            )}
          </nav>

          {/* CONTACT (solid black) */}
          <Link
            href="/contact"
            className="inline-flex h-14 items-center rounded-2xl px-6 font-semibold text-white shadow-lg"
            style={{ backgroundColor: "#121212" }}
          >
            Join Now!
          </Link>


          {/* SEARCH ICON + POPOVER */}
          <div className="relative">
            <button
              ref={btnRef}
              aria-label="Search"
              onClick={() => setOpen((v) => !v)}
              className="grid h-14 w-14 place-items-center rounded-2xl border shadow-lg"
              style={{
                backgroundColor: "var(--header-pill-bg)",
                color: "var(--header-pill-fg)",
                mixBlendMode: "normal",
                borderColor: "rgb(0 0 0 / 0.10)",
              }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
                <path d="M20 20L17 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>

            {open && (
              <div
                ref={popRef}
                role="dialog"
                className="absolute right-0 top-[calc(100%+8px)] w-[28rem] max-w-[85vw] rounded-2xl p-3 border shadow-2xl"
                style={{
                  backgroundColor: "var(--header-pop-bg)",
                  color: "var(--header-pill-fg)",
                  mixBlendMode: "normal",
                  borderColor: "rgb(0 0 0 / 0.10)",
                }}
              >
                <form
                  className="flex items-center gap-3"
                  onSubmit={(e) => {
                    e.preventDefault();
                    setOpen(false);
                  }}
                >
                  <input
                    autoFocus
                    placeholder="Search…"
                    className="flex-1 h-12 rounded-xl px-4 outline-none border"
                    style={{
                      backgroundColor: "var(--header-input-bg)",
                      color: "var(--header-pill-fg)",
                      borderColor: "rgb(0 0 0 / 0.10)",
                    }}
                  />
                  <button
                    className="h-12 px-4 rounded-xl font-semibold text-white"
                    style={{ backgroundColor: "#121212" }}
                  >
                    Go
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>

        {/* Mobile */}
        <div className="ml-auto md:hidden relative z-50">
          <MobileMenu />
        </div>
      </Container>
    </header>
  );
}
