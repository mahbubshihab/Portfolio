"use client";

import { motion } from "framer-motion";

interface WaveDividerProps {
  className?: string;
  inverted?: boolean;
}

// Complex wave path frames to animate between for smooth fluid simulation
const wavePaths = [
  "M0,50 C120,90 280,20 400,60 C460,75 480,85 500,90 V150 H0 Z",
  "M0,60 C100,20 250,90 380,50 C440,35 470,55 500,70 V150 H0 Z",
  "M0,50 C120,90 280,20 400,60 C460,75 480,85 500,90 V150 H0 Z",
];

const wavePathsSecondary = [
  "M0,80 C150,110 300,50 500,80 V150 H0 Z",
  "M0,60 C120,90 280,30 500,60 V150 H0 Z",
  "M0,80 C150,110 300,50 500,80 V150 H0 Z",
];

export function WaveDivider({ className = "", inverted = false }: WaveDividerProps) {
  return (
    <div className={`w-full overflow-hidden absolute left-0 leading-[0] ${className} ${inverted ? "rotate-180" : ""}`}>
      <svg
        className="relative block w-full h-[60px] md:h-[120px]"
        viewBox="0 0 500 150"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Main Neon Gradient */}
          <linearGradient id="neon-wave" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#d946ef" stopOpacity="0.4" />
          </linearGradient>

          {/* Secondary Soft Gradient */}
          <linearGradient id="soft-wave" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.1" />
          </linearGradient>
        </defs>

        {/* Back wave - slower, different offset */}
        <motion.path
          d={wavePathsSecondary[0]}
          fill="url(#soft-wave)"
          animate={{ d: wavePathsSecondary }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Mid wave - glowing border overlay */}
        <motion.path
          d={wavePaths[0]}
          fill="url(#neon-wave)"
          animate={{ d: wavePaths }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </svg>
    </div>
  );
}
