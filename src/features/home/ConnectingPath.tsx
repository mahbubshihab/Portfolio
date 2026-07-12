"use client";

import { motion } from "framer-motion";

export function ConnectingPath() {
  return (
    <div className="absolute inset-0 -z-30 pointer-events-none select-none overflow-hidden opacity-30">
      <svg
        className="w-full h-full min-h-[3000px]"
        viewBox="0 0 1440 3500"
        fill="none"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="path-gradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.2" />
            <stop offset="40%" stopColor="var(--accent)" stopOpacity="0.1" />
            <stop offset="80%" stopColor="var(--primary)" stopOpacity="0.05" />
            <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Subtle geometric curved guide line */}
        <motion.path
          d="M 1000 350 
             C 1150 650, 250 850, 320 1250 
             C 380 1550, 1050 1750, 950 2150 
             C 850 2450, 250 2750, 320 3150"
          stroke="url(#path-gradient)"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, ease: "easeInOut" }}
        />
      </svg>
    </div>
  );
}
