export type Navigators =
  | "landing"
  | "dashboard"
  | "quiz"
  | "solo"
  | "logbook"
  | "leaderboard"
  | "avatar"
  | "result";

export type Skill = "foresight" | "dash-skip" | "fortify";
export type User = {
  id: string;
  username: string;
  email: string;
  gameData: GameData;
  joinedAt: Date;
  lastSeen: Date;
};
export type Page = {
  index: number;
  content: string;
  createdAt: Date;
  updatedAt: Date;
};
export type Book = {
  title: string;
  pages: number;
  createdAt: Date;
  updatedAt: Date;
  tags: string[]; //tags can be fixed value, for now, string.
  content: Page[];
  subject: string[]; //subject will e vague, general type, so it can belong to multiple
  essenceData?: AIanalysedData;
};
export type AIanalysedData = {
  src: Book;
  id: string;
  assignedTitle: string;
  generatedQuiz?: Quiz;
  shared: boolean;
};
export type Almanac = {
  book: Book[];
  createdAt: Date;
};
export type RankType = "brawler" | "warrior" | "champion" | "master" | "legend";
export type GameData = {
  id: string;
  level: number;
  xp: number;
  abilities: Skill[];
  logbook: Almanac[];
  coins: number;
  rank: RankType;
};

export type Quiz = {
  id: string;
  difficulty: "easy" | "hard" | "medium";
  topic: "mixed" | "fixed"; //basically indicates that users can duel with fixed OR mixed topics of subjects.
  questionNum: 2 | 3 | 4 | 5 | 6;
  questions: string[];
  answer: string;
};
