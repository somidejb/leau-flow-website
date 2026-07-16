"use client";

import { useFormContext } from "react-hook-form";
import { projectTypes, type QuoteFormValues } from "@/lib/quote-schema";
import { cn } from "@/lib/utils";

export function StepProjectType() {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext<QuoteFormValues>();
  const selected = watch("projectType");

  return (
    <fieldset>
      <legend className="font-display text-xl font-semibold text-deep sm:text-2xl">
        What&apos;s going on?
      </legend>
      <p className="mt-1 text-sm text-slate">Pick whichever is closest — we&apos;ll narrow it down on the call.</p>

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {projectTypes.map((type) => (
          <label
            key={type.value}
            className={cn(
              "flex cursor-pointer flex-col gap-1 rounded-sm border p-4 transition-colors",
              selected === type.value
                ? "border-brass bg-brass-light/20"
                : "border-border hover:border-deep/30"
            )}
          >
            <input
              type="radio"
              value={type.value}
              className="sr-only"
              {...register("projectType")}
            />
            <span className="font-semibold text-deep">{type.label}</span>
            <span className="text-sm text-slate">{type.detail}</span>
          </label>
        ))}
      </div>
      {errors.projectType && (
        <p className="mt-3 text-sm text-alert" role="alert">
          {errors.projectType.message}
        </p>
      )}
    </fieldset>
  );
}
