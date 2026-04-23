"use client";

import { motion } from "framer-motion";
import { Scribble } from "@/components/marks/Scribble";
import { NumberTicker } from "@/components/ui/NumberTicker";

export function ManifestoNumbers() {
  return (
    <section className="relative bg-paper-deep dark:bg-paper-deep py-24 md:py-36 overflow-hidden border-y border-ink/15 dark:border-chalk/15">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        {/* Tiny editorial header */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-12 md:mb-20"
        >
          <div className="h-px flex-1 bg-ink/30 dark:bg-chalk/30" />
          <span className="font-mono text-[11px] tracking-[0.28em] uppercase text-ink-mid dark:text-chalk-mid">
            the math that broke me
          </span>
          <div className="h-px flex-1 bg-ink/30 dark:bg-chalk/30" />
        </motion.div>

        {/* Numbers — side by side on desktop, stacked on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-6 items-start">
          {/* 30+ column */}
          <div className="relative">
            <div className="relative inline-block">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7 }}
                className="block font-mono font-medium leading-[0.82] text-ink dark:text-chalk text-[30vw] sm:text-[200px] md:text-[230px] tracking-tighter"
              >
                30+
              </motion.span>
              {/* Red strikeout draws across the number */}
              <Scribble
                variant="strikeout"
                color="var(--color-rival-red)"
                className="absolute left-[-4%] top-[45%] w-[108%] h-16"
                strokeWidth={7}
                delay={0.9}
                duration={0.7}
              />
            </div>
            <p className="mt-6 font-serif-display text-2xl md:text-3xl leading-snug text-ink dark:text-chalk max-w-[26ch]">
              ideas scattered across Apple Notes, Notion, and text files I forgot
              existed.
            </p>
            <p className="mt-4 font-mono text-[11px] tracking-[0.2em] uppercase text-ink-soft dark:text-chalk-mid">
              ↳ tried Notion. tried Obsidian. tried the Notes app.
            </p>
          </div>

          {/* 0 → 1 column */}
          <div className="relative text-right md:pt-20">
            <div className="relative inline-block">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="block font-mono font-medium leading-[0.82] text-rival-red text-[30vw] sm:text-[200px] md:text-[230px] tracking-tighter"
              >
                <NumberTicker value={1} start={0} duration={2.2} delay={0.6} />
              </motion.span>
            </div>
            <p className="mt-6 font-serif-display text-2xl md:text-3xl leading-snug text-ink dark:text-chalk max-w-[26ch] ml-auto">
              active quest at a time. one. that&apos;s the whole trick.
            </p>
            <p className="mt-4 font-mono text-[11px] tracking-[0.2em] uppercase text-ink-soft dark:text-chalk-mid">
              ship it · or shelve it · then the next one unlocks.
            </p>
          </div>
        </div>

        {/* Closing line — editorial pull quote */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-20 md:mt-28 relative"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="font-mono text-[11px] tracking-[0.28em] uppercase text-ink-mid dark:text-chalk-mid">
              so I built this
            </span>
            <div className="h-px flex-1 bg-ink/30 dark:bg-chalk/30" />
          </div>
          <p className="font-serif-display italic text-3xl md:text-5xl leading-[1.1] text-ink dark:text-chalk max-w-[22ch]">
            &ldquo;sounds restrictive.
            <br />
            that&apos;s the point.&rdquo;
          </p>
          <p className="mt-4 font-mono text-[11px] tracking-[0.2em] uppercase text-ink-soft dark:text-chalk-mid">
            — fiqhro, product hunt launch comment
          </p>
        </motion.div>
      </div>
    </section>
  );
}
