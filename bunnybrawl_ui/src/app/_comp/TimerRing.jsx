// TimerRing.jsx — countdown ring for quiz and solo play

function TimerRing({ pct = 0.7, seconds = 12, size = 80, color = 'cyan' }) {
  const colorMap = { cyan: 'var(--neon-cyan)', magenta: 'var(--neon-magenta)', gold: 'var(--neon-gold)' };
  const c = colorMap[color] || colorMap.cyan;
  return (
    <div
      className="timer-ring"
      style={{
        '--pct': pct,
        '--size': `${size}px`,
        background: `conic-gradient(${c} ${pct * 360}deg, rgba(255,255,255,.08) 0)`,
      }}
    >
      <span style={{ color: c, textShadow: `0 0 12px ${c}` }}>{seconds}</span>
    </div>
  );
}

export default TimerRing;
