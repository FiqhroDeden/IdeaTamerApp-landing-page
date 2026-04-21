import Image from "next/image";

interface DeviceMockProps {
  src: string;
  alt: string;
  width: number;
  rotate?: number;
  className?: string;
}

export function DeviceMock({ src, alt, width, rotate = 0, className = "" }: DeviceMockProps) {
  // iPhone aspect is ~19.5:9 — screenshots are 750x1623 (≈ 2.164)
  const height = Math.round(width * (1623 / 750));
  const bezel = Math.round(width * 0.028);
  const radius = Math.round(width * 0.14);

  return (
    <div
      className={className}
      style={{
        width: width + bezel * 2,
        height: height + bezel * 2,
        transform: rotate ? `rotate(${rotate}deg)` : undefined,
        background: "#0E0D0B",
        borderRadius: radius,
        padding: bezel,
        boxShadow: "0 40px 80px -20px rgba(26,26,28,0.35), 0 8px 24px -8px rgba(26,26,28,0.25)",
        flexShrink: 0,
      }}
    >
      <div
        style={{
          width,
          height,
          borderRadius: radius - bezel,
          overflow: "hidden",
          position: "relative",
          background: "#F4EFE6",
        }}
      >
        <Image
          src={src}
          alt={alt}
          width={750}
          height={1623}
          priority
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }}
        />
      </div>
    </div>
  );
}
