"use client";

import Container from "@/components/ui/Container";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[85svh] md:min-h-[92vh] pt-6 md:pt-8">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-20 md:h-24 bg-gradient-to-b from-[var(--color-bg)] to-transparent z-10" />

      <motion.div
        aria-hidden
        className="absolute inset-0 -z-10 will-change-transform"
        initial={{ scale: 1.3 }}
        animate={{ scale: 1.0 }}
        transition={{ duration: 15, ease: "easeInOut" }}
      >
        <Image
          src="/hero.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_bottom,rgba(255,255,255,.92),rgba(255,255,255,.75)_10%,transparent_35%)]" />
      </motion.div>

      <Container className="relative">
        {/* NEW wrapper: takes most of the hero height and centers contents */}
        <div className="mx-auto max-w-5xl min-h-[60svh] md:min-h-[70vh] flex flex-col items-center justify-center text-center">
            <h1 className="text-4xl md:text-8xl font-extrabold tracking-tight leading-tight">
            <span
                className="shine-letters px-2"
                data-text="Ministry Of Meaning"
            >
                Ministry Of Meaning
            </span>
            </h1>

          <p className="mt-6 text-2xl opacity-90 mx-auto max-w-3xl">
            The only{""}
            <span className="mx-1 font-bold" 
            // style={{ color: "var(--color-olive)" }}
            >
              100 lessons
            </span>
            you will ever need in post-AI era

          </p>

          <div className="mt-8 flex items-center justify-center gap-3">
            <Link href="/start" className="btn btn-primary">Start Learning for Free</Link>
            <Link href="/learn" className="btn btn-ghost">Learn More</Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
