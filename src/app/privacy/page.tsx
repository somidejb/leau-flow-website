import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { business } from "@/lib/content";

export const metadata: Metadata = {
  title: "Privacy Policy",
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <>
      <PageHeader eyebrow="Legal" title="Privacy Policy" />
      <section className="py-16 sm:py-20">
        <div className="container-page max-w-2xl space-y-8 text-slate">
          <p className="rounded-sm border border-brass/30 bg-brass-light/10 p-4 text-sm text-deep">
            TEMPLATE NOTE: this is placeholder policy language for a Canadian
            small business, written to be a reasonable starting point — not
            legal advice. Have it reviewed by a lawyer for PIPEDA (and, if
            applicable, provincial) compliance before publishing.
          </p>

          <div>
            <h2 className="font-display text-xl font-semibold text-deep">Information we collect</h2>
            <p className="mt-3 leading-relaxed">
              When you request a quote or contact us, we collect the information
              you provide directly: your name, address, phone number, email, and
              details about the work you need. If you attach photos to a quote
              request, we collect those images.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-deep">How we use it</h2>
            <p className="mt-3 leading-relaxed">
              We use this information to respond to your request, schedule and
              carry out work, and send estimates and invoices. We do not sell
              your personal information.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-deep">How we store and share it</h2>
            <p className="mt-3 leading-relaxed">
              Information is stored using standard industry security practices.
              We share information with third parties only where necessary to
              perform our services (for example, a supplier for warranty
              registration), or where required by law.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-deep">Your rights</h2>
            <p className="mt-3 leading-relaxed">
              You can ask us what personal information we hold about you,
              request corrections, or ask us to delete it, subject to legal
              and contractual record-keeping requirements (such as warranty
              and permit records). Contact us at {business.email} to make a
              request.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-deep">Cookies &amp; website analytics</h2>
            <p className="mt-3 leading-relaxed">
              TEMPLATE NOTE: list the specific analytics or advertising tools
              actually in use (e.g., Google Analytics, Meta Pixel) once
              configured, along with how visitors can opt out.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-deep">Contact</h2>
            <p className="mt-3 leading-relaxed">
              Questions about this policy can be sent to {business.email} or{" "}
              {business.phone}.
            </p>
          </div>

          <p className="text-sm text-slate/70">Last updated: TEMPLATE — set on launch.</p>
        </div>
      </section>
    </>
  );
}
