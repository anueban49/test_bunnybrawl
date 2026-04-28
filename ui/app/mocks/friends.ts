// Friends currently online — shown in the dashboard side panel.
import type { AvatarConfig } from "../_comp/types";

export type MockFriend = {
  name: string;
  status: string;
  avatar: AvatarConfig;
};

export const mockFriendsOnline: MockFriend[] = [
  { name: "pixel_wraith", status: "In match · AP Bio", avatar: { hair: "bob",    hairColor: "#ff4fd8", outfit: "tee",    outfitColor: "#5ef6ff" } },
  { name: "zenith_owl",   status: "Idle",              avatar: { hair: "long",   hairColor: "#9f7bff", outfit: "robe",   outfitColor: "#ffd166", accessory: "glasses" } },
  { name: "neon_nova",    status: "Solo play",         avatar: { hair: "mohawk", hairColor: "#5ef6ff", outfit: "jacket", outfitColor: "#ff4fd8" } },
];
