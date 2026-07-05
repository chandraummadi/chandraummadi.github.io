"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const FULL_NAME = "Chandra Sekhara Reddy Ummadi";
const INITIALS = "CU";

/**
 * Abstract background. On devices with a real mouse, three blurred
 * gradient blobs drift toward the pointer (parallax depth). On touch
 * devices there's no pointer to react to, so we skip the spring physics
 * and event listeners entirely and render a static gradient instead -
 * this avoids unnecessary JS work and GPU-heavy blur recalculation on
 * phones, where it was making the page feel sluggish.
 */
function ReactiveBackground({
  containerRef,
}: {
  containerRef: React.RefObject<HTMLDivElement | null>;
}) {
  const [hasFinePointer, setHasFinePointer] = useState(false);

  useEffect(() => {
    setHasFinePointer(window.matchMedia("(pointer: fine)").matches);
  }, []);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 60, mass: 1 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const blob1X = useTransform(smoothX, (v) => v * 0.04);
  const blob1Y = useTransform(smoothY, (v) => v * 0.04);
  const blob2X = useTransform(smoothX, (v) => v * -0.06);
  const blob2Y = useTransform(smoothY, (v) => v * -0.03);
  const blob3X = useTransform(smoothX, (v) => v * 0.08);
  const blob3Y = useTransform(smoothY, (v) => v * -0.05);

  function handlePointerMove(e: React.PointerEvent<HTMLDivElement>) {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set(e.clientX - (rect.left + rect.width / 2));
    mouseY.set(e.clientY - (rect.top + rect.height / 2));
  }

  // Touch devices: static gradient, no listeners, no spring math.
  if (!hasFinePointer) {
    return (
      <div aria-hidden className="absolute inset-0 overflow-hidden">
        <div className="absolute left-[8%] top-[15%] h-72 w-72 rounded-full bg-accent-blue/20 blur-[80px]" />
        <div className="absolute right-[10%] top-[35%] h-80 w-80 rounded-full bg-accent-purple/20 blur-[85px]" />
        <div className="absolute bottom-[10%] left-[30%] h-56 w-56 rounded-full bg-accent-cyan/15 blur-[70px]" />
      </div>
    );
  }

  return (
    <div
      onPointerMove={handlePointerMove}
      aria-hidden
      className="pointer-events-auto absolute inset-0 overflow-hidden"
    >
      <motion.div
        style={{ x: blob1X, y: blob1Y }}
        className="absolute left-[8%] top-[15%] h-72 w-72 rounded-full bg-accent-blue/25 blur-[100px]"
      />
      <motion.div
        style={{ x: blob2X, y: blob2Y }}
        className="absolute right-[10%] top-[35%] h-96 w-96 rounded-full bg-accent-purple/25 blur-[110px]"
      />
      <motion.div
        style={{ x: blob3X, y: blob3Y }}
        className="absolute bottom-[10%] left-[30%] h-64 w-64 rounded-full bg-accent-cyan/20 blur-[90px]"
      />
    </div>
  );
}

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-[80vh] items-center overflow-hidden px-6 py-16 md:px-12"
    >
      <ReactiveBackground containerRef={containerRef} />

      <div className="relative mx-auto w-full max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-border bg-surface font-mono text-lg font-semibold text-accent-cyan md:h-20 md:w-20 md:text-xl"
        >
          {INITIALS}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="text-balance text-[13vw] font-semibold leading-[0.95] tracking-tight text-foreground sm:text-[9vw] md:text-[6.5vw] lg:text-[5.5rem]"
        >
          {FULL_NAME}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.25 }}
          className="mt-5 font-mono text-lg text-accent-cyan md:text-xl"
        >
          AI + DevOps Engineer
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.35 }}
          className="mt-4 max-w-2xl text-lg text-muted md:text-xl"
        >
          13+ years engineering AWS cloud infrastructure that scales &mdash;
          now building that same discipline into AI-powered workflows and
          agentic systems.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.45 }}
          className="mt-8 flex flex-wrap gap-4"
        >
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
        </motion.div>
      </div>
    </section>
  );
}
