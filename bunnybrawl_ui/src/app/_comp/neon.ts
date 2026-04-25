// Shared neon palette — one source of truth replaces the colorMap literals
// that used to be copy-pasted into StatBlock, QuickPlayTile, Trophy, etc.

export type NeonColor = "cyan" | "magenta" | "gold" | "lime" | "violet" | "muted";

type NeonEntry = { v: string; rgb: string };

export const NEON: Record<NeonColor, NeonEntry> = {
  cyan:    { v: "var(--neon-cyan)",    rgb: "94,246,255"  },
  magenta: { v: "var(--neon-magenta)", rgb: "255,79,216"  },
  gold:    { v: "var(--neon-gold)",    rgb: "255,209,102" },
  lime:    { v: "var(--neon-lime)",    rgb: "182,255,110" },
  violet:  { v: "var(--neon-violet)",  rgb: "159,123,255" },
  muted:   { v: "var(--text-mute)",    rgb: "136,136,136" },
};

export const neonVar  = (c: NeonColor) => NEON[c].v;
export const neonRgba = (c: NeonColor, a = 1) => `rgba(${NEON[c].rgb},${a})`;
export const neonGlow = (c: NeonColor, spread = 14, a = 0.4) =>
  `0 0 ${spread}px ${neonRgba(c, a)}`;
