"use client";

import { motion } from "framer-motion";

interface WaveDividerProps {
  className?: string;
  inverted?: boolean;
  fill?: string; // base fill color class name (e.g., "fill-primary")
}

// Define a set of wave path shapes to animate between – subtle, smooth variations
const waveKeyframes = [
  "M0,30 C150,80 350,0 500,30 V150 H0 Z",
  "M0,35 C150,85 350,5 500,35 V150 H0 Z",
  "M0,30 C150,80 350,0 500,30 V150 H0 Z",
];

// Define a set of fill colors to transition through – matching the site palette
const fillColors = ["#1e3a8a", "#2563eb", "#60a5fa"]; // primary shades (adjust if needed)

export function WaveDivider({ className = "", inverted = false, fill = "fill-primary" }: WaveDividerProps) {
  return (
    <div className={`w-full overflow-hidden absolute bottom-0 left-0 ${className} ${inverted ? "rotate-180" : ""}`}>
      <svg
        className="relative block w-full"
        viewBox="0 0 500 150"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background wave – slower, lighter */}
        <motion.path
          d={waveKeyframes[0]}
          fill="var(--wave-bg)"
          animate={{ d: waveKeyframes, fill: fillColors }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          style={{ opacity: 0.4 }}
        />
        {/* Foreground wave – faster, stronger */}
        <motion.path
          d={waveKeyframes[0]}
          className={fill}
          animate={{ d: waveKeyframes, fill: fillColors }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear", delay: 1 }}
        />
      </svg>
    </div>
  );
}
