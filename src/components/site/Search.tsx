"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function Search({ className = "" }: { className?: string }) {
  const [q, setQ] = useState("");
  return (
    <form action="/search" className={cn("hidden md:block", className)}>
      <input
        name="q"
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Search…"
        className="w-64 rounded-lg border px-3 py-2 text-sm bg-transparent outline-none"
        style={{
          borderColor:
            "color-mix(in oklab, var(--color-fg) 18%, transparent)",
        }}
        aria-label="Search"
      />
    </form>
  );
}
