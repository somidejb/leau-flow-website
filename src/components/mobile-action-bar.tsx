import { Phone, FileText } from "lucide-react";
import { business } from "@/lib/content";

export function MobileActionBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex border-t border-deep/10 bg-mist/95 backdrop-blur-md md:hidden">
      <a
        href={business.phoneHref}
        className="flex flex-1 cursor-pointer items-center justify-center gap-2 py-3.5 text-sm font-semibold text-deep"
      >
        <Phone className="h-4 w-4 text-water" aria-hidden="true" />
        Call Now
      </a>
      <div className="w-px bg-deep/10" />
      {/* eslint-disable-next-line @next/next/no-html-link-for-pages -- same-page hash anchor, needs native scroll */}
      <a
        href="/#quote"
        className="flex flex-1 cursor-pointer items-center justify-center gap-2 bg-brass py-3.5 text-sm font-semibold text-deep"
      >
        <FileText className="h-4 w-4" aria-hidden="true" />
        Get a Quote
      </a>
    </div>
  );
}
