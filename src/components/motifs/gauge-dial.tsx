"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

const SIZE = 96;
const STROKE = 5;
const RADIUS = (SIZE - STROKE) / 2;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;
// A pressure-gauge style sweep, not a literal percentage of anything —
// every credential shown here is fully "in the green," so the dial always
// completes its arc. The animation is an entrance reveal, not encoded data.
const SWEEP = 0.78;

/**
 * A pressure-gauge inspired stat dial: the ring sweeps in once on scroll,
 * tick marks around the rim nod to an actual gauge face, and the value
 * counts up inside. Used for credential/trust stats — never for anything
 * that would imply a partial or fabricated metric.
 */
export function GaugeDial({
  value,
  label,
  tone = "water",
  delay = 0,
  className,
}: {
  value: string;
  label: string;
  tone?: "water" | "brass";
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const prefersReducedMotion = useReducedMotion();
  const swept = prefersReducedMotion || inView;

  const color = tone === "brass" ? "var(--brass-light)" : "var(--water-light)";
  const dashOffset = CIRCUMFERENCE * (1 - SWEEP);

  return (
    <div ref={ref} className={cn("flex flex-col items-center text-center", className)}>
      <div className="relative" style={{ width: SIZE, height: SIZE }}>
        <svg width={SIZE} height={SIZE} viewBox={`0 0 ${SIZE} ${SIZE}`} className="-rotate-90">
          {/* tick marks around the rim */}
          {Array.from({ length: 24 }).map((_, i) => {
            const angle = (i / 24) * 2 * Math.PI;
            const inner = RADIUS - 2;
            const outer = RADIUS + 2;
            const x1 = SIZE / 2 + inner * Math.cos(angle);
            const y1 = SIZE / 2 + inner * Math.sin(angle);
            const x2 = SIZE / 2 + outer * Math.cos(angle);
            const y2 = SIZE / 2 + outer * Math.sin(angle);
            return (
              <line
                key={i}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="currentColor"
                strokeWidth={1}
                className="text-deep/10"
              />
            );
          })}
          <circle
            cx={SIZE / 2}
            cy={SIZE / 2}
            r={RADIUS}
            fill="none"
            stroke="currentColor"
            strokeWidth={STROKE}
            className="text-deep/10"
          />
          <motion.circle
            cx={SIZE / 2}
            cy={SIZE / 2}
            r={RADIUS}
            fill="none"
            stroke={color}
            strokeWidth={STROKE}
            strokeLinecap="round"
            strokeDasharray={CIRCUMFERENCE}
            initial={{ strokeDashoffset: CIRCUMFERENCE }}
            animate={{ strokeDashoffset: swept ? dashOffset : CIRCUMFERENCE }}
            transition={{ duration: 1.1, delay, ease: [0.22, 1, 0.36, 1] }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center px-2">
          <span className="max-w-[60px] text-center font-display text-base leading-[1.05] font-semibold text-mist">
            {value}
          </span>
        </div>
      </div>
      <p className="mt-3 text-xs tracking-[0.14em] text-mist/55 uppercase">{label}</p>
    </div>
  );
}
