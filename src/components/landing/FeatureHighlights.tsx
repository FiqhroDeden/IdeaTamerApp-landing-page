"use client";

import { motion } from "framer-motion";
import { AnnotatedScreenshot } from "@/components/ui/AnnotatedScreenshot";

interface FeatureSpread {
  id: string;
  num: string;
  badge: string;
  title: string;
  pullQuote: string;
  body: string;
  screenshot: string;
  callouts?: {
    shape: "circle" | "arrow" | "underline";
    label: string;
    top?: string;
    left?: string;
    right?: string;
    bottom?: string;
    labelTop?: string;
    labelLeft?: string;
    labelRight?: string;
    labelBottom?: string;
    rotate?: number;
    width?: number;
    labelWidth?: number;
    color?: string;
  }[];
}

const SPREADS: FeatureSpread[] = [
  {
    id: "smart-scoring",
    num: "01",
    badge: "scoring",
    title: "three sliders. one verdict.",
    pullQuote: "impact × effort × alignment → one number from 1 to 100.",
    body: "Rate every idea on three axes. The score lands you somewhere between 1 (why did I even write this down) and 100 (you'd be stupid not to ship this). No more staring at a list wondering what's actually worth your Saturday.",
    screenshot: "/screenshots/features/smart-scoring.webp",
    callouts: [
      {
        shape: "arrow",
        label: "← this one is 'impact'",
        top: "22%",
        left: "-30%",
        width: 150,
        labelTop: "12%",
        labelLeft: "-32%",
        labelWidth: 150,
        color: "#E5432A",
      },
    ],
  },
  {
    id: "one-quest",
    num: "02",
    badge: "focus",
    title: "one active quest. no exceptions.",
    pullQuote: "the constraint is the feature.",
    body: "Your highest-scored idea gets promoted to Quest. While it's active, the rest of your list is locked. Ship it, or explicitly shelve it, before starting anything new. Annoying on day one. Addictive by week two.",
    screenshot: "/screenshots/features/one-quest.webp",
    callouts: [
      {
        shape: "circle",
        label: "your active quest",
        top: "30%",
        left: "10%",
        width: 220,
        labelTop: "26%",
        labelLeft: "100%",
        labelWidth: 130,
        color: "#1B6EF2",
      },
    ],
  },
  {
    id: "weekly-duel",
    num: "03",
    badge: "compete",
    title: "you vs. last week's you.",
    pullQuote: "four rounds. no excuses. your shadow doesn't sleep.",
    body: "Every Monday at 00:00 WIT, your stats freeze. For the next 7 days you're competing against the version of you who lived last week. Beat them on XP, milestones, quests shipped, and streak days. I lose more often than I'll admit.",
    screenshot: "/screenshots/features/weekly-duel.webp",
    callouts: [
      {
        shape: "underline",
        label: "shadow score",
        bottom: "22%",
        left: "15%",
        width: 200,
        labelBottom: "29%",
        labelLeft: "15%",
        labelWidth: 130,
        color: "#E5432A",
      },
    ],
  },
  {
    id: "xp-levels",
    num: "04",
    badge: "gamify",
    title: "xp that actually counts.",
    pullQuote: "spark → flame → forge → legend.",
    body: "Score an idea, hit a milestone, ship a Quest — every action earns XP. Level up from Spark to Legend. Collect badges. Build a streak that hurts to break. It's productivity pretending to be a game, which is the only productivity I've ever stuck with.",
    screenshot: "/screenshots/features/xp-levels.webp",
  },
  {
    id: "hall-of-fame",
    num: "05",
    badge: "legacy",
    title: "proof you actually shipped.",
    pullQuote: "a wall of finished things. sort by xp, speed, or recency.",
    body: "Every Quest you ship lands in your Hall of Fame. It's the receipt. Scroll it when you're in a rut. Filter by XP earned, days to ship, or most recent. Proof the last version of you wasn't lying about being productive.",
    screenshot: "/screenshots/features/hall-of-fame.webp",
  },
  {
    id: "free-private",
    num: "06",
    badge: "privacy",
    title: "no account. no cloud. no servers.",
    pullQuote: "your ideas don't touch my servers because I don't have any.",
    body: "No signup flow. No emails asking to reset a password you never made. The app makes exactly zero network requests. Your ideas live on your phone. They stay there. This is non-negotiable.",
    screenshot: "/screenshots/features/free-private.webp",
  },
];

export function FeatureHighlights() {
  return (
    <section id="features" className="py-24 md:py-36 bg-paper dark:bg-paper">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24 flex items-end justify-between border-b border-ink/30 dark:border-chalk/30 pb-5 gap-6"
        >
          <div>
            <p className="font-mono text-[11px] tracking-[0.28em] uppercase text-ink-mid dark:text-chalk-mid">
              Section 04 / the spread
            </p>
            <h2 className="mt-3 font-serif-display text-5xl md:text-7xl leading-[0.95] text-ink dark:text-chalk tracking-tight">
              six features.
              <br />
              <span className="italic">no more, no less.</span>
            </h2>
          </div>
          <p className="hidden md:block font-mono text-[11px] tracking-[0.2em] uppercase text-ink-soft dark:text-chalk-mid max-w-[26ch] text-right leading-relaxed">
            annotated. opinionated.
            <br />
            read at your own pace.
          </p>
        </motion.div>

        {/* Spreads */}
        <div className="flex flex-col">
          {SPREADS.map((s, i) => {
            const isEven = i % 2 === 1;
            return (
              <article
                key={s.id}
                className="grid grid-cols-12 gap-6 md:gap-10 py-16 md:py-24 border-b border-ink/15 dark:border-chalk/15 last:border-b-0"
              >
                {/* Number + badge column */}
                <div className={`col-span-12 md:col-span-2 ${isEven ? "md:order-3" : ""}`}>
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 20 : -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.5 }}
                  >
                    <p className="font-mono text-[10px] tracking-[0.28em] uppercase text-ink-soft dark:text-chalk-mid">
                      [ badge {s.num} / {s.badge} ]
                    </p>
                  </motion.div>
                </div>

                {/* Text column */}
                <div className={`col-span-12 md:col-span-6 ${isEven ? "md:order-2" : ""}`}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                  >
                    <h3 className="font-serif-display text-4xl md:text-6xl leading-[1] text-ink dark:text-chalk tracking-tight">
                      {s.title}
                    </h3>

                    <p className="mt-6 font-serif-display italic text-xl md:text-2xl text-hero-blue-deep dark:text-hero-blue-light leading-snug max-w-[28ch]">
                      &ldquo;{s.pullQuote}&rdquo;
                    </p>

                    <p className="mt-6 text-base md:text-lg text-ink-mid dark:text-chalk-mid leading-relaxed max-w-[48ch]">
                      {s.body}
                    </p>
                  </motion.div>
                </div>

                {/* Screenshot column */}
                <div className={`col-span-12 md:col-span-4 flex ${isEven ? "md:order-1 md:justify-start" : "md:justify-end"}`}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                  >
                    <AnnotatedScreenshot
                      src={s.screenshot}
                      alt={s.title}
                      width={260}
                      height={560}
                      rotate={isEven ? 2 : -2}
                      callouts={s.callouts}
                    />
                  </motion.div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
