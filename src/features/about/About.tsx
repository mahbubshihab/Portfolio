"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Code2, Smartphone, Database, Bot, Film, Zap, Terminal } from "lucide-react";
import { SiDavinciresolve, SiReact, SiNextdotjs, SiVuedotjs, SiTailwindcss, SiFlutter, SiSwift, SiKotlin, SiDart, SiNodedotjs, SiFirebase, SiSupabase, SiPostgresql, SiHuggingface } from "react-icons/si";

const PremiereIcon = () => (
  <div className="w-[18px] h-[18px] rounded-[3px] bg-[#14002a] border border-[#9999FF] flex items-center justify-center text-[10px] font-bold text-[#9999FF] select-none" title="Premiere Pro">
    Pr
  </div>
);

const AfterEffectsIcon = () => (
  <div className="w-[18px] h-[18px] rounded-[3px] bg-[#14002a] border border-[#D199FF] flex items-center justify-center text-[10px] font-bold text-[#D199FF] select-none" title="After Effects">
    Ae
  </div>
);

const SKILLS = [
  {
    title: "Web Development",
    icon: <Code2 size={24} className="text-primary" />,
    tech: "React, Next.js, Vue, Tailwind CSS",
    description: "Building responsive, dynamic, and highly accessible user interfaces.",
    extraIcons: (
      <div className="flex gap-2.5 mt-3 text-foreground/60 items-center">
        <SiReact size={18} className="hover:text-primary transition-colors cursor-pointer" title="React.js" />
        <SiNextdotjs size={18} className="hover:text-primary transition-colors cursor-pointer" title="Next.js" />
        <SiVuedotjs size={18} className="hover:text-primary transition-colors cursor-pointer" title="Vue.js" />
        <SiTailwindcss size={18} className="hover:text-primary transition-colors cursor-pointer" title="Tailwind CSS" />
      </div>
    )
  },
  {
    title: "Mobile Apps",
    icon: <Smartphone size={24} className="text-primary" />,
    tech: "Flutter, Swift, Kotlin, Dart",
    description: "Developing cross-platform and native mobile experiences.",
    extraIcons: (
      <div className="flex gap-2.5 mt-3 text-foreground/60 items-center">
        <SiFlutter size={18} className="hover:text-primary transition-colors cursor-pointer" title="Flutter" />
        <SiSwift size={18} className="hover:text-primary transition-colors cursor-pointer" title="Swift" />
        <SiKotlin size={18} className="hover:text-primary transition-colors cursor-pointer" title="Kotlin" />
        <SiDart size={18} className="hover:text-primary transition-colors cursor-pointer" title="Dart" />
      </div>
    )
  },
  {
    title: "Backend & Cloud",
    icon: <Database size={24} className="text-primary" />,
    tech: "Node.js, Firebase, Supabase, Postgres",
    description: "Designing secure, serverless architectures and robust databases.",
    extraIcons: (
      <div className="flex gap-2.5 mt-3 text-foreground/60 items-center">
        <SiNodedotjs size={18} className="hover:text-primary transition-colors cursor-pointer" title="Node.js" />
        <SiFirebase size={18} className="hover:text-primary transition-colors cursor-pointer" title="Firebase" />
        <SiSupabase size={18} className="hover:text-primary transition-colors cursor-pointer" title="Supabase" />
        <SiPostgresql size={18} className="hover:text-primary transition-colors cursor-pointer" title="PostgreSQL" />
      </div>
    )
  },
  {
    title: "AI & Automation",
    icon: <Bot size={24} className="text-primary" />,
    tech: "LLMs, Custom Agents, AI Integration",
    description: "Connecting AI models into production and automating workflows.",
    extraIcons: (
      <div className="flex gap-2.5 mt-3 text-foreground/60 items-center">
        <SiHuggingface size={18} className="hover:text-primary transition-colors cursor-pointer" title="Hugging Face" />
      </div>
    )
  },
  {
    title: "Creative Production",
    icon: <Film size={24} className="text-primary" />,
    tech: "Premiere Pro, After Effects, DaVinci Resolve",
    description: "High-end video editing and digital marketing. Prompt engineering for AI media pipelines.",
    extraIcons: (
      <div className="flex gap-2.5 mt-3 text-foreground/60 items-center">
        <PremiereIcon />
        <AfterEffectsIcon />
        <SiDavinciresolve size={18} className="hover:text-[#FF9933] transition-colors cursor-pointer" title="DaVinci Resolve" />
      </div>
    )
  },
  {
    title: "Core Philosophy",
    icon: <Zap size={24} className="text-primary" />,
    tech: "Quick Learner & Adaptable",
    description: "A highly versatile engineer with the ability to master new technologies and paradigms at an accelerated pace.",
  }
];


export function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/50 border border-primary/20 text-primary mb-6 font-mono text-sm">
            <Terminal size={14} /> About.init()
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-500 to-accent">Me_</span>
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto leading-relaxed text-lg">
            I bridge the gap between complex structural engineering and modern software paradigms. My focus is on 
            delivering premium digital products that are not just functional, but genuinely impressive.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Column: Photo & Short Bio */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left sticky top-28"
          >
            {/* Profile Image Container */}
            <div className="relative mb-8 group">
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden bg-secondary border border-border group-hover:border-primary/50 transition-all duration-300 shadow-[0_0_20px_rgba(0,240,255,0.1)] group-hover:shadow-[0_0_30px_rgba(0,240,255,0.25)]">
                <Image
                  src="/about-profile.jpg"
                  alt="Mahbub Shihab"
                  fill
                  className="object-cover group-hover:scale-103 transition-transform duration-700"
                />
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-4 font-mono">Mahbub Shihab</h3>
            <p className="text-foreground/80 leading-relaxed max-w-md font-mono text-sm mb-8">
              Engineering with precision. Over 5 years of development experience applying logical problem solving to build scalable full-stack web and mobile apps, combined with workflow automations powered by generative AI.
            </p>
          </motion.div>

          {/* Right Column: Skills */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {SKILLS.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative p-8 rounded-2xl bg-secondary/10 border border-border hover:border-primary/40 transition-all hover:-translate-y-1 duration-300"
              >
                {/* Glowing Background Overlay */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <div className="mb-4 p-3 rounded-xl bg-background/50 inline-block border border-border group-hover:border-primary/30 transition-colors">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{skill.title}</h3>
                <p className="text-xs font-mono text-primary mb-4">{skill.tech}</p>
                <p className="text-foreground/75 text-sm leading-relaxed">{skill.description}</p>
                {skill.extraIcons}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
