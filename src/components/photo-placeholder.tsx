import Image from "next/image";
import { Camera } from "lucide-react";
import type { Photo } from "@/lib/content";
import { cn } from "@/lib/utils";

const aspectClass: Record<NonNullable<Extract<Photo, { kind: "placeholder" }>["aspect"]>, string> = {
  square: "aspect-square",
  portrait: "aspect-[3/4]",
  landscape: "aspect-[4/3]",
  wide: "aspect-[16/10]",
};

export function PhotoFrame({
  photo,
  className,
  sizes = "100vw",
  priority = false,
  compact = false,
}: {
  photo: Photo;
  className?: string;
  sizes?: string;
  priority?: boolean;
  /** Compact mode: icon only, caption moves to title attr. For small/avatar-sized frames. */
  compact?: boolean;
}) {
  if (photo.kind === "stock") {
    return (
      <div className={cn("relative overflow-hidden", className)}>
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover"
        />
      </div>
    );
  }

  if (compact) {
    return (
      <div
        title={photo.caption}
        className={cn(
          "relative flex items-center justify-center overflow-hidden border border-dashed border-deep/25 bg-deep-2",
          photo.aspect ? aspectClass[photo.aspect] : undefined,
          className
        )}
      >
        <Camera className="h-5 w-5 text-water-light/70" aria-hidden="true" />
        <span className="sr-only">Photo placeholder: {photo.caption}</span>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "relative flex flex-col items-center justify-center overflow-hidden border border-dashed border-deep/25 bg-deep-2 text-center",
        photo.aspect ? aspectClass[photo.aspect] : undefined,
        className
      )}
    >
      <span className="absolute top-3 left-3 h-3 w-3 border-t border-l border-water-light/60" aria-hidden="true" />
      <span className="absolute top-3 right-3 h-3 w-3 border-t border-r border-water-light/60" aria-hidden="true" />
      <span className="absolute bottom-3 left-3 h-3 w-3 border-b border-l border-water-light/60" aria-hidden="true" />
      <span className="absolute bottom-3 right-3 h-3 w-3 border-b border-r border-water-light/60" aria-hidden="true" />
      <Camera className="h-6 w-6 text-water-light/70" aria-hidden="true" />
      <p className="mt-3 max-w-[85%] text-[0.65rem] leading-snug tracking-wide text-mist/60 uppercase">
        Photo placeholder
      </p>
      <p className="mt-1 max-w-[80%] text-xs leading-snug text-mist/85">{photo.caption}</p>
    </div>
  );
}
