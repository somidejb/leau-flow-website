"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "@/components/reveal";

export function ValleyBanner() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative isolate h-[50vh] min-h-[360px] overflow-hidden sm:h-[60vh]">
      <motion.div
        className="absolute inset-0"
        initial={prefersReducedMotion ? undefined : { scale: 1.1 }}
        whileInView={prefersReducedMotion ? undefined : { scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <Image
          src="https://images.unsplash.com/photo-1582275269489-1d6dedc7efe8?q=80&w=1920&auto=format&fit=crop"
          alt="Farmland in the Cowichan Valley on Vancouver Island"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-r from-deep/70 via-deep/20 to-transparent" />

      <div className="container-page relative flex h-full items-center">
        <Reveal>
          <p className="max-w-sm text-balance font-display text-2xl leading-snug text-mist sm:text-3xl">
            From Duncan&apos;s heritage homes to Ladysmith&apos;s harbour — the
            same standard, every job.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
