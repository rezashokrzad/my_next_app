import { Blog } from "./types";

export const BLOGS: Blog[] = [
  {
    id: "1",
    title: "Designing a Life of Meaning with Tiny Rituals",
    excerpt:
      "Small routines compound into identity shifts. Here's a 4-week starter plan.",
    author: { name: "Ava Rahimi" },
    publishedAt: "2025-08-31",
    readMinutes: 6,
    claps: 278,
    pillars: ["meaning"],
    cover: "/hero.png",
  },
  {
    id: "2",
    title: "Craft Systems: From Notes to Shipping",
    excerpt:
      "A pragmatic pipeline for going from capture → distill → publish.",
    author: { name: "Reza Moradi" },
    publishedAt: "2025-08-21",
    readMinutes: 9,
    claps: 1342,
    pillars: ["craft"],
  },
  {
    id: "3",
    title: "Strong Like a Gardener: Health in Seasons",
    excerpt:
      "Why periodizing your training like a grower beats all-or-nothing streaks.",
    author: { name: "Lila Z." },
    publishedAt: "2025-07-18",
    readMinutes: 7,
    claps: 412,
    pillars: ["health", "meaning"],
  },
  {
    id: "4",
    title: "Wealth = Options: A Calm Money Playbook",
    excerpt:
      "Simple, boring moves for an interesting life: cash buckets, index core, small bets.",
    author: { name: "Kian Far" },
    publishedAt: "2025-06-05",
    readMinutes: 8,
    claps: 980,
    pillars: ["wealth"],
  },
];
