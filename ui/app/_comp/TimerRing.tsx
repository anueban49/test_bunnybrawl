// TimerRing — circular conic-gradient countdown (used in Quiz + Solo screens).
// Ring colour + fill percent are runtime values, passed through CSS custom
// properties so Tailwind classes still drive the layout.
import type { NeonColor } from "./neon";

type RingColor = Extract<NeonColor, "cyan" | "magenta" | "gold">;

type Props = {
  pct?: number;
  seconds?: number;
  size?: number;
  color?: RingColor;
};

const RING_TEXT: Record<RingColor, string> = {
  cyan:    "text-(--neon-cyan)    [text-shadow:0_0_12px_var(--neon-cyan)]",
  magenta: "text-(--neon-magenta) [text-shadow:0_0_12px_var(--neon-magenta)]",
  gold:    "text-(--neon-gold)    [text-shadow:0_0_12px_var(--neon-gold)]",
};

const RING_BG: Record<RingColor, string> = {
  cyan:    "bg-[conic-gradient(var(--neon-cyan)_calc(var(--ring-pct)*1deg),rgba(255,255,255,.08)_0)]",
  magenta: "bg-[conic-gradient(var(--neon-magenta)_calc(var(--ring-pct)*1deg),rgba(255,255,255,.08)_0)]",
  gold:    "bg-[conic-gradient(var(--neon-gold)_calc(var(--ring-pct)*1deg),rgba(255,255,255,.08)_0)]",
};

function TimerRing({ pct = 0.7, seconds = 12, size = 80, color = "cyan" }: Props) {
  const vars = {
    "--ring-size": `${size}px`,
    "--ring-pct": `${pct * 360}`,
  } as React.CSSProperties;

  return (
    <div
      style={vars}
      className={`w-(--ring-size) h-(--ring-size) rounded-full grid place-items-center font-pixel text-lg font-bold ${RING_BG[color]}`}
    >
      <span className={RING_TEXT[color]}>{seconds}</span>
    </div>
  );
}

export default TimerRing;
