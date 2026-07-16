import { cn } from "@/lib/utils";

/**
 * Static schematic "flow line" motif — an abstracted pipe/heat-flow diagram
 * (right-angle runs + joint markers), not a literal water droplet or wave.
 * Used as a section-seam divider so the brand's own name ("Flow") becomes
 * the connective visual thread running through the page.
 */
export function FlowLineDivider({
  className,
  tone = "water",
}: {
  className?: string;
  tone?: "water" | "brass" | "mist";
}) {
  const stroke = tone === "water" ? "var(--water)" : tone === "brass" ? "var(--brass)" : "var(--mist)";
  return (
    <svg
      viewBox="0 0 1200 80"
      preserveAspectRatio="none"
      className={cn("h-10 w-full", className)}
      aria-hidden="true"
    >
      <path
        d="M0,40 L360,40 L400,10 L800,10 L840,40 L1200,40"
        fill="none"
        stroke={stroke}
        strokeOpacity={0.4}
        strokeWidth={1.5}
      />
      <circle cx="400" cy="10" r="4" fill={stroke} fillOpacity={0.55} />
      <circle cx="840" cy="40" r="4" fill={stroke} fillOpacity={0.55} />
      <rect x="592" y="2" width="16" height="16" fill="none" stroke={stroke} strokeOpacity={0.55} strokeWidth={1.5} transform="rotate(45 600 10)" />
    </svg>
  );
}
