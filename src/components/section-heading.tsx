import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "deep",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "deep" | "mist";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            "mb-3 flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase",
            tone === "deep" ? "text-brass-dark" : "text-brass-light",
            align === "center" && "justify-center"
          )}
        >
          <span className="h-px w-6 bg-current" aria-hidden="true" />
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "text-balance font-display text-3xl leading-[1.15] font-semibold sm:text-4xl",
          tone === "deep" ? "text-deep" : "text-mist"
        )}
      >
        {title}
      </h2>
      {description && (
        <p className={cn("mt-4 text-base leading-relaxed", tone === "deep" ? "text-slate" : "text-mist/70")}>
          {description}
        </p>
      )}
    </div>
  );
}
