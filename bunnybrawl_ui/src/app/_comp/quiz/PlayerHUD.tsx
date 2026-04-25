// PlayerHUD — avatar + name + live score shown on each side of the quiz arena.
import PixelAvatar from "../PixelAvatar";
import Glass from "../Glass";
import PixFrame from "../PixFrame";
import type { AvatarConfig } from "../types";

type Props = {
  side: "left" | "right";
  name: string;
  handle: string;
  level: number;
  score: number;
  color: "cyan" | "magenta";
  avatar: AvatarConfig;
};

function PlayerHUD({ side, name, handle, level, score, color, avatar }: Props) {
  const dir = side === "left" ? "flex-row" : "flex-row-reverse";
  const border = color === "cyan" ? "border-(--neon-cyan)/50"    : "border-(--neon-magenta)/50";
  const glow   = color === "cyan" ? "shadow-[0_0_20px_rgba(94,246,255,.4)]" : "shadow-[0_0_20px_rgba(255,79,216,.4)]";
  const txt    = color === "cyan" ? "text-(--neon-cyan)    [text-shadow:0_0_10px_var(--neon-cyan)]"
                                   : "text-(--neon-magenta) [text-shadow:0_0_10px_var(--neon-magenta)]";
  const align  = side === "left" ? "text-left" : "text-right";

  return (
    <Glass className={`flex gap-3.5 shrink-0 p-3.5 min-w-[280px] ${dir} ${border} ${glow}`}>
      <PixFrame padOuter={3} padInner={3}>
        <PixelAvatar size={56} {...avatar} />
      </PixFrame>
      <div className={`flex-1 ${align}`}>
        <div className="text-sm font-bold">{name}</div>
        <div className="text-[11px] text-(--text-dim)">{handle} · LV {level}</div>
        <div className={`font-pixel text-[26px] mt-0.5 ${txt}`}>{score}</div>
      </div>
    </Glass>
  );
}

export default PlayerHUD;
