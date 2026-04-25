// The currently-displayed live quiz question on the Quiz Battle screen.
export type QuizChoice = { id: string; label: string };
export type QuizQuestion = {
  text: string;
  subject: string;
  choices: QuizChoice[];
  correct: string;
};

export const liveQuizQuestion: QuizQuestion = {
  text: "Which organelle is responsible for producing ATP in eukaryotic cells?",
  subject: "AP Biology · Cellular Respiration",
  choices: [
    { id: "a", label: "Ribosome" },
    { id: "b", label: "Mitochondrion" },
    { id: "c", label: "Golgi apparatus" },
    { id: "d", label: "Endoplasmic reticulum" },
  ],
  correct: "b",
};
