import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { business } from "@/lib/content";

export const metadata: Metadata = {
  title: "Terms of Service",
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <>
      <PageHeader eyebrow="Legal" title="Terms of Service" />
      <section className="py-16 sm:py-20">
        <div className="container-page max-w-2xl space-y-8 text-slate">
          <p className="rounded-sm border border-copper/30 bg-copper-light/10 p-4 text-sm text-ink">
            TEMPLATE NOTE: placeholder terms for a Canadian home-service
            contractor — not legal advice. Have a lawyer review before
            publishing, particularly the warranty, cancellation, and
            limitation-of-liability sections.
          </p>

          <div>
            <h2 className="font-serif text-xl font-semibold text-ink">Estimates &amp; pricing</h2>
            <p className="mt-3 leading-relaxed">
              Written estimates are valid for 30 days from the date issued.
              Prices are fixed once work begins, except where the scope
              changes at the customer&apos;s request or where conditions
              discovered once work has started (for example, unforeseen
              structural or code issues) require additional work — in which
              case we&apos;ll provide a written change order for approval
              before proceeding.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl font-semibold text-ink">Scheduling &amp; cancellation</h2>
            <p className="mt-3 leading-relaxed">
              We ask for at least 24 hours&apos; notice to reschedule or cancel
              a booked appointment. Repeated late cancellations may be subject
              to a service call fee.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl font-semibold text-ink">Workmanship warranty</h2>
            <p className="mt-3 leading-relaxed">{business.warranty.detail}</p>
            <p className="mt-3 leading-relaxed">
              This warranty covers labor performed by {business.name} and does
              not cover damage from misuse, unrelated plumbing or electrical
              work performed by others, or normal wear and tear. Manufacturer
              warranties on parts and equipment are separate and are passed
              through according to the manufacturer&apos;s terms.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl font-semibold text-ink">Payment</h2>
            <p className="mt-3 leading-relaxed">
              Payment is due on completion of work unless otherwise agreed in
              writing.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl font-semibold text-ink">Limitation of liability</h2>
            <p className="mt-3 leading-relaxed">
              TEMPLATE NOTE: insert jurisdiction-appropriate limitation of
              liability language here in consultation with a lawyer and your
              insurer.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl font-semibold text-ink">Contact</h2>
            <p className="mt-3 leading-relaxed">
              Questions about these terms can be sent to {business.email} or{" "}
              {business.phone}.
            </p>
          </div>

          <p className="text-sm text-slate/70">Last updated: TEMPLATE — set on launch.</p>
        </div>
      </section>
    </>
  );
}
