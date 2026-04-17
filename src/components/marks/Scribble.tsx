"use client";

import { motion } from "framer-motion";

type ScribbleVariant = "underline" | "strikeout" | "circle" | "arrow" | "check" | "wobble";

interface ScribbleProps {
  variant?: ScribbleVariant;
  className?: string;
  color?: string;
  strokeWidth?: number;
  delay?: number;
  once?: boolean;
  duration?: number;
}

const PATHS: Record<ScribbleVariant, { viewBox: string; d: string; second?: string }> = {
  underline: {
    viewBox: "0 0 300 14",
    d: "M4 9c40-6 78-8 122-5s100 5 172-3",
  },
  strikeout: {
    viewBox: "0 0 300 20",
    d: "M6 13c52-4 110-6 176-3s76 1 112-6",
  },
  circle: {
    viewBox: "0 0 220 120",
    d: "M110 12c-60 2-94 24-94 46 0 28 42 48 108 48 56 0 92-22 94-46 2-26-40-46-102-46-28 0-64 6-86 20",
  },
  arrow: {
    viewBox: "0 0 160 80",
    d: "M8 60c28-28 54-40 80-44 18-3 36 0 50 10",
    second: "M132 16l8 10m-8-10l-4 12",
  },
  check: {
    viewBox: "0 0 80 80",
    d: "M14 42l18 20L68 14",
  },
  wobble: {
    viewBox: "0 0 300 30",
    d: "M4 22c30-18 60-10 90-2 28 8 56 14 88 6 28-8 54-18 112-10",
  },
};

export function Scribble({
  variant = "underline",
  className = "",
  color = "currentColor",
  strokeWidth = 3.2,
  delay = 0.1,
  once = true,
  duration = 0.9,
}: ScribbleProps) {
  const { viewBox, d, second } = PATHS[variant];

  return (
    <svg
      className={className}
      viewBox={viewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <motion.path
        d={d}
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once, margin: "-40px" }}
        transition={{ duration, delay, ease: [0.65, 0, 0.35, 1] }}
      />
      {second && (
        <motion.path
          d={second}
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once, margin: "-40px" }}
          transition={{ duration: duration * 0.5, delay: delay + duration * 0.7, ease: "easeOut" }}
        />
      )}
    </svg>
  );
}
