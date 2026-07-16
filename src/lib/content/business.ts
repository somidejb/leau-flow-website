// REAL BUSINESS: L'Eau Flow Plumbing & Heating, Duncan, BC (Cowichan Valley,
// Vancouver Island). Sourced from the company's Facebook page and BBB profile
// (listed there as "L'Eau Flow Plumbing & Gas"). Only verified facts are
// included below — anything not confirmed by those sources is marked TODO
// rather than invented. Confirm all TODOs with the owner before launch.
export const business = {
  name: "L'Eau Flow Plumbing & Heating",
  legalName: "L'Eau Flow Plumbing & Heating",
  shortName: "L'Eau Flow",
  owner: "David O'Neill-Fortier",
  ownerTitle: "Owner",
  tagline: "Plumbing and gas work Cowichan Valley homeowners don't have to think about twice",
  description:
    "Red Seal certified plumbing and gas contractor serving Duncan and the Cowichan Valley — drain cleaning, water heaters, gas fitting, well pumps, and plumbing renovations with upfront written estimates.",
  since: 2019,
  phone: "(250) 589-1894",
  phoneHref: "tel:+12505891894",
  email: "leauflowplumbing@gmail.com",
  // TODO: confirm production domain before deploy — not yet observed on FB/BBB.
  siteUrl: "https://www.leauflowplumbing.ca",
  address: "272 Coronation Ave, Duncan, BC V9L 2T2",
  addressShort: "Duncan, BC",
  // TODO: confirm with owner — no dedicated 24/7 emergency line found on FB/BBB.
  emergencyAvailable: false,
  hours: [
    // TODO: confirm actual hours — not listed on FB/BBB. Shown as a general line instead of specific hours until confirmed.
  ],
  warranty: {
    headline: "Workmanship backed by our name",
    detail:
      "David stands behind every job personally — if something isn't right, call and it gets fixed.",
  },
  licensing: {
    plumbingLicense: "Red Seal Certified Plumber",
    // Exact BBB wording: "certified by SkillTradesBC to install and alter several gas systems."
    gasfittingLicense: "Certified by SkillTradesBC to install and alter several gas systems",
    // TODO: confirm WorkSafeBC standing directly with owner — not stated on FB/BBB.
    liabilityInsurance: "Insured",
  },
  bbb: {
    rating: "A+",
    accreditedSince: 2026,
    yearsInBusiness: 7,
  },
  social: {
    facebook: "https://www.facebook.com/leauflow/",
  },
} as const;
