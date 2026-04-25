// QuickPlayTile — large call-to-action card on the dashboard middle column.
// `primary` keeps the glow always on; others light up on hover.
import Icon, { type IconName } from "./Icon";
import type { NeonColor } from "./neon";

type TileColor = Extract<NeonColor, "cyan" | "magenta" | "gold">;

type Props = {
  title: string;
  subtitle: string;
  eta: string;
  icon: IconName;
  color: TileColor;
  onClick: () => void;
  primary?: boolean;
};

const VARIANT: Record<TileColor, { border: string; icon: string; eta: string; glow: string }> = {
  cyan: {
    border: "border-(--neon-cyan)/40",
    icon:   "text-(--neon-cyan)    border-(--neon-cyan)/40",
    eta:    "text-(--neon-cyan)",
    glow:   "hover:shadow-[0_0_24px_rgba(94,246,255,.25)]",
  },
  magenta: {
    border: "border-(--neon-magenta)/40",
    icon:   "text-(--neon-magenta) border-(--neon-magenta)/40",
    eta:    "text-(--neon-magenta)",
    glow:   "hover:shadow-[0_0_24px_rgba(255,79,216,.25)]",
  },
  gold: {
    border: "border-(--neon-gold)/40",
    icon:   "text-(--neon-gold)    border-(--neon-gold)/40",
    eta:    "text-(--neon-gold)",
    glow:   "hover:shadow-[0_0_24px_rgba(255,209,102,.25)]",
  },
};

function QuickPlayTile({ title, subtitle, eta, icon, color, onClick, primary }: Props) {
  const v = VARIANT[color];
  const primaryGlow =
    primary && color === "cyan"    ? "shadow-[0_0_24px_rgba(94,246,255,.25)]" :
    primary && color === "magenta" ? "shadow-[0_0_24px_rgba(255,79,216,.25)]" :
    primary && color === "gold"    ? "shadow-[0_0_24px_rgba(255,209,102,.25)]" : "";

  return (
    <button
      onClick={onClick}
      className={`glass p-4.5 text-left cursor-pointer relative overflow-hidden w-full transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 ${v.border} ${v.glow} ${primaryGlow}`}
    >
      <div className="flex justify-between items-start">
        <div className={`w-10 h-10 rounded-[10px] grid place-items-center shrink-0 bg-white/5 border ${v.icon}`}>
          <Icon name={icon} size={20} />
        </div>
        <Icon name="arrow" size={16} color="var(--text-mute)" />
      </div>
      <div className="text-[18px] font-bold mt-4 tracking-[-0.01em]">{title}</div>
      <div className="text-xs text-(--text-dim) mt-1">{subtitle}</div>
      <div className={`font-pixel-mini text-[8px] tracking-[.2em] mt-3.5 ${v.eta}`}>{eta}</div>
    </button>
  );
}

export default QuickPlayTile;
