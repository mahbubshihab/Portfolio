"use client";

import { motion } from "framer-motion";
import { TerminalSquare, ArrowUpRight, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const PROJECTS = [
  {
    title: "AI Support Agent",
    description: "An autonomous AI agent integrated into a React web app to handle customer queries using LLMs.",
    tech: ["Next.js", "OpenAI", "Tailwind", "Supabase"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800&h=500",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "E-Commerce Mobile App",
    description: "A full-featured mobile shopping experience with real-time inventory and seamless payments.",
    tech: ["Flutter", "Firebase", "Stripe", "Dart"],
    image: "https://images.unsplash.com/photo-1512921207806-8b5dc47d5705?auto=format&fit=crop&q=80&w=800&h=500",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "SaaS Dashboard",
    description: "A high-performance analytics dashboard for SaaS businesses, featuring complex data visualizations.",
    tech: ["Vue.js", "Node.js", "PostgreSQL", "Chart.js"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800&h=500",
    liveUrl: "#",
    githubUrl: "#",
  },
];

export function FeaturedProjects() {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
          className="flex items-end justify-between mb-14 flex-wrap gap-6"
        >
          <div>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/30 border border-border text-primary mb-5 font-mono text-xs">
              <TerminalSquare size={12} /> projects.featured()
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
              Featured <span className="text-primary">Work</span>
            </h2>
          </div>
          <Link href="/projects" className="group inline-flex items-center gap-1.5 text-primary font-mono text-sm hover:underline underline-offset-4">
            View all <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6"
        >
          {PROJECTS.map((project) => (
            <motion.div
              key={project.title}
              variants={fadeUp}
              className="group rounded-xl border border-border overflow-hidden hover:border-primary/20 transition-all duration-300 flex flex-col h-full bg-background"
            >
              <div className="relative w-full h-52 overflow-hidden bg-secondary/20">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-foreground/45 text-sm mb-4 flex-1 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.map((tech) => (
                    <span key={tech} className="text-[11px] font-mono px-2 py-0.5 rounded bg-secondary/30 text-foreground/50 border border-border/80">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-4 pt-3 border-t border-border/50">
                  <a href={project.liveUrl} className="flex items-center gap-1.5 text-xs font-medium text-foreground/45 hover:text-primary transition-colors">
                    <ExternalLink size={13} /> Live Demo
                  </a>
                  <a href={project.githubUrl} className="flex items-center gap-1.5 text-xs font-medium text-foreground/45 hover:text-primary transition-colors">
                    <FaGithub size={13} /> Source
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
