// Confetti — one-shot victory burst. Per-item random placement is deferred
// to a useEffect so server and client both render nothing on first paint.
"use client";

import { useEffect, useState } from "react";

const PALETTE = ["#5ef6ff", "#ff4fd8", "#ffd166", "#b6ff6e", "#9f7bff", "#ff9566"];

type Piece = {
  key: number;
  left: number;
  delay: number;
  dur: number;
  size: number;
  color: string;
  rot: number;
};

type Props = { count?: number };

function Confetti({ count = 50 }: Props) {
  const [items, setItems] = useState<Piece[]>([]);

  useEffect(() => {
    setItems(
      Array.from({ length: count }, (_, i): Piece => ({
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
      {items.map((p) => {
        const vars = {
          "--c-left": `${p.left}%`,
          "--c-w": `${p.size}px`,
          "--c-h": `${p.size * 0.4}px`,
          "--c-bg": p.color,
          "--c-rot": `${p.rot}deg`,
          "--c-dur": `${p.dur}s`,
          "--c-delay": `${p.delay}s`,
        } as React.CSSProperties;
        return (
          <span
            key={p.key}
            style={vars}
            className="absolute -top-5 rounded-sm left-[var(--c-left)] w-[var(--c-w)] h-[var(--c-h)] bg-[var(--c-bg)] rotate-[var(--c-rot)] animate-[fall_var(--c-dur)_linear_infinite] [animation-delay:var(--c-delay)]"
          />
        );
      })}
    </div>
  );
}

export default Confetti;
