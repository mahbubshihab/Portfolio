"use client";

import { motion } from "framer-motion";
import { Send, Terminal } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-30">
        <div className="w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center p-4 bg-secondary/50 rounded-full mb-6 border border-primary/20">
            <Terminal size={32} className="text-primary" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Let's <span className="text-primary">Collaborate</span>
          </h2>
          <p className="text-foreground/60">
            Have a project in mind or want to discuss AI integration? My inbox is always open.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-secondary/20 border border-border p-8 rounded-2xl backdrop-blur-sm shadow-xl"
        >
          <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-mono text-foreground/80">
                  Name_
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="John Doe"
                  className="bg-background border border-border rounded-md px-4 py-3 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all text-foreground"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-mono text-foreground/80">
                  Email_
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="john@example.com"
                  className="bg-background border border-border rounded-md px-4 py-3 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all text-foreground"
                />
              </div>
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-mono text-foreground/80">
                Message_
              </label>
              <textarea
                id="message"
                rows={5}
                placeholder="Tell me about your project..."
                className="bg-background border border-border rounded-md px-4 py-3 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all text-foreground resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="group flex items-center justify-center gap-2 bg-primary text-primary-foreground font-bold py-4 rounded-md hover:bg-primary/90 transition-colors w-full md:w-auto md:px-12 self-end mt-2"
            >
              Send Message
              <Send size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
