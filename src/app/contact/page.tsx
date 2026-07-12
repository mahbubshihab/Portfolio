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
  const [useTerminal, setUseTerminal] = useState(true);
  const [history, setHistory] = useState<LogEntry[]>([
    {
      input: "system.init()",
      output: (
        <div className="text-primary font-mono text-sm leading-relaxed">
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
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 font-mono text-sm">
            <div><span className="text-primary font-bold">about</span> - Read my developer philosophy</div>
            <div><span className="text-primary font-bold">skills</span> - List primary engineering tech-stack</div>
            <div><span className="text-primary font-bold">clear</span> - Wipe the terminal console clear</div>
            <div><span className="text-primary font-bold">contact</span> - Trigger structured mail submission</div>
          </div>
        );
        break;
      case "about":
        response = (
          <p className="font-mono text-sm text-foreground/80 leading-relaxed">
            I am a Next-Gen Full-Stack Engineer focused on building robust APIs, elegant cross-platform apps, and connecting generative AI agents to production workflows.
          </p>
        );
        break;
      case "skills":
        response = (
          <div className="font-mono text-sm leading-relaxed">
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
          <div className="font-mono text-sm text-yellow-400">
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
          <span className="text-red-400 font-mono text-sm">
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
    <div className="pt-32 pb-24 min-h-screen relative flex flex-col items-center justify-center">
      {/* Background radial glow */}
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-20">
        <div className="w-[500px] h-[500px] bg-primary/20 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-4xl w-full px-6 relative z-10">
        {/* Toggle Mode */}
        <div className="flex justify-end mb-6">
          <button
            onClick={() => setUseTerminal(!useTerminal)}
            className="flex items-center gap-2 px-4 py-2 border border-border rounded-md bg-secondary/30 hover:bg-secondary/50 font-mono text-sm text-foreground/80 hover:text-primary transition-all"
          >
            {useTerminal ? (
              <>
                <Eye size={16} /> Switch to Form View
              </>
            ) : (
              <>
                <Keyboard size={16} /> Switch to Console View
              </>
            )}
          </button>
        </div>

        {useTerminal ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="rounded-2xl border border-border bg-black/80 backdrop-blur-md shadow-2xl p-6 h-[480px] flex flex-col font-mono"
            onClick={() => inputRef.current?.focus()}
          >
            {/* Window title bar */}
            <div className="flex items-center justify-between pb-4 border-b border-zinc-800 mb-4 select-none">
              <div className="flex items-center gap-2">
                <div className="w-3.5 h-3.5 rounded-full bg-red-500/20 border border-red-500/30" />
                <div className="w-3.5 h-3.5 rounded-full bg-yellow-500/20 border border-yellow-500/30" />
                <div className="w-3.5 h-3.5 rounded-full bg-green-500/20 border border-green-500/30" />
              </div>
              <div className="text-xs text-foreground/40 font-mono flex items-center gap-1.5">
                <Terminal size={12} /> guest@mahbubshihab:~
              </div>
              <div className="w-14" />
            </div>

            {/* Scrollable output log */}
            <div className="flex-1 overflow-y-auto pr-2 flex flex-col gap-4">
              {history.map((entry, index) => (
                <div key={index}>
                  <div className="flex items-center gap-2 text-foreground/50 mb-1">
                    <span className="text-primary font-bold">guest@mahbubshihab:~$</span>
                    <span>{entry.input}</span>
                  </div>
                  <div className="pl-4">{entry.output}</div>
                </div>
              ))}
              <div ref={terminalEndRef} />
            </div>

            {/* Input Form */}
            <form onSubmit={handleSubmit} className="flex items-center gap-2 pt-4 border-t border-zinc-800 mt-4">
              <span className="text-primary font-bold shrink-0">guest@mahbubshihab:~$</span>
              <input
                ref={inputRef}
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                className="bg-transparent text-foreground focus:outline-none flex-1 font-mono"
                placeholder="type a command..."
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="off"
                spellCheck="false"
              />
              <button type="submit" className="text-primary hover:text-primary/80 transition-colors">
                <Send size={16} />
              </button>
            </form>
          </motion.div>
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
