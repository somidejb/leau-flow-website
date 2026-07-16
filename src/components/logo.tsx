import { cn } from "@/lib/utils";

/**
 * Recreation of the real L'Eau Flow mark: a pipe-elbow icon (doubling as the
 * "L" in L'Eau) with a water-drop accent, paired with a bold black wordmark.
 * The source logo file isn't accessible to this tool, so this is a faithful
 * from-scratch redraw of its shapes and colors, not a traced copy.
 */
function PipeElbowMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 44 44" className={className} aria-hidden="true">
      <rect x="9" y="3" width="14" height="6" rx="2" fill="#e4e5e6" stroke="#171717" strokeWidth="1.6" />
      <rect x="11" y="7" width="10" height="18" rx="2" fill="#e4e5e6" stroke="#171717" strokeWidth="1.6" />
      <rect x="11" y="19" width="24" height="10" rx="2" fill="#e4e5e6" stroke="#171717" strokeWidth="1.6" />
      <rect x="31" y="17" width="7" height="14" rx="2" fill="#e4e5e6" stroke="#171717" strokeWidth="1.6" />
      <path
        d="M27 2 C27 2 31 8 31 11 A4 4 0 1 1 23 11 C23 8 27 2 27 2 Z"
        fill="#2a8fa6"
      />
    </svg>
  );
}

export function Logo({ className, tone = "deep" }: { className?: string; tone?: "deep" | "mist" }) {
  const textColor = tone === "deep" ? "text-deep" : "text-mist";
  const taglineColor = tone === "deep" ? "text-deep/70" : "text-mist/70";

  return (
    <span className={cn("inline-flex items-center gap-2", className)}>
      <PipeElbowMark className="h-8 w-8 shrink-0" />
      <span className="leading-none">
        <span className={cn("block font-sans text-lg font-black tracking-tight uppercase", textColor)}>
          L&apos;Eau Flow
        </span>
        <span className={cn("mt-0.5 block font-sans text-[0.6rem] font-bold tracking-widest uppercase", taglineColor)}>
          Plumbing &amp; Heating
        </span>
      </span>
    </span>
  );
}
