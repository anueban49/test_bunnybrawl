// XPBar — horizontal progress bar with optional label row above.
// The width % and height come from props, so we set them via CSS custom properties
// that the rail + fill read — no static inline styles.

type Props = {
  pct?: number;
  height?: number;
  showLabel?: boolean;
  label?: string;
};

function XPBar({ pct = 0.62, height = 14, showLabel = false, label }: Props) {
  const cssVars = {
    "--xp-h": `${height}px`,
    "--xp-w": `${Math.max(0, Math.min(1, pct)) * 100}%`,
  } as React.CSSProperties;

  return (
    <div className="w-full" style={cssVars}>
      {showLabel && (
        <div className="flex justify-between items-center mb-1.5 font-pixel-mini text-[9px] tracking-[.15em] text-(--text-dim)">
          <span>{label ?? "XP"}</span>
          <span className="text-(--neon-cyan)">{Math.round(pct * 100)}%</span>
        </div>
      )}
      <div className="w-full h-[var(--xp-h)] rounded-md bg-white/10 overflow-hidden">
        <div className="h-full w-[var(--xp-w)] rounded-md bg-gradient-to-r from-(--neon-cyan) to-(--neon-magenta) transition-[width] duration-300" />
      </div>
    </div>
  );
}

export default XPBar;
