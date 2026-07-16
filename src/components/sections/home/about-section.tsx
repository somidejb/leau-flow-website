import { PhotoFrame } from "@/components/photo-placeholder";
import { SectionHeading } from "@/components/section-heading";
import { business, certifications, team } from "@/lib/content";

export function AboutSection() {
  const owner = team[0];

  return (
    <section id="about" className="py-16 sm:py-20">
      <div className="container-page">
        <SectionHeading
          eyebrow="About"
          title="Red Seal certified. Built for the Cowichan Valley."
          description={`${business.owner} runs ${business.shortName} out of Duncan — Red Seal certified plumber, SkillTradesBC certified for gas work, serving homeowners across the Cowichan Valley with upfront pricing and workmanship you can rely on.`}
        />

        <div className="mt-14 grid gap-8 sm:grid-cols-[220px_1fr] sm:items-start">
          <PhotoFrame
            photo={owner.photo}
            className="aspect-[3/4] rounded-sm"
            sizes="(min-width: 640px) 220px, 60vw"
          />
          <div>
            <h3 className="font-serif text-2xl font-semibold text-ink">{owner.name}</h3>
            <p className="text-sm font-medium text-copper-dark">{owner.role}</p>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate">{owner.bio}</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {owner.credentials.map((credential) => (
                <li
                  key={credential}
                  className="rounded-full border border-copper/30 px-3 py-1 text-xs font-medium text-copper-dark"
                >
                  {credential}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 grid gap-6 border-t border-border pt-10 sm:grid-cols-3">
          {certifications.map((cert) => (
            <div key={cert.name} className="border-t-2 border-copper pt-4">
              <h3 className="font-serif text-lg font-semibold text-ink">{cert.name}</h3>
              <p className="mt-1 text-xs tracking-wide text-slate/80 uppercase">{cert.issuer}</p>
              <p className="mt-2.5 text-sm leading-relaxed text-slate">{cert.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
