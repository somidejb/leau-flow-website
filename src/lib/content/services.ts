import type { Service } from "./types";

export const services: Service[] = [
  {
    slug: "drain-repair",
    category: "plumbing",
    name: "Drain Cleaning & Repair",
    shortName: "Drain Repair",
    tagline: "Slow drains and backups, diagnosed before we cut into anything",
    summary:
      "Camera-inspected drain clearing and repair for kitchen, bathroom, and main line backups — so you know what's actually wrong before any digging starts.",
    problems: [
      "A sink or tub that drains slower every week until it stops",
      "Sewer smell or gurgling from a floor drain",
      "A main line backup that floods a basement floor drain",
      "Recurring clogs that keep coming back after DIY snaking",
    ],
    whatIncluded: [
      "Camera inspection to locate the actual blockage or pipe damage",
      "Hydro-jetting or cabling matched to what the camera shows",
      "Root intrusion and collapsed-pipe assessment on older clay lines",
      "A written explanation of what caused it and how to prevent a repeat",
    ],
    process: [
      { title: "Camera diagnosis", description: "We run a scope before recommending anything, so you're not paying to guess." },
      { title: "Written options", description: "You get a plain-language explanation and a fixed price before we start." },
      { title: "Clear and repair", description: "Jetting, cabling, or spot repair — whichever actually solves it." },
      { title: "Prevention notes", description: "We tell you what caused it, so it doesn't just come back in six months." },
    ],
    startingContext: "Most single-line clears are same-day. Main line and pipe repair work is scheduled after the camera diagnosis.",
    hero: {
      kind: "stock",
      src: "https://images.unsplash.com/photo-1613839397604-65fffe7fc3d4?q=80&w=1600&auto=format&fit=crop",
      alt: "Plumber working on a drain repair under a sink",
    },
  },
  {
    slug: "water-heater",
    category: "plumbing",
    name: "Water Heater Installation & Repair",
    shortName: "Water Heaters",
    tagline: "Tank and tankless, sized for how your household actually uses hot water",
    summary:
      "Replacement, repair, and tankless conversions — with a load calculation instead of a same-size swap, so the new unit fits how the house is actually used.",
    problems: [
      "Running out of hot water partway through back-to-back showers",
      "A tank that's rusting, leaking, or past 10–12 years old",
      "Rising energy bills from an aging, inefficient tank",
      "Wanting to reclaim closet or utility room space with a tankless unit",
    ],
    whatIncluded: [
      "Household load calculation instead of a default same-size replacement",
      "Code-compliant venting, gas line, and drain pan installation",
      "Old unit removal and disposal",
      "Manufacturer registration for full warranty coverage",
    ],
    process: [
      { title: "On-site assessment", description: "We check household hot-water demand, gas line, and venting before quoting." },
      { title: "Fixed written quote", description: "Tank or tankless, one price, before any work begins." },
      { title: "Same-day install", description: "Most straightforward swaps are done same-day so you're not without hot water long." },
      { title: "Warranty registration", description: "We register the unit so the manufacturer warranty is active from day one." },
    ],
    startingContext: "Standard tank swaps are typically same-day; tankless conversions may need a follow-up visit for gas line or venting upgrades.",
    hero: {
      kind: "stock",
      src: "https://images.unsplash.com/photo-1711654361214-43f039e7c573?q=80&w=1600&auto=format&fit=crop",
      alt: "Technician servicing a residential water heater unit",
    },
  },
  {
    slug: "bathroom-renovations",
    category: "plumbing",
    name: "Bathroom & Plumbing Renovations",
    shortName: "Bathroom Renovations",
    tagline: "The plumbing side of a bathroom reno, handled by one crew from rough-in to fixtures",
    summary:
      "Rough-in, fixture relocation, and finish plumbing for bathroom renovations — coordinated with your contractor or run as the lead trade if you need one.",
    problems: [
      "A renovation that needs a toilet, tub, or vanity moved to a new spot",
      "Old shutoff valves and supply lines that should be replaced while walls are already open",
      "A tub-to-shower conversion that needs new drain and supply positioning",
      "Fixture and faucet installation as part of a larger reno",
    ],
    whatIncluded: [
      "Rough-in plumbing for relocated or new fixtures",
      "Supply line and shutoff valve replacement behind the walls",
      "Fixture, faucet, and drain installation to finish the job",
      "Pressure testing before drywall closes back up",
    ],
    process: [
      { title: "Walkthrough & scope", description: "We confirm fixture locations and any moves before quoting." },
      { title: "Rough-in", description: "Supply and drain lines are run or relocated while walls are open." },
      { title: "Inspection point", description: "Rough-in is left accessible for inspection before it's closed up." },
      { title: "Finish plumbing", description: "Fixtures, faucets, and drains go in once tile and finishes are ready." },
    ],
    startingContext: "Quoted after an in-person or contractor walkthrough; timeline depends on the rest of the renovation schedule.",
    hero: {
      kind: "stock",
      src: "https://images.unsplash.com/photo-1628602813485-4e8b09442e98?q=80&w=1600&auto=format&fit=crop",
      alt: "Renovated bathroom with a wall-mounted vanity and freestanding tub",
    },
  },
  {
    slug: "gas-fitting",
    category: "gas",
    name: "Gas Fitting & Appliance Service",
    shortName: "Gas Fitting",
    tagline: "Gas line installation and alteration, certified by SkillTradesBC",
    summary:
      "Gas line installation, alteration, and appliance hookups for ranges, fireplaces, and outdoor appliances — done to code by a certified gas fitter.",
    problems: [
      "Adding a gas line for a new range, fireplace, or BBQ hookup",
      "Relocating a gas line as part of a kitchen or outdoor renovation",
      "A gas appliance that needs to be disconnected or reconnected safely",
      "Needing a certified gas fitter to sign off on the work for permitting",
    ],
    whatIncluded: [
      "Gas line installation and alteration to code",
      "Appliance hookup and shutoff valve installation",
      "Pressure testing before an appliance is connected",
      "Documentation for permitting where required",
    ],
    process: [
      { title: "Scope the run", description: "We confirm the appliance, distance, and any wall or floor penetrations needed." },
      { title: "Written quote", description: "One fixed price before work starts." },
      { title: "Install & pressure test", description: "The line is run and pressure-tested before anything is connected." },
      { title: "Appliance hookup", description: "The appliance is connected and checked for a safe, working install." },
    ],
    startingContext: "Most straightforward hookups are quoted after a short on-site look; line relocations may take longer depending on access.",
    hero: {
      kind: "stock",
      src: "https://images.unsplash.com/photo-1610000805105-329dfdfd10b4?q=80&w=1600&auto=format&fit=crop",
      alt: "Gas meter and yellow gas piping on the exterior of a building",
    },
  },
  {
    slug: "well-pumps",
    category: "plumbing",
    name: "Water Well Pumps",
    shortName: "Well Pumps",
    tagline: "Well pump service for the rural and acreage properties a city plumber won't touch",
    summary:
      "Installation, repair, and troubleshooting for residential water well pumps and pressure systems — common across the rural parts of the Cowichan Valley.",
    problems: [
      "Low or inconsistent water pressure from a well system",
      "A pump that's short-cycling or won't kick on at all",
      "No water at all after a power outage or pump failure",
      "Buying an acreage property and wanting the well system inspected first",
    ],
    whatIncluded: [
      "Pump and pressure tank diagnosis",
      "Pump replacement sized to the well and household demand",
      "Pressure switch and tank bladder service",
      "Basic water system inspection for property purchases",
    ],
    process: [
      { title: "Diagnose", description: "We check the pump, pressure tank, and switch before recommending a fix." },
      { title: "Written quote", description: "One price for the repair or replacement before work starts." },
      { title: "Repair or replace", description: "Straight answer on which one actually makes sense for the system's age." },
      { title: "Pressure & flow check", description: "System is tested for pressure and flow before we call the job done." },
    ],
    startingContext: "Diagnostic visits are typically same-day to next-day depending on location within the Cowichan Valley.",
    hero: {
      kind: "stock",
      src: "https://images.unsplash.com/photo-1583515108962-33be303f5b46?q=80&w=1600&auto=format&fit=crop",
      alt: "Water pump fixture in a residential yard",
    },
  },
  {
    slug: "commercial-plumbing",
    category: "plumbing",
    name: "Commercial Plumbing",
    shortName: "Commercial",
    tagline: "Plumbing service for shops, offices, and small commercial buildings",
    summary:
      "Repair, maintenance, and fixture installation for commercial spaces — scheduled around your business hours where possible.",
    problems: [
      "A washroom or kitchen fixture down at a shop or office",
      "A commercial water heater or backflow device needing service",
      "Tenant improvement plumbing for a new or renovated commercial space",
      "Needing a plumbing company that'll actually call back for a small business account",
    ],
    whatIncluded: [
      "Fixture repair and replacement for commercial washrooms and kitchens",
      "Backflow prevention and commercial water heater service",
      "Tenant improvement rough-in and finish plumbing",
      "Scheduling around business hours where the job allows it",
    ],
    process: [
      { title: "Site visit", description: "We assess the space and scope the work before quoting." },
      { title: "Written quote", description: "Fixed price and timeline before anything starts." },
      { title: "Scheduled work", description: "Work is scheduled to minimize disruption to your business." },
      { title: "Sign-off", description: "You get a clear rundown of what was done before we close the job." },
    ],
    startingContext: "Scheduling depends on scope; small repairs are often same-day to next-day.",
    hero: {
      kind: "stock",
      src: "https://images.unsplash.com/photo-1543674892-7d64d45df18b?q=80&w=1600&auto=format&fit=crop",
      alt: "Exposed mechanical piping on the exterior wall of a commercial building",
    },
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}
