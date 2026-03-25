"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { EmailSignupForm } from "@/components/ui/EmailSignupForm";
import { springUp, staggerContainer } from "@/lib/animations";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-hero-blue via-hero-blue-light/80 to-white" />

      {/* Decorative circles */}
      <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-white/5 blur-3xl" />
      <div className="absolute bottom-40 right-10 w-96 h-96 rounded-full bg-hero-blue-lighter/20 blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto px-5 pt-24 pb-16 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Text content */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {/* Coming Soon badge */}
            <motion.div variants={springUp} className="mb-5">
              <span className="inline-flex items-center gap-2 bg-streak-amber/90 text-white text-xs font-bold tracking-wide uppercase px-4 py-1.5 rounded-full shadow-lg shadow-streak-amber/20">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
                </span>
                Coming Soon
              </span>
            </motion.div>

            <motion.div variants={springUp} className="mb-6">
              <Image
                src="/images/logo-bg.png"
                alt="IdeaTamer icon"
                width={72}
                height={72}
                className="rounded-2xl shadow-lg shadow-black/20 mx-auto lg:mx-0"
                priority
              />
            </motion.div>

            <motion.h1
              variants={springUp}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-[1.08] tracking-tight"
            >
              Stop collecting ideas.{" "}
              <span className="relative">
                Start finishing them.
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 300 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 8c50-6 100-6 150-2s100 2 146-4"
                    stroke="#FFCB57"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </motion.h1>

            <motion.p
              variants={springUp}
              className="mt-6 text-lg sm:text-xl text-white/80 max-w-lg mx-auto lg:mx-0 leading-relaxed"
            >
              The gamified focus app that turns your best idea into a quest.
              Be the first to know when it launches.
            </motion.p>

            <motion.div variants={springUp} className="mt-8">
              <EmailSignupForm variant="hero" />
            </motion.div>

            <motion.p
              variants={springUp}
              className="mt-3 text-white/50 text-sm"
            >
              Free to download. No spam, just launch updates.
            </motion.p>
          </motion.div>

          {/* Phone mockup */}
          <motion.div
            className="flex-1 flex justify-center lg:justify-end"
            initial={{ opacity: 0, y: 80, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ type: "spring", stiffness: 80, damping: 20, delay: 0.3 }}
          >
            <div className="relative">
              {/* Glow behind phone */}
              <div className="absolute inset-0 bg-white/20 rounded-[3rem] blur-2xl scale-105" />
              <Image
                src="/screenshots/appstore/slide-6.webp"
                alt="IdeaTamer app — Capture, Score, Focus, Ship"
                width={320}
                height={693}
                className="relative rounded-[2rem] shadow-2xl"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
