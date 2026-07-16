import { PhotoFrame } from "@/components/photo-placeholder";
import { CornerBrackets } from "@/components/motifs/corner-bracket";
import { Reveal } from "@/components/reveal";
import { team } from "@/lib/content";

export function AboutSection() {
  const owner = team[0];

  return (
    <section id="about" className="py-16 sm:py-20">
      <div className="container-page">
        <div className="grid gap-10 sm:grid-cols-[280px_1fr] sm:items-center sm:gap-14">
          <Reveal direction="right">
            <div className="relative">
              <PhotoFrame
                photo={owner.photo}
                className="aspect-[3/4] rounded-sm"
                sizes="(min-width: 640px) 280px, 70vw"
              />
              <CornerBrackets tone="mist" className="inset-2" />
            </div>
          </Reveal>
          <Reveal direction="left" delay={0.1}>
            <p className="text-xs font-semibold tracking-[0.2em] text-brass-dark uppercase">About</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-deep sm:text-4xl">{owner.name}</h2>
            <p className="mt-1 text-sm font-medium text-brass-dark">{owner.role}</p>
            <p className="mt-4 max-w-md text-base leading-relaxed text-slate">{owner.bio}</p>

            <dl className="mt-6 max-w-md divide-y divide-border rounded-sm border border-border">
              {owner.credentials.map((credential, index) => (
                <div key={credential} className="flex items-center gap-3 px-4 py-3">
                  <dt className="font-mono text-xs text-water tabular-nums">
                    {String(index + 1).padStart(2, "0")}
                  </dt>
                  <dd className="text-sm font-medium text-deep">{credential}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
