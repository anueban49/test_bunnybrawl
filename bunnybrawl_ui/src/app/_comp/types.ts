// Shared component-level types. Screen-level nav types live in ../types/index.ts.
import type { Navigators } from "../types";

export type NavProps = {
  onNav: (to: Navigators) => void;
};

export type HairStyle = "spike" | "bob" | "buzz" | "long" | "mohawk";
export type OutfitStyle = "hoodie" | "tee" | "jacket" | "robe";
export type Accessory = "none" | "glasses" | "visor" | "headset" | "crown";
export type Effect = "none" | "sparkle" | "flame" | "electric";

export type AvatarConfig = {
  hair?: HairStyle;
  hairColor?: string;
  skin?: string;
  outfit?: OutfitStyle;
  outfitColor?: string;
  accessory?: Accessory;
  effect?: Effect;
  bg?: string;
};

export type BunnyExpression = "ready" | "cheer" | "run" | "rest" | "think";
