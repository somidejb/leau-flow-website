import type { ServiceArea } from "./types";

export const serviceAreas: ServiceArea[] = [
  {
    slug: "duncan",
    name: "Duncan",
    region: "Home base — City of Totems",
    blurb:
      "Our home base. Downtown Duncan's older homes mean galvanized and copper supply lines are still common alongside newer builds heading up toward Mount Tzouhalem.",
    responseTime: "Same-day for most calls booked before 1 PM",
    neighborhoods: ["Downtown Duncan", "Drinkwater", "Tzouhalem", "Quamichan Lake"],
    hero: {
      kind: "stock",
      src: "https://images.unsplash.com/photo-1719945939225-ff1224d097df?q=80&w=1600&auto=format&fit=crop",
      alt: "Aerial view of a forested coastline on Vancouver Island",
    },
  },
  {
    slug: "north-cowichan",
    name: "North Cowichan",
    region: "Coastal municipality around Duncan",
    blurb:
      "A spread-out municipality of coastal communities from Crofton to Maple Bay — a lot of these properties run on private wells or older municipal lines.",
    responseTime: "Same-day to next-day, depending on call volume",
    neighborhoods: ["Maple Bay", "Crofton", "South End", "Averill Creek"],
    hero: {
      kind: "stock",
      src: "https://images.unsplash.com/photo-1779111716973-ac4bd164bb41?q=80&w=1600&auto=format&fit=crop",
      alt: "Homes tucked into a misty forested hillside on the coast",
    },
  },
  {
    slug: "lake-cowichan",
    name: "Lake Cowichan",
    region: "West of Duncan",
    blurb:
      "Cabins and full-time homes around the lake — many running on well water and septic systems that need plumbing built for that setup, not a city grid.",
    responseTime: "Next-day for most calls",
    neighborhoods: ["Youbou", "Honeymoon Bay", "Downtown Lake Cowichan"],
    hero: {
      kind: "stock",
      src: "https://images.unsplash.com/photo-1758250899745-c2bbd225a110?q=80&w=1600&auto=format&fit=crop",
      alt: "Lakeside cabin surrounded by evergreen forest at dusk",
    },
  },
  {
    slug: "chemainus",
    name: "Chemainus",
    region: "South of Duncan",
    blurb:
      "Known for its murals and its mix of older village homes downtown alongside newer development up the hill.",
    responseTime: "Same-day to next-day, depending on call volume",
    neighborhoods: ["Chemainus Village", "Waterwheel Park area", "Chemainus Road corridor"],
    hero: {
      kind: "stock",
      src: "https://images.unsplash.com/photo-1775747259088-11edc25eee58?q=80&w=1600&auto=format&fit=crop",
      alt: "Small coastal town main street lined with shops",
    },
  },
  {
    slug: "ladysmith",
    name: "Ladysmith",
    region: "North of Duncan",
    blurb:
      "A harbour town on the 49th parallel with a downtown core of older character homes near the water.",
    responseTime: "Next-day for most calls",
    neighborhoods: ["Downtown Ladysmith", "Transfer Beach area", "49th Parallel area"],
    hero: {
      kind: "stock",
      src: "https://images.unsplash.com/photo-1649079245155-65941e32ac2f?q=80&w=1600&auto=format&fit=crop",
      alt: "Coastal harbour town on Vancouver Island with a pier",
    },
  },
];

export function getServiceAreaBySlug(slug: string): ServiceArea | undefined {
  return serviceAreas.find((area) => area.slug === slug);
}
