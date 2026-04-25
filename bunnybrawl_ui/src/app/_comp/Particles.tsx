// Particles — decorative floating dot field. Positions/timings are randomised
// per-item, so each span reads its values from CSS custom properties.
// Rendering is client-only to avoid server/client hydration mismatches.
"use client";

import { useEffect, useState } from "react";

type ParticleItem = {
  key: number;
  left: number;
  dur: number;
  delay: number;
  size: number;
  drift: number;
  color: string;
};

type Props = {
  count?: number;
  colors?: string[];
};

function Particles({
  count = 30,
  colors = ["--neon-cyan", "--neon-magenta", "--neon-gold"],
}: Props) {
  const [items, setItems] = useState<ParticleItem[]>([]);

  useEffect(() => {
    const out: ParticleItem[] = [];
    for (let i = 0; i < count; i++) {
      out.push({
        key: i,
        left: Math.random() * 100,
        dur: 8 + Math.random() * 14,
        delay: -Math.random() * 20,
        size: 2 + Math.random() * 3,
        drift: (Math.random() - 0.5) * 120,
        color: colors[i % colors.length],
      });
    }
    setItems(out);
  }, [count, colors]);

  return (
    <div className="absolute inset-0 pointer-events-none" aria-hidden>
      {items.map((p) => {
        const vars = {
          "--p-left": `${p.left}%`,
          "--p-size": `${p.size}px`,
          "--p-dur": `${p.dur}s`,
          "--p-delay": `${p.delay}s`,
          "--p-color": `var(${p.color})`,
          "--drift": `${p.drift}px`,
        } as React.CSSProperties;
        return (
          <span
            key={p.key}
            style={vars}
            className="absolute rounded-full left-[var(--p-left)] w-[var(--p-size)] h-[var(--p-size)] bg-[var(--p-color)] shadow-[0_0_8px_var(--p-color),0_0_2px_var(--p-color)] animate-[float_var(--p-dur)_linear_infinite] [animation-delay:var(--p-delay)]"
          />
        );
      })}
    </div>
  );
}

export default Particles;
