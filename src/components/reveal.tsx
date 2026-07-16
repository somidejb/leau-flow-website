"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

const directionOffset: Record<"up" | "down" | "left" | "right" | "none", { x?: number; y?: number }> = {
  up: { y: 24 },
  down: { y: -24 },
  left: { x: 24 },
  right: { x: -24 },
  none: {},
};

/**
 * Scroll-triggered fade/slide reveal. Fires once when ~20% of the element
 * enters the viewport. Renders content statically (no animation) when the
 * user prefers reduced motion.
 */
export function Reveal({
  children,
  className,
  as: Component = "div",
  direction = "up",
  delay = 0,
  duration = 0.6,
}: {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "li";
  direction?: "up" | "down" | "left" | "right" | "none";
  delay?: number;
  duration?: number;
}) {
  const prefersReducedMotion = useReducedMotion();
  const MotionComponent = Component === "li" ? motion.li : motion.div;

  if (prefersReducedMotion) {
    const Static = Component;
    return <Static className={className}>{children}</Static>;
  }

  return (
    <MotionComponent
      className={className}
      initial={{ opacity: 0, ...directionOffset[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionComponent>
  );
}

/**
 * Stagger container: wrap a list of <Reveal> or motion children and each
 * child animates in sequence rather than all at once.
 */
export function RevealGroup({
  children,
  className,
  stagger = 0.1,
}: {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
}) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  const container: Variants = {
    hidden: {},
    show: {
      transition: { staggerChildren: stagger },
    },
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={container}
    >
      {children}
    </motion.div>
  );
}

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

/** Child item for use inside <RevealGroup> — animates via inherited variants. */
export function RevealItem({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div className={className} variants={item}>
      {children}
    </motion.div>
  );
}
