import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GALLERY_ITEMS, GALLERY_SLUGS } from "../gallery-items";
import { GalleryFrame } from "../components/GalleryFrame";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
  title: "PH Asset",
};

export function generateStaticParams() {
  return GALLERY_SLUGS.map((slug) => ({ slug }));
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = GALLERY_ITEMS[slug];
  if (!item) notFound();
  return <GalleryFrame item={item} />;
}
