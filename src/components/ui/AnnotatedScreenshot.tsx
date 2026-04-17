"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Scribble } from "@/components/marks/Scribble";

type CalloutShape = "circle" | "arrow" | "underline";

interface Callout {
  shape: CalloutShape;
  label: string;
  /* Percentage positions on the wrapper, 0–100 */
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
  color?: string;
  labelWidth?: number;
}

interface AnnotatedScreenshotProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  rotate?: number;
  className?: string;
  callouts?: Callout[];
  priority?: boolean;
}

export function AnnotatedScreenshot({
  src,
  alt,
  width = 300,
  height = 650,
  rotate = 0,
  className = "",
  callouts = [],
  priority = false,
}: AnnotatedScreenshotProps) {
  return (
    <div
      className={`relative inline-block ${className}`}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        className="relative rounded-[2rem] shadow-2xl"
      />

      {callouts.map((c, i) => (
        <div key={i} className="pointer-events-none">
          <div
            className="absolute"
            style={{
              top: c.top,
              left: c.left,
              right: c.right,
              bottom: c.bottom,
              width: c.width ?? (c.shape === "circle" ? 120 : 150),
              transform: c.rotate ? `rotate(${c.rotate}deg)` : undefined,
            }}
          >
            <Scribble
              variant={c.shape}
              color={c.color ?? "#E5432A"}
              strokeWidth={c.shape === "circle" ? 2.6 : 2.4}
              delay={0.2 + i * 0.15}
              className="w-full h-auto"
            />
          </div>
          <motion.div
            className="absolute font-mono text-[11px] tracking-wider uppercase"
            style={{
              top: c.labelTop,
              left: c.labelLeft,
              right: c.labelRight,
              bottom: c.labelBottom,
              color: c.color ?? "#E5432A",
              width: c.labelWidth,
            }}
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: 0.5 + i * 0.15, duration: 0.4 }}
          >
            {c.label}
          </motion.div>
        </div>
      ))}
    </div>
  );
}
