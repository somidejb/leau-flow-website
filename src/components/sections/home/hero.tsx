import Image from "next/image";
import { BadgeCheck, MapPin, Phone, ShieldCheck, Star } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { CornerBrackets } from "@/components/motifs/corner-bracket";
import { FlowLineDraw } from "@/components/motifs/flow-line-draw";
import { business } from "@/lib/content";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section className="relative isolate flex min-h-[88svh] items-end overflow-hidden sm:min-h-[92svh]">
      <Image
        src="https://images.unsplash.com/photo-1676210134188-4c05dd172f89?q=80&w=1920&auto=format&fit=crop"
        alt="Plumbing and heating technician at work on a residential job"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/40 to-transparent" />

      <div className="pointer-events-none absolute inset-0 opacity-60">
        <FlowLineDraw className="absolute inset-x-0 top-[38%] hidden -translate-y-1/2 lg:block" />
      </div>

      <CornerBrackets tone="paper" />

      <div className="container-page relative w-full pt-32 pb-12 sm:pt-40 sm:pb-16">
        <div className="flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-paper/20 bg-paper/5 px-3 py-1.5 text-xs font-medium text-paper/85 backdrop-blur-sm">
            <MapPin className="h-3.5 w-3.5 text-copper-light" aria-hidden="true" />
            Duncan, BC &amp; the Cowichan Valley
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-paper/20 bg-paper/5 px-3 py-1.5 text-xs font-medium text-paper/85 backdrop-blur-sm">
            <Star className="h-3.5 w-3.5 fill-copper-light text-copper-light" aria-hidden="true" />
            Serving the valley since {business.since}
          </span>
        </div>

        <h1 className="mt-8 max-w-2xl text-balance font-serif text-4xl leading-[1.08] font-semibold text-paper sm:text-5xl lg:text-6xl">
          Plumbing and gas work you don&apos;t have to think about twice.
        </h1>

        <p className="mt-6 max-w-lg text-lg leading-relaxed text-paper/75">
          Camera diagnostics before we quote. Fixed prices in writing before we start.
          Red Seal certified plumbing and SkillTradesBC certified gas work for homes
          across the Cowichan Valley.
        </p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          {/* eslint-disable-next-line @next/next/no-html-link-for-pages -- same-page hash anchor, needs native scroll */}
          <a href="/#quote" className={cn(buttonVariants({ size: "lg" }))}>
            Request a Written Quote
          </a>
          <a href={business.phoneHref} className={cn(buttonVariants({ variant: "outline-light", size: "lg" }))}>
            <Phone className="h-4 w-4 text-copper-light" aria-hidden="true" />
            Call {business.phone}
          </a>
        </div>

        <div className="mt-12 grid max-w-xl grid-cols-3 gap-6 border-t border-paper/15 pt-6">
          <div>
            <BadgeCheck className="h-4 w-4 text-copper-light" aria-hidden="true" />
            <p className="mt-2 font-serif text-lg text-paper">Red Seal</p>
            <p className="text-xs tracking-wide text-paper/50 uppercase">Certified</p>
          </div>
          <div>
            <ShieldCheck className="h-4 w-4 text-copper-light" aria-hidden="true" />
            <p className="mt-2 font-serif text-lg text-paper">{business.bbb.rating}</p>
            <p className="text-xs tracking-wide text-paper/50 uppercase">BBB Rating</p>
          </div>
          <div>
            <Star className="h-4 w-4 text-copper-light" aria-hidden="true" />
            <p className="mt-2 font-serif text-lg text-paper">Insured</p>
            <p className="text-xs tracking-wide text-paper/50 uppercase">& Certified</p>
          </div>
        </div>
      </div>
    </section>
  );
}
