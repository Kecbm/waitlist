export type Position = {
  slug: string;
  title: string;
  tag: string;
  location: string;
  description: string;
};

const SHARED = {
  location: "remote",
  description:
    "We\u2019re building the world\u2019s first Creator Casino: a creator-powered gaming network where influencers launch Rooms, run drops/missions, and monetize Originals built on top of certified game engines\u2014powered by an AI Host layer and programmable incentives...",
};

function slugify(value: string): string {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

const RAW: Array<Pick<Position, "title" | "tag">> = [
  { title: "Sportsbook Manager", tag: "Product" },
  { title: "Casino Manager", tag: "Product" },
  { title: "Game Economic Designer", tag: "Engineering" },
  { title: "Senior Game Engineer", tag: "Engineering" },
  { title: "Senior Frontend Engineer", tag: "Engineering" },
  { title: "Senior QA Engineer", tag: "Engineering" },
  { title: "Senior DevOps/Infrastructure Engineer", tag: "Engineering" },
  { title: "Creator Growth Architect", tag: "Marketing" },
  {
    title: "Game Math Engineer (Certified Core + Configurable Overlays)",
    tag: "Engineering",
  },
  {
    title: "Blockchain / Crypto Engineer (Session-Based Settlement)",
    tag: "Engineering",
  },
  {
    title: "ML Engineer (Creator Affinity + Incentive Optimization)",
    tag: "Engineering",
  },
  {
    title: "Ops Analyst (Room Economics + Creator Cohorts)",
    tag: "AI & Data",
  },
  {
    title: "Payment / Treasury Specialist (Session Velocity)",
    tag: "AI & Data",
  },
  {
    title: "Fraud / Risk Specialist (Creator-Driven Abuse Patterns)",
    tag: "AI & Data",
  },
  { title: "CRM Specialist (Creator-Synced Lifecycle)", tag: "Marketing" },
  { title: "Community Manager + Customer Support", tag: "Marketing" },
  { title: "Head of CX & Community Management", tag: "Marketing" },
  { title: "Head of VIPs", tag: "Marketing" },
  { title: "Senior Backend Engineer", tag: "Engineering" },
];

export const POSITIONS: Position[] = RAW.map((p) => ({
  ...p,
  ...SHARED,
  slug: slugify(p.title),
}));

export function findPositionBySlug(slug: string): Position | undefined {
  return POSITIONS.find((p) => p.slug === slug);
}
