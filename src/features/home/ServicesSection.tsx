"use client";

import { useRef } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import {
  SiReact, SiNextdotjs, SiVuedotjs, SiTailwindcss, SiVite,
  SiFlutter, SiKotlin, SiSwift,
  SiNodedotjs, SiNestjs, SiExpress, SiFirebase, SiSupabase, SiPostgresql, SiMongodb
} from "react-icons/si";
import { Monitor, Smartphone, Server, Brain, Bot, Workflow } from "lucide-react";
import { WaveDivider } from "./WaveDivider";

const SERVICES = [
  {
    icon: Monitor,
    title: "Web Development",
    desc: "From high-converting landing pages to complex data dashboards, I build frontends that users love and backends that won't break. I focus heavily on performance and SEO.",
    color: "from-cyan-400 via-blue-500 to-indigo-600",
    glowColor: "rgba(56, 189, 248, 0.15)",
    borderColor: "from-cyan-400/60 to-indigo-500/60",
    skills: [
      { icon: SiReact, name: "React", color: "#61DAFB" },
      { icon: SiNextdotjs, name: "Next.js", color: "#ffffff" },
      { icon: SiVuedotjs, name: "Vue", color: "#4FC08D" },
      { icon: SiTailwindcss, name: "Tailwind", color: "#06B6D4" },
      { icon: SiVite, name: "Vite", color: "#646CFF" },
    ],
  },
  {
    icon: Smartphone,
    title: "Mobile Experiences",
    desc: "I craft cross-platform and native mobile applications that prioritize fluid UI/UX and deep hardware integration, ensuring a premium feel on both iOS and Android.",
    color: "from-violet-400 via-purple-500 to-fuchsia-600",
    glowColor: "rgba(167, 139, 250, 0.15)",
    borderColor: "from-violet-400/60 to-fuchsia-500/60",
    skills: [
      { icon: SiFlutter, name: "Flutter", color: "#02569B" },
      { icon: SiKotlin, name: "Kotlin", color: "#7F52FF" },
      { icon: SiSwift, name: "Swift", color: "#F05138" },
    ],
  },
  {
    icon: Server,
    title: "Backend & Cloud",
    desc: "I design secure, scalable, and cost-effective databases and serverless architectures that can handle high traffic without breaking a sweat.",
    color: "from-emerald-400 via-teal-500 to-green-600",
    glowColor: "rgba(52, 211, 153, 0.15)",
    borderColor: "from-emerald-400/60 to-green-500/60",
    skills: [
      { icon: SiNodedotjs, name: "Node.js", color: "#339933" },
      { icon: SiNestjs, name: "Nest.js", color: "#E0234E" },
      { icon: SiExpress, name: "Express", color: "#ffffff" },
      { icon: SiFirebase, name: "Firebase", color: "#FFCA28" },
      { icon: SiSupabase, name: "Supabase", color: "#3ECF8E" },
      { icon: SiPostgresql, name: "Postgres", color: "#4169E1" },
      { icon: SiMongodb, name: "MongoDB", color: "#47A248" },
    ],
  },
  {
    icon: Brain,
    title: "AI & Automation",
    desc: "I help businesses automate repetitive tasks by building custom AI agents and seamlessly connecting LLMs into production environments.",
    color: "from-amber-400 via-orange-500 to-rose-600",
    glowColor: "rgba(251, 191, 36, 0.15)",
    borderColor: "from-amber-400/60 to-rose-500/60",
    skills: [
      { icon: Brain, name: "LLMs", color: "#10B981" },
      { icon: Bot, name: "AI Agents", color: "#F59E0B" },
      { icon: Workflow, name: "Automation", color: "#8B5CF6" },
    ],
  },
];

function ServiceCard({ service, index }: { service: typeof SERVICES[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 200, damping: 25 });
  const springY = useSpring(mouseY, { stiffness: 200, damping: 25 });

  const spotlight = useMotionTemplate`radial-gradient(350px circle at ${springX}px ${springY}px, ${service.glowColor}, transparent 80%)`;

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  }

  function handleMouseLeave() {
    mouseX.set(ref.current ? ref.current.offsetWidth / 2 : 0);
    mouseY.set(ref.current ? ref.current.offsetHeight / 2 : 0);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.7,
        delay: index * 0.15,
        type: "spring",
        stiffness: 80,
        damping: 20,
      }}
      className="group relative rounded-3xl overflow-hidden"
    >
      {/* Animated gradient border */}
      <div className={`absolute inset-0 bg-gradient-to-br ${service.borderColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
      <div className="absolute inset-[1px] bg-gradient-to-b from-border/40 to-transparent rounded-3xl group-hover:opacity-0 transition-opacity duration-500" />

      {/* Spotlight effect */}
      <motion.div
        className="absolute inset-0 z-0 pointer-events-none rounded-3xl"
        style={{ background: spotlight }}
      />

      {/* Card content */}
      <div className="relative z-10 h-full bg-secondary/80 backdrop-blur-xl rounded-[calc(1.5rem-1px)] m-[1px] p-8 flex flex-col">
        {/* Lucide icon with glow */}
        <div className="relative mb-6">
          <div className={`absolute inset-0 w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl blur-xl opacity-40 group-hover:opacity-70 transition-opacity duration-500`} />
          <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3`}>
            <service.icon className="w-8 h-8" />
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 tracking-tight">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-secondary-foreground/80 text-sm md:text-base leading-relaxed mb-6 flex-grow">
          {service.desc}
        </p>

        {/* Divider */}
        <div className={`w-full h-px bg-gradient-to-r ${service.borderColor} opacity-30 mb-5`} />

        {/* Tech Skills */}
        <div className="flex flex-wrap gap-2">
          {service.skills.map((skill) => (
            <motion.div
              key={skill.name}
              whileHover={{ scale: 1.1, y: -2 }}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-background/60 border border-border/40 text-xs font-medium text-secondary-foreground hover:border-primary/50 hover:text-foreground transition-colors duration-300 cursor-default"
            >
              <skill.icon className="w-3.5 h-3.5 shrink-0" style={{ color: skill.color }} />
              <span>{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function ServicesSection() {
  return (
    <section className="pt-32 pb-40 px-6 relative bg-background">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold tracking-wider uppercase mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Services
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter mb-6"
          >
            How I Can{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-cyan-400 to-accent">
              Help You
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-secondary-foreground/70 max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed"
          >
            From concept to production — I deliver end-to-end solutions with modern tech stacks and pixel-perfect execution.
          </motion.p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>

      <WaveDivider className="bottom-0 translate-y-px" fill="fill-secondary" />
    </section>
  );
}
