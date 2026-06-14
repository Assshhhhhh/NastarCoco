export type TeamMember = {
  name: string;
  role: string;
  group: "nastar" | "cocoffee" | "operations";
};

export const TEAM: TeamMember[] = [
  // Nastar Coco Lab
  { name: "Nikolas", role: "Master Baker", group: "nastar" },
  { name: "Nita", role: "Baker", group: "nastar" },
  { name: "Yanti", role: "Assistant Nastar Coco", group: "nastar" },

  // Cocoffee Bar
  { name: "Fabian", role: "Cocoffee Specialist", group: "cocoffee" },
  { name: "Sandy", role: "Barista", group: "cocoffee" },
  { name: "Elis", role: "Administration", group: "cocoffee" },

  // Operations Crew
  { name: "Jim", role: "Logistics", group: "operations" },
  { name: "Gani", role: "Assistant Logistics", group: "operations" },
  { name: "Karin", role: "General Assistant", group: "operations" },
  { name: "Eko", role: "General Assistant", group: "operations" },
];

export const GROUP_LABELS: Record<TeamMember["group"], string> = {
  nastar: "Nastar Coco Lab",
  cocoffee: "Cocoffee Bar",
  operations: "Operations Crew",
};

export const GROUP_LABELS_EN = GROUP_LABELS;
