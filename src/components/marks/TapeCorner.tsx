"use client";

type TapeCornerPosition = "top-left" | "top-right" | "bottom-left" | "bottom-right";

interface TapeCornerProps {
  position?: TapeCornerPosition;
  className?: string;
  color?: string;
  width?: number;
  rotate?: number;
}

const POSITIONS: Record<TapeCornerPosition, { top?: string; right?: string; bottom?: string; left?: string; rotate: number }> = {
  "top-left": { top: "-10px", left: "-16px", rotate: -22 },
  "top-right": { top: "-12px", right: "-14px", rotate: 18 },
  "bottom-left": { bottom: "-10px", left: "-14px", rotate: 12 },
  "bottom-right": { bottom: "-12px", right: "-18px", rotate: -16 },
};

export function TapeCorner({
  position = "top-left",
  className = "",
  color = "rgba(245, 166, 35, 0.42)",
  width = 88,
  rotate,
}: TapeCornerProps) {
  const pos = POSITIONS[position];
  const finalRotate = rotate ?? pos.rotate;

  return (
    <span
      aria-hidden
      className={`absolute pointer-events-none block ${className}`}
      style={{
        top: pos.top,
        right: pos.right,
        bottom: pos.bottom,
        left: pos.left,
        width,
        height: 20,
        transform: `rotate(${finalRotate}deg)`,
        background: color,
        boxShadow: "0 2px 4px rgba(0,0,0,0.08)",
        backgroundImage:
          "repeating-linear-gradient(90deg, rgba(255,255,255,0.12) 0 2px, transparent 2px 6px)",
      }}
    />
  );
}
