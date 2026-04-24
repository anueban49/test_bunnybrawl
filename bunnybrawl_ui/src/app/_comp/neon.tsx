// neon.js — shared neon color palette used across the UI.
// Having one source-of-truth kills the duplicated `colorMap` literals
// that were copy-pasted into StatBlock, QuickPlayTile, Trophy, PodiumCard, etc.

export const NEON = {
  cyan:    { v: 'var(--neon-cyan)',    rgb: '94,246,255'  },
  magenta: { v: 'var(--neon-magenta)', rgb: '255,79,216'  },
  gold:    { v: 'var(--neon-gold)',    rgb: '255,209,102' },
  lime:    { v: 'var(--neon-lime)',    rgb: '182,255,110' },
  violet:  { v: 'var(--neon-violet)',  rgb: '159,123,255' },
  muted:   { v: 'var(--text-mute)',    rgb: '136,136,136' },
};

export const neonVar    = (c) => (NEON[c] || NEON.cyan).v;
export const neonRgba   = (c, a = 1) => `rgba(${(NEON[c] || NEON.cyan).rgb},${a})`;
export const neonGlow   = (c, spread = 14, a = 0.4) => `0 0 ${spread}px ${neonRgba(c, a)}`;
export const neonShadow = (c, spread = 14, a = 0.4) => `0 0 ${spread}px ${neonRgba(c, a)}`;
