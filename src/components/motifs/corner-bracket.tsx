import { cn } from "@/lib/utils";

export function CornerBrackets({
  className,
  tone = "mist",
}: {
  className?: string;
  tone?: "mist" | "deep";
}) {
  const color = tone === "mist" ? "border-mist/50" : "border-deep/30";
  return (
    <div className={cn("pointer-events-none absolute inset-4 sm:inset-6", className)} aria-hidden="true">
      <span className={cn("absolute top-0 left-0 h-6 w-6 border-t-2 border-l-2", color)} />
      <span className={cn("absolute top-0 right-0 h-6 w-6 border-t-2 border-r-2", color)} />
      <span className={cn("absolute bottom-0 left-0 h-6 w-6 border-b-2 border-l-2", color)} />
      <span className={cn("absolute bottom-0 right-0 h-6 w-6 border-b-2 border-r-2", color)} />
    </div>
  );
}
