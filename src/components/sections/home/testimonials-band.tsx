import { BadgeCheck, ShieldCheck, Star } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { business, certifications } from "@/lib/content";

const trustPoints = [
  {
    icon: Star,
    label: `BBB ${business.bbb.rating} Rating`,
    detail: "Accredited business through the Better Business Bureau.",
  },
  {
    icon: BadgeCheck,
    label: "Red Seal Certified",
    detail: "Recognized plumbing certification across Canada.",
  },
  {
    icon: ShieldCheck,
    label: certifications[1]?.name ?? "SkillTradesBC Certified",
    detail: certifications[1]?.description ?? "Certified for gas system work.",
  },
];

export function TestimonialsBand() {
  return (
    <section id="reviews" className="py-16 sm:py-20">
      <div className="container-page">
        <SectionHeading
          eyebrow="Trust & credentials"
          title="New to online reviews — not new to the trade"
          description={`${business.shortName} is a newer name online, but the certifications behind it aren't. Here's what backs the work, plus a BBB profile you can check yourself.`}
          align="center"
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {trustPoints.map(({ icon: Icon, label, detail }) => (
            <div key={label} className="border-t-2 border-copper pt-4 text-center sm:text-left">
              <Icon className="mx-auto h-5 w-5 text-copper-dark sm:mx-0" aria-hidden="true" />
              <h3 className="mt-3 font-serif text-lg font-semibold text-ink">{label}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-slate">{detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
