import { AlertCircle, CheckCircle2, ChevronDown } from "lucide-react";
import { PhotoFrame } from "@/components/photo-placeholder";
import { SectionHeading } from "@/components/section-heading";
import { services } from "@/lib/content";

export function ServicesSection() {
  return (
    <section id="services" className="py-16 sm:py-20">
      <div className="container-page">
        <SectionHeading
          eyebrow="What we do"
          title="Six services, one company that gets it right the first time"
          description="Plumbing and gas work, done to code and backed in writing. Tap a service for what it actually includes."
        />

        <div className="mt-10 grid gap-8 sm:grid-cols-2">
          {services.map((service, index) => (
            <div key={service.slug} className="overflow-hidden rounded-sm border border-border bg-paper">
              <PhotoFrame
                photo={service.hero}
                className="aspect-[16/10]"
                sizes="(min-width: 1024px) 40vw, 90vw"
              />
              <details className="group">
                <summary className="flex cursor-pointer list-none items-start gap-4 p-5 [&::-webkit-details-marker]:hidden">
                  <span className="mt-0.5 hidden font-mono text-xs text-copper-dark/70 tabular-nums sm:block">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="flex-1">
                    <h3 className="font-serif text-lg font-semibold text-ink sm:text-xl">{service.shortName}</h3>
                    <p className="mt-0.5 text-sm text-slate sm:text-base">{service.tagline}</p>
                  </div>
                  <ChevronDown
                    className="mt-1 h-5 w-5 shrink-0 text-ink/30 transition-transform group-open:rotate-180"
                    aria-hidden="true"
                  />
                </summary>

                <div className="grid gap-6 border-t border-border px-5 pt-5 pb-6 sm:grid-cols-2">
                  <div>
                    <h4 className="text-xs font-semibold tracking-widest text-copper-dark uppercase">
                      Signs you need this
                    </h4>
                    <ul className="mt-3 space-y-2.5">
                      {service.problems.map((problem) => (
                        <li key={problem} className="flex items-start gap-2.5 text-sm text-slate">
                          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-copper" aria-hidden="true" />
                          {problem}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold tracking-widest text-copper-dark uppercase">
                      What&apos;s included
                    </h4>
                    <ul className="mt-3 space-y-2.5">
                      {service.whatIncluded.map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-sm text-slate">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-moss" aria-hidden="true" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <p className="mt-4 text-sm text-slate/80 italic">{service.startingContext}</p>
                  </div>
                </div>
              </details>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
