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
                state === "done" && "border-copper bg-copper text-paper",
                state === "current" && "border-copper text-copper-dark",
                state === "upcoming" && "border-ink/20 text-ink/40"
              )}
              aria-current={state === "current" ? "step" : undefined}
            >
              {state === "done" ? <Check className="h-3.5 w-3.5" aria-hidden="true" /> : index + 1}
            </span>
            <span
              className={cn(
                "hidden text-sm font-medium sm:block",
                state === "upcoming" ? "text-ink/40" : "text-ink"
              )}
            >
              {label}
            </span>
            {index < steps.length - 1 && (
              <span className={cn("h-px flex-1", state === "done" ? "bg-copper" : "bg-ink/15")} aria-hidden="true" />
            )}
          </li>
        );
      })}
    </ol>
  );
}
