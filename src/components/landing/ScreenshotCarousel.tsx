"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const SLIDES = [
  { src: "/screenshots/appstore/slide-1.webp", alt: "Stop Collecting. Start Finishing.", slug: "01 / intro" },
  { src: "/screenshots/appstore/slide-2.webp", alt: "Score Every Idea",                 slug: "02 / score" },
  { src: "/screenshots/appstore/slide-3.webp", alt: "One Quest at a Time",              slug: "03 / focus" },
  { src: "/screenshots/appstore/slide-4.webp", alt: "Compete with Yourself",            slug: "04 / duel" },
  { src: "/screenshots/appstore/slide-5.webp", alt: "Build Your Legacy",                slug: "05 / ship" },
  { src: "/screenshots/appstore/slide-6.webp", alt: "Capture. Score. Focus. Ship.",     slug: "06 / loop" },
];

// Corner tick marks for the contact-sheet frame
function CornerTick({ position }: { position: "tl" | "tr" | "bl" | "br" }) {
  const cls = {
    tl: "top-0 left-0",
    tr: "top-0 right-0 rotate-90",
    bl: "bottom-0 left-0 -rotate-90",
    br: "bottom-0 right-0 rotate-180",
  }[position];
  return (
    <svg
      className={`absolute ${cls} w-5 h-5 text-ink/60 dark:text-chalk/60`}
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden
    >
      <path d="M1 9V1h8" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

export function ScreenshotCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const interval = setInterval(() => {
      if (isPaused) return;
      const maxScroll = container.scrollWidth - container.clientWidth;
      if (container.scrollLeft >= maxScroll - 10) {
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        container.scrollBy({ left: 340, behavior: "smooth" });
      }
    }, 3500);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section className="py-20 md:py-28 bg-paper dark:bg-paper border-t border-ink/15 dark:border-chalk/15 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto px-5 md:px-8 mb-10"
      >
        <div className="flex items-end justify-between border-b border-ink/30 dark:border-chalk/30 pb-4">
          <div>
            <p className="font-mono text-[11px] tracking-[0.28em] uppercase text-ink-mid dark:text-chalk-mid">
              Section 01 / contact sheet
            </p>
            <h2 className="mt-2 font-serif-display text-3xl md:text-5xl text-ink dark:text-chalk leading-[0.95]">
              <span className="italic">six frames</span> from the app.
            </h2>
          </div>
          <p className="hidden md:block font-mono text-[11px] tracking-[0.2em] uppercase text-ink-soft dark:text-chalk-mid">
            ← drag to scroll
          </p>
        </div>
      </motion.div>

      <div
        ref={scrollRef}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setTimeout(() => setIsPaused(false), 5000)}
        className="flex gap-6 overflow-x-auto no-scrollbar px-8 snap-x snap-mandatory scroll-smooth"
      >
        {SLIDES.map((slide, i) => (
          <div
            key={i}
            className="flex-shrink-0 snap-center w-[260px] sm:w-[300px] md:w-[320px] relative"
          >
            {/* Contact-sheet frame */}
            <div className="relative border border-ink/30 dark:border-chalk/30 p-3 bg-paper-deep/60 dark:bg-paper-deep/60">
              <CornerTick position="tl" />
              <CornerTick position="tr" />
              <CornerTick position="bl" />
              <CornerTick position="br" />

              <Image
                src={slide.src}
                alt={slide.alt}
                width={320}
                height={693}
                className="rounded-xl shadow-lg"
              />

              {/* Slug overlay */}
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between">
                <span className="font-mono text-[10px] tracking-[0.24em] uppercase text-white bg-ink/70 px-2 py-1">
                  {slide.slug}
                </span>
                <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/90 bg-ink/50 px-2 py-1">
                  IDEATAMER
                </span>
              </div>
            </div>

            {/* Caption below frame */}
            <p className="mt-3 font-mono text-[10px] tracking-[0.2em] uppercase text-ink-soft dark:text-chalk-mid text-center">
              frame {String(i + 1).padStart(2, "0")} of {String(SLIDES.length).padStart(2, "0")}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
