"use client";

import { useBackground } from "@/context/BackgroundContext";
import { BackgroundGlow } from "@/components/layout/BackgroundGlow";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function RootLayoutContent({ children }: { children: React.ReactNode }) {
  const { backgroundClass } = useBackground();
  
  // Track scroll position
  const { scrollYProgress } = useScroll();
  
  // Hardware-accelerated opacity values for different background layers
  // This avoids recalculating linear-gradient paints on every scroll tick, making scrolling buttery smooth.
  const opacityLayer1 = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const opacityLayer2 = useTransform(scrollYProgress, [0.15, 0.45, 0.75], [0, 1, 0]);
  const opacityLayer3 = useTransform(scrollYProgress, [0.55, 0.85], [0, 1]);

  return (
    <div className={`${backgroundClass} flex-1 flex flex-col min-h-screen relative text-foreground overflow-hidden`}>
      {/* Background Layers - Fixed & Hardware-Accelerated (Opacity changes only) */}
      <div className="absolute inset-0 -z-30 pointer-events-none bg-[#030014]" />
      
      {/* Slate Layer */}
      <motion.div 
        style={{ opacity: opacityLayer1 }}
        className="absolute inset-0 -z-20 pointer-events-none bg-gradient-to-b from-[#020617] to-[#0b0922]"
      />
      
      {/* Purple Layer */}
      <motion.div 
        style={{ opacity: opacityLayer2 }}
        className="absolute inset-0 -z-20 pointer-events-none bg-gradient-to-b from-[#0b0922] via-[#0b0424] to-[#030014]"
      />
      
      {/* Deep Navy/Space Black Layer */}
      <motion.div 
        style={{ opacity: opacityLayer3 }}
        className="absolute inset-0 -z-20 pointer-events-none bg-gradient-to-b from-[#030014] to-[#0a0624]"
      />

      <BackgroundGlow />
      <Navbar />
      <main className="flex-1 w-full flex flex-col relative z-10">{children}</main>
      <Footer />
    </div>
  );
}
