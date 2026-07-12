"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { WaveDivider } from "./WaveDivider";

export function BottomCTA() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div className="relative">
      <section className="bg-secondary pt-24 pb-48 text-center px-6 relative z-10 overflow-hidden">
        {/* Animated Background Mesh / Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_50%,#000_70%,transparent_100%)]" />

        {/* Ambient Glowing Orbs */}
        <motion.div 
          animate={{ x: [0, 150, 0], y: [0, -100, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-1/4 w-[40rem] h-[40rem] bg-primary/20 rounded-full blur-[120px] pointer-events-none" 
        />
        <motion.div 
          animate={{ x: [0, -150, 0], y: [0, 100, 0], scale: [1, 1.5, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-0 right-1/4 w-[40rem] h-[40rem] bg-accent/20 rounded-full blur-[120px] pointer-events-none" 
        />

        <motion.div
          initial={{ opacity: 0, y: 80, filter: "blur(15px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }} // smooth ease out
          className="max-w-5xl mx-auto relative group"
          onMouseMove={handleMouseMove}
        >
          {/* Spotlight border effect */}
          <motion.div
            className="absolute -inset-[2px] rounded-[3rem] opacity-0 group-hover:opacity-100 transition duration-700 blur-md pointer-events-none"
            style={{
              background: useMotionTemplate`
                radial-gradient(
                  400px circle at ${mouseX}px ${mouseY}px,
                  rgba(59, 130, 246, 0.6),
                  transparent 40%
                )
              `,
            }}
          />

          <div className="relative border border-border/30 bg-background/40 backdrop-blur-2xl rounded-[3rem] p-12 md:p-24 shadow-2xl overflow-hidden">
            {/* Inner ambient gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-70" />
            
            <div className="relative z-10 flex flex-col items-center">
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold tracking-wider uppercase mb-8 shadow-[0_0_20px_rgba(59,130,246,0.15)]"
              >
                <Sparkles className="w-4 h-4" />
                <span>Available for New Projects</span>
              </motion.div>

              <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter leading-tight text-foreground">
                Let's build something <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-primary to-accent">
                  extraordinary
                </span>
              </h2>
              
              <p className="text-secondary-foreground/80 text-lg md:text-xl mb-12 max-w-2xl font-light leading-relaxed">
                Whether you need a high-converting web application or a seamless mobile experience, I'm here to turn your vision into a reality.
              </p>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  href="/contact"
                  className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 bg-foreground text-background font-bold text-lg rounded-full overflow-hidden transition-all duration-500 hover:shadow-[0_0_40px_rgba(255,255,255,0.25)]"
                >
                  <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-background/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                  <span className="relative z-10">Start a Conversation</span>
                  <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-2 transition-transform duration-300" />
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>
      
      {/* Smooth transition into Footer */}
      <WaveDivider className="bottom-0 translate-y-px" fill="fill-background" inverted={true} />
    </div>
  );
}
