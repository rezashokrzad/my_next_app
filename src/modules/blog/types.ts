export type Pillar = "meaning" | "craft" | "health" | "wealth";

export type Blog = {
  id: string;
  title: string;
  excerpt: string;
  author: {
    name: string;
    avatarUrl?: string;
  };
  publishedAt: string; // ISO date
  readMinutes: number;
  claps: number;
  bookmarked?: boolean;
  pillars: Pillar[];
  cover?: string;
};
