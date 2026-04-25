// MatchRow — one row in the "Recent battles" list (W/L badge + opponent + score + xp).
import NeonChip from "./NeonChip";
import type { MockMatch } from "../mocks/matches";

function MatchRow({ result, opp, subject, score, xp }: MockMatch) {
  const win = result === "W";
  const badge = win
    ? "bg-(--win)/10    border-(--win)    text-(--win)"
    : "bg-(--danger)/10 border-(--danger) text-(--danger)";
  const xpColor = win ? "text-(--win)" : "text-(--neon-gold)";

  return (
    <div className="flex items-center gap-3 py-2.5 border-b border-(--border)">
      <div
        className={`w-7 h-7 rounded-md grid place-items-center font-pixel-mini text-[9px] font-bold shrink-0 border ${badge}`}
      >
        {result}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <div className="font-semibold text-sm">{opp}</div>
          <NeonChip color="muted" className="py-0.5! px-1.5! text-[8px]!">
            {subject}
          </NeonChip>
        </div>
      </div>
      <div className="font-pixel text-base text-(--text) min-w-12 text-right">{score}</div>
      <div className={`font-pixel-mini text-[9px] min-w-10 text-right ${xpColor}`}>{xp}</div>
    </div>
  );
}

export default MatchRow;
