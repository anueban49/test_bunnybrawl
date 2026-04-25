// ScoreBar — gradient-filled progress bar under the quiz showing score / max.
type Props = {
  score: number;
  max: number;
  color: "cyan" | "magenta";
  name: string;
};

function ScoreBar({ score, max, color, name }: Props) {
  const pct = Math.max(0, Math.min(1, score / max));
  const nameColor = color === "cyan" ? "text-(--neon-cyan)" : "text-(--neon-magenta)";
  const fill = color === "cyan"
    ? "bg-gradient-to-r from-(--neon-cyan)    to-(--neon-violet) shadow-[0_0_14px_var(--neon-cyan)]"
    : "bg-gradient-to-r from-(--neon-magenta) to-[#ff9566]        shadow-[0_0_14px_var(--neon-magenta)]";

  return (
    <div
      className="flex-1 flex flex-col"
      style={{ "--sb-w": `${pct * 100}%` } as React.CSSProperties}
    >
      <div className="flex justify-between mb-1 font-pixel-mini text-[9px] tracking-[.15em]">
        <span className={nameColor}>{name}</span>
        <span className="text-(--text-mute)">{score} / {max}</span>
      </div>
      <div className="h-2.5 rounded-md overflow-hidden border border-(--border) bg-black/35">
        <div className={`h-full rounded-md w-(--sb-w) ${fill}`} />
      </div>
    </div>
  );
}

export default ScoreBar;
