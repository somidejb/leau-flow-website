"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * Animated version of the flow-line schematic motif: the line "draws" itself
 * once, on load — a restrained nod to tracing a pipe run, not a looping
 * decorative flourish. Respects prefers-reduced-motion by rendering static.
 */
export function FlowLineDraw({ className }: { className?: string }) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <svg
      viewBox="0 0 900 200"
      preserveAspectRatio="none"
      className={cn("h-full w-full", className)}
      aria-hidden="true"
    >
      <motion.path
        d="M0,160 L120,160 L160,120 L340,120 L380,160 L560,160 L600,80 L780,80 L820,40 L900,40"
        fill="none"
        stroke="var(--water-light)"
        strokeWidth={2}
        strokeLinecap="round"
        initial={prefersReducedMotion ? undefined : { pathLength: 0, opacity: 0 }}
        animate={prefersReducedMotion ? undefined : { pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.6, ease: "easeInOut", delay: 0.3 }}
      />
      {[
        [160, 120],
        [380, 160],
        [600, 80],
        [820, 40],
      ].map(([cx, cy], i) => (
        <motion.circle
          key={`${cx}-${cy}`}
          cx={cx}
          cy={cy}
          r={5}
          fill="var(--brass-light)"
          initial={prefersReducedMotion ? undefined : { opacity: 0, scale: 0 }}
          animate={prefersReducedMotion ? undefined : { opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 1.2 + i * 0.15 }}
        />
      ))}
    </svg>
  );
}
