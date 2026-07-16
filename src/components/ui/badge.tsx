import { type HTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider",
  {
    variants: {
      variant: {
        brass: "bg-brass-light/50 text-brass-dark",
        water: "bg-water-light/30 text-water-dark",
        deep: "bg-deep text-mist",
        outline: "border border-deep/20 text-deep/80",
        "outline-light": "border border-mist/30 text-mist",
      },
    },
    defaultVariants: {
      variant: "outline",
    },
  }
);

export interface BadgeProps
  extends HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />;
}
