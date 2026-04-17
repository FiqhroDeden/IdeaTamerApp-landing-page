"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { NumberTicker } from "@/components/ui/NumberTicker";

const ROUNDS = [
  { label: "Round 01 / XP earned",        blue: 482, red: 411, unit: "xp", bluePct: 92, redPct: 78 },
  { label: "Round 02 / Milestones hit",   blue: 14,  red: 11,  unit: "ms", bluePct: 88, redPct: 70 },
  { label: "Round 03 / Quests shipped",   blue: 3,   red: 2,   unit: "qs", bluePct: 95, redPct: 62 },
  { label: "Round 04 / Streak days",      blue: 7,   red: 7,   unit: "dy", bluePct: 100, redPct: 100 },
];

function ScoreBar({
  pct,
  side,
  delay,
}: {
  pct: number;
  side: "blue" | "red";
  delay: number;
}) {
  const bg = side === "blue" ? "bg-hero-blue-light" : "bg-rival-red-light";
  const align = side === "blue" ? "origin-right ml-auto" : "origin-left";
  return (
    <div className={`h-2 bg-white/10 rounded-sm overflow-hidden ${side === "blue" ? "flex justify-end" : ""}`}>
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: pct / 100 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
        className={`h-full ${bg} ${align}`}
        style={{ width: "100%", transformOrigin: side === "blue" ? "right" : "left" }}
      />
    </div>
  );
}

export function CompeteSection() {
  return (
    <section className="relative py-24 md:py-36 overflow-hidden bg-hero-blue-deep">
      {/* Deep gradient — this is the ONE place we deploy gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-hero-blue-deep via-[#0A2855] to-rival-red-deep opacity-95" />
      {/* Spotlight */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-[60%] bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.18),transparent_60%)]" />
      {/* Ring rope texture — two horizontal lines */}
      <div className="absolute top-[8%] left-0 right-0 h-px bg-white/20" />
      <div className="absolute top-[9.5%] left-0 right-0 h-px bg-white/10" />
      <div className="absolute bottom-[8%] left-0 right-0 h-px bg-white/10" />
      <div className="absolute bottom-[9.5%] left-0 right-0 h-px bg-white/20" />

      <div className="relative z-10 max-w-6xl mx-auto px-5 md:px-8">
        {/* Fight card banner */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-14"
        >
          <p className="font-mono text-[11px] tracking-[0.36em] uppercase text-white/60">
            ★ weekly duel ★ round 4 ★ resets Monday 00:00 WIT ★
          </p>
          <h2 className="mt-4 font-serif-display text-5xl md:text-[88px] leading-[0.95] text-white tracking-tight">
            you <span className="italic text-white/60">vs.</span> last week&apos;s you
          </h2>
          <p className="mt-4 font-mono text-[11px] tracking-[0.24em] uppercase text-white/50 max-w-2xl mx-auto">
            four rounds. one winner. you don&apos;t get to pick your opponent.
          </p>
        </motion.div>

        {/* Corner labels */}
        <div className="grid grid-cols-12 gap-4 md:gap-8 mb-8 items-end">
          <div className="col-span-5 text-right">
            <p className="font-mono text-[11px] tracking-[0.24em] uppercase text-hero-blue-lighter">
              Blue Corner
            </p>
            <p className="font-serif-display text-3xl md:text-5xl text-white italic leading-none mt-2">
              this week
            </p>
            <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/50 mt-1">
              you (currently)
            </p>
          </div>

          <div className="col-span-2 flex justify-center">
            <div className="font-serif-display italic text-5xl md:text-7xl text-streak-amber leading-none">
              vs
            </div>
          </div>

          <div className="col-span-5">
            <p className="font-mono text-[11px] tracking-[0.24em] uppercase text-rival-red-lighter">
              Red Corner
            </p>
            <p className="font-serif-display text-3xl md:text-5xl text-white italic leading-none mt-2">
              last week
            </p>
            <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/50 mt-1">
              your shadow · 7 days ago
            </p>
          </div>
        </div>

        {/* Scorecard rounds */}
        <div className="border border-white/15 bg-black/20 backdrop-blur-sm rounded-sm overflow-hidden">
          {/* Header */}
          <div className="grid grid-cols-12 gap-0 py-3 px-4 md:px-6 border-b border-white/15 bg-white/5">
            <div className="col-span-5 font-mono text-[10px] tracking-[0.22em] uppercase text-white/50 text-right">
              blue
            </div>
            <div className="col-span-2 text-center font-mono text-[10px] tracking-[0.22em] uppercase text-white/40">
              round
            </div>
            <div className="col-span-5 font-mono text-[10px] tracking-[0.22em] uppercase text-white/50">
              red
            </div>
          </div>

          {ROUNDS.map((r, i) => {
            const delay = 0.3 + i * 0.12;
            const blueWins = r.blue > r.red;
            const redWins = r.red > r.blue;
            const draw = r.blue === r.red;
            return (
              <motion.div
                key={r.label}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: delay - 0.2 }}
                className="grid grid-cols-12 gap-0 items-center py-6 px-4 md:px-6 border-b border-white/10 last:border-b-0"
              >
                {/* Blue corner */}
                <div className="col-span-5 flex flex-col items-end gap-2">
                  <div className="flex items-baseline gap-3">
                    <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-white/40">
                      {r.unit}
                    </span>
                    <span className={`font-mono text-3xl md:text-5xl font-medium tabular-nums ${blueWins ? "text-white" : "text-white/50"}`}>
                      <NumberTicker value={r.blue} duration={1.3} delay={delay} />
                    </span>
                  </div>
                  <ScoreBar pct={r.bluePct} side="blue" delay={delay} />
                </div>

                {/* Middle label */}
                <div className="col-span-2 text-center">
                  <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-white/70 leading-tight">
                    {r.label.split(" / ")[0]}
                    <br />
                    <span className="text-white/40">{r.label.split(" / ")[1]}</span>
                  </p>
                  <p className="mt-2 font-mono text-[10px] tracking-[0.2em] uppercase">
                    {blueWins && <span className="text-hero-blue-lighter">◀ win</span>}
                    {redWins && <span className="text-rival-red-lighter">win ▶</span>}
                    {draw && <span className="text-streak-amber">— draw —</span>}
                  </p>
                </div>

                {/* Red corner */}
                <div className="col-span-5 flex flex-col items-start gap-2">
                  <div className="flex items-baseline gap-3">
                    <span className={`font-mono text-3xl md:text-5xl font-medium tabular-nums ${redWins ? "text-white" : "text-white/50"}`}>
                      <NumberTicker value={r.red} duration={1.3} delay={delay + 0.1} />
                    </span>
                    <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-white/40">
                      {r.unit}
                    </span>
                  </div>
                  <ScoreBar pct={r.redPct} side="red" delay={delay + 0.1} />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Post-fight footer + ringside monitor */}
        <div className="grid grid-cols-12 gap-6 md:gap-10 items-start mt-14 md:mt-20">
          <div className="col-span-12 md:col-span-7">
            <p className="font-mono text-[11px] tracking-[0.22em] uppercase text-streak-amber mb-4">
              ★ builder&apos;s note ★
            </p>
            <p className="font-serif-display text-2xl md:text-4xl leading-[1.15] text-white max-w-[24ch]">
              &ldquo;I lose to last week&apos;s me more often than I want to admit.&rdquo;
            </p>
            <p className="mt-4 font-mono text-[11px] tracking-[0.2em] uppercase text-white/50">
              — fiqhro, the guy who built this
            </p>
          </div>

          <div className="col-span-12 md:col-span-5 flex justify-center md:justify-end">
            <motion.div
              initial={{ opacity: 0, rotate: 0, y: 30 }}
              whileInView={{ opacity: 1, rotate: 4, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, delay: 0.3 }}
              className="relative"
            >
              <div className="absolute -inset-2 border border-streak-amber/30" />
              <div className="absolute -top-3 left-3 bg-hero-blue-deep px-2">
                <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-streak-amber">
                  ringside monitor
                </span>
              </div>
              <Image
                src="/screenshots/features/weekly-duel.webp"
                alt="Weekly Duel in IdeaTamer"
                width={260}
                height={560}
                className="relative rounded-[1.6rem] shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
