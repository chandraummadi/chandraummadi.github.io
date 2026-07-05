"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

/**
 * Lines that "type" into the terminal card, in order.
 * Kept as data (not hardcoded JSX) so content stays easy to update
 * without touching animation logic.
 */
const TERMINAL_LINES = [
  { prompt: "$", text: "whoami", isCommand: true },
  { prompt: ">", text: "Chandra Ummadi — AI + DevOps Engineer", isCommand: false },
  { prompt: "$", text: "cat stack.txt", isCommand: true },
  {
    prompt: ">",
    text: "AWS · Terraform · Kubernetes · GitHub Actions · AI Workflows",
    isCommand: false,
  },
  { prompt: "$", text: "uptime --experience", isCommand: true },
  { prompt: ">", text: "13+ years building infrastructure that doesn't page you at 3am", isCommand: false },
];

function TerminalCard() {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    if (visibleLines >= TERMINAL_LINES.length) return;
    const delay = TERMINAL_LINES[visibleLines].isCommand ? 550 : 700;
    const timer = setTimeout(() => setVisibleLines((n) => n + 1), delay);
    return () => clearTimeout(timer);
  }, [visibleLines]);

  return (
    <div className="w-full max-w-xl rounded-xl border border-border bg-surface/80 shadow-2xl shadow-black/40 backdrop-blur-sm">
      {/* Window chrome - macOS-style dots, a familiar terminal affordance */}
      <div className="flex items-center gap-1.5 border-b border-border px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F56]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#27C93F]" />
        <span className="ml-2 font-mono text-xs text-muted">
          chandra@infra:~
        </span>
      </div>

      <div className="min-h-[220px] px-5 py-5 font-mono text-sm leading-relaxed">
        {TERMINAL_LINES.slice(0, visibleLines).map((line, i) => (
          <div key={i} className="mb-1.5">
            <span
              className={
                line.isCommand ? "text-accent-cyan" : "text-foreground"
              }
            >
              <span className="mr-2 text-muted">{line.prompt}</span>
              {line.text}
            </span>
          </div>
        ))}
        {visibleLines < TERMINAL_LINES.length && (
          <span className="inline-block h-4 w-2 animate-caret-blink bg-accent-cyan align-middle" />
        )}
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-6 py-24 md:px-12">
      {/* Ambient gradient mesh - subtle, sits behind everything, never competes with the terminal */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.15]"
        style={{
          background:
            "radial-gradient(circle at 20% 20%, #4F7CFF, transparent 40%), radial-gradient(circle at 80% 70%, #8B5CF6, transparent 40%)",
        }}
      />

      <div className="relative mx-auto grid w-full max-w-6xl gap-12 md:grid-cols-2 md:items-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="mb-4 font-mono text-sm text-accent-cyan">
            AI + DevOps Engineer
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-foreground md:text-6xl">
            I build infrastructure
            <br />
            that thinks ahead.
          </h1>
          <p className="mt-6 max-w-md text-lg text-muted">
            13+ years automating cloud infrastructure at AWS scale. Now
            extending that same discipline into AI-powered workflows and
            agentic systems.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-lg bg-accent-blue px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-blue/90"
            >
              View my work
            </a>
            <a
              href="#contact"
              className="rounded-lg border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-surface-hover"
            >
              Get in touch
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
          className="flex justify-center md:justify-end"
        >
          <TerminalCard />
        </motion.div>
      </div>
    </section>
  );
}
