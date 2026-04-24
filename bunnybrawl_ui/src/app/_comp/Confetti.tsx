'use client';
import { useEffect, useState } from 'react';

const PALETTE = ['#5ef6ff', '#ff4fd8', '#ffd166', '#b6ff6e', '#9f7bff', '#ff9566'];

function Confetti({ count = 50 }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(
      Array.from({ length: count }, (_, i) => ({
        key: i,
        left: Math.random() * 100,
        delay: Math.random() * 1.8,
        dur: 2.4 + Math.random() * 2.2,
        size: 6 + Math.random() * 6,
        color: PALETTE[i % PALETTE.length],
        rot: Math.random() * 360,
      }))
    );
  }, [count]);

  if (items.length === 0) return null;

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
      {items.map(p => (
        <span
          key={p.key}
          className="absolute -top-5 rounded-sm"
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size * 0.4,
            background: p.color,
            transform: `rotate(${p.rot}deg)`,
            animation: `fall ${p.dur}s ${p.delay}s linear infinite`,
          }}
        />
      ))}
    </div>
  );
}

export default Confetti;
