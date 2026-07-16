import { Clock, Phone, ShieldCheck } from "lucide-react";
import { QuoteForm } from "@/components/quote/quote-form";
import { business } from "@/lib/content";

export function QuoteSection() {
  return (
    <section id="quote" className="border-t border-border py-16 sm:py-20">
      <div className="container-page grid gap-12 lg:grid-cols-[1fr_320px]">
        <div>
          <p className="text-xs font-semibold tracking-widest text-copper-dark uppercase">Request a quote</p>
          <h2 className="mt-2 max-w-lg text-balance font-serif text-3xl font-semibold text-ink sm:text-4xl">
            Two minutes now saves a back-and-forth later.
          </h2>
          <p className="mt-3 max-w-lg text-slate">
            Answer a few questions and we&apos;ll follow up with a real technician
            — not an automated reply — to confirm scope and next steps.
          </p>

          <div className="mt-10 max-w-2xl rounded-sm border border-border p-6 sm:p-8">
            <QuoteForm />
          </div>
        </div>

        <aside className="space-y-5">
          <div className="rounded-sm border border-border bg-paper-2 p-5">
            <p className="flex items-center gap-2 text-sm font-semibold text-ink">
              <Phone className="h-4 w-4 text-copper" aria-hidden="true" />
              Prefer to talk it through?
            </p>
            <p className="mt-2 text-sm text-slate">
              Call us directly, especially for anything urgent.
            </p>
            <a href={business.phoneHref} className="mt-3 block font-serif text-lg font-semibold text-copper-dark">
              {business.phone}
            </a>
          </div>

          <div className="rounded-sm border border-border p-5">
            <p className="flex items-center gap-2 text-sm font-semibold text-ink">
              <Clock className="h-4 w-4 text-copper" aria-hidden="true" />
              Response time
            </p>
            <p className="mt-2 text-sm text-slate">
              Most requests get a callback within one business day. For anything urgent, call directly instead of waiting on a form.
            </p>
          </div>

          <div className="rounded-sm border border-border p-5">
            <p className="flex items-center gap-2 text-sm font-semibold text-ink">
              <ShieldCheck className="h-4 w-4 text-copper" aria-hidden="true" />
              No pressure, in writing
            </p>
            <p className="mt-2 text-sm text-slate">
              Every estimate is a fixed price on paper before any work starts — never a verbal number that changes later.
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}
