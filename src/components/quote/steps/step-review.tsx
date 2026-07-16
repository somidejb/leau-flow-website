"use client";

import { useFormContext } from "react-hook-form";
import { CheckCircle2 } from "lucide-react";
import {
  contactMethodOptions,
  projectTypes,
  urgencyOptions,
  type QuoteFormValues,
} from "@/lib/quote-schema";
import { getServiceAreaBySlug } from "@/lib/content";

const nextSteps = [
  "We review your request, usually within one business hour during working hours.",
  "A technician calls or texts you back to confirm scope and, if needed, book a free on-site estimate.",
  "You get a fixed price in writing before anything is scheduled.",
];

export function StepReview({ photoCount }: { photoCount: number }) {
  const { getValues } = useFormContext<QuoteFormValues>();
  const values = getValues();
  const area = getServiceAreaBySlug(values.serviceArea);
  const projectType = projectTypes.find((p) => p.value === values.projectType);
  const urgency = urgencyOptions.find((u) => u.value === values.urgency);
  const contactMethod = contactMethodOptions.find((c) => c.value === values.contactMethod);

  return (
    <div className="space-y-8">
      <div>
        <h2 className="font-serif text-xl font-semibold text-ink sm:text-2xl">Review your request</h2>
        <dl className="mt-4 divide-y divide-border rounded-sm border border-border">
          {[
            ["Project type", projectType?.label],
            ["Service area", area?.name],
            ["Details", values.description],
            ["Address", values.address || "—"],
            ["Photos attached", photoCount > 0 ? `${photoCount} photo(s)` : "None"],
            ["Timing", urgency?.label],
            ["Contact method", contactMethod?.label],
            ["Name", values.name],
            ["Phone", values.phone],
            ["Email", values.email || "—"],
          ].map(([label, value]) => (
            <div key={label} className="grid grid-cols-3 gap-4 px-4 py-3 text-sm">
              <dt className="text-slate">{label}</dt>
              <dd className="col-span-2 text-ink">{value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="rounded-sm bg-paper-2 p-5">
        <h3 className="text-xs font-semibold tracking-widest text-copper-dark uppercase">What happens next</h3>
        <ul className="mt-3 space-y-2.5">
          {nextSteps.map((step) => (
            <li key={step} className="flex items-start gap-2.5 text-sm text-slate">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-moss" aria-hidden="true" />
              {step}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
