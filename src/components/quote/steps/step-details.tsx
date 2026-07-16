"use client";

import { useRef } from "react";
import { useFormContext } from "react-hook-form";
import { ImagePlus, X } from "lucide-react";
import { serviceAreas } from "@/lib/content";
import type { QuoteFormValues } from "@/lib/quote-schema";

export function StepDetails({
  photos,
  onPhotosChange,
}: {
  photos: File[];
  onPhotosChange: (photos: File[]) => void;
}) {
  const {
    register,
    formState: { errors },
  } = useFormContext<QuoteFormValues>();
  const fileInputRef = useRef<HTMLInputElement>(null);

  function handleFiles(fileList: FileList | null) {
    if (!fileList) return;
    const incoming = Array.from(fileList).filter((f) => f.type.startsWith("image/"));
    const next = [...photos, ...incoming].slice(0, 6);
    onPhotosChange(next);
    if (fileInputRef.current) fileInputRef.current.value = "";
  }

  function removePhoto(index: number) {
    onPhotosChange(photos.filter((_, i) => i !== index));
  }

  return (
    <fieldset className="space-y-6">
      <legend className="font-display text-xl font-semibold text-deep sm:text-2xl">
        Tell us a bit more
      </legend>

      <div>
        <label htmlFor="serviceArea" className="mb-1.5 block text-sm font-medium text-deep">
          Service area
        </label>
        <select
          id="serviceArea"
          className="h-12 w-full rounded-sm border border-border bg-mist px-3 text-deep focus:border-brass focus:ring-1 focus:ring-brass focus:outline-none"
          {...register("serviceArea")}
          defaultValue=""
        >
          <option value="" disabled>
            Select the area closest to you
          </option>
          {serviceAreas.map((area) => (
            <option key={area.slug} value={area.slug}>
              {area.name}
            </option>
          ))}
        </select>
        {errors.serviceArea && (
          <p className="mt-1.5 text-sm text-alert" role="alert">
            {errors.serviceArea.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="description" className="mb-1.5 block text-sm font-medium text-deep">
          What&apos;s the problem or project?
        </label>
        <textarea
          id="description"
          rows={4}
          placeholder="E.g. Kitchen sink has been draining slower each week and now smells."
          className="w-full rounded-sm border border-border bg-mist px-3 py-2.5 text-deep placeholder:text-slate/50 focus:border-brass focus:ring-1 focus:ring-brass focus:outline-none"
          {...register("description")}
        />
        {errors.description && (
          <p className="mt-1.5 text-sm text-alert" role="alert">
            {errors.description.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="address" className="mb-1.5 block text-sm font-medium text-deep">
          Address <span className="font-normal text-slate">(optional)</span>
        </label>
        <input
          id="address"
          type="text"
          placeholder="Street address, so we can plan the visit"
          className="h-12 w-full rounded-sm border border-border bg-mist px-3 text-deep placeholder:text-slate/50 focus:border-brass focus:ring-1 focus:ring-brass focus:outline-none"
          {...register("address")}
        />
      </div>

      <div>
        <span className="mb-1.5 block text-sm font-medium text-deep">
          Photos <span className="font-normal text-slate">(optional, up to 6)</span>
        </span>
        <p className="mb-2 text-xs text-slate">
          A photo of the leak, fixture, or appliance nameplate often saves a diagnostic visit.
        </p>
        <div className="flex flex-wrap gap-3">
          {photos.map((photo, index) => (
            <div key={`${photo.name}-${index}`} className="relative h-20 w-20 overflow-hidden rounded-sm border border-border">
              {/* eslint-disable-next-line @next/next/no-img-element -- transient client-side object URL preview, not an optimizable asset */}
              <img
                src={URL.createObjectURL(photo)}
                alt={`Attached photo ${index + 1}`}
                className="h-full w-full object-cover"
              />
              <button
                type="button"
                onClick={() => removePhoto(index)}
                className="absolute top-1 right-1 flex h-5 w-5 cursor-pointer items-center justify-center rounded-full bg-deep/80 text-mist"
                aria-label={`Remove photo ${index + 1}`}
              >
                <X className="h-3 w-3" />
              </button>
            </div>
          ))}
          {photos.length < 6 && (
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="flex h-20 w-20 cursor-pointer flex-col items-center justify-center gap-1 rounded-sm border border-dashed border-deep/25 text-deep/50 hover:border-brass hover:text-brass-dark"
            >
              <ImagePlus className="h-5 w-5" aria-hidden="true" />
              <span className="text-[0.65rem]">Add photo</span>
            </button>
          )}
        </div>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          multiple
          tabIndex={-1}
          aria-hidden="true"
          className="sr-only"
          onChange={(e) => handleFiles(e.target.files)}
        />
        {/* Photos are attached client-side for preview only in this template.
            In production, wire this to real object storage (Vercel Blob, S3)
            and upload on submit before — or alongside — the /api/quote POST. */}
      </div>
    </fieldset>
  );
}
