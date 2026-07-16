import { FlowLineDivider } from "@/components/motifs/flow-line";

export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="border-b border-border bg-paper-2 pt-14 pb-14 sm:pt-20 sm:pb-16">
      <div className="container-page">
        <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-copper-dark uppercase">{eyebrow}</p>
        <h1 className="max-w-2xl text-balance font-serif text-4xl leading-[1.1] font-semibold text-ink sm:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-xl text-base leading-relaxed text-slate sm:text-lg">{description}</p>
        )}
        <FlowLineDivider className="mt-8 max-w-xs" />
      </div>
    </section>
  );
}
