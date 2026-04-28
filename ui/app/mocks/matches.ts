// Recent battle results rendered as rows on the dashboard.
export type MockMatch = {
  result: "W" | "L";
  opp: string;
  subject: string;
  score: string;
  xp: string;
};

export const mockRecentMatches: MockMatch[] = [
  { result: "W", opp: "pixel_wraith", subject: "Algebra II",   score: "8–5", xp: "+34" },
  { result: "W", opp: "quizzard_99",  subject: "AP Biology",   score: "7–6", xp: "+28" },
  { result: "L", opp: "neon_nova",    subject: "World History", score: "4–8", xp: "+6"  },
  { result: "W", opp: "zenith_owl",   subject: "Chemistry",    score: "9–3", xp: "+42" },
];
