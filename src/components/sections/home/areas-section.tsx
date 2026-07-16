import { Clock } from "lucide-react";
import { PhotoFrame } from "@/components/photo-placeholder";
import { SectionHeading } from "@/components/section-heading";
import { serviceAreas } from "@/lib/content";

export function AreasSection() {
  return (
    <section id="areas" className="bg-ink py-16 text-paper sm:py-20">
      <div className="container-page">
        <SectionHeading
          eyebrow="Where we work"
          title="Duncan and the Cowichan Valley, not a call center dispatching to whoever's closest"
          tone="paper"
        />

        <div className="mt-12 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-5">
          {serviceAreas.map((area) => (
            <div key={area.slug}>
              <PhotoFrame photo={area.hero} className="aspect-[4/3] rounded-sm" sizes="(min-width: 1024px) 20vw, 45vw" />
              <h3 className="mt-3 font-serif text-lg font-semibold text-paper">{area.name}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-paper/60">{area.blurb}</p>
              <p className="mt-2 flex items-center gap-1.5 text-xs tracking-wide text-copper-light uppercase">
                <Clock className="h-3 w-3" aria-hidden="true" />
                {area.responseTime}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
