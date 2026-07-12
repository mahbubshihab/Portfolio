"use client";

import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { Briefcase, Calendar, GraduationCap, Code2, ExternalLink } from "lucide-react";
import { About as AboutHero } from "@/features/about/About";

interface TimelineItem {
  type: string;
  date: string;
  title: string;
  organization: string;
  description: string;
  icon: React.ReactNode;
  logo?: string;
  link?: string;
}

const TIMELINE: TimelineItem[] = [
  {
    type: "work",
    date: "2024 - Present (2026)",
    title: "AI Integration & Advanced Full-Stack Architecture",
    organization: "Freelance & Agency Systems",
    description: "Established professional expert status. Building agentic workflows, connecting deep LLM pipelines, and scaling systems. Active in AI exploration since the dawn of consumer AI models.",
    icon: <Briefcase size={16} />,
  },
  {
    type: "work",
    date: "2023 - 2024",
    title: "Tech Stack Expansion (Next.js, Python, Swift & Kotlin)",
    organization: "App & AI Development Focus",
    description: "Explored advanced systems and learned Express.js. Mastered Next.js, Python scripting, and native mobile development stacks (Swift & Kotlin) to scale robust projects.",
    icon: <Briefcase size={16} />,
  },
  {
    type: "work",
    date: "2022 - 2023",
    title: "Full-Stack Building (React.js, Flutter & Databases)",
    organization: "Web & Mobile Platforms",
    description: "Learned Node.js and developed/shipped a multitude of web applications in React.js and cross-platform mobile apps in Flutter, backed by secure Postgres/Firebase database clusters.",
    icon: <Briefcase size={16} />,
  },
  {
    type: "education",
    date: "2022 - 2026",
    title: "B.Sc. in Civil Engineering",
    organization: "University of Asia Pacific",
    description: "Applying analytical math, project layout planning, and civil engineering logic parameters to code structure.",
    icon: <GraduationCap size={16} />,
    logo: "/uap.png",
    link: "https://uap-bd.edu/",
  },
  {
    type: "work",
    date: "2021 - 2022",
    title: "WordPress Development (Coding Inception)",
    organization: "Freelance",
    description: "Started programming journey by designing sites, editing themes using PHP, and gaining strong core values in HTML, CSS, and JS.",
    icon: <Code2 size={16} />,
  },
];

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll position specifically inside the timeline section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 20,
    restDelta: 0.001
  });

  return (
    <div className="pt-24 min-h-screen relative overflow-hidden bg-transparent">
      <div className="relative z-10">
        {/* About skills & bio details */}
        <AboutHero />

        {/* Career Timeline Section */}
        <section id="experience" ref={containerRef} className="py-32 relative bg-transparent">
          {/* Ambient background glow inside timeline */}
          <div className="absolute bottom-0 right-10 w-96 h-96 bg-accent/5 rounded-full blur-[140px] pointer-events-none -z-10 animate-pulse" />

          <div className="max-w-4xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-24"
            >
              <h2 className="text-4xl md:text-6xl font-black mb-4 flex items-center justify-center gap-4 tracking-tighter">
                <Calendar className="text-primary w-10 h-10 animate-[spin_8s_linear_infinite]" />
                My <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Journey_</span>
              </h2>
              <p className="text-foreground/60 max-w-md mx-auto leading-relaxed text-sm md:text-base font-light">
                A chronological timeline of my professional achievements, engineering milestones, and academic foundation.
              </p>
            </motion.div>

            {/* Timeline Wrapper */}
            <div className="relative pl-8 ml-4 md:ml-12 flex flex-col gap-16">
              
              {/* Backing guide line */}
              <div className="absolute top-0 bottom-0 left-[-2px] w-[2px] bg-border/20 pointer-events-none" />

              {/* Dynamic scroll-progress trace line */}
              <motion.div 
                style={{ scaleY }}
                className="absolute top-0 bottom-0 left-[-2px] w-[2.5px] bg-gradient-to-b from-primary via-blue-500 to-accent origin-top shadow-[0_0_8px_var(--primary)] pointer-events-none"
              />

              {TIMELINE.map((item, index) => (
                <div style={{ perspective: 1200 }} key={item.title + index} className="relative w-full">
                  <motion.div
                    initial={{ opacity: 0, x: -70, rotateY: -15, scale: 0.95 }}
                    whileInView={{ opacity: 1, x: 0, rotateY: 0, scale: 1 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{
                      type: "spring",
                      stiffness: 55,
                      damping: 14,
                      delay: 0.05
                    }}
                    className="relative group"
                  >
                    {/* Pulsing circle node */}
                    <div className="absolute -left-[45px] top-2.5 w-7 h-7 rounded-full bg-slate-950 border-2 border-primary group-hover:border-accent transition-colors duration-500 flex items-center justify-center text-primary group-hover:text-accent z-10 shadow-[0_0_12px_rgba(6,182,212,0.3)] group-hover:shadow-[0_0_15px_rgba(217,70,239,0.4)]">
                      <div className="absolute inset-0 rounded-full border border-primary/40 animate-ping group-hover:border-accent/40 opacity-70" />
                      {item.icon}
                    </div>

                    {/* Premium Glassmorphic Timeline Card */}
                    <div className="p-8 rounded-3xl bg-secondary/10 border border-border/60 hover:border-primary/40 transition-all hover:-translate-y-1 duration-500 backdrop-blur-md relative overflow-hidden shadow-xl">
                      {/* Gradient glow spotlight overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-transparent to-accent/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                      
                      <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
                        <div className="flex-1">
                          <span className="text-[11px] font-mono text-primary font-bold tracking-widest uppercase mb-1.5 block">
                            {item.date}
                          </span>
                          <h3 className="text-xl md:text-2xl font-bold tracking-tight group-hover:text-primary transition-colors duration-300">
                            {item.title}
                          </h3>
                          <h4 className="text-xs font-mono text-foreground/50 mt-1 inline-flex items-center gap-1.5 hover:text-primary transition-colors">
                            {item.link ? (
                              <a href={item.link} target="_blank" rel="noreferrer" className="flex items-center gap-1">
                                {item.organization} <ExternalLink size={12} className="text-primary/70" />
                              </a>
                            ) : (
                              item.organization
                            )}
                          </h4>
                        </div>
                        
                        {item.logo && (
                          <div className="relative w-12 h-12 shrink-0 overflow-hidden bg-slate-900/60 rounded-xl border border-border/80 flex items-center justify-center p-2">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src={item.logo}
                              alt={item.organization}
                              className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(255,255,255,0.1)]"
                            />
                          </div>
                        )}
                      </div>
                      
                      <p className="text-foreground/70 leading-relaxed text-sm md:text-base mt-5 border-t border-border/40 pt-4 font-light">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
