// PodiumCard — top-3 player tile (avatar + xp + colored pillar) on the leaderboard.
import PixelAvatar from "../PixelAvatar";
import Icon from "../Icon";
import type { LeaderboardEntry } from "../../mocks/leaderboard";

type Color = "gold" | "cyan" | "magenta";

const PILLAR: Record<Color, string> = {
  gold:    "bg-[linear-gradient(180deg,rgba(255,209,102,.25),rgba(255,209,102,.05))] border-(--neon-gold)/35",
  cyan:    "bg-[linear-gradient(180deg,rgba(94,246,255,.2),rgba(94,246,255,.05))]    border-(--neon-cyan)/35",
  magenta: "bg-[linear-gradient(180deg,rgba(255,79,216,.2),rgba(255,79,216,.05))]    border-(--neon-magenta)/35",
};
const RANK_TEXT: Record<Color, string> = {
  gold:    "text-(--neon-gold)    [text-shadow:0_0_20px_var(--neon-gold)]",
  cyan:    "text-(--neon-cyan)    [text-shadow:0_0_20px_var(--neon-cyan)]",
  magenta: "text-(--neon-magenta) [text-shadow:0_0_20px_var(--neon-magenta)]",
};
const FRAME_BG: Record<Color, string> = {
  gold:    "bg-gradient-to-br from-(--neon-gold)    to-(--neon-gold)/40 shadow-[0_0_30px_rgba(255,209,102,.4)]",
  cyan:    "bg-gradient-to-br from-(--neon-cyan)    to-(--neon-cyan)/40 shadow-[0_0_30px_rgba(94,246,255,.4)]",
  magenta: "bg-gradient-to-br from-(--neon-magenta) to-(--neon-magenta)/40 shadow-[0_0_30px_rgba(255,79,216,.4)]",
};
const BAR: Record<Color, string> = {
  gold:    "bg-(--neon-gold)    shadow-[0_0_12px_var(--neon-gold)]",
  cyan:    "bg-(--neon-cyan)    shadow-[0_0_12px_var(--neon-cyan)]",
  magenta: "bg-(--neon-magenta) shadow-[0_0_12px_var(--neon-magenta)]",
};

type Props = { p: LeaderboardEntry; place: 1 | 2 | 3; height: number; color: Color };

function PodiumCard({ p, place, height, color }: Props) {
  const vars = { "--podium-h": `${height}px` } as React.CSSProperties;

  return (
    <div className="text-center relative">
      <div className="relative mb-2 flex justify-center">
        {place === 1 && (
          <div className="absolute -top-3.5 z-2 [filter:drop-shadow(0_0_12px_var(--neon-gold))]">
            <Icon name="crown" size={36} color="var(--neon-gold)" />
          </div>
        )}
        <div className={`p-1 rounded-xl ${FRAME_BG[color]}`}>
          <div className="p-1.5 rounded-lg bg-(--bg-1)">
            <PixelAvatar size={96} {...p.avatar} />
          </div>
        </div>
      </div>
      <div className="text-base font-bold mb-0.5">{p.name}</div>
      <div className="text-[11px] text-(--text-dim) mb-2.5">{p.handle}</div>

      <div
        style={vars}
        className={`flex flex-col items-center pt-4.5 px-2.5 pb-2.5 rounded-t-xl border h-(--podium-h) overflow-hidden relative ${PILLAR[color]}`}
      >
        <div className={`font-pixel-mini text-[40px] ${RANK_TEXT[color]}`}>#{place}</div>
        <div className="font-pixel text-[22px] text-(--text) mt-2">{p.xp.toLocaleString()}</div>
        <div className="font-pixel-mini text-[8px] tracking-[.2em] text-(--text-dim)">XP</div>
        <div className={`absolute bottom-0 left-0 right-0 h-0.5 ${BAR[color]}`} />
      </div>
    </div>
  );
}

export default PodiumCard;
