// Season goals shown in the right column of the shelf dashboard.
export type MockGoal = {
  title: string;
  sub: string;
  pct: number;
};

export const mockGoals: MockGoal[] = [
  { title: "Reach Diamond tier", sub: "3 wins to go",    pct: 0.82 },
  { title: "Master 5 subjects",  sub: "2 / 5",           pct: 0.4  },
  { title: "30-day streak",      sub: "Day 7",           pct: 0.23 },
  { title: "Top 100 global",     sub: "Currently #214",  pct: 0.57 },
];
