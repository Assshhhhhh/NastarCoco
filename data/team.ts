export type TeamMember = {
  name: string;
  role: string;
  group: "nastar" | "cocoffee" | "operations";
};

export const TEAM: TeamMember[] = [
  // Nastar Coco Team
  { name: "Nikolas", role: "Master of Baker", group: "nastar" },
  { name: "Nita", role: "Baker", group: "nastar" },
  { name: "Yanti", role: "Assistant Nastar Coco", group: "nastar" },

  // Cocoffee Team
  { name: "Fabian", role: "Cocoffee Specialty", group: "cocoffee" },
  { name: "Sandy", role: "Barista", group: "cocoffee" },
  { name: "Elis", role: "Administration", group: "cocoffee" },

  // Operations Team
  { name: "Jim", role: "Logistic", group: "operations" },
  { name: "Gani", role: "Assistant Logistic", group: "operations" },
  { name: "Karin", role: "General Assistant", group: "operations" },
  { name: "Eko", role: "General Assistant", group: "operations" },
];

export const GROUP_LABELS: Record<TeamMember["group"], string> = {
  nastar: "Nastar Coco Team",
  cocoffee: "Cocoffee Team",
  operations: "Operations Team",
};
