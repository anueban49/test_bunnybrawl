// Button — 4 visual variants (primary cyan, magenta, gold, ghost).
// Replaces the old `.btn .btn-primary` CSS classes so we can stay Tailwind-only.
import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "magenta" | "gold" | "ghost";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  children: ReactNode;
};

const BASE =
  "inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg font-semibold text-sm cursor-pointer transition-all border-none";

const VARIANT: Record<Variant, string> = {
  primary: "bg-(--neon-cyan)    text-black shadow-[0_0_20px_rgba(94,246,255,.4)]  hover:-translate-y-0.5 hover:shadow-[0_0_30px_rgba(94,246,255,.6)]",
  magenta: "bg-(--neon-magenta) text-white shadow-[0_0_20px_rgba(255,79,216,.4)]  hover:-translate-y-0.5 hover:shadow-[0_0_30px_rgba(255,79,216,.6)]",
  gold:    "bg-(--neon-gold)    text-black shadow-[0_0_20px_rgba(255,209,102,.4)] hover:-translate-y-0.5 hover:shadow-[0_0_30px_rgba(255,209,102,.6)]",
  ghost:   "bg-white/5 border border-(--border) text-(--text) hover:bg-white/10",
};

function Button({ variant = "primary", className = "", children, ...rest }: Props) {
  return (
    <button {...rest} className={`${BASE} ${VARIANT[variant]} ${className}`.trim()}>
      {children}
    </button>
  );
}

export default Button;
