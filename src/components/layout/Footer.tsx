import Link from "next/link";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="font-mono font-semibold tracking-wide text-xl text-foreground">
            Mahbub <span className="text-primary">Shihab</span>
          </span>
          <p className="text-sm text-foreground/60 text-center md:text-left max-w-sm">
            Building intelligent, high-performance web applications and connecting AI models to production.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/mahbubshihab"
            target="_blank"
            rel="noreferrer"
            className="p-2 text-foreground/70 hover:text-primary transition-colors bg-secondary rounded-full hover:bg-secondary/80"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://linkedin.com/in/mahbubshihab"
            target="_blank"
            rel="noreferrer"
            className="p-2 text-foreground/70 hover:text-primary transition-colors bg-secondary rounded-full hover:bg-secondary/80"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="https://twitter.com/mahbubshihab"
            target="_blank"
            rel="noreferrer"
            className="p-2 text-foreground/70 hover:text-primary transition-colors bg-secondary rounded-full hover:bg-secondary/80"
          >
            <FaTwitter size={20} />
          </a>
          <a
            href="mailto:contact@mahbub.dev"
            className="p-2 text-foreground/70 hover:text-primary transition-colors bg-secondary rounded-full hover:bg-secondary/80"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>
      
      <div className="mt-12 text-center text-sm text-foreground/40 font-mono">
        © {new Date().getFullYear()} Mahbub Shihab. All rights reserved. <br />
        <span className="text-primary/50">System initialized.</span>
      </div>
    </footer>
  );
}
