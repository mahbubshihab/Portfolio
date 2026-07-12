"use client";

import { ScrollProgressPath } from "@/features/home/ScrollProgressPath";
import { ConnectingPath } from "@/features/home/ConnectingPath";
import { HeroSection } from "@/features/home/HeroSection";
import { TechMarquee } from "@/features/home/TechMarquee";
import { ServicesSection } from "@/features/home/ServicesSection";
import { BottomCTA } from "@/features/home/BottomCTA";
import { ScrollTransitionWrapper } from "@/components/layout/ScrollTransitionWrapper";

export default function Home() {
  return (
    <main className="min-h-screen bg-background overflow-hidden selection:bg-primary/30 relative">
      {/* Scroll indicator overlay */}
      <ScrollProgressPath />
      
      {/* Dynamic laser connecting path */}
      <ConnectingPath />
      
      {/* Sections wrapped in heavy 3D scroll transitions */}
      <div className="flex flex-col gap-12 relative z-10">
        <ScrollTransitionWrapper>
          <HeroSection />
        </ScrollTransitionWrapper>

        <ScrollTransitionWrapper>
          <TechMarquee />
        </ScrollTransitionWrapper>

        <ScrollTransitionWrapper>
          <ServicesSection />
        </ScrollTransitionWrapper>

        <ScrollTransitionWrapper>
          <BottomCTA />
        </ScrollTransitionWrapper>
      </div>
    </main>
  );
}
