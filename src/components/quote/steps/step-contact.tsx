"use client";

import { useFormContext } from "react-hook-form";
import { contactMethodOptions, urgencyOptions, type QuoteFormValues } from "@/lib/quote-schema";
import { cn } from "@/lib/utils";

export function StepContact() {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext<QuoteFormValues>();
  const urgency = watch("urgency");
  const contactMethod = watch("contactMethod");

  return (
    <fieldset className="space-y-6">
      <legend className="font-display text-xl font-semibold text-deep sm:text-2xl">
        How urgent is this, and how do we reach you?
      </legend>

      <div>
        <span className="mb-1.5 block text-sm font-medium text-deep">Timing</span>
        <div className="space-y-2">
          {urgencyOptions.map((option) => (
            <label
              key={option.value}
              className={cn(
                "flex cursor-pointer items-center gap-3 rounded-sm border p-3 transition-colors",
                urgency === option.value ? "border-brass bg-brass-light/20" : "border-border hover:border-deep/30"
              )}
            >
              <input type="radio" value={option.value} className="sr-only" {...register("urgency")} />
              <span
                className={cn(
                  "h-4 w-4 shrink-0 rounded-full border-2",
                  urgency === option.value ? "border-brass bg-brass" : "border-deep/30"
                )}
                aria-hidden="true"
              />
              <span className="text-sm text-deep">{option.label}</span>
            </label>
          ))}
        </div>
        {errors.urgency && (
          <p className="mt-1.5 text-sm text-alert" role="alert">
            {errors.urgency.message}
          </p>
        )}
      </div>

      <div>
        <span className="mb-1.5 block text-sm font-medium text-deep">Preferred contact method</span>
        <div className="flex gap-2">
          {contactMethodOptions.map((option) => (
            <label
              key={option.value}
              className={cn(
                "flex-1 cursor-pointer rounded-sm border p-3 text-center text-sm font-medium transition-colors",
                contactMethod === option.value
                  ? "border-brass bg-brass-light/20 text-deep"
                  : "border-border text-slate hover:border-deep/30"
              )}
            >
              <input type="radio" value={option.value} className="sr-only" {...register("contactMethod")} />
              {option.label}
            </label>
          ))}
        </div>
        {errors.contactMethod && (
          <p className="mt-1.5 text-sm text-alert" role="alert">
            {errors.contactMethod.message}
          </p>
        )}
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-deep">
            Full name
          </label>
          <input
            id="name"
            type="text"
            autoComplete="name"
            className="h-12 w-full rounded-sm border border-border bg-mist px-3 text-deep focus:border-brass focus:ring-1 focus:ring-brass focus:outline-none"
            {...register("name")}
          />
          {errors.name && (
            <p className="mt-1.5 text-sm text-alert" role="alert">
              {errors.name.message}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-deep">
            Phone
          </label>
          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            className="h-12 w-full rounded-sm border border-border bg-mist px-3 text-deep focus:border-brass focus:ring-1 focus:ring-brass focus:outline-none"
            {...register("phone")}
          />
          {errors.phone && (
            <p className="mt-1.5 text-sm text-alert" role="alert">
              {errors.phone.message}
            </p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-deep">
          Email <span className="font-normal text-slate">(optional)</span>
        </label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          className="h-12 w-full rounded-sm border border-border bg-mist px-3 text-deep focus:border-brass focus:ring-1 focus:ring-brass focus:outline-none"
          {...register("email")}
        />
        {errors.email && (
          <p className="mt-1.5 text-sm text-alert" role="alert">
            {errors.email.message}
          </p>
        )}
      </div>
    </fieldset>
  );
}
