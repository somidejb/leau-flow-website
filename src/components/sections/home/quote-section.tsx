import { Clock, Phone, ShieldCheck } from "lucide-react";
import { QuoteForm } from "@/components/quote/quote-form";
import { Reveal } from "@/components/reveal";
import { business } from "@/lib/content";

const sidebarItems = [
  {
    icon: Phone,
    label: "Prefer to talk it through?",
    body: (
      <a href={business.phoneHref} className="mt-1 block font-display text-lg font-semibold text-brass-dark">
        {business.phone}
      </a>
    ),
  },
  {
    icon: Clock,
    label: "Response time",
    body: <p className="mt-1 text-sm text-slate">Callback within one business day — call directly if it&apos;s urgent.</p>,
  },
  {
    icon: ShieldCheck,
    label: "No pressure, in writing",
    body: <p className="mt-1 text-sm text-slate">A fixed price on paper before any work starts.</p>,
  },
];

export function QuoteSection() {
  return (
    <section id="quote" className="border-t border-border py-16 sm:py-20">
      <div className="container-page grid gap-12 lg:grid-cols-[1fr_320px]">
        <Reveal>
          <p className="text-xs font-semibold tracking-widest text-brass-dark uppercase">Request a quote</p>
          <h2 className="mt-2 max-w-lg text-balance font-display text-3xl font-semibold text-deep sm:text-4xl">
            Two minutes now, not a back-and-forth later.
          </h2>

          <div className="mt-8 max-w-2xl rounded-sm border border-border p-6 sm:p-8">
            <QuoteForm />
          </div>
        </Reveal>

        <Reveal direction="left" delay={0.1}>
          <aside className="divide-y divide-border rounded-sm border border-border bg-mist-2">
            {sidebarItems.map(({ icon: Icon, label, body }) => (
              <div key={label} className="p-5">
                <p className="flex items-center gap-2 text-sm font-semibold text-deep">
                  <Icon className="h-4 w-4 text-water" aria-hidden="true" />
                  {label}
                </p>
                {body}
              </div>
            ))}
          </aside>
        </Reveal>
      </div>
    </section>
  );
}
