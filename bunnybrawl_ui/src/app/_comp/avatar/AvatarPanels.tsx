// AvatarPanels — small re-usable bits for the avatar editor (label, option grid,
// option card, swatch row). Pulled into their own file to keep avatar.tsx short.
import type { ReactNode } from "react";

export function PanelLabel({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`font-pixel-mini text-[9px] tracking-[.2em] text-(--text-mute) mb-2 ${className}`.trim()}>
      {children}
    </div>
  );
}

export function OptionGrid<T>({ items, cols = 4, render }: { items: T[]; cols?: number; render: (v: T) => ReactNode }) {
  const vars = { "--og-cols": String(cols) } as React.CSSProperties;
  return (
    <div style={vars} className="grid gap-2 grid-cols-[repeat(var(--og-cols),minmax(0,1fr))]">
      {items.map(render)}
    </div>
  );
}

export function OptionCard({
  active, onClick, label, children,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
  children: ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center gap-1.5 p-2 rounded-lg cursor-pointer transition-all border-[1.5px] ${
        active
          ? "bg-(--neon-cyan)/10 border-(--neon-cyan) shadow-[0_0_12px_rgba(94,246,255,.3)]"
          : "bg-white/2 border-(--border)"
      }`}
    >
      {children}
      <span className="font-pixel-mini text-[8px] tracking-[.15em] text-(--text-dim) capitalize">{label}</span>
    </button>
  );
}

export function SwatchRow({
  colors, active, onPick,
}: {
  colors: string[];
  active: string;
  onPick: (c: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {colors.map((c) => {
        const on = active === c;
        const vars = { "--sw-bg": c, "--sw-glow": on ? `0 0 10px ${c}88` : "none" } as React.CSSProperties;
        return (
          <button
            key={c}
            onClick={() => onPick(c)}
            style={vars}
            className={`w-7 h-7 rounded-md cursor-pointer transition-all bg-(--sw-bg) shadow-[var(--sw-glow)] border-2 ${
              on ? "border-(--neon-cyan)" : "border-transparent"
            }`}
          />
        );
      })}
    </div>
  );
}
