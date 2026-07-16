import { JsonLd } from "@/components/json-ld";
import { Hero } from "@/components/sections/home/hero";
import { PositioningStatement } from "@/components/sections/home/positioning-statement";
import { ServicesSection } from "@/components/sections/home/services-section";
import { TestimonialsBand } from "@/components/sections/home/testimonials-band";
import { AreasSection } from "@/components/sections/home/areas-section";
import { AboutSection } from "@/components/sections/home/about-section";
import { FaqSection } from "@/components/sections/home/faq-section";
import { QuoteSection } from "@/components/sections/home/quote-section";
import { business, serviceAreas } from "@/lib/content";

export default function Home() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Plumber",
          name: business.name,
          telephone: business.phone,
          email: business.email,
          address: {
            "@type": "PostalAddress",
            streetAddress: business.address,
            addressLocality: "Duncan",
            addressRegion: "BC",
            addressCountry: "CA",
          },
          areaServed: serviceAreas.map((area) => area.name),
          url: business.siteUrl,
        }}
      />
      <Hero />
      <PositioningStatement />
      <ServicesSection />
      <TestimonialsBand />
      <AreasSection />
      <AboutSection />
      <FaqSection />
      <QuoteSection />
    </>
  );
}
