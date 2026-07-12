"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { WaveDivider } from "./WaveDivider";

export function BottomCTA() {
  return (
    <div className="relative">
      <WaveDivider className="top-0 -translate-y-full" fill="fill-secondary" inverted={false} />
      
      <section className="bg-secondary pt-16 pb-32 text-center px-6 relative z-10 overflow-hidden">
        {/* Animated Background Glowing Orbs */}
        <motion.div 
          animate={{ x: [-50, 50, -50], y: [-20, 30, -20] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 left-1/4 w-[40rem] h-[40rem] bg-primary/5 rounded-full blur-[100px] pointer-events-none" 
        />
        <motion.div 
          animate={{ x: [50, -50, 50], y: [30, -20, 30] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-0 right-1/4 w-[40rem] h-[40rem] bg-accent/5 rounded-full blur-[100px] pointer-events-none" 
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 150, rotateX: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0, rotateX: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 1.5, type: "spring", stiffness: 40, damping: 20 }}
          className="max-w-4xl mx-auto border border-border/40 bg-background/40 backdrop-blur-xl rounded-[3rem] p-12 md:p-24 shadow-2xl relative z-20"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-[3rem] opacity-30" />
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-extrabold mb-8 tracking-tight">Let's build something <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">amazing</span></h2>
            <p className="text-secondary-foreground text-lg md:text-xl mb-12 max-w-2xl mx-auto font-light">
              Have a project in mind or want to discuss opportunities? I'm currently available for work.
            </p>
            <Link 
              href="/contact"
              className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 bg-foreground text-background font-bold text-lg rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-background/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
              <span className="relative">Start a Conversation</span>
              <ArrowRight className="w-5 h-5 relative group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
