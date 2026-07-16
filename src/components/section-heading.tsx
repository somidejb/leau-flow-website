import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "ink",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "ink" | "paper";
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
            tone === "ink" ? "text-copper-dark" : "text-copper-light",
            align === "center" && "justify-center"
          )}
        >
          <span className="h-px w-6 bg-current" aria-hidden="true" />
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "text-balance font-serif text-3xl leading-[1.15] font-semibold sm:text-4xl",
          tone === "ink" ? "text-ink" : "text-paper"
        )}
      >
        {title}
      </h2>
      {description && (
        <p className={cn("mt-4 text-base leading-relaxed", tone === "ink" ? "text-slate" : "text-paper/70")}>
          {description}
        </p>
      )}
    </div>
  );
}
