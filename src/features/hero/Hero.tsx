"use client";

import { motion } from "framer-motion";
import { ArrowRight, TerminalSquare, BrainCircuit, Cpu, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16">
      {/* Subtle Grid overlay for the hero area */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text Content */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/50 border border-primary/30 text-primary mb-6"
            >
              <TerminalSquare size={16} />
              <span className="text-sm font-mono tracking-wide">System.init() : Online</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1]"
            >
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-500 to-accent">Mahbub Shihab_</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-lg md:text-xl text-foreground/80 max-w-xl mb-8 font-mono leading-relaxed"
            >
              Full-Stack Web & App Developer specializing in 
              <span className="text-primary font-bold"> AI Integration</span>, 
              Scalable Architectures, and Next-Gen Automations. Over 5 years of coding experience.
            </motion.p>

            {/* Core Tech Tags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-wrap gap-2.5 mb-10 justify-center lg:justify-start max-w-lg"
            >
              {["React", "Next.js", "Flutter", "Node.js", "AI Pipelines"].map((tech) => (
                <span 
                  key={tech} 
                  className="px-3 py-1 rounded-md bg-secondary/30 border border-border text-foreground/70 text-xs font-mono"
                >
                  {tech}
                </span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
              <Link
                href="/projects"
                className="group px-8 py-4 rounded-md bg-primary text-primary-foreground font-bold flex items-center justify-center gap-2 hover:bg-primary/90 transition-all shadow-[0_0_20px_-3px_rgba(0,240,255,0.3)]"
              >
                Explore Projects
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 rounded-md border border-border bg-background hover:bg-secondary/50 hover:border-primary/50 text-foreground font-bold transition-all text-center"
              >
                Open Terminal
              </Link>
            </motion.div>
          </div>

          {/* Right Column: Premium Portrait Photo & Floating Indicators */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center relative select-none"
          >
            {/* Ambient Background Aura */}
            <div className="absolute inset-0 -z-10 m-auto h-[320px] w-[320px] rounded-full bg-primary/20 blur-[90px]" />

            {/* Glowing Border Wrap */}
            <div className="relative group">
              <div className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] rounded-2xl overflow-hidden bg-secondary border border-border group-hover:border-primary/50 transition-all duration-500 shadow-[0_0_40px_-10px_rgba(0,240,255,0.15)] group-hover:shadow-[0_0_40px_-5px_rgba(0,240,255,0.3)]">
                <Image
                  src="/profile.png"
                  alt="Mahbub Shihab"
                  fill
                  priority
                  className="object-cover group-hover:scale-[1.03] transition-transform duration-700"
                />
              </div>

              {/* Floating Badge 1: AI Integration */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-6 -left-8 bg-background/80 backdrop-blur-md border border-border px-4 py-2.5 rounded-xl shadow-xl flex items-center gap-2"
              >
                <div className="p-1.5 rounded-md bg-emerald-500/10 text-emerald-400">
                  <BrainCircuit size={16} />
                </div>
                <div className="text-left">
                  <div className="text-[10px] font-mono text-foreground/50">AI Systems</div>
                  <div className="text-xs font-bold text-foreground">Automation</div>
                </div>
              </motion.div>

              {/* Floating Badge 2: Full-Stack */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-10 -right-8 bg-background/80 backdrop-blur-md border border-border px-4 py-2.5 rounded-xl shadow-xl flex items-center gap-2"
              >
                <div className="p-1.5 rounded-md bg-primary/10 text-primary">
                  <Cpu size={16} />
                </div>
                <div className="text-left">
                  <div className="text-[10px] font-mono text-foreground/50">Engineering</div>
                  <div className="text-xs font-bold text-foreground">5+ Years Exp</div>
                </div>
              </motion.div>

              {/* Decorative Particle */}
              <div className="absolute -bottom-4 -left-4 text-accent animate-bounce">
                <Sparkles size={20} />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
