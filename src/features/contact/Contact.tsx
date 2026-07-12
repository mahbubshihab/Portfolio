"use client";

import { motion } from "framer-motion";
import { Send, Terminal } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-12 relative overflow-hidden bg-transparent">
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center p-4 bg-primary/10 rounded-full mb-6 border border-primary/20 shadow-[0_0_15px_rgba(6,182,212,0.1)]">
            <Terminal size={32} className="text-primary animate-pulse" />
          </div>
          <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tighter">
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Collaborate_</span>
          </h2>
          <p className="text-foreground/60 max-w-md mx-auto font-light leading-relaxed text-sm md:text-base">
            Have a project in mind or want to discuss AI integration? My inbox is always open.
          </p>
        </motion.div>

        {/* Premium double-bordered card container */}
        <div style={{ perspective: 1200 }} className="w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring", stiffness: 50, damping: 15 }}
            className="group relative rounded-3xl overflow-hidden shadow-2xl"
          >
            {/* Gradient border */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/60 via-purple-500/40 to-fuchsia-500/60 opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute inset-[1px] bg-gradient-to-b from-border/40 to-transparent rounded-3xl group-hover:opacity-0 transition-opacity duration-500" />

            {/* Inner Card Content */}
            <div className="relative z-10 bg-secondary/85 backdrop-blur-2xl rounded-[calc(1.5rem-1px)] m-[1px] p-8 md:p-12 flex flex-col">
              <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-xs font-mono font-bold tracking-wider text-foreground/75 uppercase">
                      Name_
                    </label>
                    <input
                      type="text"
                      id="name"
                      placeholder="John Doe"
                      className="bg-slate-950/60 border border-border/80 rounded-xl px-4 py-3.5 focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/60 transition-all text-foreground font-light placeholder:text-foreground/30"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-xs font-mono font-bold tracking-wider text-foreground/75 uppercase">
                      Email_
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="john@example.com"
                      className="bg-slate-950/60 border border-border/80 rounded-xl px-4 py-3.5 focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/60 transition-all text-foreground font-light placeholder:text-foreground/30"
                    />
                  </div>
                </div>
                
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-xs font-mono font-bold tracking-wider text-foreground/75 uppercase">
                    Message_
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Tell me about your project..."
                    className="bg-slate-950/60 border border-border/80 rounded-xl px-4 py-3.5 focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/60 transition-all text-foreground font-light placeholder:text-foreground/30 resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="group flex items-center justify-center gap-2.5 bg-gradient-to-r from-cyan-400 via-primary to-accent text-white font-bold py-4 rounded-xl hover:shadow-[0_0_25px_rgba(6,182,212,0.35)] hover:scale-101 transition-all duration-300 w-full md:w-auto md:px-12 self-end mt-2 cursor-pointer"
                >
                  Send Message
                  <Send size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
