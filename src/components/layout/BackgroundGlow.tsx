"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function BackgroundGlow() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for liquid movement
  const springX = useSpring(mouseX, { stiffness: 60, damping: 25 });
  const springY = useSpring(mouseY, { stiffness: 60, damping: 25 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Offset by half the width/height of the glow blob (e.g. 150px)
      mouseX.set(e.clientX - 150);
      mouseY.set(e.clientY - 150);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none select-none bg-background">
      {/* 🌌 Cyber Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293708_1px,transparent_1px),linear-gradient(to_bottom,#1f293708_1px,transparent_1px)] bg-[size:32px_32px]"></div>

      {/* 🕸️ Perspective Dot Matrix */}
      <div className="absolute inset-0 bg-[radial-gradient(#1f29370f_1px,transparent_1px)] [background-size:16px_16px]"></div>

      {/* 🦄 Interactive liquid glow tracker */}
      <motion.div
        style={{
          x: springX,
          y: springY,
        }}
        className="absolute w-[300px] h-[300px] rounded-full bg-gradient-to-r from-primary/5 via-blue-500/5 to-accent/5 blur-[90px] opacity-40"
      />

      {/* Static ambient blobs */}
      <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-primary/3 blur-[120px]" />
      <div className="absolute bottom-[20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-accent/3 blur-[120px]" />
    </div>
  );
}
