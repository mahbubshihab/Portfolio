"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export function ScrollProgressPath() {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
    restDelta: 0.001
  });

  // Calculate dynamic colors and scales for the glowing orb
  const orbScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.4, 1.8]);
  const orbGlow = useTransform(
    scaleY,
    [0, 0.5, 1],
    [
      "shadow-[0_0_20px_rgba(6,182,212,0.8)] bg-primary",
      "shadow-[0_0_30px_rgba(139,92,246,0.9)] bg-accent",
      "shadow-[0_0_40px_rgba(217,70,239,1)] bg-fuchsia-500"
    ]
  );

  return (
    <div className="fixed left-4 md:left-12 top-0 bottom-0 w-[3px] bg-border/20 z-[50] pointer-events-none hidden md:block">
      {/* Laser fill */}
      <motion.div
        className="w-full bg-gradient-to-b from-primary via-accent to-fuchsia-500 origin-top shadow-[0_0_10px_var(--primary)]"
        style={{ scaleY, height: "100%" }}
      />
      <motion.div
        className="absolute w-4 h-4 rounded-full -left-[6.5px]"
        style={{ 
          top: useTransform(scaleY, [0, 1], ["0%", "100%"]),
          translateY: "-50%",
          scale: orbScale,
          boxShadow: useTransform(scaleY, [0, 0.5, 1], [
            "0 0 20px #06b6d4, 0 0 40px #06b6d4",
            "0 0 30px #8b5cf6, 0 0 50px #8b5cf6",
            "0 0 40px #d946ef, 0 0 60px #d946ef"
          ]),
          backgroundColor: useTransform(scaleY, [0, 0.5, 1], ["#06b6d4", "#8b5cf6", "#d946ef"])
        }}
      />
    </div>
  );
}
