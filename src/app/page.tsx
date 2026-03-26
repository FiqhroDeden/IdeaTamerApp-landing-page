import { HeroSection } from "@/components/landing/HeroSection";
import { ScreenshotCarousel } from "@/components/landing/ScreenshotCarousel";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { FeatureHighlights } from "@/components/landing/FeatureHighlights";
import { CompeteSection } from "@/components/landing/CompeteSection";
import { WhySection } from "@/components/landing/WhySection";
import { FinalCTA } from "@/components/landing/FinalCTA";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ScreenshotCarousel />
      <HowItWorks />
      <FeatureHighlights />
      <WhySection />
      <CompeteSection />
      <FinalCTA />
    </>
  );
}
