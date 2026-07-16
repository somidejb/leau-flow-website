"use client";

import { useEffect, useRef, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle2, Loader2, Phone } from "lucide-react";
import { quoteFormSchema, quoteStepFields, type QuoteFormValues } from "@/lib/quote-schema";
import { Button, buttonVariants } from "@/components/ui/button";
import { StepProjectType } from "@/components/quote/steps/step-project-type";
import { StepDetails } from "@/components/quote/steps/step-details";
import { StepContact } from "@/components/quote/steps/step-contact";
import { StepReview } from "@/components/quote/steps/step-review";
import { StepIndicator } from "@/components/quote/step-indicator";
import { business } from "@/lib/content";
import { cn } from "@/lib/utils";

const TOTAL_STEPS = 4;

const nextSteps = [
  "We review your request, usually within one business day.",
  "David calls or texts you back to confirm scope and, if needed, book a free on-site estimate.",
  "You get a fixed price in writing before anything is scheduled.",
];

/** Ripple rings that expand outward once, echoing a drop hitting water. */
function SuccessRipple() {
  return (
    <span className="pointer-events-none absolute inset-0 flex items-center justify-center" aria-hidden="true">
      {[0, 0.25, 0.5].map((delay) => (
        <motion.span
          key={delay}
          className="absolute h-14 w-14 rounded-full border border-water"
          initial={{ scale: 0.6, opacity: 0.6 }}
          animate={{ scale: 2.6, opacity: 0 }}
          transition={{ duration: 1.4, delay, ease: "easeOut" }}
        />
      ))}
    </span>
  );
}

export function QuoteForm() {
  const [step, setStep] = useState(0);
  const [photos, setPhotos] = useState<File[]>([]);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const topRef = useRef<HTMLDivElement>(null);

  const methods = useForm<QuoteFormValues>({
    resolver: zodResolver(quoteFormSchema),
    mode: "onTouched",
    defaultValues: {
      projectType: undefined,
      serviceArea: "",
      description: "",
      address: "",
      photoCount: 0,
      urgency: undefined,
      contactMethod: undefined,
      name: "",
      phone: "",
      email: "",
    },
  });

  useEffect(() => {
    methods.setValue("photoCount", photos.length);
  }, [photos, methods]);

  async function goNext() {
    const fields = quoteStepFields[step];
    const valid = fields.length === 0 || (await methods.trigger(fields));
    if (valid) {
      setStep((s) => Math.min(s + 1, TOTAL_STEPS - 1));
      topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  function goBack() {
    setStep((s) => Math.max(s - 1, 0));
    topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  async function onSubmit(values: QuoteFormValues) {
    setSubmitting(true);
    setSubmitError(null);
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error("Request failed");
      setSubmitted(true);
    } catch {
      setSubmitError("Something went wrong sending your request. Please call us directly, or try again.");
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="py-6 text-center">
        <span className="relative mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-moss/15">
          <SuccessRipple />
          <motion.span
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <CheckCircle2 className="h-7 w-7 text-moss" aria-hidden="true" />
          </motion.span>
        </span>
        <h3 className="mt-6 font-display text-2xl font-semibold text-deep">
          Got it — we&apos;ll be in touch shortly.
        </h3>
        <p className="mt-3 text-slate">Here&apos;s what happens from here:</p>

        <ol className="mt-6 space-y-3 text-left">
          {nextSteps.map((stepText, index) => (
            <li key={stepText} className="flex items-start gap-3 rounded-sm border border-border p-4">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-brass/40 font-mono text-xs text-brass-dark">
                {index + 1}
              </span>
              <span className="text-sm text-slate">{stepText}</span>
            </li>
          ))}
        </ol>

        <p className="mt-6 text-sm text-slate">Something urgent? Don&apos;t wait for a callback.</p>
        <a href={business.phoneHref} className={cn(buttonVariants({ variant: "outline" }), "mt-3")}>
          <Phone className="h-4 w-4" aria-hidden="true" />
          Call us: {business.phone}
        </a>
      </div>
    );
  }

  return (
    <FormProvider {...methods}>
      <div ref={topRef} className="mb-8 scroll-mt-24">
        <StepIndicator current={step} />
      </div>

      <form onSubmit={methods.handleSubmit(onSubmit)} noValidate>
        <div className={step === 0 ? "" : "hidden"}>
          <StepProjectType />
        </div>
        <div className={step === 1 ? "" : "hidden"}>
          <StepDetails photos={photos} onPhotosChange={setPhotos} />
        </div>
        <div className={step === 2 ? "" : "hidden"}>
          <StepContact />
        </div>
        <div className={step === 3 ? "" : "hidden"}>
          <StepReview photoCount={photos.length} />
        </div>

        {submitError && (
          <p className="mt-4 text-sm text-alert" role="alert">
            {submitError}
          </p>
        )}

        <div className="mt-8 flex items-center justify-between border-t border-border pt-6">
          {step > 0 ? (
            <Button type="button" variant="ghost" onClick={goBack}>
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              Back
            </Button>
          ) : (
            <span />
          )}

          {step < TOTAL_STEPS - 1 ? (
            <Button type="button" onClick={goNext}>
              Continue
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
          ) : (
            <Button type="button" disabled={submitting} onClick={methods.handleSubmit(onSubmit)}>
              {submitting && <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />}
              {submitting ? "Sending…" : "Send my request"}
            </Button>
          )}
        </div>
      </form>
    </FormProvider>
  );
}
