"use client";

import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import Typewriter from "typewriter-effect";
import { useRef } from "react";
import { WaveDivider } from "./WaveDivider";
import dynamic from "next/dynamic";

const FloatingParticles3D = dynamic(() => import("@/components/layout/FloatingParticles3D"), { ssr: false });

export function HeroSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 400]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.5]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [0, 20]);
  const z = useTransform(scrollYProgress, [0, 1], [0, -300]);

  const textVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center pt-24 pb-40 px-6 bg-transparent overflow-hidden">
      {/* 3D Floating Particle Background */}
      <FloatingParticles3D />

      {/* Background Particles / Glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none animate-spin-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[120px] pointer-events-none animate-spin-slow" />

      <div className="w-full flex justify-center perspective-[2000px] relative z-10">
        <motion.div 
          style={{ y: y1, opacity, scale, rotateX, z }}
          className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center w-full"
        >
        {/* Left Content */}
        <div className="flex flex-col items-start text-left">
          <motion.div
            custom={0}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-secondary/80 border border-border/50 backdrop-blur-md mb-8 shadow-lg shadow-black/20"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            <span className="text-sm text-secondary-foreground font-semibold tracking-wide uppercase">Available for New Projects</span>
          </motion.div>

          <h1 className="text-lg md:text-xl lg:text-2xl font-extrabold tracking-tight text-foreground mb-6 leading-normal">
            <motion.div custom={1} initial="hidden" animate="visible" variants={textVariants} className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-cyan-400 to-accent pb-2">
              <Typewriter
                options={{
                  strings: [
                    "Full-Stack Engineer",
                    "Mobile App Developer",
                    "AI Integration Specialist",
                    "Automation Expert",
                  ],
                  autoStart: true,
                  loop: true,
                  wrapperClassName: "text-transparent bg-clip-text bg-gradient-to-r from-primary via-cyan-400 to-accent",
                  cursorClassName: "text-accent",
                }}
              />
            </motion.div>
          </h1>

          <motion.p
            custom={3}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="text-base md:text-lg lg:text-xl text-secondary-foreground max-w-2xl mb-12 leading-relaxed font-light"
          >
            I design and build high‑performance, scalable software solutions. Leveraging deep expertise in modern web and native mobile technologies, I turn complex business challenges into elegant, user‑focused digital experiences.
          </motion.p>

          <motion.div
            custom={4}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="flex flex-wrap items-center gap-6"
          >
            <Link 
              href="/contact"
              className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(59,130,246,0.4)]"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
              <span className="relative">Let's Talk</span>
              <ArrowRight className="w-5 h-5 relative group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link 
              href="/projects"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-secondary/80 backdrop-blur-sm border border-border/50 text-foreground font-semibold rounded-full hover:bg-secondary transition-all duration-300 hover:shadow-lg"
            >
              View Work
            </Link>
          </motion.div>

          {/* Social Links */}
          <motion.div
            custom={5}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="flex items-center gap-5 mt-14"
          >
            {[
              { icon: FaGithub, href: "https://github.com/mahbubshihab", label: "GitHub" },
              { icon: FaLinkedin, href: "https://linkedin.com/in/mahbubshihab", label: "LinkedIn" },
              { icon: Mail, href: "mailto:contact@mahbubshihab.com", label: "Email" }
            ].map((social, i) => (
              <motion.a 
                whileHover={{ scale: 1.15, y: -4 }}
                whileTap={{ scale: 0.95 }}
                key={i}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="text-secondary-foreground hover:text-primary transition-colors p-4 bg-secondary/50 border border-border/30 rounded-2xl backdrop-blur-sm hover:border-primary/50 hover:bg-secondary hover:shadow-[0_0_20px_rgba(59,130,246,0.2)]"
                aria-label={social.label}
              >
                <social.icon className="w-6 h-6" />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Right Content - Image with 3D Float */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotateY: 15 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1.2, delay: 0.3, type: "spring", stiffness: 50 }}
          className="relative z-10 lg:ml-auto w-full max-w-[500px] aspect-square"
        >
          <motion.div 
            animate={{ y: [-15, 15, -15] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="w-full h-full relative"
          >
            {/* Ambient Backglow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-accent rounded-[3rem] opacity-30 blur-[60px]" />
            
            {/* Glassmorphic Image Container */}
            <div className="relative w-full h-full rounded-[3rem] overflow-hidden border border-white/10 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-2xl shadow-[0_0_80px_rgba(59,130,246,0.15)] p-2">
              <div className="w-full h-full rounded-[2.5rem] overflow-hidden relative group border border-white/10">
                <Image
                  src="/profile.png"
                  alt="Mahbub Shihab"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                {/* Gradient Overlay for blending */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
              </div>
            </div>
            
            {/* Decorative Floating Elements */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute -top-10 -right-10 w-32 h-32 bg-accent/20 rounded-full blur-2xl pointer-events-none"
            />
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/20 rounded-full blur-2xl pointer-events-none"
            />
          </motion.div>
        </motion.div>
      </motion.div>
      </div>

      {/* Animated Wave dividing Hero and next section */}
      <WaveDivider className="bottom-0 translate-y-px" />
    </section>
  );
}
