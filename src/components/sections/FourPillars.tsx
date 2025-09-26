"use client";

import Image from "next/image";

type Pillar = {
  title: string;
  desc: string;
  img: string; // place files in /public/pillars/*.png (or .jpg/svg)
};

const DEFAULTS: Pillar[] = [
  {
    title: "Critical Thinking",
    desc: "She paused, asked why, then chose wiser path.",
    img: "/pillars/criticalthinking_main.png",
  },
  {
    title: "Empathy",
    desc: "She listened fully; the room breathed out together.",
    img: "/pillars/empathy_main.png",
  },
  {
    title: "Story Telling",
    desc: "His pitch stumbled until the story carried it.",
    img: "/pillars/storytelling_main.png",
  },
  {
    title: "Imagination",
    desc: "We sketched clouds, then built stairs to reach.",
    img: "/pillars/imagination_main.png",
  },
];

export default function FourPillars({ items = DEFAULTS }: { items?: Pillar[] }) {
  return (
    <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20">
      <div className="mb-10 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight" style={{ color: "var(--color-ink)" }}>
          4 Pillars
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {items.slice(0, 4).map((p, i) => (
          <article
            key={i}
            className="
                group relative overflow-hidden rounded-2xl border
                transition-transform duration-300 ease-out hover:-translate-y-0.5
                !bg-white !text-black                 /* ← force white card */
                dark:bg-neutral-900 dark:text-[var(--color-main)]
                border-black/10 dark:border-white/10
                shadow-[0_1px_2px_rgba(0,0,0,.06),_0_8px_24px_rgba(0,0,0,.05)]
                dark:shadow-[0_1px_2px_rgba(0,0,0,.35),_0_10px_32px_rgba(0,0,0,.45)]
            "
          >
            {/* hover tint overlay */}
            <div
              className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background:
                  "linear-gradient(180deg, color-mix(in oklab, var(--color-ink) 4%, transparent), transparent 60%)",
              }}
            />
            <div className="relative p-5 md:p-6">
              <div
                className="
                  overflow-hidden rounded-xl border mb-4
                  transition-transform duration-300 group-hover:scale-103
                  !bg-[color-mix(in_oklab,var(--color-ink)_6%,transparent)]
                  dark:!bg-[rgba(255,255,255,.03)]
                  border-black/10 dark:border-white/10
                "
              >
                <div className="relative aspect-[16/9]">
                  <Image
                    src={p.img}
                    alt=""
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                  />
                </div>
              </div>

              <h3 className="text-xl font-semibold leading-snug mb-1">{p.title}</h3>
              <p className="text-sm leading-relaxed opacity-80">{p.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}