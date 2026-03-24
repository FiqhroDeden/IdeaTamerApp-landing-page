import sharp from "sharp";
import { readdir, mkdir, copyFile } from "fs/promises";
import { join } from "path";

const ROOT = process.cwd();

async function ensureDir(dir) {
  await mkdir(dir, { recursive: true });
}

async function optimizeAppStoreScreenshots() {
  const srcDir = join(ROOT, "Screenshoots/App-store-screenshoots");
  const outDir = join(ROOT, "public/screenshots/appstore");
  await ensureDir(outDir);

  for (let i = 1; i <= 6; i++) {
    const src = join(srcDir, `image${i}.png`);
    const out = join(outDir, `slide-${i}.webp`);
    await sharp(src).resize(640, null, { withoutEnlargement: true }).webp({ quality: 80 }).toFile(out);
    const info = await sharp(out).metadata();
    console.log(`  slide-${i}.webp: ${Math.round(info.size / 1024)}KB`);
  }
}

async function optimizeFeatureScreenshots() {
  const outDir = join(ROOT, "public/screenshots/features");
  await ensureDir(outDir);

  const mapping = {
    "smart-scoring": "Screenshoots/Light/Screenshot 2026-03-24 at 18.52.00.png",
    "one-quest": "Screenshoots/Light/Screenshot 2026-03-24 at 18.53.26.png",
    "weekly-duel": "Screenshoots/Light/Screenshot 2026-03-24 at 18.54.36.png",
    "xp-levels": "Screenshoots/Light/Screenshot 2026-03-24 at 18.55.39.png",
    "hall-of-fame": "Screenshoots/Light/Screenshot 2026-03-24 at 18.55.08.png",
    "free-private": "Screenshoots/Light/Screenshot 2026-03-24 at 19.02.49.png",
  };

  for (const [name, srcPath] of Object.entries(mapping)) {
    const src = join(ROOT, srcPath);
    const out = join(outDir, `${name}.webp`);
    await sharp(src).resize(400, null, { withoutEnlargement: true }).webp({ quality: 80 }).toFile(out);
    const info = await sharp(out).metadata();
    console.log(`  ${name}.webp: ${Math.round(info.size / 1024)}KB`);
  }
}

async function generateFavicons() {
  const src = join(ROOT, "assets/images/AppIcon1024.png");
  const pubDir = join(ROOT, "public");
  await ensureDir(pubDir);

  await sharp(src).resize(180, 180).png().toFile(join(pubDir, "apple-touch-icon.png"));
  await sharp(src).resize(32, 32).png().toFile(join(pubDir, "favicon-32x32.png"));
  await sharp(src).resize(16, 16).png().toFile(join(pubDir, "favicon-16x16.png"));
  // Create ICO-compatible PNG at 32x32 as favicon.ico (browsers accept PNG)
  await sharp(src).resize(32, 32).png().toFile(join(pubDir, "favicon.ico"));
  console.log("  Favicons generated");
}

async function copyLogos() {
  const imgDir = join(ROOT, "public/images");
  await ensureDir(imgDir);

  await copyFile(join(ROOT, "assets/images/logo_bg.png"), join(imgDir, "logo-bg.png"));
  // Create resized app icon for hero/CTA
  await sharp(join(ROOT, "assets/images/AppIcon1024.png"))
    .resize(256, 256)
    .png({ quality: 90 })
    .toFile(join(imgDir, "app-icon.png"));
  console.log("  Logos copied");
}

async function generateOGImage() {
  const imgDir = join(ROOT, "public/images");
  await ensureDir(imgDir);

  // Create a 1200x630 OG image with blue gradient and app icon overlay
  const iconBuffer = await sharp(join(ROOT, "assets/images/AppIcon1024.png"))
    .resize(160, 160)
    .png()
    .toBuffer();

  // Blue gradient background
  const bg = await sharp({
    create: {
      width: 1200,
      height: 630,
      channels: 4,
      background: { r: 27, g: 110, b: 242, alpha: 1 },
    },
  })
    .png()
    .toBuffer();

  // Create SVG text overlay
  const textSvg = Buffer.from(`
    <svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
      <text x="600" y="340" text-anchor="middle" font-family="sans-serif" font-weight="800" font-size="56" fill="white">
        Stop collecting ideas.
      </text>
      <text x="600" y="410" text-anchor="middle" font-family="sans-serif" font-weight="800" font-size="56" fill="white">
        Start finishing them.
      </text>
      <text x="600" y="480" text-anchor="middle" font-family="sans-serif" font-weight="400" font-size="26" fill="rgba(255,255,255,0.8)">
        Score. Focus. Ship. Free for iOS.
      </text>
    </svg>
  `);

  await sharp(bg)
    .composite([
      { input: iconBuffer, top: 140, left: 520 },
      { input: textSvg, top: 0, left: 0 },
    ])
    .png()
    .toFile(join(imgDir, "og-image.png"));

  console.log("  OG image generated");
}

async function main() {
  console.log("Optimizing App Store screenshots...");
  await optimizeAppStoreScreenshots();

  console.log("Optimizing feature screenshots...");
  await optimizeFeatureScreenshots();

  console.log("Generating favicons...");
  await generateFavicons();

  console.log("Copying logos...");
  await copyLogos();

  console.log("Generating OG image...");
  await generateOGImage();

  console.log("\nDone!");
}

main().catch(console.error);
