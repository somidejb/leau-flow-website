import { ChevronDown } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { faqs, type FaqItem } from "@/lib/content";

const categoryLabels: Record<FaqItem["category"], string> = {
  general: "General",
  pricing: "Pricing",
  scheduling: "Scheduling",
  service: "Licensing & service",
};

export function FaqSection() {
  const categories = Array.from(new Set(faqs.map((f) => f.category)));

  return (
    <section id="faq" className="bg-paper-2 py-16 sm:py-20">
      <div className="container-page max-w-3xl">
        <SectionHeading eyebrow="FAQ" title="Answers before you have to ask" />

        <div className="mt-10">
          {categories.map((category) => (
            <div key={category} className="mb-10">
              <h3 className="mb-4 text-xs font-semibold tracking-widest text-copper-dark uppercase">
                {categoryLabels[category]}
              </h3>
              <div className="divide-y divide-border border-t border-b border-border">
                {faqs
                  .filter((faq) => faq.category === category)
                  .map((faq) => (
                    <details key={faq.question} className="group py-4">
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium text-ink [&::-webkit-details-marker]:hidden">
                        {faq.question}
                        <ChevronDown
                          className="h-4 w-4 shrink-0 text-copper transition-transform group-open:rotate-180"
                          aria-hidden="true"
                        />
                      </summary>
                      <p className="mt-3 leading-relaxed text-slate">{faq.answer}</p>
                    </details>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
