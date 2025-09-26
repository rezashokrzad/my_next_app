export default function Footer() {
  const iconBtn =
    "h-9 w-9 grid place-items-center rounded-full border transition " +
    "bg-white dark:bg-neutral-900 border-black/10 dark:border-white/10 " +
    "text-[var(--color-ink)] dark:text-[var(--color-main)] opacity-70 hover:opacity-100";

  const link =
    "text-sm opacity-70 hover:opacity-100 transition whitespace-nowrap";

  return (
    <footer
      className="py-6"
      style={{ background: "var(--color-main)", color: "var(--color-ink)" }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 md:grid md:grid-cols-3 md:items-center">
          {/* Left: Socials */}
          <div className="flex items-center gap-3">
            {/* LinkedIn */}
            <a
              className={iconBtn}
              aria-label="LinkedIn"
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
              title="LinkedIn"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M4.98 3.5A2.5 2.5 0 1 1 0 3.5a2.5 2.5 0 0 1 4.98 0zM0 8h5v16H0V8zm7.5 0H12v2.2h.1c.6-1.1 2.1-2.2 4.3-2.2 4.6 0 5.5 3 5.5 6.8V24h-5V15.5c0-2 0-4.6-2.8-4.6-2.8 0-3.2 2.2-3.2 4.5V24h-5V8z"/>
              </svg>
            </a>

            {/* Instagram */}
            <a
              className={iconBtn}
              aria-label="Instagram"
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
              title="Instagram"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.6"/>
                <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.6"/>
                <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor"/>
              </svg>
            </a>

            {/* X / Twitter */}
            <a
              className={iconBtn}
              aria-label="X"
              href="https://x.com"
              target="_blank"
              rel="noreferrer"
              title="X"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M2 3l8.7 10.4L2.7 21H6l6-6.6L17.7 21H22l-9-10.7L21.3 3H18l-5.4 6L7 3H2z"/>
              </svg>
            </a>

            {/* YouTube */}
            <a
              className={iconBtn}
              aria-label="YouTube"
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              title="YouTube"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.7 3.5 12 3.5 12 3.5s-7.7 0-9.4.6A3 3 0 0 0 .5 6.2 31.2 31.2 0 0 0 0 12a31.2 31.2 0 0 0 .5 5.8A3 3 0 0 0 2.6 20c1.7.6 9.4.6 9.4.6s7.7 0 9.4-.6a3 3 0 0 0 2.1-2.1c.5-1.7.5-5.8.5-5.8s0-4.1-.5-5.8zM9.6 15.5V8.5l6.4 3.5-6.4 3.5z"/>
              </svg>
            </a>

            {/* TikTok */}
            <a
              className={iconBtn}
              aria-label="TikTok"
              href="https://www.tiktok.com"
              target="_blank"
              rel="noreferrer"
              title="TikTok"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M21 8.6a7.3 7.3 0 0 1-4.5-1.5V15a6 6 0 1 1-6-6c.3 0 .6 0 .9.1v3.6a2.4 2.4 0 1 0 1.5 2.2V1.9h3.2a7.2 7.2 0 0 0 4.9 4v2.7z"/>
              </svg>
            </a>
          </div>

          {/* Center: copyright */}
          <div className="text-sm text-center opacity-70 md:opacity-80 order-first md:order-none">
            © 2025 Ministry of Meaning
          </div>

          {/* Right: links */}
          <nav className="flex flex-wrap items-center justify-end gap-x-6 gap-y-2">
            <a href="/terms" className={link}>Terms of Use</a>
            <a href="/consent" className={link}>Consent Preferences</a>
            <a href="/privacy-choices" className={link}>Your Privacy Choices</a>
            <a href="/conduct" className={link}>Principles of Conduct</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
