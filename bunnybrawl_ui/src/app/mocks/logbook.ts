// Saved study-note entries shown on the Logbook screen.
import type { NeonColor } from "../_comp/neon";

export type Scribble = { text: string; x: string; y: string; rot: number; color?: string };
export type LogbookPage = {
  heading: string;
  subheading?: string;
  paragraphs?: string[];
  bullets?: string[];
  scribbles?: Scribble[];
};

export type LogbookEntry = {
  id: number;
  title: string;
  subject: string;
  date: string;
  color: NeonColor;
  words: number;
  tag: string;
  content?: LogbookPage;
};

export const logbookEntries: LogbookEntry[] = [
  {
    id: 0,
    title: "Cellular Respiration",
    subject: "AP Biology",
    date: "Apr 21, 2026",
    color: "magenta",
    words: 412,
    tag: "Exam prep",
    content: {
      heading: "Cellular Respiration",
      subheading: "How cells turn food into usable energy",
      paragraphs: [
        "The mitochondrion is a double-membrane organelle that most eukaryotic cells rely on. It generates most of the cell's ATP through oxidative phosphorylation.",
        "Inner membrane folds = cristae. More cristae = more surface area = more ETC reactions = more ATP.",
        "Stages: glycolysis (cytoplasm) → pyruvate oxidation → Krebs cycle → electron transport chain + chemiosmosis.",
      ],
      bullets: [
        "Net ATP from 1 glucose (aerobic): ~30–32",
        "O₂ = final electron acceptor in ETC",
        "NADH and FADH₂ = electron carriers",
        "Endosymbiotic theory: mitochondria evolved from ancient bacteria",
      ],
      scribbles: [
        { text: 'ATP = "energy currency"', x: "74%", y: "25%", rot: -4 },
        { text: "MEMORIZE THIS!",         x: "68%", y: "60%", rot: 6, color: "var(--neon-magenta)" },
      ],
    },
  },
  { id: 1, title: "Systems of Equations",       subject: "Algebra II",    date: "Apr 19, 2026", color: "cyan",    words: 288, tag: "Homework"    },
  { id: 2, title: "Causes of WWI",                subject: "World History", date: "Apr 17, 2026", color: "gold",    words: 196, tag: "Short notes" },
  { id: 3, title: "Photosynthesis",               subject: "AP Biology",    date: "Apr 14, 2026", color: "lime",    words: 356, tag: "Exam prep"   },
  { id: 4, title: "Shakespeare · Macbeth Act I",  subject: "English Lit",   date: "Apr 12, 2026", color: "violet",  words: 622, tag: "Annotations" },
  { id: 5, title: "Pythagorean Triples",          subject: "Geometry",      date: "Apr 10, 2026", color: "cyan",    words: 178, tag: "Quick ref"   },
];
