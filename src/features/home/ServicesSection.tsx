"use client";

import { useRef } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { Code2, Smartphone, Database, Bot } from "lucide-react";
import { WaveDivider } from "./WaveDivider";

const SERVICES = [
  {
    icon: Code2,
    title: "Web Development",
    desc: "Building highly scalable, interactive, and responsive web applications using React, Next.js, and modern CSS frameworks.",
    color: "from-blue-500 to-cyan-500",
    shadow: "shadow-blue-500/30"
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    desc: "Creating seamless cross-platform and native experiences using Flutter, Swift, and Kotlin for iOS and Android.",
    color: "from-violet-500 to-purple-500",
    shadow: "shadow-violet-500/30"
  },
  {
    icon: Database,
    title: "Backend Engineering",
    desc: "Designing robust APIs and database architectures with Node.js, Python, and PostgreSQL.",
    color: "from-emerald-500 to-teal-500",
    shadow: "shadow-emerald-500/30"
  },
  {
    icon: Bot,
    title: "AI Integration",
    desc: "Implementing intelligent features, chatbots, and LLM wrappers into modern digital products.",
    color: "from-orange-500 to-amber-500",
    shadow: "shadow-orange-500/30"
  }
];

function TiltCard({ service, index }: { service: typeof SERVICES[0], index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const background = useMotionTemplate`radial-gradient(400px circle at ${mouseXSpring}px ${mouseYSpring}px, rgba(255,255,255,0.1), transparent 80%)`;

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 150, scale: 0.8, rotateX: -30, rotateY: index % 2 === 0 ? -15 : 15 }}
      whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0, rotateY: 0 }}
      viewport={{ once: false, margin: "-100px" }}
      transition={{ duration: 1.2, delay: index * 0.2, type: "spring", stiffness: 50, damping: 20 }}
      className="group relative p-1 rounded-3xl bg-gradient-to-b from-border/60 to-transparent hover:from-primary/60 hover:to-accent/60 transition-colors duration-500 overflow-hidden"
    >
      <motion.div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{ background }}
      />
      
      <div className="h-full bg-secondary/90 backdrop-blur-xl rounded-[1.4rem] p-8 flex flex-col items-start transition-transform duration-500 group-hover:-translate-y-2 relative z-10">
        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-br ${service.color} mb-8 text-white shadow-xl ${service.shadow} transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
          <service.icon className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold text-foreground mb-4">{service.title}</h3>
        <p className="text-secondary-foreground text-base leading-relaxed flex-grow">
          {service.desc}
        </p>
      </div>
    </motion.div>
  );
}

export function ServicesSection() {
  return (
    <section className="pt-32 pb-40 px-6 relative bg-background">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, type: "spring" }}
            className="inline-block relative mb-6"
          >
            <div className="absolute inset-0 bg-accent/5 blur-2xl rounded-full" />
            <h2 className="relative text-5xl md:text-7xl font-extrabold tracking-tighter">
              What I Do
            </h2>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-secondary-foreground max-w-2xl mx-auto text-lg md:text-xl font-light"
          >
            Crafting premium digital solutions with modern technologies and clean architecture to bring your ideas to life.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 perspective-[1500px]">
          {SERVICES.map((service, i) => (
            <TiltCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>

      <WaveDivider className="bottom-0 translate-y-px" fill="fill-secondary" />
    </section>
  );
}
