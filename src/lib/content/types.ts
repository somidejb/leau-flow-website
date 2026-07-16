// Shared content types for the business config layer.
//
// Photo fields use a tagged union so the *evidentiary vs. atmospheric*
// distinction is enforced by the type system, not just convention:
// - "stock": tasteful mood/context photography. OK to ship as-is because it
//   never claims to depict this company's own people, jobs, or premises.
// - "placeholder": stands in for a photo that makes a specific credibility
//   claim (a completed job, a team member, a before/after). Renders through
//   <PhotoPlaceholder> with a visible art-direction caption instead of a
//   borrowed photo pretending to be real — swap for the real photo before
//   launch.
export type Photo =
  | { kind: "stock"; src: string; alt: string }
  | { kind: "placeholder"; caption: string; aspect?: "square" | "portrait" | "landscape" | "wide" };

export type ServiceCategory = "plumbing" | "gas";

export interface ProcessStep {
  title: string;
  description: string;
}

export interface Service {
  slug: string;
  category: ServiceCategory;
  name: string;
  shortName: string;
  tagline: string;
  summary: string;
  problems: string[];
  whatIncluded: string[];
  process: ProcessStep[];
  startingContext: string;
  hero: Photo;
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  serviceAreaSlug: string;
  serviceSlug?: string;
  rating: number;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  credentials: string[];
  photo: Photo;
}

export interface ServiceArea {
  slug: string;
  name: string;
  region: string;
  blurb: string;
  responseTime: string;
  neighborhoods: string[];
  hero: Photo;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: "general" | "pricing" | "scheduling" | "service";
}

export interface NavLink {
  label: string;
  href: string;
}
