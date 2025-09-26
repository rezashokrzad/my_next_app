"use client";

import { Pillar } from "@/modules/blog/types";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

const PILLARS: { key: Pillar; label: string }[] = [
  { key: "meaning", label: "Meaning" },
  { key: "craft", label: "Craft" },
  { key: "health", label: "Health" },
  { key: "wealth", label: "Wealth" },
];

export function PillarFilters({
  active,
  onToggle,
}: {
  active: Set<Pillar>;
  onToggle: (p: Pillar) => void;
}) {
  return (
    <div className="flex flex-wrap gap-3">
      {PILLARS.map((p) => {
        const isActive = active.has(p.key);
        return (
          <button
            key={p.key}
            onClick={() => onToggle(p.key)}
            className={cn(
              "group relative rounded-2xl px-4 py-2 text-sm font-medium transition-all",
              "outline-none ring-0",
              isActive
                ? "bg-[var(--olive-700)] text-[var(--near-white)] shadow"
                : "bg-[var(--near-white)] text-[var(--near-black)] border border-zinc-200 dark:border-zinc-800"
            )}
            aria-pressed={isActive}
          >
            <span>{p.label}</span>
            <span
              className={cn(
                "absolute inset-0 rounded-2xl opacity-0 transition-opacity",
                "group-hover:opacity-10",
                isActive ? "bg-[var(--pistachio)]" : "bg-[var(--olive-700)]"
              )}
            />
          </button>
        );
      })}
      <Badge className="ml-2 hidden sm:inline-block bg-[var(--pistachio)] text-[var(--near-black)]">
        Toggle multiple
      </Badge>
    </div>
  );
}
