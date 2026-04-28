// EntryCard — one row in the logbook sidebar (title + subject + tag + word count).
import NeonChip from "../NeonChip";
import type { LogbookEntry } from "../../mocks/logbook";
import type { NeonColor } from "../neon";

const ACTIVE_BG: Record<NeonColor, string> = {
  cyan:    "bg-[linear-gradient(135deg,rgba(94,246,255,.12),rgba(94,246,255,.03))]    border-(--neon-cyan)    shadow-[0_0_14px_rgba(94,246,255,.2)]",
  magenta: "bg-[linear-gradient(135deg,rgba(255,79,216,.12),rgba(255,79,216,.03))]    border-(--neon-magenta) shadow-[0_0_14px_rgba(255,79,216,.2)]",
  gold:    "bg-[linear-gradient(135deg,rgba(255,209,102,.12),rgba(255,209,102,.03))]  border-(--neon-gold)    shadow-[0_0_14px_rgba(255,209,102,.2)]",
  lime:    "bg-[linear-gradient(135deg,rgba(182,255,110,.12),rgba(182,255,110,.03))]  border-(--neon-lime)    shadow-[0_0_14px_rgba(182,255,110,.2)]",
  violet:  "bg-[linear-gradient(135deg,rgba(159,123,255,.12),rgba(159,123,255,.03))]  border-(--neon-violet)  shadow-[0_0_14px_rgba(159,123,255,.2)]",
  muted:   "bg-white/[.02] border-(--border)",
};

const DOT: Record<NeonColor, string> = {
  cyan:    "bg-(--neon-cyan)    shadow-[0_0_6px_var(--neon-cyan)]",
  magenta: "bg-(--neon-magenta) shadow-[0_0_6px_var(--neon-magenta)]",
  gold:    "bg-(--neon-gold)    shadow-[0_0_6px_var(--neon-gold)]",
  lime:    "bg-(--neon-lime)    shadow-[0_0_6px_var(--neon-lime)]",
  violet:  "bg-(--neon-violet)  shadow-[0_0_6px_var(--neon-violet)]",
  muted:   "bg-(--text-mute)",
};

type Props = { e: LogbookEntry; active: boolean; onClick: () => void };

function EntryCard({ e, active, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className={`text-left px-3.5 py-3 rounded-[10px] cursor-pointer transition-all duration-150 w-full border-[1.5px] text-(--text) ${
        active ? ACTIVE_BG[e.color] : "bg-white/[.02] border-(--border)"
      }`}
    >
      <div className="flex justify-between mb-1">
        <div className={`w-1.5 h-1.5 rounded-full ${DOT[e.color]}`} />
        <div className="font-pixel-mini text-[8px] tracking-[.15em] text-(--text-mute)">{e.date}</div>
      </div>
      <div className="text-sm font-bold mb-0.5">{e.title}</div>
      <div className="text-[11px] text-(--text-dim) mb-1.5">{e.subject}</div>
      <div className="flex items-center gap-1.5">
        <NeonChip color="muted" className="py-0.5! px-1.5! text-[7px]!">{e.tag}</NeonChip>
        <div className="font-pixel-mini text-[8px] text-(--text-mute) tracking-[.15em]">{e.words}w</div>
      </div>
    </button>
  );
}

export default EntryCard;
