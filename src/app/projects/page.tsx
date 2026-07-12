"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PROJECTS, Project } from "@/lib/projects";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type CategoryFilter = "All" | "Web" | "Mobile" | "AI" | "Cloud";

const categoryColors: Record<string, { color: string; borderColor: string }> = {
  AI: {
    color: "from-amber-400 via-orange-500 to-rose-600",
    borderColor: "from-amber-400/60 to-rose-500/60"
  },
  Mobile: {
    color: "from-violet-400 via-purple-500 to-fuchsia-600",
    borderColor: "from-violet-400/60 to-fuchsia-500/60"
  },
  Web: {
    color: "from-cyan-400 via-blue-500 to-indigo-600",
    borderColor: "from-cyan-400/60 to-indigo-500/60"
  },
  Cloud: {
    color: "from-emerald-400 via-teal-500 to-green-600",
    borderColor: "from-emerald-400/60 to-green-500/60"
  }
};

export default function ProjectsPage() {
  const [filter, setFilter] = useState<CategoryFilter>("All");

  const filteredProjects = PROJECTS.filter((p) => {
    if (filter === "All") return true;
    return p.category === filter;
  });

  return (
    <div className="pt-32 pb-24 min-h-screen relative overflow-hidden bg-transparent">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[45rem] h-[45rem] bg-primary/5 rounded-full blur-[150px] pointer-events-none -z-10 animate-pulse" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter leading-none">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-500 to-accent">Projects_</span>
          </h1>
          <p className="text-foreground/70 max-w-xl mx-auto font-light text-base md:text-lg leading-relaxed">
            Explore a curated selection of production-grade systems, ranging from full-stack web architectures to cognitive AI agents.
          </p>
        </motion.div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-20">
          {(["All", "Web", "Mobile", "AI", "Cloud"] as CategoryFilter[]).map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2.5 rounded-full font-mono text-xs uppercase tracking-wider border transition-all duration-300 cursor-pointer ${
                filter === cat
                  ? "bg-primary text-primary-foreground border-primary shadow-[0_0_20px_rgba(0,240,255,0.4)] scale-105"
                  : "bg-secondary/20 border-border text-foreground/75 hover:border-primary/45 hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              const { borderColor, color } = categoryColors[project.category] || categoryColors.Web;
              
              return (
                <Link key={project.slug} href={`/projects/${project.slug}`} className="block w-full h-full cursor-pointer">
                  <div style={{ perspective: 1200 }} className="w-full h-full">
                    <motion.div
                      layout
                      initial={{ opacity: 0, y: 50, scale: 0.94 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.94 }}
                      transition={{ duration: 0.6, type: "spring", stiffness: 60, damping: 15 }}
                      className="group relative rounded-3xl overflow-hidden h-full flex flex-col"
                    >
                      {/* Animated gradient border */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${borderColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                      <div className="absolute inset-[1px] bg-gradient-to-b from-border/40 to-transparent rounded-3xl group-hover:opacity-0 transition-opacity duration-500" />

                      {/* Card Content Box */}
                      <div className="relative z-10 h-full bg-secondary/80 backdrop-blur-xl rounded-[calc(1.5rem-1px)] m-[1px] flex flex-col flex-1 overflow-hidden">
                        
                        {/* Cover Image Container */}
                        <div className="relative w-full h-52 overflow-hidden bg-slate-900/80 rounded-t-[calc(1.5rem-1px)] border-b border-border/40">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover transform group-hover:scale-103 transition-transform duration-700 pointer-events-none"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-85" />
                          
                          {/* Glowing category badge */}
                          <div className={`absolute top-4 right-4 px-3 py-1 rounded-full bg-gradient-to-br ${color} text-white text-[10px] font-mono font-bold uppercase tracking-widest shadow-lg`}>
                            {project.category}
                          </div>
                        </div>

                        {/* Info Content */}
                        <div className="p-6 flex flex-col flex-grow">
                          <h3 className="text-xl md:text-2xl font-bold mb-2 tracking-tight group-hover:text-primary transition-colors duration-300">
                            {project.title}
                          </h3>
                          <p className="text-foreground/70 mb-6 text-sm leading-relaxed font-light flex-grow">
                            {project.description}
                          </p>

                          <div className="flex flex-wrap gap-1.5 mb-6">
                            {project.tech.map((t) => (
                              <span
                                key={t}
                                className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-950/60 border border-border/80 text-foreground/60 group-hover:border-primary/30 transition-colors"
                              >
                                {t}
                              </span>
                            ))}
                          </div>

                          <div className="flex items-center justify-between pt-4 border-t border-border/40 mt-auto">
                            <span className="group-hover:text-primary flex items-center gap-1.5 text-sm font-semibold transition-colors duration-300">
                              Details
                              <ArrowRight size={15} className="group-hover:translate-x-1.5 transition-transform duration-300" />
                            </span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </Link>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
