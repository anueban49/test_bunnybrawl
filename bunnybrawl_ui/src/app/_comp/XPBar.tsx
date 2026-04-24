// XPBar.jsx — XP progress bar

function XPBar({ pct = 0.62, height = 14, showLabel = false, label }) {
  return (
    <div className="w-full">
      {showLabel && (
        <div className="row justify-between mb-1.5 font-pixel-mini text-[9px] tracking-[.15em] text-(--text-dim)">
          <span>{label || 'XP'}</span>
          <span className="text-(--neon-cyan)">{Math.round(pct * 100)}%</span>
        </div>
      )}
      <div className="xp-bar" style={{ height }}>
        <div className="fill" style={{ width: `${pct * 100}%` }} />
      </div>
    </div>
  );
}

export default XPBar;
