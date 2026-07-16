"use client";

import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { MapPin, Phone, Star } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { CornerBrackets } from "@/components/motifs/corner-bracket";
import { FlowLineDraw } from "@/components/motifs/flow-line-draw";
import { GaugeDial } from "@/components/motifs/gauge-dial";
import { business } from "@/lib/content";
import { cn } from "@/lib/utils";

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export function Hero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative isolate flex min-h-[92svh] items-end overflow-hidden sm:min-h-[95svh]">
      <motion.div
        className="absolute inset-0"
        initial={prefersReducedMotion ? undefined : { scale: 1 }}
        animate={prefersReducedMotion ? undefined : { scale: 1.08 }}
        transition={{ duration: 14, ease: "linear" }}
      >
        <Image
          src="https://images.unsplash.com/photo-1676210134188-4c05dd172f89?q=80&w=1920&auto=format&fit=crop"
          alt="Plumbing and heating technician at work on a residential job"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-t from-deep via-deep/75 to-deep/25" />
      <div className="absolute inset-0 bg-gradient-to-r from-deep/90 via-deep/45 to-transparent" />

      <div className="pointer-events-none absolute inset-0 opacity-60">
        <FlowLineDraw className="absolute inset-x-0 top-[36%] hidden -translate-y-1/2 lg:block" />
      </div>

      <CornerBrackets tone="mist" />

      <motion.div
        className="container-page relative w-full pt-32 pb-12 sm:pt-40 sm:pb-16"
        variants={prefersReducedMotion ? undefined : stagger}
        initial={prefersReducedMotion ? undefined : "hidden"}
        animate={prefersReducedMotion ? undefined : "show"}
      >
        <motion.div variants={item} className="flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-mist/20 bg-mist/5 px-3 py-1.5 text-xs font-medium text-mist/85 backdrop-blur-sm">
            <MapPin className="h-3.5 w-3.5 text-water-light" aria-hidden="true" />
            Duncan, BC &amp; the Cowichan Valley
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-mist/20 bg-mist/5 px-3 py-1.5 text-xs font-medium text-mist/85 backdrop-blur-sm">
            <Star className="h-3.5 w-3.5 fill-brass-light text-brass-light" aria-hidden="true" />
            Since {business.since}
          </span>
        </motion.div>

        <motion.h1
          variants={item}
          className="mt-8 max-w-2xl text-balance font-display text-4xl leading-[1.06] font-semibold text-mist sm:text-5xl lg:text-[3.75rem]"
        >
          Plumbing and gas work, done right.
        </motion.h1>

        <motion.p variants={item} className="mt-6 max-w-md text-lg leading-relaxed text-mist/75">
          Fixed prices in writing. Red Seal certified. Serving the Cowichan Valley.
        </motion.p>

        <motion.div variants={item} className="mt-9 flex flex-col gap-3 sm:flex-row">
          {/* eslint-disable-next-line @next/next/no-html-link-for-pages -- same-page hash anchor, needs native scroll */}
          <a href="/#quote" className={cn(buttonVariants({ size: "lg" }))}>
            Request a Written Quote
          </a>
          <a href={business.phoneHref} className={cn(buttonVariants({ variant: "outline-light", size: "lg" }))}>
            <Phone className="h-4 w-4 text-water-light" aria-hidden="true" />
            Call {business.phone}
          </a>
        </motion.div>

        <motion.div
          variants={item}
          className="mt-12 flex max-w-xl gap-8 border-t border-mist/15 pt-7 sm:gap-10"
        >
          <GaugeDial value="A+" label="BBB Rating" tone="brass" delay={0} />
          <GaugeDial value="Red Seal" label="Certified" tone="water" delay={0.15} />
          <GaugeDial value={`${business.bbb.yearsInBusiness}yr`} label="In Business" tone="brass" delay={0.3} />
        </motion.div>
      </motion.div>
    </section>
  );
}
