// Glass — frosted-glass card used all over the UI (dashboard panels, quiz card, etc.).
// Thin wrapper so we stop repeating the same four Tailwind classes everywhere.
import type { HTMLAttributes, ReactNode } from "react";

type Props = HTMLAttributes<HTMLDivElement> & { children: ReactNode };

function Glass({ className = "", children, ...rest }: Props) {
  return (
    <div
      {...rest}
      className={`bg-white/5 border border-(--border) rounded-xl backdrop-blur-md ${className}`.trim()}
    >
      {children}
    </div>
  );
}

export default Glass;
