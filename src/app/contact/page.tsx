"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Terminal, Send, Eye, Keyboard } from "lucide-react";
import { Contact as VisualContact } from "@/features/contact/Contact";

interface LogEntry {
  input: string;
  output: React.ReactNode;
}

export default function ContactPage() {
  const [useTerminal, setUseTerminal] = useState(false);
  const [history, setHistory] = useState<LogEntry[]>([
    {
      input: "system.init()",
      output: (
        <div className="text-primary font-mono text-xs md:text-sm leading-relaxed">
          [SYSTEM INITIALIZED] Welcome to Mahbub Shihab's interactive contact node.<br />
          Type <span className="text-accent font-bold">help</span> to view all available commands.
        </div>
      ),
    },
  ]);
  const [inputVal, setInputVal] = useState("");
  const terminalEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Focus input automatically
  useEffect(() => {
    if (useTerminal && inputRef.current) {
      inputRef.current.focus();
    }
  }, [useTerminal, history]);

  // Scroll to bottom
  useEffect(() => {
    if (terminalEndRef.current) {
      terminalEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [history]);

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    let response: React.ReactNode = null;

    switch (trimmed) {
      case "help":
        response = (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 font-mono text-xs md:text-sm">
            <div><span className="text-primary font-bold">about</span> - Read my developer philosophy</div>
            <div><span className="text-primary font-bold">skills</span> - List primary engineering tech-stack</div>
            <div><span className="text-primary font-bold">clear</span> - Wipe the terminal console clear</div>
            <div><span className="text-primary font-bold">contact</span> - Trigger structured mail submission</div>
          </div>
        );
        break;
      case "about":
        response = (
          <p className="font-mono text-xs md:text-sm text-foreground/80 leading-relaxed">
            I am a Next-Gen Full-Stack Engineer focused on building robust APIs, elegant cross-platform apps, and connecting generative AI agents to production workflows.
          </p>
        );
        break;
      case "skills":
        response = (
          <div className="font-mono text-xs md:text-sm leading-relaxed">
            <span className="text-primary font-bold">&gt; Web:</span> React, Next.js, Vue, Tailwind CSS<br />
            <span className="text-primary font-bold">&gt; Mobile:</span> Flutter, Swift, Kotlin, Dart<br />
            <span className="text-primary font-bold">&gt; Backend:</span> Node.js, Nest.js, Express, Firebase, Supabase, Postgres<br />
            <span className="text-primary font-bold">&gt; AI:</span> LLM integration, custom agents, prompt architectures
          </div>
        );
        break;
      case "clear":
        setHistory([]);
        return;
      case "contact":
        response = (
          <div className="font-mono text-xs md:text-sm text-yellow-400">
            Switching console to visual form pipeline...
          </div>
        );
        setTimeout(() => {
          setUseTerminal(false);
        }, 1000);
        break;
      case "":
        return;
      default:
        response = (
          <span className="text-red-400 font-mono text-xs md:text-sm">
            Command not found: '{trimmed}'. Type 'help' for options.
          </span>
        );
    }

    setHistory((prev) => [...prev, { input: cmd, output: response }]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleCommand(inputVal);
    setInputVal("");
  };

  return (
    <div className="pt-32 pb-24 min-h-screen relative flex flex-col items-center justify-center bg-transparent">
      {/* Background radial glow */}
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-10 pointer-events-none">
        <div className="w-[600px] h-[600px] bg-primary/20 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-4xl w-full px-6 relative z-10">
        {/* Toggle Mode */}
        <div className="flex justify-end mb-6">
          <button
            onClick={() => setUseTerminal(!useTerminal)}
            className="flex items-center gap-2 px-4 py-2 border border-primary/20 rounded-xl bg-secondary/40 hover:bg-secondary/60 hover:border-primary/50 font-mono text-xs uppercase tracking-wider text-foreground/80 hover:text-primary transition-all cursor-pointer shadow-lg"
          >
            {useTerminal ? (
              <>
                <Eye size={14} /> Switch to Form View
              </>
            ) : (
              <>
                <Keyboard size={14} /> Switch to Console View
              </>
            )}
          </button>
        </div>

        {useTerminal ? (
          <div style={{ perspective: 1200 }} className="w-full">
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 60, damping: 15 }}
              className="group relative rounded-3xl overflow-hidden shadow-2xl"
              onClick={() => inputRef.current?.focus()}
            >
              {/* Animated gradient border */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/60 via-purple-500/40 to-fuchsia-500/60 opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-[1px] bg-gradient-to-b from-border/40 to-transparent rounded-3xl group-hover:opacity-0 transition-opacity duration-500" />

              {/* Inner Card Content */}
              <div className="relative z-10 bg-secondary/85 backdrop-blur-2xl rounded-[calc(1.5rem-1px)] m-[1px] p-6 h-[480px] flex flex-col font-mono">
                {/* Window title bar */}
                <div className="flex items-center justify-between pb-4 border-b border-border/30 mb-4 select-none">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500/80" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <span className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <div className="text-xs text-foreground/45 font-mono flex items-center gap-1.5">
                    <Terminal size={12} className="text-primary" /> guest @ mahbubshihab : ~
                  </div>
                  <div className="w-10" />
                </div>

                {/* Scrollable output log */}
                <div className="flex-1 overflow-y-auto pr-2 flex flex-col gap-4">
                  {history.map((entry, index) => (
                    <div key={index}>
                      <div className="flex items-center gap-2 text-foreground/50 mb-1 text-xs md:text-sm">
                        <span className="text-primary font-bold">guest@mahbubshihab:~$</span>
                        <span>{entry.input}</span>
                      </div>
                      <div className="pl-4">{entry.output}</div>
                    </div>
                  ))}
                  <div ref={terminalEndRef} />
                </div>

                {/* Input Form */}
                <form onSubmit={handleSubmit} className="flex items-center gap-2 pt-4 border-t border-border/40 mt-4">
                  <span className="text-primary font-bold shrink-0 text-xs md:text-sm">guest@mahbubshihab:~$</span>
                  <input
                    ref={inputRef}
                    type="text"
                    value={inputVal}
                    onChange={(e) => setInputVal(e.target.value)}
                    className="bg-transparent text-foreground focus:outline-none flex-1 font-mono text-xs md:text-sm"
                    placeholder="type a command (e.g. help, contact)..."
                    autoComplete="off"
                    autoCorrect="off"
                    autoCapitalize="off"
                    spellCheck="false"
                  />
                  <button type="submit" className="text-primary hover:text-primary/80 transition-colors cursor-pointer">
                    <Send size={16} />
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <VisualContact />
          </motion.div>
        )}
      </div>
    </div>
  );
}
