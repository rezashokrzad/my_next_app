"use client";

import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle"|"loading"|"ok"|"error">("idle");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setStatus("error");
      return;
    }
    setStatus("loading");

    try {
      // TODO: wire to your backend/service (e.g., /api/subscribe)
      // await fetch("/api/subscribe", { method: "POST", body: JSON.stringify({ email }) });
      await new Promise(r => setTimeout(r, 800)); // demo
      setStatus("ok");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      aria-labelledby="newsletter-title"
      className="py-24 sm:py-28"
      style={{
        background:
          "color-mix(in oklab, var(--color-ink) 5%, var(--color-bg))",
      }}
    >
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2
          id="newsletter-title"
          className="font-serif text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight"
          style={{ color: "var(--color-ink)" }}
        >
          Join our newsletter
        </h2>

        <p
          className="mt-6 text-lg leading-8 opacity-70"
          style={{ color: "var(--color-ink)" }}
        >
          Be the first to experience exclusive content, receive real-time
          updates, and participate in live events.
        </p>

        {/* Form */}
        <form onSubmit={onSubmit} className="mx-auto mt-10 sm:mt-12 max-w-2xl">
          {/* Underlined input */}
          <div className="relative">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
              aria-label="Email Address"
              className="
                w-full bg-transparent text-center text-2xl sm:text-3xl font-medium
                outline-none pb-3
                placeholder:opacity-40
                border-b
              "
              style={{
                color: "var(--color-ink)",
                borderColor:
                  "color-mix(in oklab, var(--color-ink) 25%, transparent)",
              }}
            />
          </div>

          {/* CTA */}
          <div className="mt-10">
            <button
              type="submit"
              disabled={status === "loading"}
              className="
                    cta-btn
                    inline-flex items-center justify-center
                    h-16 sm:h-18 px-8 sm:px-12 rounded-full
                    text-base sm:text-lg font-semibold
                    focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--cta-bg-hover)]/40
                    disabled:opacity-70
                    shadow-[0_8px_30px_rgba(0,0,0,.08)]
              "
              style={{
                background: "var(--cta-bg)",
                color: "var(--cta-fg)",
                // soft ring using theme ink
                boxShadow:
                  "0 10px 30px rgba(0,0,0,.08)",
              }}
            >
              {status === "loading" ? "Submitting…" : "Join newsletter"}
            </button>
          </div>

          {/* Tiny state message */}
          <p
            className="mt-4 text-sm"
            style={{ color: "var(--color-ink)", opacity: 0.6 }}
          >
            {status === "ok" && "Thanks! Please check your inbox to confirm."}
            {status === "error" && "Please enter a valid email address."}
            {status === "idle" && "\u00A0"}
          </p>
        </form>
      </div>
    </section>
  );
}
