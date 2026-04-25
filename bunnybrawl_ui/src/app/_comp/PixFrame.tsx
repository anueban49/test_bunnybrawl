// PixFrame — gradient-padded picture frame wrapper around a pixel avatar.
// The 3px gradient border + dark inner is used in every place we render an avatar big.
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  padOuter?: number;
  padInner?: number;
  className?: string;
};

function PixFrame({ children, padOuter = 3, padInner = 3, className = "" }: Props) {
  const vars = {
    "--pf-outer": `${padOuter}px`,
    "--pf-inner": `${padInner}px`,
  } as React.CSSProperties;

  return (
    <div
      style={vars}
      className={`p-(--pf-outer) rounded-xl bg-gradient-to-br from-(--neon-cyan) to-(--neon-magenta) ${className}`.trim()}
    >
      <div className="p-(--pf-inner) rounded-lg bg-(--bg-1)">{children}</div>
    </div>
  );
}

export default PixFrame;
