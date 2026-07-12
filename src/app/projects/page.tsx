"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PROJECTS, Project } from "@/lib/projects";
import Link from "next/link";
import { ExternalLink, ArrowRight } from "lucide-react";

type CategoryFilter = "All" | "Web" | "Mobile" | "AI" | "Cloud";

export default function ProjectsPage() {
  const [filter, setFilter] = useState<CategoryFilter>("All");

  const filteredProjects = PROJECTS.filter((p) => {
    if (filter === "All") return true;
    return p.category === filter;
  });

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            My <span className="text-primary">Projects</span>
          </h1>
          <p className="text-foreground/60 max-w-lg mx-auto">
            Explore a curated selection of systems I've engineered, ranging from Web apps to autonomous AI agents.
          </p>
        </motion.div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {(["All", "Web", "Mobile", "AI", "Cloud"] as CategoryFilter[]).map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2.5 rounded-full font-mono text-sm border transition-all duration-300 ${
                filter === cat
                  ? "bg-primary text-primary-foreground border-primary shadow-[0_0_15px_-3px_rgba(0,240,255,0.4)]"
                  : "bg-secondary/30 border-border text-foreground/75 hover:border-primary/40"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.slug}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group rounded-2xl bg-secondary/25 border border-border overflow-hidden hover:border-primary/50 transition-all flex flex-col h-full hover:shadow-[0_0_30px_-5px_rgba(0,240,255,0.15)]"
              >
                {/* Visual Cover */}
                <div className="relative w-full h-52 overflow-hidden bg-secondary">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors duration-500" />
                </div>

                {/* Info Content */}
                <div className="p-6 flex flex-col flex-1">
                  <span className="text-xs font-mono font-bold text-primary mb-2 uppercase tracking-widest">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-foreground/70 mb-6 flex-1 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs font-mono px-2 py-0.5 rounded-md bg-background border border-border text-foreground/80"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-border mt-auto">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="group/link flex items-center gap-1.5 text-sm font-semibold hover:text-primary transition-colors"
                    >
                      Case Study
                      <ArrowRight size={15} className="group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 text-sm font-semibold hover:text-primary transition-colors"
                    >
                      <ExternalLink size={15} /> Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
