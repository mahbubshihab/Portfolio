"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";

// Hardcoded project data as requested
const PROJECTS = [
  {
    title: "AI Support Agent",
    description: "An autonomous AI agent integrated into a React web app to handle customer queries using LLMs.",
    tech: ["Next.js", "OpenAI", "Tailwind", "Supabase"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800&h=500", // Placeholder for actual screenshot
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "E-Commerce Mobile App",
    description: "A full-featured mobile shopping experience with real-time inventory and seamless payments.",
    tech: ["Flutter", "Firebase", "Stripe", "Dart"],
    image: "https://images.unsplash.com/photo-1512921207806-8b5dc47d5705?auto=format&fit=crop&q=80&w=800&h=500", // Placeholder
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "SaaS Dashboard",
    description: "A high-performance analytics dashboard for SaaS businesses, featuring complex data visualizations.",
    tech: ["Vue.js", "Node.js", "PostgreSQL", "Chart.js"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800&h=500", // Placeholder
    liveUrl: "#",
    githubUrl: "#",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 relative bg-secondary/10">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto">
            A showcase of my recent work across Web, Mobile, and AI integrations.
            (Screenshots are currently placeholders and can be replaced with actual project screenshots).
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group rounded-2xl bg-background border border-border overflow-hidden hover:border-primary/50 transition-all flex flex-col h-full"
            >
              {/* Image Container with 3D-like hover effect */}
              <div className="relative w-full h-60 overflow-hidden bg-secondary">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors duration-500" />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-foreground/70 mb-6 flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono px-2 py-1 rounded-md bg-secondary/50 text-primary border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-border">
                  <a
                    href={project.liveUrl}
                    className="flex items-center gap-2 text-sm font-semibold hover:text-primary transition-colors"
                  >
                    <ExternalLink size={16} /> Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex items-center gap-2 text-sm font-semibold hover:text-primary transition-colors"
                  >
                    <FaGithub size={16} /> Source Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
