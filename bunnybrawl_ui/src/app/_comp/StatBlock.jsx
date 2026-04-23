// StatBlock.jsx — stat display card

function StatBlock({ label, value, accent = 'cyan', sub }) {
  const colorMap = {
    cyan: 'var(--neon-cyan)',
    magenta: 'var(--neon-magenta)',
    gold: 'var(--neon-gold)',
    lime: 'var(--neon-lime)',
    violet: 'var(--neon-violet)',
  };
  const c = colorMap[accent] || colorMap.cyan;
  return (
    <div className="glass px-4 py-3.5 min-w-0">
      <div className="font-pixel-mini text-[9px] tracking-[.15em] text-(--text-mute) uppercase">
        {label}
      </div>
      <div
        className="font-bold text-[28px] tracking-[-0.02em] mt-1"
        style={{ color: c, textShadow: `0 0 14px ${c}66` }}
      >
        {value}
      </div>
      {sub && <div className="text-xs text-(--text-dim) mt-0.5">{sub}</div>}
    </div>
  );
}

export default StatBlock;
