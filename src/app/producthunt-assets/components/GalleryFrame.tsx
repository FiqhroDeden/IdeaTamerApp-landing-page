import type { GalleryItem, GalleryAccent } from "../gallery-items";
import { DeviceMock } from "./DeviceMock";

const ACCENT: Record<GalleryAccent, { bar: string; dot: string; label: string; eyebrow: string }> = {
  blue: { bar: "#1B6EF2", dot: "#1B6EF2", label: "HERO", eyebrow: "#0A4FBD" },
  amber: { bar: "#F5A623", dot: "#F5A623", label: "FOCUS", eyebrow: "#A46A00" },
  red: { bar: "#E5432A", dot: "#E5432A", label: "RIVAL", eyebrow: "#A61E08" },
  emerald: { bar: "#12B76A", dot: "#12B76A", label: "VICTORY", eyebrow: "#086B3D" },
  ink: { bar: "#1A1A1C", dot: "#1A1A1C", label: "WAKE UP", eyebrow: "#1A1A1C" },
};

const FRAME_WIDTH = 1270;
const FRAME_HEIGHT = 760;

export function GalleryFrame({ item }: { item: GalleryItem }) {
  const accent = ACCENT[item.accent];

  return (
    <>
      <style>{`
        html, body { overflow: hidden !important; background: #F4EFE6 !important; margin: 0 !important; padding: 0 !important; }
        body > nav, body > header, body > footer { display: none !important; }
        body > :not(main):not(script):not(#ph-frame) { display: none !important; }
        main { padding: 0 !important; margin: 0 !important; }
        main > :not(#ph-frame) { display: none !important; }
        nextjs-portal, #__next-build-watcher, [data-nextjs-toast],
        [data-nextjs-dialog-overlay], [data-nextjs-dev-tools-button] { display: none !important; }
      `}</style>
    <div
      id="ph-frame"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: FRAME_WIDTH,
        height: FRAME_HEIGHT,
        background: "#F4EFE6",
        color: "#1A1A1C",
        overflow: "hidden",
        fontFamily: "var(--font-plus-jakarta), system-ui, sans-serif",
        zIndex: 999999,
        isolation: "isolate",
      }}
    >
      {/* subtle grain / paper texture hint */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(circle at 20% 10%, rgba(26,26,28,0.04) 0, transparent 60%), radial-gradient(circle at 90% 90%, rgba(26,26,28,0.035) 0, transparent 55%)",
          pointerEvents: "none",
        }}
      />

      {/* accent side bar */}
      <div
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          width: 10,
          background: accent.bar,
        }}
      />

      {/* content grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          padding: "52px 72px 48px 90px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        {/* top row: eyebrow */}
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <span
            style={{
              width: 10,
              height: 10,
              borderRadius: 999,
              background: accent.dot,
              display: "inline-block",
            }}
          />
          <span
            style={{
              fontFamily: "var(--font-jetbrains-mono), ui-monospace, monospace",
              fontSize: 14,
              letterSpacing: 3,
              textTransform: "uppercase",
              fontWeight: 500,
              color: accent.eyebrow,
            }}
          >
            {item.eyebrow}
          </span>
          <span
            style={{
              marginLeft: 6,
              fontFamily: "var(--font-jetbrains-mono), ui-monospace, monospace",
              fontSize: 12,
              letterSpacing: 2,
              color: "#8A8378",
            }}
          >
            IdeaTamer · v1.0
          </span>
        </div>

        {/* main body */}
        {item.variant === "problem" ? (
          <ProblemBody item={item} accent={accent} />
        ) : item.variant === "duel" ? (
          <DuelBody item={item} />
        ) : (
          <FeatureBody item={item} />
        )}

        {/* footer */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            paddingTop: 24,
          }}
        >
          <div>
            <div
              style={{
                fontFamily: "var(--font-instrument-serif), serif",
                fontSize: 26,
                fontStyle: "italic",
                lineHeight: 1,
                letterSpacing: -0.5,
              }}
            >
              IdeaTamer
            </div>
            <div
              style={{
                marginTop: 6,
                fontFamily: "var(--font-jetbrains-mono), ui-monospace, monospace",
                fontSize: 11,
                letterSpacing: 2,
                color: "#55514A",
                textTransform: "uppercase",
              }}
            >
              ideatamer.app · free for iOS
            </div>
          </div>
          <div
            style={{
              fontFamily: "var(--font-jetbrains-mono), ui-monospace, monospace",
              fontSize: 12,
              letterSpacing: 3,
              color: "#8A8378",
            }}
          >
            {String(item.index).padStart(2, "0")} / 06
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

function FeatureBody({ item }: { item: GalleryItem }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 60, flex: 1, paddingTop: 24 }}>
      <div style={{ flex: 1, maxWidth: 640 }}>
        <h1
          style={{
            fontFamily: "var(--font-instrument-serif), serif",
            fontSize: 72,
            lineHeight: 1.0,
            letterSpacing: -1.2,
            fontWeight: 400,
            margin: 0,
            whiteSpace: "pre-line",
            color: "#1A1A1C",
          }}
        >
          {item.headline}
        </h1>
        <p
          style={{
            marginTop: 28,
            fontSize: 22,
            lineHeight: 1.4,
            color: "#55514A",
            fontWeight: 400,
            maxWidth: 520,
          }}
        >
          {item.subCopy}
        </p>
      </div>
      {item.screenshot && (
        <DeviceMock src={item.screenshot} alt={item.eyebrow} width={248} />
      )}
    </div>
  );
}

function DuelBody({ item }: { item: GalleryItem }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 40, flex: 1, paddingTop: 24 }}>
      <div style={{ flex: 1, maxWidth: 560 }}>
        <h1
          style={{
            fontFamily: "var(--font-instrument-serif), serif",
            fontSize: 66,
            lineHeight: 1.0,
            letterSpacing: -1.2,
            fontWeight: 400,
            margin: 0,
            whiteSpace: "pre-line",
            color: "#1A1A1C",
          }}
        >
          {item.headline}
        </h1>
        <p
          style={{
            marginTop: 26,
            fontSize: 20,
            lineHeight: 1.4,
            color: "#55514A",
            fontWeight: 400,
            maxWidth: 480,
          }}
        >
          {item.subCopy}
        </p>
      </div>
      <div style={{ display: "flex", gap: 20, alignItems: "center", position: "relative" }}>
        {item.screenshot && (
          <DeviceMock src={item.screenshot} alt="Weekly Duel" width={218} rotate={-3} />
        )}
        {item.secondaryScreenshot && (
          <DeviceMock
            src={item.secondaryScreenshot}
            alt="XP & Levels"
            width={218}
            rotate={3}
            className="ml-[-40px]"
          />
        )}
      </div>
    </div>
  );
}

function ProblemBody({
  item,
  accent,
}: {
  item: GalleryItem;
  accent: (typeof ACCENT)[GalleryAccent];
}) {
  return (
    <div style={{ display: "flex", alignItems: "center", flex: 1, paddingTop: 24 }}>
      <div style={{ flex: 1 }}>
        <h1
          style={{
            fontFamily: "var(--font-instrument-serif), serif",
            fontSize: 104,
            lineHeight: 0.95,
            letterSpacing: -2.5,
            fontWeight: 400,
            margin: 0,
            whiteSpace: "pre-line",
            color: "#1A1A1C",
            fontStyle: "italic",
          }}
        >
          {item.headline}
        </h1>
        <p
          style={{
            marginTop: 36,
            fontSize: 28,
            lineHeight: 1.3,
            color: "#55514A",
            fontWeight: 500,
          }}
        >
          {item.subCopy}
        </p>
      </div>
      <div
        style={{
          width: 360,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          gap: 16,
        }}
      >
        {[
          { n: "47", label: "ideas captured" },
          { n: "12", label: "scored" },
          { n: "3", label: "started" },
          { n: "0", label: "shipped" },
        ].map((row, i) => (
          <div
            key={row.label}
            style={{
              display: "flex",
              alignItems: "baseline",
              justifyContent: "flex-end",
              gap: 20,
              width: "100%",
              opacity: 1 - i * 0.08,
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-jetbrains-mono), ui-monospace, monospace",
                fontSize: 14,
                letterSpacing: 2,
                textTransform: "uppercase",
                color: "#8A8378",
              }}
            >
              {row.label}
            </span>
            <span
              style={{
                fontFamily: "var(--font-instrument-serif), serif",
                fontSize: 72,
                lineHeight: 1,
                color: i === 3 ? accent.bar : "#1A1A1C",
                fontWeight: 400,
                minWidth: 90,
                textAlign: "right",
              }}
            >
              {row.n}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
