"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Clock, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ServiceArea } from "@/lib/content";

const VIEW_W = 400;
const VIEW_H = 520;

// Stylized, not geographically precise — a schematic river-line reading of
// the Cowichan Valley corridor these towns sit along, echoing the brand's
// own "flow" motif rather than reproducing an actual map.
const positions: Record<string, { x: number; y: number }> = {
  ladysmith: { x: 255, y: 46 },
  duncan: { x: 198, y: 244 },
  "north-cowichan": { x: 274, y: 306 },
  chemainus: { x: 232, y: 424 },
  "lake-cowichan": { x: 56, y: 262 },
};

const mainPath = "M255,46 C232,124 192,164 198,244 C204,306 216,348 232,424";
const northCowichanBranch = "M198,244 C228,264 250,284 274,306";
const lakeCowichanBranch = "M198,244 C148,248 96,254 56,262";

function pct(v: number, total: number) {
  return `${(v / total) * 100}%`;
}

export function ValleyMap({ areas }: { areas: ServiceArea[] }) {
  const [selectedSlug, setSelectedSlug] = useState(areas[0]?.slug ?? "");
  const prefersReducedMotion = useReducedMotion();
  const selected = areas.find((a) => a.slug === selectedSlug) ?? areas[0];

  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_320px] lg:items-center lg:gap-14">
      <div className="relative mx-auto aspect-[400/520] w-full max-w-sm lg:max-w-none">
        <svg
          viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
          className="absolute inset-0 h-full w-full overflow-visible"
          aria-hidden="true"
        >
          <motion.path
            d={mainPath}
            fill="none"
            stroke="var(--water-light)"
            strokeWidth={2.5}
            strokeLinecap="round"
            initial={prefersReducedMotion ? undefined : { pathLength: 0, opacity: 0 }}
            whileInView={prefersReducedMotion ? undefined : { pathLength: 1, opacity: 0.7 }}
            viewport={{ once: true }}
            transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
          />
          <motion.path
            d={northCowichanBranch}
            fill="none"
            stroke="var(--water-light)"
            strokeWidth={1.75}
            strokeLinecap="round"
            initial={prefersReducedMotion ? undefined : { pathLength: 0, opacity: 0 }}
            whileInView={prefersReducedMotion ? undefined : { pathLength: 1, opacity: 0.5 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
          />
          <motion.path
            d={lakeCowichanBranch}
            fill="none"
            stroke="var(--water-light)"
            strokeWidth={1.75}
            strokeLinecap="round"
            initial={prefersReducedMotion ? undefined : { pathLength: 0, opacity: 0 }}
            whileInView={prefersReducedMotion ? undefined : { pathLength: 1, opacity: 0.5 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
          />
        </svg>

        {areas.map((area) => {
          const pos = positions[area.slug];
          if (!pos) return null;
          const isSelected = area.slug === selectedSlug;
          const isHome = area.slug === "duncan";
          return (
            <button
              key={area.slug}
              type="button"
              onClick={() => setSelectedSlug(area.slug)}
              className="group absolute flex -translate-x-1/2 -translate-y-1/2 cursor-pointer flex-col items-center gap-2"
              style={{ left: pct(pos.x, VIEW_W), top: pct(pos.y, VIEW_H) }}
              aria-pressed={isSelected}
            >
              <span className="relative flex items-center justify-center">
                {isHome && (
                  <span className="absolute h-8 w-8 animate-ping rounded-full bg-brass/30" aria-hidden="true" />
                )}
                <span
                  className={cn(
                    "relative flex items-center justify-center rounded-full border-2 transition-all duration-300",
                    isHome ? "h-5 w-5" : "h-3.5 w-3.5",
                    isSelected
                      ? "border-brass bg-brass scale-110"
                      : "border-water-light bg-deep group-hover:border-brass-light"
                  )}
                />
              </span>
              <span
                className={cn(
                  "rounded-full px-2.5 py-1 text-[0.65rem] font-semibold tracking-wide whitespace-nowrap uppercase backdrop-blur-sm transition-colors",
                  isSelected ? "bg-brass text-deep" : "bg-deep/60 text-mist/80 group-hover:text-mist"
                )}
              >
                {area.name}
              </span>
            </button>
          );
        })}
      </div>

      <motion.div
        key={selected.slug}
        initial={prefersReducedMotion ? undefined : { opacity: 0, y: 10 }}
        animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="rounded-sm border border-mist/15 bg-mist/[0.04] p-6"
      >
        <p className="flex items-center gap-2 text-xs font-semibold tracking-widest text-brass-light uppercase">
          <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
          {selected.region}
        </p>
        <h3 className="mt-2 font-display text-2xl font-semibold text-mist">{selected.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-mist/60">{selected.blurb}</p>
        <p className="mt-4 flex items-center gap-1.5 text-xs font-medium tracking-wide text-water-light uppercase">
          <Clock className="h-3.5 w-3.5" aria-hidden="true" />
          {selected.responseTime}
        </p>
        <ul className="mt-4 flex flex-wrap gap-1.5">
          {selected.neighborhoods.map((n) => (
            <li key={n} className="rounded-full border border-mist/15 px-2.5 py-1 text-xs text-mist/55">
              {n}
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}
