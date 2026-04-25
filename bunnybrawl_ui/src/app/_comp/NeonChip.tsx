// NeonChip — pill-shaped neon badge used for labels like "LV 12" or "STREAK".
import type { ReactNode } from "react";
import type { NeonColor } from "./neon";

type Props = {
  children: ReactNode;
  color?: NeonColor;
  className?: string;
};

// One Tailwind class per palette entry — picked at runtime via lookup.
const STYLES: Record<NeonColor, string> = {
  cyan:    "bg-(--neon-cyan)/10    border-(--neon-cyan)/50    text-(--neon-cyan)    shadow-[0_0_12px_rgba(94,246,255,.35)]",
  magenta: "bg-(--neon-magenta)/10 border-(--neon-magenta)/50 text-(--neon-magenta) shadow-[0_0_12px_rgba(255,79,216,.35)]",
  gold:    "bg-(--neon-gold)/10    border-(--neon-gold)/55    text-(--neon-gold)    shadow-[0_0_12px_rgba(255,209,102,.3)]",
  lime:    "bg-(--neon-lime)/10    border-(--neon-lime)/50    text-(--neon-lime)    shadow-[0_0_10px_rgba(182,255,110,.3)]",
  violet:  "bg-(--neon-violet)/10  border-(--neon-violet)/50  text-(--neon-violet)  shadow-[0_0_10px_rgba(159,123,255,.3)]",
  muted:   "bg-white/[.04] border-(--border) text-(--text-dim)",
};

function NeonChip({ children, color = "cyan", className = "" }: Props) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 font-pixel-mini text-[9px] tracking-[.15em] uppercase px-2.5 py-1.5 rounded-full border ${STYLES[color]} ${className}`.trim()}
    >
      {children}
    </span>
  );
}

export default NeonChip;
