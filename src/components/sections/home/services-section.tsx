"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { AlertCircle, CheckCircle2, ChevronDown, Compass } from "lucide-react";
import { PhotoFrame } from "@/components/photo-placeholder";
import { SectionHeading } from "@/components/section-heading";
import { Reveal, RevealGroup, RevealItem } from "@/components/reveal";
import { services } from "@/lib/content";
import { cn } from "@/lib/utils";

const symptoms = [
  { label: "A drain that won't clear", slug: "drain-repair" },
  { label: "No hot water", slug: "water-heater" },
  { label: "Planning a bathroom reno", slug: "bathroom-renovations" },
  { label: "Smell gas, or need a line run", slug: "gas-fitting" },
  { label: "Low pressure from a well", slug: "well-pumps" },
  { label: "Shop or office plumbing", slug: "commercial-plumbing" },
];

function SymptomRouter({ onSelect }: { onSelect: (slug: string) => void }) {
  return (
    <div className="mt-10 rounded-sm border border-border bg-mist-2 p-5 sm:p-6">
      <p className="flex items-center gap-2 text-xs font-semibold tracking-widest text-brass-dark uppercase">
        <Compass className="h-3.5 w-3.5" aria-hidden="true" />
        Not sure where to start? Tell us what&apos;s going on
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {symptoms.map((symptom) => (
          <button
            key={symptom.slug}
            type="button"
            onClick={() => onSelect(symptom.slug)}
            className="cursor-pointer rounded-full border border-deep/15 bg-mist px-3.5 py-2 text-sm text-deep/80 transition-colors duration-200 hover:border-brass hover:text-deep"
          >
            {symptom.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export function ServicesSection() {
  const [openSlug, setOpenSlug] = useState<string | null>(null);
  const cardRefs = useRef<Record<string, HTMLDivElement | null>>({});

  function handleRoute(slug: string) {
    setOpenSlug(slug);
    requestAnimationFrame(() => {
      cardRefs.current[slug]?.scrollIntoView({ behavior: "smooth", block: "center" });
    });
  }

  return (
    <section id="services" className="py-16 sm:py-20">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            eyebrow="What we do"
            title="Six services, done right the first time"
            description="Tap a service to see what's included, or tell us the symptom and we'll jump you to the right one."
          />
        </Reveal>

        <Reveal delay={0.1}>
          <SymptomRouter onSelect={handleRoute} />
        </Reveal>

        <RevealGroup className="mt-10 grid gap-8 sm:grid-cols-2">
          {services.map((service, index) => {
            const open = openSlug === service.slug;
            return (
              <RevealItem
                key={service.slug}
                className="group overflow-hidden rounded-sm border border-border bg-mist"
              >
                <div
                  ref={(el) => {
                    cardRefs.current[service.slug] = el;
                  }}
                  className="scroll-mt-28"
                >
                  <div className="overflow-hidden">
                    <PhotoFrame
                      photo={service.hero}
                      className="aspect-[16/10] transition-transform duration-500 group-hover:scale-110"
                      sizes="(min-width: 1024px) 40vw, 90vw"
                    />
                  </div>
                  <button
                    type="button"
                    onClick={() => setOpenSlug(open ? null : service.slug)}
                    aria-expanded={open}
                    className="flex w-full cursor-pointer items-start gap-4 p-5 text-left"
                  >
                    <span className="mt-0.5 hidden font-mono text-xs text-brass-dark/70 tabular-nums sm:block">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="flex-1">
                      <h3 className="font-display text-lg font-semibold text-deep sm:text-xl">{service.shortName}</h3>
                      <p className="mt-0.5 text-sm text-slate sm:text-base">{service.tagline}</p>
                    </div>
                    <ChevronDown
                      className={cn(
                        "mt-1 h-5 w-5 shrink-0 text-deep/30 transition-transform duration-300",
                        open && "rotate-180"
                      )}
                      aria-hidden="true"
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="grid gap-6 border-t border-border px-5 pt-5 pb-6 sm:grid-cols-2">
                          <div>
                            <h4 className="text-xs font-semibold tracking-widest text-brass-dark uppercase">
                              Signs you need this
                            </h4>
                            <ul className="mt-3 space-y-2.5">
                              {service.problems.map((problem) => (
                                <li key={problem} className="flex items-start gap-2.5 text-sm text-slate">
                                  <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-brass" aria-hidden="true" />
                                  {problem}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="text-xs font-semibold tracking-widest text-brass-dark uppercase">
                              What&apos;s included
                            </h4>
                            <ul className="mt-3 space-y-2.5">
                              {service.whatIncluded.map((included) => (
                                <li key={included} className="flex items-start gap-2.5 text-sm text-slate">
                                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-moss" aria-hidden="true" />
                                  {included}
                                </li>
                              ))}
                            </ul>
                            <p className="mt-4 text-sm text-slate/80 italic">{service.startingContext}</p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
