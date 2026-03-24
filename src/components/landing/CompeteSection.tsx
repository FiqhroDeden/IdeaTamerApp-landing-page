"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, springUp } from "@/lib/animations";

export function CompeteSection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Emerald gradient bg */}
      <div className="absolute inset-0 bg-gradient-to-br from-victory-emerald via-[#0fa85f] to-[#0a8f50]" />

      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-white/5 blur-3xl" />
      <div className="absolute bottom-10 left-10 w-48 h-48 rounded-full bg-white/5 blur-2xl" />
      <div className="absolute top-1/2 left-1/4 w-3 h-3 rounded-full bg-white/20" />
      <div className="absolute top-1/3 right-1/3 w-2 h-2 rounded-full bg-white/15" />
      <div className="absolute bottom-1/3 right-1/4 w-4 h-4 rounded-full bg-white/10" />

      <div className="relative z-10 max-w-6xl mx-auto px-5">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          {/* Text */}
          <motion.div
            className="flex-1 text-center md:text-left"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight">
              Compete with{" "}
              <span className="relative inline-block">
                yourself.
                <svg
                  className="absolute -bottom-1 left-0 w-full"
                  viewBox="0 0 200 8"
                  fill="none"
                >
                  <path
                    d="M2 5c40-4 80-2 120 0s60 2 76-2"
                    stroke="#FFCB57"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h2>
            <p className="mt-6 text-lg text-white/85 max-w-md mx-auto md:mx-0 leading-relaxed">
              Every Monday, your shadow resets. Beat the person you were 7 days
              ago — in XP earned, milestones hit, quests shipped, and streak
              days. Four rounds. One winner.
            </p>
          </motion.div>

          {/* Phone mockup */}
          <motion.div
            className="flex-1 flex justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={springUp}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-white/10 rounded-[3rem] blur-2xl scale-110" />
              <Image
                src="/screenshots/features/weekly-duel.webp"
                alt="Weekly Duel — compete with your past self"
                width={300}
                height={650}
                className="relative rounded-[2rem] shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
