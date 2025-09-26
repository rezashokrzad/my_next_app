import type { Metadata } from "next";


export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";
export const siteName = "YourSite";
export const siteDescription = "Build high‑quality web applications with React and Next.js";


export const baseMetadata: Metadata = {
metadataBase: new URL(siteUrl),
title: {
default: siteName,
template: `%s · ${siteName}`,
},
description: siteDescription,
keywords: ["Next.js","React","Shop","Blog","Forum"],
icons: { icon: "/favicon.ico" },
openGraph: {
type: "website",
url: siteUrl,
siteName,
title: siteName,
description: siteDescription,
images: [
{ url: "/og.png", width: 1200, height: 630, alt: siteName },
],
},
twitter: {
card: "summary_large_image",
site: "@yoursite",
creator: "@yoursite",
},
alternates: { canonical: siteUrl },
robots: {
index: true,
follow: true,
},
};