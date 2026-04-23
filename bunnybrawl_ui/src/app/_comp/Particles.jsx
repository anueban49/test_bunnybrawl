// Particles.jsx — Particles component

import React from 'react';

function Particles({ count = 30, colors = ['--neon-cyan','--neon-magenta','--neon-gold'] }) {
  const items = React.useMemo(() => {
    const out = [];
    for (let i = 0; i < count; i++) {
      const color = colors[i % colors.length];
      out.push({
        key: i,
        left: Math.random() * 100,
        dur: 8 + Math.random() * 14,
        delay: -Math.random() * 20,
        size: 2 + Math.random() * 3,
        drift: (Math.random() - 0.5) * 120,
        color,
      });
    }
    return out;
  }, [count]);
  return (
    <div className="bg-particles">
      {items.map(p => (
        <span key={p.key}
              style={{
                left: `${p.left}%`,
                width: p.size, height: p.size,
                animationDuration: `${p.dur}s`,
                animationDelay: `${p.delay}s`,
                background: `var(${p.color})`,
                boxShadow: `0 0 8px var(${p.color}), 0 0 2px var(${p.color})`,
                '--drift': `${p.drift}px`,
              }} />
      ))}
    </div>
  );
}

export default Particles;