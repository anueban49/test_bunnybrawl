// Eyebrow — tiny all-caps label used above section titles ("◆ OPERATOR").
import type { ReactNode } from "react";

type Props = { children: ReactNode; className?: string };

function Eyebrow({ children, className = "" }: Props) {
  return (
    <div
      className={`font-pixel-mini text-[9px] tracking-[.2em] uppercase text-(--text-mute) mb-2 ${className}`.trim()}
    >
      {children}
    </div>
  );
}

export default Eyebrow;
