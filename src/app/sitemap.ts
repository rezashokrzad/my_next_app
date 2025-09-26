import { MetadataRoute } from "next";

const BASE = 'https://rezashokrzad.github.io/my_next_app'

export default function sitemap(): MetadataRoute.Sitemap {
const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";
return [
    { url: `${BASE}/`, changeFrequency: 'weekly', priority: 1 },
    { url: base, priority: 1 },
    { url: base + "/blog", priority: 0.8 },
    { url: base + "/shop", priority: 0.8 },
    { url: base + "/forum", priority: 0.6 },
    { url: base + "/about", priority: 0.5 },
];
}