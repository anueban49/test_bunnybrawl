// TopNav — global top bar: logo, screen tabs, XP chip, theme toggle, avatar.
// Reads the current screen from DisplayProvider so every child knows where it is.
"use client";

import Icon from "./Icon";
import NeonChip from "./NeonChip";
import PixelAvatar from "./PixelAvatar";
import BrawlerBunny from "./BrawlerBunny";
import { useDisplay } from "../_providers/DisplayProvider";
import type { Navigators } from "../types";

type Item = { id: Navigators; label: string };

type TopNavProps = {
  onNav?: (to: Navigators) => void;
  active?: Navigators;
};

const ITEMS: Item[] = [
  { id: "landing",     label: "Arena" },
  { id: "dashboard",   label: "Dashboard" },
  { id: "quiz",        label: "Quick Match" },
  { id: "solo",        label: "Solo Play" },
  { id: "logbook",     label: "Logbook" },
  { id: "leaderboard", label: "Leaderboard" },
];

function TopNav({ onNav, active: activeProp }: TopNavProps) {
  const { active: activeState, switchDisplay } = useDisplay();
  const active = activeProp ?? activeState;
  const navigate = onNav ?? switchDisplay;

  return (
    <div className="relative z-5 h-16 flex items-center px-7 border-b border-(--border) bg-gradient-to-b from-[rgba(20,20,46,.6)] to-transparent backdrop-blur-md">
      <button
        type="button"
        onClick={() => navigate("landing")}
        className="flex items-center gap-2.5 cursor-pointer bg-transparent border-none p-0"
      >
        <div className="w-10 h-10 rounded-[10px] grid place-items-center bg-gradient-to-br from-(--neon-cyan) to-(--neon-magenta) shadow-[0_0_18px_rgba(94,246,255,.25)]">
          <BrawlerBunny size={34} expression="ready" glow={false} />
        </div>
        <div className="text-left">
          <div className="font-bold text-base -tracking-[.02em]">Bunny Brawl</div>
          <div className="font-pixel-mini text-[8px] tracking-[.2em] text-(--text-mute)">SEASON 4</div>
        </div>
      </button>

      <div className="flex gap-1.5 ml-9">
        {ITEMS.map((it) => {
          const on = active === it.id;
          return (
            <button
              key={it.id}
              type="button"
              onClick={() => navigate(it.id)}
              className={`font-display text-[13px] font-semibold px-3.5 py-1.5 rounded-lg border cursor-pointer transition-all hover:bg-white/[.08] ${
                on
                  ? "bg-(--neon-cyan)/10 text-(--neon-cyan) border-(--neon-cyan)/30"
                  : "bg-transparent text-(--text-dim) border-transparent"
              }`}
            >
              {it.label}
            </button>
          );
        })}
      </div>

      <div className="ml-auto flex items-center gap-2.5">
        <NeonChip color="gold">★ 2,480 XP</NeonChip>
        <button
          type="button"
          onClick={() => window.dispatchEvent(new CustomEvent("bb:toggle-theme"))}
          className="w-9 h-9 rounded-lg border border-(--border) bg-transparent cursor-pointer grid place-items-center text-(--text-dim)"
        >
          <Icon name="moon" size={16} />
        </button>
        <div className="p-0.5 rounded-[10px]">
          <div className="p-0.5 rounded-lg">
            <PixelAvatar
              size={36}
              hair="spike"
              hairColor="#ffd166"
              outfit="hoodie"
              outfitColor="#ff4fd8"
              accessory="glasses"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopNav;
