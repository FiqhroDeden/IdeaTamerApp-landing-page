"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { AppStoreButton } from "@/components/ui/AppStoreButton";
import { ProductHuntBadge } from "@/components/ui/ProductHuntBadge";
import { Scribble } from "@/components/marks/Scribble";

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-paper dark:bg-paper pt-24 pb-20 md:pb-28">
      {/* Masthead — magazine header */}
      <div className="relative z-10 max-w-6xl mx-auto px-5 md:px-8 mb-10 md:mb-16">
        <div className="flex items-baseline justify-between border-b border-ink/20 dark:border-chalk/20 pb-3">
          <span className="font-mono text-[11px] tracking-[0.22em] uppercase text-ink-mid dark:text-chalk-mid">
            Issue 01 · Apr 21 · Ambon <span className="opacity-60">→</span> Worldwide
          </span>
          <span className="hidden sm:inline font-mono text-[11px] tracking-[0.22em] uppercase text-ink-mid dark:text-chalk-mid">
            a field manual for finishing
          </span>
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-5 md:px-8">
        <div className="grid grid-cols-12 gap-6 md:gap-10 items-start">
          {/* Left / headline + supporting */}
          <div className="col-span-12 lg:col-span-7 relative">
            {/* Tiny kicker */}
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-5 flex items-center gap-3 font-mono text-[11px] tracking-[0.22em] uppercase text-victory-emerald"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-victory-emerald opacity-60 animate-ping" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-victory-emerald" />
              </span>
              Live on App Store · Featured on Product Hunt
            </motion.div>

            {/* Headline — off-center, serif display */}
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif-display text-[11vw] sm:text-7xl md:text-[88px] lg:text-[104px] leading-[0.95] text-ink dark:text-chalk font-normal"
            >
              stop collecting
              <br />
              ideas.
              <br />
              <span className="italic relative inline-block text-hero-blue-deep dark:text-hero-blue-light">
                start finishing
                <Scribble
                  variant="underline"
                  color="var(--color-streak-amber)"
                  className="absolute -bottom-3 left-0 w-full h-5"
                  strokeWidth={4}
                  delay={0.8}
                  duration={1}
                />
              </span>{" "}
              <span className="italic text-ink dark:text-chalk">them.</span>
            </motion.h1>

            {/* Supporting paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 text-lg md:text-xl text-ink-mid dark:text-chalk-mid max-w-[40ch] leading-relaxed"
            >
              Three sliders score every idea from{" "}
              <span className="font-mono text-ink dark:text-chalk">1 → 100</span>.
              Your top score becomes a Quest. You literally can&apos;t start
              another until you ship it, or shelve it.
            </motion.p>

            {/* Primary CTA */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="mt-8"
            >
              <AppStoreButton size="large" />
              <p className="mt-3 font-mono text-[11px] tracking-[0.18em] uppercase text-ink-soft dark:text-chalk-mid/70">
                free · iOS 26+ · no account · no cloud
              </p>
              <div className="mt-6">
                <ProductHuntBadge />
              </div>
            </motion.div>
          </div>

          {/* Right / phone mockup with annotation */}
          <div className="col-span-12 lg:col-span-5 relative flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, rotate: 0, y: 40 }}
              animate={{ opacity: 1, rotate: -3, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <Image
                src="/screenshots/appstore/slide-6.webp"
                alt="IdeaTamer app — Capture, Score, Focus, Ship"
                width={320}
                height={693}
                priority
                className="rounded-[2.2rem] shadow-[0_30px_60px_-20px_rgba(26,26,28,0.35)]"
              />

              {/* Annotation arrow pointing to the 1–100 score */}
              <div className="hidden sm:block absolute -left-32 top-24 w-40">
                <div className="relative">
                  <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-rival-red mb-2 text-right pr-1">
                    scored 1 → 100
                  </div>
                  <Scribble
                    variant="arrow"
                    color="var(--color-rival-red)"
                    className="w-32 h-16 ml-auto -rotate-12"
                    strokeWidth={2.4}
                    delay={1.2}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Marginalia — bottom-right, Ambon map-dot */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="relative mt-16 md:mt-24 flex items-end justify-between gap-6 border-t border-ink/15 dark:border-chalk/15 pt-5"
        >
          <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-ink-soft dark:text-chalk-mid/70 max-w-[32ch] leading-relaxed">
            built solo from Ambon, Indonesia.
            <br />
            nearest Apple Store is a 4-hour flight.
          </div>

          <div className="flex items-center gap-3">
            <svg width="72" height="48" viewBox="0 0 72 48" fill="none" aria-hidden>
              {/* Tiny map silhouette of a coastline — purely decorative */}
              <motion.path
                d="M2 32c8-2 14-8 22-6 6 2 10 8 18 6 6-2 10-8 18-6 4 1 8 4 10 6"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                className="text-ink-soft dark:text-chalk-mid/60"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.4, delay: 1.4 }}
              />
              <motion.circle
                cx="30"
                cy="26"
                r="3.2"
                fill="var(--color-rival-red)"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.4, delay: 2.4, type: "spring", stiffness: 200 }}
              />
              <motion.circle
                cx="30"
                cy="26"
                r="8"
                fill="none"
                stroke="var(--color-rival-red)"
                strokeWidth="1"
                opacity="0.45"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.4, delay: 2.5 }}
              />
            </svg>
            <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-rival-red">
              Ambon
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
