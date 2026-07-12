"use client";

import React, { useState, useRef } from "react";
import { motion, useMotionValue, useTransform, useMotionTemplate, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Code2, Smartphone, Database, Bot, Film, Zap, Terminal, Sparkles, FolderIcon, FileCode, CheckCircle2 } from "lucide-react";
import { 
  SiDavinciresolve, SiReact, SiNextdotjs, SiVuedotjs, SiTailwindcss, SiFlutter, 
  SiSwift, SiKotlin, SiDart, SiNodedotjs, SiFirebase, SiSupabase, 
  SiPostgresql, SiHuggingface, SiHtml5, SiCss, SiJavascript, 
  SiTypescript, SiVite, SiNestjs, SiExpress, SiPython, SiMongodb, 
  SiMysql, SiAndroidstudio, SiIntellijidea, 
  SiGit, SiGithub, SiFigma, SiPostman, SiDocker
} from "react-icons/si";

const PremiereIcon = () => (
  <div className="w-[20px] h-[20px] rounded-[4px] bg-[#00005c] border border-[#3fa9f5] flex items-center justify-center text-[10px] font-bold text-[#3fa9f5] select-none hover:scale-125 transition-transform duration-300 cursor-pointer" title="Premiere Pro">
    Pr
  </div>
);

const AfterEffectsIcon = () => (
  <div className="w-[20px] h-[20px] rounded-[4px] bg-[#00005c] border border-[#d199ff] flex items-center justify-center text-[10px] font-bold text-[#d199ff] select-none hover:scale-125 transition-transform duration-300 cursor-pointer" title="After Effects">
    Ae
  </div>
);

const VscodeIcon = () => (
  <svg 
    width="18" 
    height="18" 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className="hover:scale-125 transition-transform duration-300 cursor-pointer" 
  >
    <title>VS Code</title>
    <path d="M23.985 6.809a.537.537 0 00-.265-.395L18.497.834a.547.547 0 00-.518.004L9.121 5.234 2.923 1.256a.542.542 0 00-.74.165L.085 4.757a.54.54 0 00.12.72L4.54 8.87.192 12.43a.54.54 0 00-.113.725l2.034 3.328a.542.542 0 00.74.167l6.27-3.98 8.856 4.402a.547.547 0 00.518.004l5.218-5.397a.537.537 0 00.267-.396V6.809z" fill="#007ACC"/>
  </svg>
);

const OpenaiIcon = () => (
  <svg 
    width="18" 
    height="18" 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    xmlns="http://www.w3.org/2000/svg" 
    className="hover:scale-125 transition-transform duration-300 cursor-pointer text-[#74AA9C]" 
  >
    <title>OpenAI</title>
    <path d="M23.5 12.062a5.55 5.55 0 00-2.738-4.803 5.48 5.48 0 00.767-2.616 5.568 5.568 0 00-4.997-5.523 5.55 5.55 0 00-3.535 1.282A5.566 5.566 0 0010.5 0c-2.3 0-4.322 1.402-5.176 3.49A5.554 5.554 0 001.79 4.757 5.567 5.567 0 001.023 7.38 5.55 5.55 0 003.76 12.18a5.482 5.482 0 00-.767 2.617 5.568 5.568 0 004.996 5.522 5.55 5.55 0 003.535-1.282 5.566 5.566 0 002.502 2.964c2.3 0 4.321-1.402 5.176-3.49a5.554 5.554 0 003.535-1.267 5.567 5.567 0 00.767-2.624 5.55 5.55 0 00-2.738-4.802z"/>
  </svg>
);

const SKILLS = [
  {
    title: "Web Development",
    icon: <Code2 size={24} className="text-primary" />,
    tech: "React, Next.js, Vue, Vite, HTML5, CSS3, JS, TS, Tailwind CSS",
    description: "Building responsive, dynamic, and highly accessible user interfaces.",
    borderColor: "from-cyan-500/30 to-blue-500/10",
    extraIcons: (
      <div className="flex flex-wrap gap-2.5 mt-4 items-center">
        <SiReact size={18} color="#61DAFB" className="hover:scale-125 transition-transform duration-300 cursor-pointer" title="React.js" />
        <SiNextdotjs size={18} color="#ffffff" className="hover:scale-125 transition-transform duration-300 cursor-pointer" title="Next.js" />
        <SiVuedotjs size={18} color="#4FC08D" className="hover:scale-125 transition-transform duration-300 cursor-pointer" title="Vue.js" />
        <SiVite size={18} color="#646CFF" className="hover:scale-125 transition-transform duration-300 cursor-pointer" title="Vite" />
        <SiHtml5 size={18} color="#E34F26" className="hover:scale-125 transition-transform duration-300 cursor-pointer" title="HTML5" />
        <SiCss size={18} color="#1572B6" className="hover:scale-125 transition-transform duration-300 cursor-pointer" title="CSS3" />
        <SiJavascript size={18} color="#F7DF1E" className="hover:scale-125 transition-transform duration-300 cursor-pointer" title="JavaScript" />
        <SiTypescript size={18} color="#3178C6" className="hover:scale-125 transition-transform duration-300 cursor-pointer" title="TypeScript" />
        <SiTailwindcss size={18} color="#38BDF8" className="hover:scale-125 transition-transform duration-300 cursor-pointer" title="Tailwind CSS" />
      </div>
    )
  },
  {
    title: "Mobile Apps",
    icon: <Smartphone size={24} className="text-primary" />,
    tech: "Flutter, Swift, Kotlin, Dart",
    description: "Developing cross-platform and native mobile experiences.",
    borderColor: "from-purple-500/30 to-pink-500/10",
    extraIcons: (
      <div className="flex flex-wrap gap-2.5 mt-4 items-center">
        <SiFlutter size={18} color="#45D1FD" className="hover:scale-125 transition-transform duration-300 cursor-pointer" title="Flutter" />
        <SiSwift size={18} color="#F05138" className="hover:scale-125 transition-transform duration-300 cursor-pointer" title="Swift" />
        <SiKotlin size={18} color="#7F52FF" className="hover:scale-125 transition-transform duration-300 cursor-pointer" title="Kotlin" />
        <SiDart size={18} color="#0175C2" className="hover:scale-125 transition-transform duration-300 cursor-pointer" title="Dart" />
      </div>
    )
  },
  {
    title: "Backend & Cloud",
    icon: <Database size={24} className="text-primary" />,
    tech: "Node.js, NestJS, Express, Python, Firebase, Supabase, Postgres, Mongo, MySQL",
    description: "Designing secure, serverless architectures and robust databases.",
    borderColor: "from-blue-500/30 to-indigo-500/10",
    extraIcons: (
      <div className="flex flex-wrap gap-2.5 mt-4 items-center">
        <SiNodedotjs size={18} color="#339933" className="hover:scale-125 transition-transform duration-300 cursor-pointer" title="Node.js" />
        <SiNestjs size={18} color="#E0234E" className="hover:scale-125 transition-transform duration-300 cursor-pointer" title="NestJS" />
        <SiExpress size={18} color="#ffffff" className="hover:scale-125 transition-transform duration-300 cursor-pointer" title="Express" />
        <SiPython size={18} color="#3776AB" className="hover:scale-125 transition-transform duration-300 cursor-pointer" title="Python" />
        <SiFirebase size={18} color="#FFCA28" className="hover:scale-125 transition-transform duration-300 cursor-pointer" title="Firebase" />
        <SiSupabase size={18} color="#3ECF8E" className="hover:scale-125 transition-transform duration-300 cursor-pointer" title="Supabase" />
        <SiPostgresql size={18} color="#4169E1" className="hover:scale-125 transition-transform duration-300 cursor-pointer" title="PostgreSQL" />
        <SiMongodb size={18} color="#47A248" className="hover:scale-125 transition-transform duration-300 cursor-pointer" title="MongoDB" />
        <SiMysql size={18} color="#4479A1" className="hover:scale-125 transition-transform duration-300 cursor-pointer" title="MySQL" />
      </div>
    )
  },
  {
    title: "AI & Automation",
    icon: <Bot size={24} className="text-primary" />,
    tech: "OpenAI, LLMs, HuggingFace, Custom Agents, Automation",
    description: "Connecting AI models into production and automating workflows.",
    borderColor: "from-pink-500/30 to-violet-500/10",
    extraIcons: (
      <div className="flex flex-wrap gap-2.5 mt-4 items-center">
        <OpenaiIcon />
        <SiHuggingface size={18} color="#FFD21E" className="hover:scale-125 transition-transform duration-300 cursor-pointer" title="Hugging Face" />
      </div>
    )
  },
  {
    title: "Creative Production",
    icon: <Film size={24} className="text-primary" />,
    tech: "Premiere Pro, After Effects, DaVinci Resolve",
    description: "High-end video editing and digital marketing. Prompt engineering for AI media pipelines.",
    borderColor: "from-orange-500/30 to-red-500/10",
    extraIcons: (
      <div className="flex flex-wrap gap-2.5 mt-4 items-center">
        <PremiereIcon />
        <AfterEffectsIcon />
        <SiDavinciresolve size={18} color="#FF9933" className="hover:scale-125 transition-transform duration-300 cursor-pointer" title="DaVinci Resolve" />
      </div>
    )
  },
  {
    title: "IDEs, Version Control & Tools",
    icon: <Zap size={24} className="text-primary" />,
    tech: "VS Code, Android Studio, IntelliJ, Git, GitHub, Figma, Postman, Docker",
    description: "Configuring development workflows, container orchestration, and UI design platforms.",
    borderColor: "from-yellow-500/30 to-amber-500/10",
    extraIcons: (
      <div className="flex flex-wrap gap-2.5 mt-4 items-center">
        <VscodeIcon />
        <SiAndroidstudio size={18} color="#3DDC84" className="hover:scale-125 transition-transform duration-300 cursor-pointer" title="Android Studio" />
        <SiIntellijidea size={18} color="#FE315D" className="hover:scale-125 transition-transform duration-300 cursor-pointer" title="IntelliJ IDEA" />
        <SiGit size={18} color="#F05032" className="hover:scale-125 transition-transform duration-300 cursor-pointer" title="Git" />
        <SiGithub size={18} color="#ffffff" className="hover:scale-125 transition-transform duration-300 cursor-pointer" title="GitHub" />
        <SiFigma size={18} color="#F24E1E" className="hover:scale-125 transition-transform duration-300 cursor-pointer" title="Figma" />
        <SiPostman size={18} color="#FF6C37" className="hover:scale-125 transition-transform duration-300 cursor-pointer" title="Postman" />
        <SiDocker size={18} color="#2496ED" className="hover:scale-125 transition-transform duration-300 cursor-pointer" title="Docker" />
      </div>
    )
  }
];

type ActiveTab = "about.sh" | "skills.json" | "experience.log";

export function About() {
  const [activeTab, setActiveTab] = useState<ActiveTab>("about.sh");
  const [terminalOutput, setTerminalOutput] = useState<string[]>([
    "Initializing MahbubOS v2.6.0...",
    "Loading neural pipelines...",
    "System Ready. Type or click commands below."
  ]);
  const [isTyping, setIsTyping] = useState(false);

  // Motion values for profile 3D Card Hover
  const cardX = useMotionValue(0);
  const cardY = useMotionValue(0);
  const cardRotateX = useTransform(cardY, [-150, 150], [12, -12]);
  const cardRotateY = useTransform(cardX, [-150, 150], [-12, 12]);
  const cardGlowX = useTransform(cardX, [-150, 150], [0, 100]);
  const cardGlowY = useTransform(cardY, [-150, 150], [0, 100]);

  function handleCardMouseMove(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = event.clientX - rect.left - width / 2;
    const mouseY = event.clientY - rect.top - height / 2;
    cardX.set(mouseX);
    cardY.set(mouseY);
  }

  function handleCardMouseLeave() {
    cardX.set(0);
    cardY.set(0);
  }

  // Interactive Terminal Actions
  const runTerminalCmd = (cmd: string) => {
    if (isTyping) return;
    setIsTyping(true);
    setTerminalOutput((prev) => [...prev, `$ shihab --run ${cmd}`]);

    let response: string[] = [];
    if (cmd === "cat about.sh") {
      response = [
        "→ Fetching profile logs...",
        "Name: Mahbub Shihab",
        "Role: AI Integration Engineer & Full-Stack Architect",
        "Focus: Web, Native Mobile & LLM Workflows",
        "Mission: Build premium software with pixel perfection."
      ];
    } else if (cmd === "node skills.js") {
      response = [
        "→ Loading tech nodes...",
        "Web: React, Next.js, Vue, Tailwind CSS",
        "Mobile: Flutter (iOS/Android), Swift, Kotlin",
        "Cloud: PostgreSQL, Supabase, Node, Firebase",
        "AI: LangChain, Flowise, Custom Agents"
      ];
    } else if (cmd === "git status") {
      response = [
        "→ git status --short",
        "M  bio_controller.py",
        "M  interface_styles.css",
        "?? pipeline_agent_v2.log",
        "nothing to commit, working tree clean (100% optimized)"
      ];
    } else if (cmd === "clear") {
      setTerminalOutput([]);
      setIsTyping(false);
      return;
    }

    let i = 0;
    const interval = setInterval(() => {
      if (i < response.length) {
        setTerminalOutput((prev) => [...prev, response[i]]);
        i++;
      } else {
        clearInterval(interval);
        setIsTyping(false);
      }
    }, 150);
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-transparent">
      {/* Dynamic Background Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50rem] h-[50rem] bg-primary/5 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-24"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary mb-6 font-mono text-xs uppercase tracking-wider shadow-[0_0_15px_rgba(6,182,212,0.15)]">
            <Terminal size={12} className="animate-pulse" /> About.init()
          </div>
          <h2 className="text-4xl md:text-7xl font-black mb-6 tracking-tighter leading-none">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-500 to-accent">Me_</span>
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto leading-relaxed text-lg font-light">
            I build intelligent digital architectures, bridging the boundary between structural analytical engineering logic and bleeding-edge full-stack technologies.
          </p>
        </motion.div>

        {/* Main Grid Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">
          {/* Left Column: 3D Interactive Card & Stats */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* 3D Profile Frame */}
            <div style={{ perspective: 1000 }} className="w-full max-w-[340px] md:max-w-none">
              <motion.div
                ref={useRef(null)}
                style={{ rotateX: cardRotateX, rotateY: cardRotateY }}
                onMouseMove={handleCardMouseMove}
                onMouseLeave={handleCardMouseLeave}
                className="relative aspect-square w-full rounded-3xl overflow-hidden bg-secondary/30 border border-border/80 group shadow-[0_20px_50px_rgba(0,0,0,0.5)] cursor-pointer"
              >
                {/* 3D Glow Shine Effect */}
                <motion.div 
                  className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: useMotionTemplate`radial-gradient(circle at ${cardGlowX}% ${cardGlowY}%, rgba(6, 182, 212, 0.15), transparent 60%)`
                  }}
                />

                <Image
                  src="/about-profile.jpg"
                  alt="Mahbub Shihab"
                  fill
                  sizes="(max-w-768px) 100vw, 400px"
                  priority
                  className="object-cover scale-102 group-hover:scale-105 transition-transform duration-700 pointer-events-none"
                />
                
                {/* Visual Glass frame border */}
                <div className="absolute inset-[1px] border border-white/10 rounded-3xl pointer-events-none group-hover:border-primary/30 transition-colors duration-500" />
              </motion.div>
            </div>
          </div>

          {/* Right Column: Code Terminal System */}
          <div className="lg:col-span-7 flex flex-col h-[520px] rounded-2xl border border-border/80 bg-slate-950/80 backdrop-blur-2xl overflow-hidden shadow-2xl">
            {/* Terminal Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-border/60 bg-slate-900/40">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <span className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="text-xs font-mono text-foreground/40 ml-2">mahbubshihab @ active-session</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles size={12} className="text-primary animate-pulse" />
                <span className="text-[10px] font-mono text-primary font-bold">AI DEVMODE</span>
              </div>
            </div>

            {/* File explorer tabs */}
            <div className="flex border-b border-border/40 bg-slate-950/40 px-2">
              {(["about.sh", "skills.json", "experience.log"] as ActiveTab[]).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex items-center gap-1.5 px-4 py-2 text-xs font-mono border-b-2 transition-all cursor-pointer ${
                    activeTab === tab
                      ? "border-primary text-foreground bg-slate-900/60"
                      : "border-transparent text-foreground/45 hover:text-foreground/80"
                  }`}
                >
                  {tab.endsWith(".json") ? (
                    <FileCode size={12} className="text-yellow-500" />
                  ) : tab.endsWith(".sh") ? (
                    <Terminal size={12} className="text-green-500" />
                  ) : (
                    <FolderIcon size={12} className="text-purple-500" />
                  )}
                  {tab}
                </button>
              ))}
            </div>

            {/* Tab Contents */}
            <div className="flex-1 p-6 overflow-y-auto font-mono text-sm leading-relaxed text-foreground/80 selection:bg-primary/20">
              <AnimatePresence mode="wait">
                {activeTab === "about.sh" && (
                  <motion.div
                    key="about"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="space-y-4 text-emerald-400"
                  >
                    <div>
                      <span className="text-blue-400">#!/bin/bash</span>
                      <p className="text-foreground/85 mt-2">
                        Mahbub Shihab is a Full-Stack Engineer and AI specialist. He applies mathematical analytical models derived from Civil Engineering concepts to architect high-performance, robust software.
                      </p>
                    </div>
                    <div>
                      <span className="text-purple-400"># Core Philosophy</span>
                      <p className="text-foreground/85">
                        Write code like a structure: establish solid foundations (backend databases), maintain flexible beams (API layers), and wrap with beautiful facades (premium dynamic frontend UX).
                      </p>
                    </div>
                    <div className="flex flex-col gap-1.5 text-xs text-foreground/50 border-t border-border/30 pt-4">
                      <span>Location: Dhaka, Bangladesh</span>
                      <span>Exploration Scope: Agentic AI workflows, LLM interfaces, High-performance Web APIs</span>
                    </div>
                  </motion.div>
                )}

                {activeTab === "skills.json" && (
                  <motion.div
                    key="skills"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="text-yellow-400 space-y-1 text-xs md:text-sm"
                  >
                    <span>{"{"}</span>
                    <div className="pl-4 space-y-1">
                      <div>
                        <span className="text-cyan-400">"frontend":</span> <span>{"["}</span>
                        <span className="text-foreground">"React", "Next.js", "Vue", "TailwindCSS"</span>
                        <span>{"],"}</span>
                      </div>
                      <div>
                        <span className="text-cyan-400">"mobile":</span> <span>{"["}</span>
                        <span className="text-foreground">"Flutter (Dart)", "Native Swift", "Native Kotlin"</span>
                        <span>{"],"}</span>
                      </div>
                      <div>
                        <span className="text-cyan-400">"backend":</span> <span>{"["}</span>
                        <span className="text-foreground">"Node.js", "Express.js", "Python (FastAPI)"</span>
                        <span>{"],"}</span>
                      </div>
                      <div>
                        <span className="text-cyan-400">"databases":</span> <span>{"["}</span>
                        <span className="text-foreground">"PostgreSQL", "Supabase", "Firebase", "MongoDB"</span>
                        <span>{"],"}</span>
                      </div>
                      <div>
                        <span className="text-cyan-400">"AI_integration":</span> <span>{"["}</span>
                        <span className="text-foreground">"OpenAI", "Anthropic", "HuggingFace", "LangChain"</span>
                        <span>{"]"}</span>
                      </div>
                    </div>
                    <span>{"}"}</span>
                  </motion.div>
                )}

                {activeTab === "experience.log" && (
                  <motion.div
                    key="experience"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="space-y-3 text-xs md:text-sm text-foreground/90"
                  >
                    <div className="border-l-2 border-primary/50 pl-4 py-1">
                      <span className="text-xs font-bold text-primary font-mono block">[2024-PRESENT] AI INTEGRATOR</span>
                      <p className="text-xs text-foreground/60 leading-normal">
                        Engineering advanced agentic pipelines, integrating cognitive models in production apps, and scaling node services.
                      </p>
                    </div>
                    <div className="border-l-2 border-purple-500/50 pl-4 py-1">
                      <span className="text-xs font-bold text-purple-400 font-mono block">[2022-2024] FULL-STACK ENGINEER</span>
                      <p className="text-xs text-foreground/60 leading-normal">
                        Shipped full e-commerce architectures, Next.js web applications, and Flutter mobile applications for Global clients.
                      </p>
                    </div>
                    <div className="border-l-2 border-accent/50 pl-4 py-1">
                      <span className="text-xs font-bold text-accent font-mono block">[2021-2022] WORDPRESS DEV</span>
                      <p className="text-xs text-foreground/60 leading-normal">
                        Customized complex themes using PHP, gained extensive foundational control over Javascript layouts.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Interactive Shell Input Area */}
            <div className="border-t border-border/60 bg-slate-900/20 p-4">
              <div className="max-h-24 overflow-y-auto mb-3 text-[11px] font-mono text-foreground/45 space-y-1">
                {terminalOutput.map((out, index) => (
                  <div key={index}>{out}</div>
                ))}
              </div>
              <div className="flex flex-wrap gap-2 items-center">
                <span className="text-xs font-mono text-primary font-bold">QUICK CMD:</span>
                <button
                  onClick={() => runTerminalCmd("cat about.sh")}
                  disabled={isTyping}
                  className="px-2.5 py-1 text-[11px] font-mono rounded-md bg-secondary/35 border border-border/80 text-foreground/80 hover:border-primary/50 hover:bg-primary/5 cursor-pointer disabled:opacity-40 disabled:pointer-events-none"
                >
                  cat about.sh
                </button>
                <button
                  onClick={() => runTerminalCmd("node skills.js")}
                  disabled={isTyping}
                  className="px-2.5 py-1 text-[11px] font-mono rounded-md bg-secondary/35 border border-border/80 text-foreground/80 hover:border-primary/50 hover:bg-primary/5 cursor-pointer disabled:opacity-40 disabled:pointer-events-none"
                >
                  node skills.js
                </button>
                <button
                  onClick={() => runTerminalCmd("git status")}
                  disabled={isTyping}
                  className="px-2.5 py-1 text-[11px] font-mono rounded-md bg-secondary/35 border border-border/80 text-foreground/80 hover:border-primary/50 hover:bg-primary/5 cursor-pointer disabled:opacity-40 disabled:pointer-events-none"
                >
                  git status
                </button>
                <button
                  onClick={() => runTerminalCmd("clear")}
                  disabled={isTyping}
                  className="px-2.5 py-1 text-[11px] font-mono rounded-md bg-red-950/20 border border-red-500/20 text-red-400 hover:border-red-500/50 cursor-pointer disabled:opacity-40"
                >
                  clear
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Cards Grid - Spotlight card border hover effects */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILLS.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: index * 0.08, type: "spring", stiffness: 60, damping: 15 }}
              className="group relative p-8 rounded-3xl bg-secondary/15 border border-border/50 hover:border-primary/45 transition-all hover:-translate-y-1.5 duration-500 overflow-hidden"
            >
              {/* Inner Spotlight color pulse */}
              <div className={`absolute -inset-px rounded-3xl bg-gradient-to-br ${skill.borderColor} opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-[2px] pointer-events-none -z-10`} />
              <div className="absolute inset-[1px] bg-[#07051a]/90 rounded-3xl -z-10" />

              <div className="mb-5 p-3 rounded-2xl bg-slate-900/80 inline-block border border-border/60 group-hover:border-primary/40 transition-colors shadow-lg">
                {skill.icon}
              </div>
              
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors tracking-tight">{skill.title}</h3>
              <p className="text-[11px] font-mono text-primary/80 mb-4 uppercase tracking-widest">{skill.tech}</p>
              <p className="text-foreground/70 text-sm leading-relaxed font-light">{skill.description}</p>
              {skill.extraIcons}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
