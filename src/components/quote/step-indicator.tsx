import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

const steps = ["Project", "Details", "Contact", "Review"];

export function StepIndicator({ current }: { current: number }) {
  return (
    <ol className="flex items-center gap-2 sm:gap-3" aria-label="Quote request steps">
      {steps.map((label, index) => {
        const state = index < current ? "done" : index === current ? "current" : "upcoming";
        return (
          <li key={label} className="flex flex-1 items-center gap-2 sm:gap-3">
            <span
              className={cn(
                "flex h-7 w-7 shrink-0 items-center justify-center rounded-full border text-xs font-semibold",
                state === "done" && "border-brass bg-brass text-deep",
                state === "current" && "border-brass text-brass-dark",
                state === "upcoming" && "border-deep/20 text-deep/40"
              )}
              aria-current={state === "current" ? "step" : undefined}
            >
              {state === "done" ? <Check className="h-3.5 w-3.5" aria-hidden="true" /> : index + 1}
            </span>
            <span
              className={cn(
                "hidden text-sm font-medium sm:block",
                state === "upcoming" ? "text-deep/40" : "text-deep"
              )}
            >
              {label}
            </span>
            {index < steps.length - 1 && (
              <span className={cn("h-px flex-1", state === "done" ? "bg-brass" : "bg-deep/15")} aria-hidden="true" />
            )}
          </li>
        );
      })}
    </ol>
  );
}
