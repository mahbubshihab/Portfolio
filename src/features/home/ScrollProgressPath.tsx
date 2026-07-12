"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export function ScrollProgressPath() {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="fixed left-4 md:left-12 top-0 bottom-0 w-[2px] bg-border/30 z-[50] pointer-events-none hidden md:block">
      <motion.div
        className="w-full bg-gradient-to-b from-primary to-accent origin-top"
        style={{ scaleY, height: "100%" }}
      />
      {/* Glowing orb at the bottom of the line */}
      <motion.div
        className="absolute w-4 h-4 bg-accent rounded-full -left-[7px] shadow-[0_0_15px_#8b5cf6]"
        style={{ 
          top: useTransform(scaleY, [0, 1], ["0%", "100%"]),
          translateY: "-50%" 
        }}
      />
    </div>
  );
}
