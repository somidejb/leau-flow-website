import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { ValleyMap } from "@/components/motifs/valley-map";
import { serviceAreas } from "@/lib/content";

export function AreasSection() {
  return (
    <section id="areas" className="bg-deep py-16 text-mist sm:py-20">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            eyebrow="Where we work"
            title="Duncan and the Cowichan Valley"
            description="Select a town on the line to see response time and the neighborhoods we cover there."
            tone="mist"
          />
        </Reveal>

        <Reveal delay={0.1} className="mt-14">
          <ValleyMap areas={serviceAreas} />
        </Reveal>
      </div>
    </section>
  );
}
