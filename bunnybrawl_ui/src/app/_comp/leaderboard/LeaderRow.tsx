// LeaderRow — one row in the ranking list. Highlights the current user differently.
import PixelAvatar from "../PixelAvatar";
import NeonChip from "../NeonChip";
import type { LeaderboardEntry } from "../../mocks/leaderboard";

function LeaderRow({ p }: { p: LeaderboardEntry }) {
  const you = p.you;
  const wrap = you
    ? "bg-[linear-gradient(90deg,rgba(94,246,255,.08),rgba(255,79,216,.05))] border border-(--neon-cyan) rounded-[10px] mx-1.5 my-1 shadow-[0_0_20px_rgba(94,246,255,.15)]"
    : "border-b border-(--border)";
  const rank = you ? "text-(--neon-cyan)" : "text-(--text-dim)";
  const frame = you
    ? "bg-gradient-to-br from-(--neon-cyan) to-(--neon-magenta)"
    : "bg-(--border)";
  const acc = p.acc > 85 ? "text-(--win)" : "text-(--text)";

  return (
    <div className={`flex items-center px-4 py-2.5 ${wrap}`}>
      <div className={`w-12 font-pixel text-xl ${rank}`}>#{p.rank}</div>

      <div className="flex-1 flex items-center gap-3 min-w-0">
        <div className={`p-0.5 rounded-lg shrink-0 ${frame}`}>
          <div className="p-0.5 rounded-md bg-(--bg-2)">
            <PixelAvatar size={42} {...p.avatar} />
          </div>
        </div>
        <div className="min-w-0">
          <div className="flex items-center gap-1.5">
            <div className={`text-sm font-bold ${you ? "text-(--neon-cyan)" : "text-(--text)"}`}>{p.name}</div>
            {you && <NeonChip color="cyan" className="py-0.5! px-1.5! text-[7px]!">YOU</NeonChip>}
          </div>
          <div className="text-[11px] text-(--text-dim)">{p.handle}</div>
        </div>
      </div>

      <div className="w-25 text-right font-pixel text-base text-(--text)">{p.wins}</div>
      <div className={`w-25 text-right font-pixel text-base ${acc}`}>{p.acc}%</div>
      <div className="w-35 text-right font-pixel text-lg text-(--neon-gold) [text-shadow:0_0_10px_rgba(255,209,102,.3)]">
        {p.xp.toLocaleString()}
      </div>
      <div className="w-15 text-right">
        {!you && (
          <button className="bg-transparent border border-(--border) text-(--text-dim) rounded-md px-2 py-1 text-[10px] cursor-pointer font-pixel-mini tracking-[.15em]">
            DUEL
          </button>
        )}
      </div>
    </div>
  );
}

export default LeaderRow;
