import type { MetadataRoute } from "next";

// Default to your GitHub Pages base when env var isn't set
const REPO = "my_next_app";
const GITHUB_PAGES_BASE = `https://rezashokrzad.github.io/${REPO}`;

// Normalize to no trailing slash so paths concatenate cleanly.
const SITE =
  (process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, "")) || GITHUB_PAGES_BASE;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    { url: `${SITE}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE}/blog`, lastModified: now, priority: 0.8 },
    { url: `${SITE}/shop`, lastModified: now, priority: 0.8 },
    { url: `${SITE}/forum`, lastModified: now, priority: 0.6 },
    { url: `${SITE}/about`, lastModified: now, priority: 0.5 },
  ];
}
