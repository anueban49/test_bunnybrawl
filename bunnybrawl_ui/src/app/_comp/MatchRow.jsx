// MatchRow.jsx — single match history row

import NeonChip from './NeonChip';

function MatchRow({ result, opp, subject, score, xp }) {
  const win = result === 'W';
  return (
    <div className="row gap-12 py-2.5 border-b border-(--border)">
      <div
        className="w-7.5 h-7.5 rounded-md grid place-items-center font-pixel-mini text-[9px] font-bold shrink-0"
        style={{
          background: win ? 'rgba(90,255,155,.12)' : 'rgba(255,85,119,.12)',
          border: `1px solid ${win ? 'var(--win)' : 'var(--danger)'}`,
          color: win ? 'var(--win)' : 'var(--danger)',
        }}
      >
        {result}
      </div>
      <div className="flex-1 min-w-0">
        <div className="row gap-8">
          <div className="font-semibold text-sm">{opp}</div>
          <NeonChip color="muted" style={{ padding: '3px 7px', fontSize: 8 }}>{subject}</NeonChip>
        </div>
      </div>
      <div className="font-pixel text-base text-(--text) min-w-12 text-right">{score}</div>
      <div
        className="font-pixel-mini text-[9px] min-w-10 text-right"
        style={{ color: win ? 'var(--win)' : 'var(--neon-gold)' }}
      >
        {xp}
      </div>
    </div>
  );
}

export default MatchRow;
