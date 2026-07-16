import type { Metadata } from "next";
import Link from "next/link";
import { Phone } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { business } from "@/lib/content";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center py-20">
      <div className="container-page max-w-lg text-center">
        <svg viewBox="0 0 200 80" className="mx-auto h-16 w-40" aria-hidden="true">
          <path d="M0,40 L80,40 L110,40" fill="none" stroke="var(--copper)" strokeOpacity={0.5} strokeWidth={2} />
          <rect x="108" y="30" width="10" height="20" fill="none" stroke="var(--copper)" strokeWidth={2} />
          <circle cx="150" cy="40" r="3" fill="var(--ink)" fillOpacity={0.3} />
          <circle cx="165" cy="40" r="3" fill="var(--ink)" fillOpacity={0.2} />
          <circle cx="180" cy="40" r="3" fill="var(--ink)" fillOpacity={0.1} />
        </svg>

        <p className="mt-6 font-mono text-sm tracking-widest text-copper-dark">404</p>
        <h1 className="mt-2 font-serif text-3xl font-semibold text-ink sm:text-4xl">
          This line dead-ends here.
        </h1>
        <p className="mt-4 text-slate">
          The page you&apos;re looking for doesn&apos;t exist, or the link&apos;s outdated.
          Let&apos;s get you back on the right pipe.
        </p>

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Link href="/" className={cn(buttonVariants({ size: "lg" }))}>
            Back to home
          </Link>
          <a href={business.phoneHref} className={cn(buttonVariants({ variant: "outline", size: "lg" }))}>
            <Phone className="h-4 w-4" aria-hidden="true" />
            {business.phone}
          </a>
        </div>

        {/* eslint-disable @next/next/no-html-link-for-pages -- same-page hash anchors, need native scroll */}
        <div className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
          <a href="/#services" className="text-copper-dark hover:underline">Services</a>
          <a href="/#areas" className="text-copper-dark hover:underline">Service Areas</a>
          <a href="/#quote" className="text-copper-dark hover:underline">Request a Quote</a>
        </div>
        {/* eslint-enable @next/next/no-html-link-for-pages */}
      </div>
    </section>
  );
}
