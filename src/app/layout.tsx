import "./globals.css";
import type { Metadata } from "next";
import { baseMetadata } from "@/lib/seo";
import Header from "@/components/site/Header";
import { ThemeProvider } from "next-themes";
import "@/styles/blog-colors.css";

export const metadata: Metadata = baseMetadata;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // SSR default = light
    <html lang="en" className="light" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          storageKey="mom-theme"
          themes={["light","dark"]}
          value={{ light: "light", dark: "dark" }}
        >
          <Header />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
