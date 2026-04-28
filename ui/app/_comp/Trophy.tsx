// Trophy — one slot in the trophy-shelf grid. `got=false` shows a muted placeholder.
import Icon from "./Icon";
import type { MockTrophy } from "../mocks/trophies";
import type { NeonColor } from "./neon";

const ACTIVE: Record<NeonColor, string> = {
  cyan:    "text-(--neon-cyan)    border-(--neon-cyan)/40    bg-[linear-gradient(135deg,rgba(94,246,255,.2),rgba(94,246,255,.05))]    shadow-[0_0_18px_rgba(94,246,255,.2)]",
  magenta: "text-(--neon-magenta) border-(--neon-magenta)/40 bg-[linear-gradient(135deg,rgba(255,79,216,.2),rgba(255,79,216,.05))]   shadow-[0_0_18px_rgba(255,79,216,.2)]",
  gold:    "text-(--neon-gold)    border-(--neon-gold)/40    bg-[linear-gradient(135deg,rgba(255,209,102,.2),rgba(255,209,102,.05))] shadow-[0_0_18px_rgba(255,209,102,.2)]",
  lime:    "text-(--neon-lime)    border-(--neon-lime)/40    bg-[linear-gradient(135deg,rgba(182,255,110,.2),rgba(182,255,110,.05))] shadow-[0_0_18px_rgba(182,255,110,.2)]",
  violet:  "text-(--neon-violet)  border-(--neon-violet)/40  bg-[linear-gradient(135deg,rgba(159,123,255,.2),rgba(159,123,255,.05))] shadow-[0_0_18px_rgba(159,123,255,.2)]",
  muted:   "text-(--text-mute)    border-(--border) bg-white/[.02]",
};

const LOCKED = "text-(--text-mute) border-(--border) bg-white/[.02] grayscale-[.5]";

function Trophy({ name, icon, color, got }: MockTrophy) {
  return (
    <div className="text-center">
      <div
        className={`w-full aspect-square rounded-xl grid place-items-center border ${got ? ACTIVE[color] : LOCKED}`}
      >
        <Icon name={icon} size={22} />
      </div>
      <div
        className={`font-pixel-mini text-[7px] tracking-widest mt-1.5 ${got ? "text-(--text-dim)" : "text-(--text-mute)"}`}
      >
        {name}
      </div>
    </div>
  );
}

export default Trophy;
