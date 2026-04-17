"use client";

import { useEffect, useRef } from "react";
import { animate, useInView, useMotionValue, useTransform, motion } from "framer-motion";

interface NumberTickerProps {
  value: number;
  start?: number;
  duration?: number;
  className?: string;
  format?: (n: number) => string;
  once?: boolean;
  delay?: number;
}

export function NumberTicker({
  value,
  start = 0,
  duration = 1.6,
  className = "",
  format = (n) => Math.round(n).toLocaleString(),
  once = true,
  delay = 0.1,
}: NumberTickerProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once, margin: "-80px" });
  const mv = useMotionValue(start);
  const display = useTransform(mv, (v) => format(v));

  useEffect(() => {
    if (!inView) return;
    const controls = animate(mv, value, {
      duration,
      delay,
      ease: [0.22, 1, 0.36, 1],
    });
    return () => controls.stop();
  }, [inView, value, duration, delay, mv]);

  return (
    <motion.span ref={ref} className={className}>
      {display}
    </motion.span>
  );
}
