"use client";

import { AnimatedCursor } from "@/features/home/AnimatedCursor";
import { ScrollProgressPath } from "@/features/home/ScrollProgressPath";
import { HeroSection } from "@/features/home/HeroSection";
import { TechMarquee } from "@/features/home/TechMarquee";
import { ServicesSection } from "@/features/home/ServicesSection";
import { BottomCTA } from "@/features/home/BottomCTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-background overflow-hidden selection:bg-primary/30 relative">
      <AnimatedCursor />
      <ScrollProgressPath />
      
      <HeroSection />
      <TechMarquee />
      <ServicesSection />
      <BottomCTA />
    </main>
  );
}
