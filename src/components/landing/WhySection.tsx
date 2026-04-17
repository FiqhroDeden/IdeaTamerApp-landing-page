"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Scribble } from "@/components/marks/Scribble";

const REASONS = [
  {
    label: "privacy.",
    href: "/blog/privacy-first-productivity",
    evidence: ["0 network requests", "0 accounts", "0 cloud", "0 tracking"],
    aside: "the app itself doesn't know the internet exists.",
  },
  {
    label: "offline.",
    href: "/blog/privacy-first-productivity",
    evidence: ["works on a plane", "works in a cafe", "works off-grid", "works at 35,000 ft"],
    aside: "built to survive your worst connection.",
  },
  {
    label: "one quest.",
    href: "/use-cases/indie-developers",
    evidence: ["1 active at a time", "ship it", "or shelve it", "no other option"],
    aside: "the constraint is the feature.",
  },
  {
    label: "gamified.",
    href: "/blog/why-ideatamer",
    evidence: ["XP", "levels", "streaks", "weekly duels"],
    aside: "productivity that feels like a game. because it is one.",
  },
];

export function WhySection() {
  return (
    <section className="py-24 md:py-32 bg-paper-deep dark:bg-paper-deep border-y border-ink/15 dark:border-chalk/15">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-14 md:mb-20"
        >
          <p className="font-mono text-[11px] tracking-[0.28em] uppercase text-ink-mid dark:text-chalk-mid">
            Section 03 / deliberate choices
          </p>
          <h2 className="mt-3 font-serif-display text-5xl md:text-7xl leading-[0.95] text-ink dark:text-chalk tracking-tight max-w-[18ch]">
            four things most <span className="italic">productivity</span>{" "}
            <span className="relative inline-block">
              apps won&apos;t do.
              <Scribble
                variant="underline"
                color="var(--color-rival-red)"
                className="absolute -bottom-2 left-0 w-full h-4"
                strokeWidth={3.6}
                delay={0.4}
              />
            </span>
          </h2>
        </motion.div>

        {/* Typographic rows */}
        <div>
          {REASONS.map((reason, i) => (
            <motion.div
              key={reason.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className="group grid grid-cols-12 items-baseline gap-4 md:gap-8 py-8 md:py-12 border-b border-ink/20 dark:border-chalk/20"
            >
              {/* Big label */}
              <div className="col-span-12 md:col-span-5">
                <Link
                  href={reason.href}
                  className="inline-block font-serif-display text-5xl md:text-7xl leading-[0.95] text-ink dark:text-chalk hover:text-hero-blue dark:hover:text-hero-blue-light transition-colors"
                >
                  {reason.label}
                </Link>
              </div>

              {/* Evidence tags */}
              <div className="col-span-12 md:col-span-5 flex flex-wrap gap-x-4 gap-y-2">
                {reason.evidence.map((e, j) => (
                  <span
                    key={j}
                    className="font-mono text-[13px] tracking-[0.08em] text-ink-mid dark:text-chalk-mid"
                  >
                    [{" "}
                    <span className="text-ink dark:text-chalk">{e}</span>{" "}
                    ]
                  </span>
                ))}
              </div>

              {/* Aside */}
              <div className="col-span-12 md:col-span-2 md:text-right">
                <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-ink-soft dark:text-chalk-mid/70 leading-relaxed">
                  {reason.aside}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10"
        >
          <Link
            href="/blog/why-ideatamer"
            className="font-mono text-[11px] tracking-[0.22em] uppercase text-hero-blue hover:text-hero-blue-dim"
          >
            read the full story →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
