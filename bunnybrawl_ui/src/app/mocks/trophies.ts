// Trophy-shelf items for the dashboard-shelf variant.
import type { IconName } from "../_comp/Icon";
import type { NeonColor } from "../_comp/neon";

export type MockTrophy = {
  name: string;
  icon: IconName;
  color: NeonColor;
  got: boolean;
};

export const mockTrophies: MockTrophy[] = [
  { name: "First Win",     icon: "sword",  color: "cyan",    got: true },
  { name: "5-Streak",      icon: "flame",  color: "magenta", got: true },
  { name: "Algebra Ace",   icon: "target", color: "gold",    got: true },
  { name: "Speed Demon",   icon: "bolt",   color: "lime",    got: true },
  { name: "Centurion",     icon: "shield", color: "violet",  got: true },
  { name: "Sharpshooter",  icon: "target", color: "cyan",    got: true },
  { name: "Comeback",      icon: "up",     color: "gold",    got: true },
  { name: "Night Owl",     icon: "moon",   color: "violet",  got: true },
  { name: "Perfect Round", icon: "spark",  color: "magenta", got: false },
  { name: "Diamond",       icon: "crown",  color: "cyan",    got: false },
  { name: "Marathon",      icon: "clock",  color: "gold",    got: false },
  { name: "Bookworm",      icon: "book",   color: "lime",    got: false },
  { name: "Duelist",       icon: "sword",  color: "violet",  got: false },
  { name: "MVP",           icon: "medal",  color: "magenta", got: false },
  { name: "Legend",        icon: "trophy", color: "gold",    got: false },
  { name: "???",           icon: "plus",   color: "muted",   got: false },
];
