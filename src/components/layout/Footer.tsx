"use client";

import Link from "next/link";
import { Mail, ArrowUp, Sparkles, Code, Compass, ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export function Footer() {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-transparent pt-20 pb-12 overflow-hidden">
      {/* Top dynamic glow border line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/35 to-transparent" />
      
      {/* Ambient background glow orb */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none -z-10 animate-pulse" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16">
          {/* Column 1: Info (Logo & Tagline) */}
          <div className="md:col-span-5 flex flex-col items-start gap-4">
            <Link href="#home" className="flex items-center gap-2 group">
              <div className="relative flex items-center justify-center w-9 h-9 rounded-lg bg-gradient-to-tr from-primary to-accent p-[1px] transition-transform group-hover:scale-105">
                <div className="w-full h-full bg-[#0a0624] rounded-[7px] flex items-center justify-center font-bold text-sm text-primary">
                  MS
                </div>
              </div>
              <span className="font-bold text-lg tracking-wider text-foreground">
                Mahbub <span className="text-primary">Shihab</span>
              </span>
            </Link>
            
            <p className="text-sm text-foreground/60 max-w-sm leading-relaxed">
              Building intelligent, high-performance web applications and connecting AI models to production. Bridging backend power with elegant design.
            </p>
            
            <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-[10px] font-mono tracking-widest uppercase">
              <Sparkles className="w-3 h-3" />
              <span>Innovating with AI</span>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="md:col-span-3 flex flex-col gap-4">
            <h4 className="font-mono text-xs font-bold text-foreground/45 uppercase tracking-widest flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5" /> Navigation
            </h4>
            <ul className="space-y-2.5">
              {[
                { name: "Home", href: "/#home" },
                { name: "About", href: "/about" },
                { name: "Projects", href: "/projects" },
                { name: "Contact", href: "/contact" }
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="group inline-flex items-center gap-1 text-sm text-foreground/70 hover:text-primary transition-colors duration-200"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact & Connect */}
          <div className="md:col-span-4 flex flex-col gap-4">
            <h4 className="font-mono text-xs font-bold text-foreground/45 uppercase tracking-widest flex items-center gap-1.5">
              <Code className="w-3.5 h-3.5" /> Connect & Talk
            </h4>
            
            <p className="text-sm text-foreground/60 mb-2">
              Interested in a project or collaboration? Reach out anytime.
            </p>

            <div className="flex items-center gap-3">
              {[
                { icon: FaGithub, href: "https://github.com/mahbubshihab", label: "GitHub" },
                { icon: FaLinkedin, href: "https://linkedin.com/in/mahbubshihab", label: "LinkedIn" },
                { icon: FaTwitter, href: "https://twitter.com/mahbubshihab", label: "Twitter" },
                { icon: Mail, href: "mailto:contact@mahbub.dev", label: "Email" }
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 text-foreground/70 hover:text-primary transition-all duration-300 bg-white/5 border border-white/5 rounded-xl hover:border-primary/40 hover:bg-primary/5 hover:scale-105"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom copyright section */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left text-xs text-foreground/40 font-mono">
            © {new Date().getFullYear()} Mahbub Shihab. All rights reserved. <br />
            <span className="text-primary/50 text-[10px]">System initialized & optimized.</span>
          </div>

          {/* Floating Back to Top Button */}
          <button
            onClick={handleScrollTop}
            className="group p-3 rounded-xl bg-white/5 border border-white/5 text-foreground/75 hover:text-primary hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 shadow-md hover:scale-105 cursor-pointer flex items-center gap-1.5 text-xs font-mono"
            title="Scroll to Top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
