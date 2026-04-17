"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const STEPS = [
  {
    num: "01",
    title: "capture",
    body: "Dump every scrap into your inbox. No folders. No tags. No friction. Max 10 unscored ideas keeps you honest.",
    mono: "inbox / 10 max",
    thumb: "/screenshots/features/smart-scoring.webp",
  },
  {
    num: "02",
    title: "score",
    body: "Three sliders — Impact, Effort, Alignment. Out pops a single number from 1 to 100. Your ideas finally have a pecking order.",
    mono: "3 sliders → 1 score",
    thumb: "/screenshots/features/smart-scoring.webp",
  },
  {
    num: "03",
    title: "focus",
    body: "Your top-scored idea becomes your active Quest. One idea. Full attention. Milestones track the slog.",
    mono: "one quest / full attention",
    thumb: "/screenshots/features/one-quest.webp",
  },
  {
    num: "04",
    title: "ship",
    body: "Finish milestones, earn XP, send the Quest to your Hall of Fame. Only then does the next one unlock.",
    mono: "ship · or shelve · nothing else",
    thumb: "/screenshots/features/hall-of-fame.webp",
  },
];

export function HowItWorks() {
  return (
    <section className="py-24 md:py-32 bg-paper dark:bg-paper">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        {/* Editorial section header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-14 md:mb-20 flex items-end justify-between gap-6 border-b border-ink/30 dark:border-chalk/30 pb-5"
        >
          <div>
            <p className="font-mono text-[11px] tracking-[0.28em] uppercase text-ink-mid dark:text-chalk-mid">
              Section 02 / The Loop
            </p>
            <h2 className="mt-3 font-serif-display text-5xl md:text-7xl leading-[0.95] text-ink dark:text-chalk tracking-tight">
              four steps.
              <br />
              <span className="italic">that&apos;s the whole app.</span>
            </h2>
          </div>
          <p className="hidden md:block font-mono text-[11px] tracking-[0.2em] uppercase text-ink-soft dark:text-chalk-mid max-w-[26ch] text-right leading-relaxed">
            read top to bottom.
            <br />
            the loop repeats until you ship.
          </p>
        </motion.div>

        {/* Ledger rows */}
        <div>
          {STEPS.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group relative grid grid-cols-12 items-center gap-4 md:gap-6 py-7 md:py-10 border-b border-ink/20 dark:border-chalk/20 transition-colors hover:bg-paper-deep/50 dark:hover:bg-paper-deep/50"
            >
              {/* Number */}
              <div className="col-span-3 md:col-span-2">
                <span className="font-mono text-5xl md:text-7xl font-medium text-ink/30 dark:text-chalk/30 group-hover:text-hero-blue transition-colors duration-300">
                  {step.num}
                </span>
              </div>

              {/* Title + body */}
              <div className="col-span-9 md:col-span-7">
                <h3 className="font-serif-display text-3xl md:text-5xl leading-tight text-ink dark:text-chalk">
                  {step.title}
                  <span className="inline-block ml-3 text-hero-blue opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                    →
                  </span>
                </h3>
                <p className="mt-3 text-base md:text-lg text-ink-mid dark:text-chalk-mid max-w-[56ch] leading-relaxed">
                  {step.body}
                </p>
                <p className="mt-3 font-mono text-[11px] tracking-[0.2em] uppercase text-ink-soft dark:text-chalk-mid/70">
                  {step.mono}
                </p>
              </div>

              {/* Screenshot chip */}
              <div className="hidden md:flex col-span-3 justify-end">
                <div className="relative overflow-hidden rounded-xl w-[90px] h-[190px] shadow-md border border-ink/10 dark:border-chalk/10 transition-transform duration-300 group-hover:scale-105 group-hover:-rotate-2">
                  <Image
                    src={step.thumb}
                    alt={`${step.title} preview`}
                    width={90}
                    height={190}
                    className="object-cover"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
