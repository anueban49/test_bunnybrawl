// Pre-generated questions used by the Solo Play screen.
export type SoloQuestion = {
  text: string;
  choices: string[];
  correct: number;
};

export const soloQuestions: SoloQuestion[] = [
  {
    text: 'The mitochondrion is often called the "powerhouse of the cell" because it produces:',
    choices: ["Glucose", "ATP", "Proteins", "DNA"],
    correct: 1,
  },
  {
    text: "Which process in mitochondria requires oxygen to produce the most ATP?",
    choices: ["Glycolysis", "Fermentation", "Oxidative phosphorylation", "Calvin cycle"],
    correct: 2,
  },
  {
    text: "What molecule carries electrons to the electron transport chain?",
    choices: ["ATP", "NADH", "Glucose", "mRNA"],
    correct: 1,
  },
];

// Pre-saved logbook entries offered as a "pick a source" list on the Solo screen.
export type SoloLogbookChoice = {
  title: string;
  date: string;
  words: number;
  active?: boolean;
};

export const soloLogbookChoices: SoloLogbookChoice[] = [
  { title: "Cellular Respiration",              date: "Apr 21", words: 412, active: true },
  { title: "Algebra II · Systems of equations", date: "Apr 19", words: 288 },
  { title: "WWI causes · short notes",          date: "Apr 17", words: 196 },
];
