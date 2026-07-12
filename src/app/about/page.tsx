"use client";

import { motion } from "framer-motion";
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
  return (
    <div className="pt-24 min-h-screen relative overflow-hidden">
      <div className="relative z-10">
        {/* About skills & bio details */}
        <AboutHero />

        {/* Career Timeline Section */}
        <section id="experience" className="py-24 relative bg-secondary/5 border-t border-border">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6 }}
              className="text-center mb-20"
            >
              <h2 className="text-3xl md:text-5xl font-extrabold mb-4 flex items-center justify-center gap-3">
                <Calendar className="text-primary animate-pulse" />
                My <span className="text-primary">Journey_</span>
              </h2>
              <p className="text-foreground/60 max-w-lg mx-auto">
                A chronological timeline of my professional achievements, engineering milestones, and education.
              </p>
            </motion.div>

            {/* Timeline Wrapper */}
            <div className="relative border-l-2 border-border/60 pl-8 ml-4 md:ml-12 flex flex-col gap-12">
              
              {/* Vertical timeline glow trace */}
              <div className="absolute top-0 bottom-0 left-[-2px] w-[2px] bg-gradient-to-b from-primary via-blue-500 to-accent pointer-events-none" />

              {TIMELINE.map((item, index) => (
                <motion.div
                  key={item.title + index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="relative group"
                >
                  {/* Outer circle node with animation */}
                  <div className="absolute -left-[45px] top-2.5 w-7 h-7 rounded-full bg-background border-2 border-primary group-hover:border-accent transition-colors duration-300 flex items-center justify-center text-primary group-hover:text-accent z-10 shadow-[0_0_15px_-3px_rgba(0,240,255,0.3)] group-hover:shadow-[0_0_15px_-3px_rgba(121,40,202,0.3)]">
                    {item.icon}
                  </div>

                  {/* Glassmorphism timeline card */}
                  <div className="p-6 rounded-2xl bg-secondary/15 border border-border group-hover:border-primary/40 hover:-translate-y-0.5 transition-all duration-300 backdrop-blur-sm relative overflow-hidden">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/3 to-accent/3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    
                    <div className="flex justify-between items-start gap-6">
                      <div className="flex-1">
                        <span className="text-xs font-mono text-primary font-bold tracking-widest uppercase mb-1 block">
                          {item.date}
                        </span>
                        <h3 className="text-xl md:text-2xl font-bold mt-1 group-hover:text-primary transition-colors">
                          {item.title}
                        </h3>
                        <h4 className="text-sm text-foreground/60 mb-4 inline-flex items-center gap-1.5 hover:text-primary transition-colors">
                          {item.link ? (
                            <a href={item.link} target="_blank" rel="noreferrer" className="flex items-center gap-1">
                              {item.organization} <ExternalLink size={12} />
                            </a>
                          ) : (
                            item.organization
                          )}
                        </h4>
                      </div>
                      
                      {item.logo && (
                        <div className="relative w-12 h-12 shrink-0 overflow-hidden bg-transparent rounded-lg flex items-center justify-center">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={item.logo}
                            alt={item.organization}
                            className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(255,255,255,0.1)]"
                          />
                        </div>
                      )}
                    </div>
                    <p className="text-foreground/75 leading-relaxed text-sm md:text-base mt-2 border-t border-border/50 pt-4">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
