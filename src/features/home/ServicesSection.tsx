"use client";

import { useRef } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import {
  FaReact, FaNodeJs, FaDocker, FaPython, FaSwift, FaAndroid, FaDatabase, FaAws,
} from "react-icons/fa";
import {
  SiNextdotjs, SiTypescript, SiTailwindcss, SiFlutter, SiKotlin,
  SiPostgresql, SiMongodb, SiGraphql, SiTensorflow,
  SiFirebase, SiRedis,
} from "react-icons/si";
import { Brain } from "lucide-react";
import { WaveDivider } from "./WaveDivider";

const SERVICES = [
  {
    icon: "🌐",
    title: "Web Development",
    desc: "Crafting blazing-fast, pixel-perfect web experiences with cutting-edge frameworks and responsive design systems.",
    color: "from-cyan-400 via-blue-500 to-indigo-600",
    glowColor: "rgba(56, 189, 248, 0.15)",
    borderColor: "from-cyan-400/60 to-indigo-500/60",
    skills: [
      { icon: FaReact, name: "React", color: "#61DAFB" },
      { icon: SiNextdotjs, name: "Next.js", color: "#ffffff" },
      { icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
      { icon: SiTailwindcss, name: "Tailwind", color: "#06B6D4" },
    ],
  },
  {
    icon: "📱",
    title: "Mobile Apps",
    desc: "Delivering smooth, native-feel mobile experiences across iOS & Android with a single codebase approach.",
    color: "from-violet-400 via-purple-500 to-fuchsia-600",
    glowColor: "rgba(167, 139, 250, 0.15)",
    borderColor: "from-violet-400/60 to-fuchsia-500/60",
    skills: [
      { icon: SiFlutter, name: "Flutter", color: "#02569B" },
      { icon: FaSwift, name: "Swift", color: "#F05138" },
      { icon: SiKotlin, name: "Kotlin", color: "#7F52FF" },
      { icon: FaAndroid, name: "Android", color: "#3DDC84" },
    ],
  },
  {
    icon: "⚙️",
    title: "Backend & Cloud",
    desc: "Architecting scalable APIs, microservices, and cloud infrastructure that handles millions of requests seamlessly.",
    color: "from-emerald-400 via-teal-500 to-green-600",
    glowColor: "rgba(52, 211, 153, 0.15)",
    borderColor: "from-emerald-400/60 to-green-500/60",
    skills: [
      { icon: FaNodeJs, name: "Node.js", color: "#339933" },
      { icon: FaPython, name: "Python", color: "#3776AB" },
      { icon: SiPostgresql, name: "PostgreSQL", color: "#4169E1" },
      { icon: SiMongodb, name: "MongoDB", color: "#47A248" },
      { icon: SiGraphql, name: "GraphQL", color: "#E10098" },
      { icon: SiRedis, name: "Redis", color: "#DC382D" },
    ],
  },
  {
    icon: "🤖",
    title: "AI & Automation",
    desc: "Integrating intelligent AI features—from chatbots to custom ML pipelines—turning data into actionable insights.",
    color: "from-amber-400 via-orange-500 to-rose-600",
    glowColor: "rgba(251, 191, 36, 0.15)",
    borderColor: "from-amber-400/60 to-rose-500/60",
    skills: [
      { icon: Brain, name: "LLMs", color: "#10B981" },
      { icon: SiTensorflow, name: "TensorFlow", color: "#FF6F00" },
      { icon: FaAws, name: "AWS", color: "#FF9900" },
      { icon: SiFirebase, name: "Firebase", color: "#FFCA28" },
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
        {/* Emoji icon with glow */}
        <div className="relative mb-6">
          <div className={`absolute inset-0 w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl blur-xl opacity-40 group-hover:opacity-70 transition-opacity duration-500`} />
          <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-3xl shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3`}>
            {service.icon}
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
            What I{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-cyan-400 to-accent">
              Build
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
