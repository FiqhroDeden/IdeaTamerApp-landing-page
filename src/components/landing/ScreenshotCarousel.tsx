"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { AnimatedOnScroll } from "@/components/ui/AnimatedOnScroll";

const SLIDES = [
  { src: "/screenshots/appstore/slide-1.webp", alt: "Stop Collecting. Start Finishing." },
  { src: "/screenshots/appstore/slide-2.webp", alt: "Score Every Idea" },
  { src: "/screenshots/appstore/slide-3.webp", alt: "One Quest at a Time" },
  { src: "/screenshots/appstore/slide-4.webp", alt: "Compete with Yourself" },
  { src: "/screenshots/appstore/slide-5.webp", alt: "Build Your Legacy" },
  { src: "/screenshots/appstore/slide-6.webp", alt: "Capture. Score. Focus. Ship." },
];

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
    <section className="py-16 md:py-24 bg-surface overflow-hidden">
      <AnimatedOnScroll>
        <div className="max-w-6xl mx-auto px-5 mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-text-primary text-center">
            See it in action
          </h2>
        </div>
      </AnimatedOnScroll>

      <div
        ref={scrollRef}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setTimeout(() => setIsPaused(false), 5000)}
        className="flex gap-5 overflow-x-auto no-scrollbar px-8 snap-x snap-mandatory scroll-smooth"
      >
        {SLIDES.map((slide, i) => (
          <div
            key={i}
            className="flex-shrink-0 snap-center w-[260px] sm:w-[300px] md:w-[320px]"
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              width={320}
              height={693}
              className="rounded-2xl shadow-lg"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
