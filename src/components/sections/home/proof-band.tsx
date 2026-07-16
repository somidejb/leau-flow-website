import Image from "next/image";
import { BadgeCheck } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { business } from "@/lib/content";

const credentials = [
  "Red Seal Certified Plumber",
  "SkillTradesBC Gas Certified",
  "BBB A+ Accredited",
  business.licensing.liabilityInsurance,
  `Serving the Valley Since ${business.since}`,
  "Fixed Prices, In Writing",
];

const loop = [...credentials, ...credentials];

export function ProofBand() {
  return (
    <section id="trust" className="relative isolate overflow-hidden bg-deep py-14 text-mist sm:py-16">
      <Image
        src="https://images.unsplash.com/photo-1600691792786-efd17f5e2250?q=80&w=1920&auto=format&fit=crop"
        alt=""
        fill
        aria-hidden="true"
        sizes="100vw"
        className="object-cover opacity-15"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-deep via-deep/90 to-deep/80" />

      <div className="relative">
        <Reveal>
          <p className="container-page text-center text-xs font-semibold tracking-[0.2em] text-water-light uppercase">
            Why homeowners trust us
          </p>
        </Reveal>

        <div
          className="mt-8 flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]"
          role="list"
          aria-label="Credentials and trust signals"
        >
          <div className="animate-marquee flex shrink-0 items-center gap-10 pr-10 motion-reduce:animate-none">
            {loop.map((credential, i) => (
              <div key={`${credential}-${i}`} role="listitem" className="flex shrink-0 items-center gap-2.5 whitespace-nowrap">
                <BadgeCheck className="h-4 w-4 shrink-0 text-brass-light" aria-hidden="true" />
                <span className="font-display text-lg font-medium text-mist/90 sm:text-xl">{credential}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
