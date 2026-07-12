"use client";

import React from "react";
import { motion } from "framer-motion";

interface ScrollTransitionWrapperProps {
  children: React.ReactNode;
}

export function ScrollTransitionWrapper({ children }: ScrollTransitionWrapperProps) {
  return (
    <div style={{ perspective: 1500 }} className="w-full">
      <motion.div
        initial={{ opacity: 0, y: 100, scale: 0.9, rotateX: 8 }}
        whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{
          type: "spring",
          stiffness: 45,
          damping: 14,
          mass: 1,
          restDelta: 0.001
        }}
        className="w-full origin-bottom"
      >
        {children}
      </motion.div>
    </div>
  );
}
