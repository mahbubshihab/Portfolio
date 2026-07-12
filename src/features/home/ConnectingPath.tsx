"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function ConnectingPath() {
  const { scrollYProgress } = useScroll();
  const pathLength = useSpring(scrollYProgress, { stiffness: 60, damping: 20 });

  return (
    <div className="absolute inset-0 pointer-events-none select-none overflow-hidden opacity-30 z-0">
      <svg
        className="w-full h-full min-h-[3500px]"
        viewBox="0 0 1440 3500"
        fill="none"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Glowing Neon Laser Gradient */}
          <linearGradient id="neon-laser" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" />
            <stop offset="30%" stopColor="#8b5cf6" />
            <stop offset="60%" stopColor="#d946ef" />
            <stop offset="90%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
        </defs>

        {/* Faded thick outer glow path (Simulating glow without expensive SVG filter) */}
        <motion.path
          d="M 1200 200 
             C 1500 600, -100 1000, 720 1500 
             C 1500 2000, -200 2400, 1100 2900"
          stroke="url(#neon-laser)"
          strokeWidth="6"
          strokeLinecap="round"
          fill="none"
          className="opacity-20"
          style={{ pathLength }}
        />
        
        {/* Inner bright core path */}
        <motion.path
          d="M 1200 200 
             C 1500 600, -100 1000, 720 1500 
             C 1500 2000, -200 2400, 1100 2900"
          stroke="rgba(255, 255, 255, 0.9)"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
          style={{ pathLength }}
        />

        {/* Faded background guide path */}
        <path
          d="M 1200 200 
             C 1500 600, -100 1000, 720 1500 
             C 1500 2000, -200 2400, 1100 2900"
          stroke="rgba(255, 255, 255, 0.03)"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
    </div>
  );
}
