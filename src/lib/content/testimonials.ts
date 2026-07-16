import type { Testimonial } from "./types";

// No verified customer review text is available for this business yet — the
// BBB profile shows "1 Review" but the content isn't visible without
// scraping, and no review quotes were supplied. Rather than invent
// plausible-sounding quotes, this stays empty; TestimonialsBand renders real
// trust signals (BBB rating, certifications) instead. Replace with real,
// sourced reviews once available.
export const testimonials: Testimonial[] = [];
