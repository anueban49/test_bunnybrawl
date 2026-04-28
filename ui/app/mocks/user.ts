// The signed-in player used for dashboard + avatar previews.
import type { AvatarConfig } from "../_comp/types";

export type MockUser = {
  name: string;
  handle: string;
  title: string;
  level: number;
  xp: number;
  xpMax: number;
  streak: number;
  avatar: AvatarConfig;
};

export const mockUser: MockUser = {
  name: "Alex Chen",
  handle: "alex_brawler",
  title: "Quiz Master",
  level: 12,
  xp: 2450,
  xpMax: 3000,
  streak: 7,
  avatar: {
    hair: "spike",
    hairColor: "#5ef6ff",
    skin: "#f2c7a5",
    outfit: "hoodie",
    outfitColor: "#ff4fd8",
    accessory: "glasses",
    effect: "sparkle",
  },
};
