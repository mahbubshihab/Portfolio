import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Send, Terminal, Mail, MapPin, MessageSquare, ArrowUpRight, CheckCircle2, AlertCircle } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    const formData = new FormData(formRef.current);
    const name = formData.get("user_name") as string;
    const email = formData.get("user_email") as string;
    const message = formData.get("message") as string;

    if (!name || !email || !message) {
      setStatus("error");
      setErrorMessage("Please fill in all fields.");
      return;
    }

    setIsSending(true);
    setStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        formRef.current.reset();
      } else {
        setStatus("error");
        setErrorMessage(data.error || "Failed to send message. Please try again later.");
      }
    } catch (err: any) {
      console.error("Submission Error:", err);
      setStatus("error");
      setErrorMessage("Failed to send message. Please try again later or contact me directly.");
    } finally {
      setIsSending(false);
    }
  };
  return (
    <section id="contact" className="py-8 relative overflow-hidden bg-transparent w-full">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-6 border border-primary/20 shadow-[0_0_15px_rgba(6,182,212,0.1)]">
            <Terminal size={24} className="text-primary animate-pulse" />
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter">
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Collaborate_</span>
          </h2>
          <p className="text-foreground/60 max-w-md mx-auto font-light leading-relaxed text-sm md:text-base">
            Have a project in mind or want to discuss AI integration? Choose your preferred channel below.
          </p>
        </motion.div>

        {/* 2-Column Responsive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Column 1: Direct Contact Channels */}
          <div className="lg:col-span-5 flex flex-col gap-4 w-full">
            <h3 className="text-xs font-mono font-bold tracking-widest text-foreground/45 uppercase mb-2">
              Direct Channels
            </h3>

            {/* WhatsApp Card */}
            <motion.a
              href="https://wa.me/8801521798452"
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className="group relative rounded-2xl border border-green-500/20 bg-secondary/15 p-6 flex items-center justify-between hover:border-green-500/50 transition-colors shadow-lg overflow-hidden cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400 group-hover:scale-110 transition-transform">
                  <FaWhatsapp size={22} />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-green-400 font-bold uppercase tracking-widest block">WhatsApp Chat</span>
                  <span className="text-base font-semibold text-foreground/90 font-mono">+880 1521 798452</span>
                </div>
              </div>
              <ArrowUpRight size={16} className="text-foreground/40 group-hover:text-green-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </motion.a>

            {/* Email Card */}
            <motion.a
              href="mailto:contact@mahbubshihab.com"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className="group relative rounded-2xl border border-primary/20 bg-secondary/15 p-6 flex items-center justify-between hover:border-primary/50 transition-colors shadow-lg overflow-hidden cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-primary/10 border border-primary/20 text-primary group-hover:scale-110 transition-transform">
                  <Mail size={22} />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-primary font-bold uppercase tracking-widest block">Email Mailbox</span>
                  <span className="text-base font-semibold text-foreground/90 font-mono">contact@mahbubshihab.com</span>
                </div>
              </div>
              <ArrowUpRight size={16} className="text-foreground/40 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </motion.a>

            {/* Location Card */}
            <div className="group relative rounded-2xl border border-border/60 bg-secondary/15 p-6 flex items-center gap-4 shadow-lg overflow-hidden">
              <div className="p-3 rounded-xl bg-slate-900/60 border border-border/80 text-foreground/60">
                <MapPin size={22} />
              </div>
              <div>
                <span className="text-[10px] font-mono text-foreground/45 font-bold uppercase tracking-widest block">Location</span>
                <span className="text-base font-semibold text-foreground/90">Dhaka, Bangladesh</span>
              </div>
            </div>

            {/* Live Availability Status */}
            <div className="p-4 rounded-xl border border-primary/10 bg-primary/5 flex items-center gap-3 mt-2">
              <span className="relative flex h-3.5 w-3.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-mono text-foreground/70">Ready for Full-time Roles, Remote Contracts & AI integrations.</span>
            </div>
          </div>

          {/* Column 2: Structural Message Form */}
          <div className="lg:col-span-7 w-full">
            <h3 className="text-xs font-mono font-bold tracking-widest text-foreground/45 uppercase mb-4 pl-1">
              Send a Message
            </h3>
            
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
                <div className="relative z-10 bg-secondary/85 backdrop-blur-2xl rounded-[calc(1.5rem-1px)] m-[1px] p-8 flex flex-col">
                  <form ref={formRef} className="flex flex-col gap-6" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <label htmlFor="name" className="text-xs font-mono font-bold tracking-wider text-foreground/75 uppercase">
                          Name_
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="user_name"
                          placeholder="John Doe"
                          required
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
                          name="user_email"
                          placeholder="john@example.com"
                          required
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
                        name="message"
                        rows={5}
                        placeholder="Tell me about your project..."
                        required
                        className="bg-slate-950/60 border border-border/80 rounded-xl px-4 py-3.5 focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/60 transition-all text-foreground font-light placeholder:text-foreground/30 resize-none"
                      ></textarea>
                    </div>

                    {status === "success" && (
                      <div className="flex items-center gap-2.5 p-4 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-xl text-xs md:text-sm font-mono">
                        <CheckCircle2 size={16} className="shrink-0" />
                        <span>Message sent successfully! I will get back to you shortly.</span>
                      </div>
                    )}

                    {status === "error" && (
                      <div className="flex items-start gap-2.5 p-4 bg-red-500/10 border border-red-500/20 text-red-400 rounded-xl text-xs md:text-sm font-mono">
                        <AlertCircle size={16} className="shrink-0 mt-0.5" />
                        <span>{errorMessage}</span>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={isSending}
                      className="group flex items-center justify-center gap-2.5 bg-gradient-to-r from-cyan-400 via-primary to-accent text-white font-bold py-4 rounded-xl hover:shadow-[0_0_25px_rgba(6,182,212,0.35)] hover:scale-101 transition-all duration-300 w-full md:w-auto md:px-12 self-end mt-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-none"
                    >
                      {isSending ? "Sending..." : "Send Message"}
                      <Send size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
