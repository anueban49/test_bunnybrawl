import { neonVar } from './neon';

function TimerRing({ pct = 0.7, seconds = 12, size = 80, color = 'cyan' }) {
  const c = neonVar(color);
  return (
    <div
      className="timer-ring"
      style={{
        width: size,
        height: size,
        background: `conic-gradient(${c} ${pct * 360}deg, rgba(255,255,255,.08) 0)`,
      }}
    >
      <span style={{ color: c, textShadow: `0 0 12px ${c}` }}>{seconds}</span>
    </div>
  );
}

export default TimerRing;
