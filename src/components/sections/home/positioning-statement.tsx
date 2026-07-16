import { TrustBar } from "@/components/trust-bar";

const principles = [
  {
    title: "We diagnose before we quote",
    detail:
      "A camera down the drain, a pressure test on a gas line, a load calculation on the water heater — not a guess based on what usually works.",
  },
  {
    title: "The price doesn't move once we start",
    detail:
      "You get a fixed number in writing. If something changes once we're inside a wall, we stop and talk to you before doing anything not already agreed to.",
  },
  {
    title: "Certified work, not a guess",
    detail:
      "Red Seal certified plumbing and SkillTradesBC certified gas work — every job is done to code, not to whatever gets it running for now.",
  },
];

export function PositioningStatement() {
  return (
    <section className="border-b border-border py-16 sm:py-20">
      <div className="container-page">
        <p className="max-w-3xl text-balance font-serif text-2xl leading-snug text-ink sm:text-3xl">
          Most homeowners only think about their plumber when something has already
          gone wrong. We&apos;d rather be the call you make before it does — and the
          one you trust to get it right when it doesn&apos;t.
        </p>

        <TrustBar className="mt-10" />

        <div className="mt-14 grid gap-10 border-t border-border pt-10 sm:grid-cols-3">
          {principles.map((item) => (
            <div key={item.title}>
              <h3 className="font-serif text-lg font-semibold text-ink">{item.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-slate">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
