// Confetti.jsx — confetti burst overlay for win result screen

import { useMemo } from 'react';

function Confetti({ count = 50 }) {
  const items = useMemo(() => {
    const cs = ['#5ef6ff', '#ff4fd8', '#ffd166', '#b6ff6e', '#9f7bff', '#ff9566'];
    return Array.from({ length: count }, (_, i) => ({
      key: i,
      left: Math.random() * 100,
      delay: Math.random() * 1.8,
      dur: 2.4 + Math.random() * 2.2,
      size: 6 + Math.random() * 6,
      color: cs[i % cs.length],
      rot: Math.random() * 360,
    }));
  }, [count]);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {items.map(p => (
        <span
          key={p.key}
          style={{
            position: 'absolute',
            top: -20,
            left: `${p.left}%`,
            width: p.size,
            height: p.size * 0.4,
            background: p.color,
            transform: `rotate(${p.rot}deg)`,
            animation: `fall ${p.dur}s ${p.delay}s linear infinite`,
            borderRadius: 2,
          }}
        />
      ))}
    </div>
  );
}

export default Confetti;
