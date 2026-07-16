import type { TeamMember } from "./types";

// Only one verified real person is known for this business (David
// O'Neill-Fortier, from the company's Facebook page). His photo is a
// placeholder, not a stock photo standing in for him — swap for a real
// photo before launch.
export const team: TeamMember[] = [
  {
    id: "david-oneill-fortier",
    name: "David O'Neill-Fortier",
    role: "Owner",
    bio: "Red Seal certified plumbing and SkillTradesBC certified gas work for the Cowichan Valley.",
    credentials: ["Red Seal Certified Plumber", "SkillTradesBC Gas Certified", "Insured"],
    photo: {
      kind: "placeholder",
      caption: "Photo",
      aspect: "portrait",
    },
  },
];
