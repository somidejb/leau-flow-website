import { BadgeCheck, FileCheck, ShieldCheck, Wrench } from "lucide-react";
import { business } from "@/lib/content";

const items = [
  { icon: FileCheck, label: "Fixed price, in writing" },
  { icon: ShieldCheck, label: "Red Seal certified & insured" },
  { icon: Wrench, label: business.warranty.headline },
  { icon: BadgeCheck, label: `BBB ${business.bbb.rating} Rated` },
];

export function TrustBar({ className }: { className?: string }) {
  return (
    <div className={className}>
      <ul className="grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-4">
        {items.map(({ icon: Icon, label }) => (
          <li key={label} className="flex items-center gap-2.5 text-sm font-medium text-ink/80">
            <Icon className="h-4 w-4 shrink-0 text-copper" aria-hidden="true" />
            {label}
          </li>
        ))}
      </ul>
    </div>
  );
}
