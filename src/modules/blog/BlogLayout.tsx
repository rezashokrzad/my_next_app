"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { BLOGS } from "./data";
import type { Blog, Pillar } from "./types";
import { PillarFilters } from "./components/PillarFilters";
import { BlogCard } from "./components/BlogCard";
import { Button } from "@/components/ui/button"; // keep if you use shadcn; otherwise swap to <a>
import { ProfileMenu } from "./components/ProfileMenu";

export default function BlogLayout() {
  const [active, setActive] = useState<Set<Pillar>>(new Set());
  const [q, setQ] = useState(""); // (optional) remove if not using search now
  const [items, setItems] = useState<Blog[]>(() => BLOGS.map((b) => ({ ...b })));

  const filtered = useMemo(() => {
    const terms = q.trim().toLowerCase();
    return items.filter((b) => {
      const pillarOk = active.size === 0 || b.pillars.some((p) => active.has(p));
      const textOk =
        !terms ||
        `${b.title} ${b.excerpt} ${b.author.name}`.toLowerCase().includes(terms);
      return pillarOk && textOk;
    });
  }, [items, active, q]);

  const toggle = (p: Pillar) => {
    setActive((prev) => {
      const next = new Set(prev);
      next.has(p) ? next.delete(p) : next.add(p);
      return next;
    });
  };

  const onToggleBookmark = (id: string) => {
    setItems((prev) => prev.map((b) => (b.id === id ? { ...b, bookmarked: !b.bookmarked } : b)));
  };

  return (
    // no local header — rely on the global site header
    <div className="bg-[var(--near-white)] text-[var(--near-black)]">
      {/* Hero (above the fold) */}
      <section className="border-b border-zinc-200 dark:border-zinc-800 bg-gradient-to-b from-white to-zinc-50">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight">Blog</h1>
              <p className="mt-3 max-w-2xl text-zinc-600 dark:text-zinc-400">
                Essays on the four pillars. Filter by topic or search.
              </p>
            </div>

            {/* RIGHT: profile avatar + dropdown (replaces Subscribe) */}
            <div className="flex justify-start md:justify-end">
              <ProfileMenu />
            </div>
          </div>

          <div className="mt-8">
            <PillarFilters active={active} onToggle={toggle} />
          </div>
        </div>
      </section>


      {/* Grid */}
      <main className="mx-auto max-w-6xl px-4 py-10">
        {filtered.length === 0 ? (
          <div className="py-24 text-center text-zinc-500">No articles yet. Try another filter.</div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((b) => (
              <BlogCard key={b.id} blog={b} onToggleBookmark={onToggleBookmark} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
