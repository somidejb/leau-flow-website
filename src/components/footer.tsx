import Link from "next/link";
import { MapPin, Phone, ShieldCheck, Star } from "lucide-react";
import { FacebookIcon } from "@/components/icons/social";
import { Logo } from "@/components/logo";
import { FlowLineDivider } from "@/components/motifs/flow-line";
import { business, serviceAreas, primaryNav } from "@/lib/content";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 bg-ink text-paper/85">
      <FlowLineDivider tone="paper" className="opacity-60" />
      <div className="container-page grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-1">
          <Logo tone="paper" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-paper/60">{business.description}</p>
          <div className="mt-5 flex gap-3">
            <a
              href={business.social.facebook}
              aria-label="L'Eau Flow on Facebook"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-paper/20 text-paper/70 transition-colors hover:border-paper/50 hover:text-paper"
            >
              <FacebookIcon className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-xs font-semibold tracking-widest text-copper-light uppercase">Company</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {primaryNav.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-paper/70 transition-colors hover:text-paper">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold tracking-widest text-copper-light uppercase">Service Areas</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {serviceAreas.map((area) => (
              <li key={area.slug}>
                {/* eslint-disable-next-line @next/next/no-html-link-for-pages -- same-page hash anchor, needs native scroll */}
                <a href="/#areas" className="text-paper/70 transition-colors hover:text-paper">
                  {area.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold tracking-widest text-copper-light uppercase">Get In Touch</h3>
          <ul className="mt-4 space-y-3 text-sm text-paper/70">
            <li className="flex items-start gap-2.5">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-copper" aria-hidden="true" />
              <a href={business.phoneHref} className="hover:text-paper">{business.phone}</a>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-copper" aria-hidden="true" />
              <span>{business.address}</span>
            </li>
            <li className="flex items-start gap-2.5">
              <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-copper" aria-hidden="true" />
              <span>Red Seal certified &amp; {business.licensing.liabilityInsurance.toLowerCase()}</span>
            </li>
            <li className="flex items-start gap-2.5">
              <Star className="mt-0.5 h-4 w-4 shrink-0 text-copper" aria-hidden="true" />
              <span>{business.warranty.headline}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-paper/10 py-6">
        <div className="container-page flex flex-col items-center justify-between gap-3 text-xs text-paper/50 sm:flex-row">
          <p>
            © {year} {business.legalName}. All rights reserved.
          </p>
          <div className="flex gap-5">
            <Link href="/privacy" className="hover:text-paper/80">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-paper/80">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
