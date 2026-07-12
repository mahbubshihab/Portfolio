"use client";

import { motion } from "framer-motion";
import { WaveDivider } from "./WaveDivider";
import { SiReact, SiNextdotjs, SiFlutter, SiNodedotjs, SiFirebase, SiPostgresql, SiSwift, SiKotlin, SiPython, SiTailwindcss, SiTypescript, SiDocker } from "react-icons/si";

const ROW_1 = [
  { icon: SiReact, name: "React", color: "#61DAFB" },
  { icon: SiNextdotjs, name: "Next.js", color: "#ffffff" },
  { icon: SiTailwindcss, name: "Tailwind", color: "#06B6D4" },
  { icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
  { icon: SiFlutter, name: "Flutter", color: "#02569B" },
  { icon: SiSwift, name: "Swift", color: "#F05138" },
];

const ROW_2 = [
  { icon: SiKotlin, name: "Kotlin", color: "#7F52FF" },
  { icon: SiNodedotjs, name: "Node.js", color: "#339933" },
  { icon: SiPython, name: "Python", color: "#3776AB" },
  { icon: SiFirebase, name: "Firebase", color: "#FFCA28" },
  { icon: SiPostgresql, name: "PostgreSQL", color: "#4169E1" },
  { icon: SiDocker, name: "Docker", color: "#2496ED" },
];

export function TechMarquee() {
  return (
    <section className="bg-secondary relative pt-12 pb-24 overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-50px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-7xl mx-auto px-6 mb-16 text-center relative z-10"
      >
        <div className="inline-block relative">
          <div className="absolute inset-0 bg-primary/5 blur-xl rounded-full" />
          <p className="relative text-sm md:text-base font-bold text-secondary-foreground uppercase tracking-[0.2em] border border-border/50 px-6 py-3 rounded-full bg-background/50 backdrop-blur-md">
            Powering Digital Experiences
          </p>
        </div>
      </motion.div>

      {/* Row 1 - Left to Right */}
      <div className="relative flex overflow-x-hidden group z-10 mb-6">
        <div className="animate-marquee flex whitespace-nowrap group-hover:pause">
          {[...ROW_1, ...ROW_1, ...ROW_1].map((tech, i) => (
            <motion.div 
              whileHover={{ y: -5, scale: 1.05 }}
              key={`row1-${i}`} 
              className="flex items-center gap-4 mx-4 px-8 py-5 rounded-2xl bg-background/60 backdrop-blur-md border border-border/50 transition-all duration-300 hover:border-primary/50 hover:bg-background hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] cursor-default"
            >
              <tech.icon className="w-8 h-8" style={{ color: tech.color }} />
              <span className="font-bold text-xl text-foreground tracking-tight">{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Row 2 - Right to Left */}
      <div className="relative flex overflow-x-hidden group z-10">
        <div className="animate-marquee flex whitespace-nowrap group-hover:pause" style={{ animationDirection: 'reverse', animationDuration: '35s' }}>
          {[...ROW_2, ...ROW_2, ...ROW_2].map((tech, i) => (
            <motion.div 
              whileHover={{ y: -5, scale: 1.05 }}
              key={`row2-${i}`} 
              className="flex items-center gap-4 mx-4 px-8 py-5 rounded-2xl bg-background/60 backdrop-blur-md border border-border/50 transition-all duration-300 hover:border-accent/50 hover:bg-background hover:shadow-[0_0_30px_rgba(139,92,246,0.15)] cursor-default"
            >
              <tech.icon className="w-8 h-8" style={{ color: tech.color }} />
              <span className="font-bold text-xl text-foreground tracking-tight">{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Gradient Mask Edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-secondary to-transparent z-20" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-secondary to-transparent z-20" />

      {/* Bottom wave dividing Marquee and Services */}
      <WaveDivider className="bottom-0 translate-y-px" inverted={true} fill="fill-background" />
    </section>
  );
}
