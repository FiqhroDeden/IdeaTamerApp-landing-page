"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { EmailSignupForm } from "@/components/ui/EmailSignupForm";
import { TapeCorner } from "@/components/marks/TapeCorner";

export function FinalCTA() {
  return (
    <section className="py-24 md:py-36 bg-paper dark:bg-paper relative overflow-hidden">
      <div className="max-w-3xl mx-auto px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24, rotate: 0 }}
          whileInView={{ opacity: 1, y: 0, rotate: -0.6 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative bg-paper-deep dark:bg-paper-deep p-8 md:p-14 border border-ink/20 dark:border-chalk/20 shadow-[0_24px_60px_-20px_rgba(26,26,28,0.25)]"
        >
          {/* Tape corners */}
          <TapeCorner position="top-left" color="rgba(245, 166, 35, 0.55)" />
          <TapeCorner position="top-right" color="rgba(27, 110, 242, 0.45)" />
          <TapeCorner position="bottom-right" color="rgba(229, 67, 42, 0.5)" />

          {/* Postmark */}
          <div className="absolute top-8 right-8 md:top-12 md:right-14 opacity-80">
            <svg width="90" height="90" viewBox="0 0 100 100" fill="none" aria-hidden>
              <circle cx="50" cy="50" r="44" stroke="var(--color-rival-red)" strokeWidth="1.5" strokeDasharray="2 4" />
              <circle cx="50" cy="50" r="34" stroke="var(--color-rival-red)" strokeWidth="0.8" />
              <text
                x="50"
                y="38"
                textAnchor="middle"
                fontFamily="var(--font-jetbrains-mono)"
                fontSize="8"
                fill="var(--color-rival-red)"
                letterSpacing="1.6"
              >
                AMBON
              </text>
              <text
                x="50"
                y="55"
                textAnchor="middle"
                fontFamily="var(--font-instrument-serif)"
                fontSize="14"
                fontStyle="italic"
                fill="var(--color-rival-red)"
              >
                apr 21
              </text>
              <text
                x="50"
                y="68"
                textAnchor="middle"
                fontFamily="var(--font-jetbrains-mono)"
                fontSize="6"
                fill="var(--color-rival-red)"
                letterSpacing="1.4"
              >
                2026 · WIT
              </text>
            </svg>
          </div>

          {/* Header */}
          <p className="font-mono text-[11px] tracking-[0.28em] uppercase text-ink-soft dark:text-chalk-mid">
            postcard from Ambon
          </p>

          <h2 className="mt-4 font-serif-display text-4xl md:text-6xl leading-[1.02] text-ink dark:text-chalk italic max-w-[18ch]">
            last thing before you go &mdash;
          </h2>

          <p className="mt-6 text-base md:text-lg text-ink-mid dark:text-chalk-mid max-w-[44ch] leading-relaxed">
            I&apos;ll send one email when IdeaTamer goes live on the App Store.
            Tuesday, April 21. That&apos;s it. No drip campaign, no &ldquo;here&apos;s
            what&apos;s new&rdquo; newsletter, no tracking pixel.
          </p>

          <div className="mt-8">
            <EmailSignupForm variant="section" size="large" />
          </div>

          <p className="mt-6 font-mono text-[11px] tracking-[0.18em] uppercase text-ink-soft dark:text-chalk-mid/70">
            free · iOS 26+ · no account · no cloud
          </p>

          <div className="mt-12 flex items-center gap-4 pt-6 border-t border-ink/15 dark:border-chalk/15">
            <Image
              src="/images/logo-bg.png"
              alt="IdeaTamer"
              width={40}
              height={40}
              className="rounded-lg"
            />
            <div className="flex-1">
              <p className="font-serif-display italic text-xl text-ink dark:text-chalk">
                — fiqhro
              </p>
              <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-ink-soft dark:text-chalk-mid/70">
                built from an apartment · 3° 41&apos; S, 128° 11&apos; E
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
