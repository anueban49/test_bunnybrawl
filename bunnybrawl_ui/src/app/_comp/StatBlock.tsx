// StatBlock — single KPI tile (label + big value + optional sub-line).
import type { NeonColor } from "./neon";

type Props = {
  label: string;
  value: string | number;
  accent?: Exclude<NeonColor, "muted">;
  sub?: string;
};

const VALUE_COLOR: Record<Exclude<NeonColor, "muted">, string> = {
  cyan:    "text-(--neon-cyan)    [text-shadow:0_0_14px_rgba(94,246,255,.4)]",
  magenta: "text-(--neon-magenta) [text-shadow:0_0_14px_rgba(255,79,216,.4)]",
  gold:    "text-(--neon-gold)    [text-shadow:0_0_14px_rgba(255,209,102,.4)]",
  lime:    "text-(--neon-lime)    [text-shadow:0_0_14px_rgba(182,255,110,.4)]",
  violet:  "text-(--neon-violet)  [text-shadow:0_0_14px_rgba(159,123,255,.4)]",
};

function StatBlock({ label, value, accent = "cyan", sub }: Props) {
  return (
    <div className="glass px-4 py-3.5 min-w-0">
      <div className="font-pixel-mini text-[9px] tracking-[.15em] text-(--text-mute) uppercase">
        {label}
      </div>
      <div className={`font-bold text-[28px] tracking-[-0.02em] mt-1 ${VALUE_COLOR[accent]}`}>
        {value}
      </div>
      {sub && <div className="text-xs text-(--text-dim) mt-0.5">{sub}</div>}
    </div>
  );
}

export default StatBlock;
