// Global ranking roster — used by leaderboard screen (podium + list).
import type { AvatarConfig } from "../_comp/types";

export type LeaderboardEntry = {
  rank: number;
  name: string;
  handle: string;
  xp: number;
  wins: number;
  acc: number;
  you?: boolean;
  avatar: AvatarConfig;
};

export const leaderboardPlayers: LeaderboardEntry[] = [
  { rank: 1,  name: "NEON_NOVA",    handle: "@neon_nova",    xp: 48230, wins: 312, acc: 91, avatar: { hair: "mohawk", hairColor: "#ff4fd8", outfit: "jacket", outfitColor: "#5ef6ff", accessory: "visor",   effect: "flame" } },
  { rank: 2,  name: "PIXEL_WRAITH", handle: "@pixel_wraith", xp: 44120, wins: 289, acc: 88, avatar: { hair: "long",   hairColor: "#9f7bff", outfit: "robe",   outfitColor: "#ffd166", accessory: "crown"   } },
  { rank: 3,  name: "QUIZZARD_99",  handle: "@quizzard_99",  xp: 41860, wins: 271, acc: 87, avatar: { hair: "spike",  hairColor: "#ffd166", outfit: "hoodie", outfitColor: "#ff4fd8", accessory: "glasses" } },
  { rank: 4,  name: "ZENITH_OWL",   handle: "@zenith_owl",   xp: 39200, wins: 258, acc: 85, avatar: { hair: "bob",    hairColor: "#5ef6ff", outfit: "tee",    outfitColor: "#9f7bff" } },
  { rank: 5,  name: "ASHRAM_K",     handle: "@ashram.k",     xp: 37480, wins: 241, acc: 83, avatar: { hair: "buzz",   hairColor: "#1a1024", outfit: "jacket", outfitColor: "#b6ff6e" } },
  { rank: 6,  name: "RIO_FLARE",    handle: "@rioflare",     xp: 35100, wins: 233, acc: 82, avatar: { hair: "mohawk", hairColor: "#ff9566", outfit: "tee",    outfitColor: "#ff4fd8", effect: "flame" } },
  { rank: 7,  name: "MIKA_SOL",     handle: "@mikasol",      xp: 33720, wins: 224, acc: 81, avatar: { hair: "long",   hairColor: "#ffd166", outfit: "robe",   outfitColor: "#9f7bff" } },
  { rank: 8,  name: "YUI_HART",     handle: "@yui_hart",     xp: 32010, wins: 219, acc: 80, avatar: { hair: "bob",    hairColor: "#1a1024", outfit: "hoodie", outfitColor: "#5ef6ff", accessory: "headset" } },
  { rank: 9,  name: "KAI (YOU)",    handle: "@kai_q",        xp: 29840, wins: 47,  acc: 82, you: true, avatar: { hair: "spike", hairColor: "#ffd166", outfit: "hoodie", outfitColor: "#ff4fd8", accessory: "glasses" } },
  { rank: 10, name: "DAN_BRAVE",    handle: "@danbrave",     xp: 28500, wins: 205, acc: 79, avatar: { hair: "buzz",   hairColor: "#9f7bff", outfit: "jacket", outfitColor: "#ffd166" } },
];
