// LandingHero — marketing/hero screen shown as the "Arena" tab.
"use client";

import SceneBG from "./SceneBG";
import TopNav from "./TopNav";
import BrawlerBunny from "./BrawlerBunny";
import Icon from "./Icon";
import Eyebrow from "./Eyebrow";
import Button from "./Button";
import Glass from "./Glass";
import { useDisplay } from "../_providers/DisplayProvider";
import type { BunnyExpression } from "./types";

type HudColor = "cyan" | "gold" | "magenta";
const HUD_BORDER: Record<HudColor, string> = {
  cyan:    "border-(--neon-cyan)/50",
  gold:    "border-(--neon-gold)/50",
  magenta: "border-(--neon-magenta)/50",
};

function LandingHero() {
  const { switchDisplay } = useDisplay();

  return (
    <div className="min-h-screen relative flex flex-col">
      <SceneBG particleCount={48} />
      <TopNav />

      <div className="flex-1 grid place-items-center relative px-16 py-8">
        <div className="text-center max-w-5xl relative z-[2]">
          <Eyebrow className="mb-5">◆ Season 4 · Live Now · 12,482 online</Eyebrow>

          <div className="inline-flex items-center gap-6 mb-4 [filter:drop-shadow(0_0_30px_rgba(255,79,216,.5))]">
            <BrawlerBunny size={160} expression="cheer" />
          </div>

          <h1 className="font-bold leading-[0.92] text-[92px] -tracking-[.04em]">
            <span className="text-(--text)">Compete. </span>
            <span className="bg-gradient-to-br from-(--neon-cyan) to-(--neon-magenta) bg-clip-text text-transparent [text-shadow:0_0_32px_rgba(94,246,255,.3)]">
              Learn.
            </span>
            <span className="text-(--neon-gold) [text-shadow:0_0_24px_rgba(255,209,102,.4)]"> Win.</span>
          </h1>

          <p className="text-xl text-(--text-dim) max-w-xl mx-auto mt-6 mb-8 leading-relaxed">
            Challenge other students, sharpen your edge, and level up. The harder the battle, the sweeter the victory.
          </p>

          <div className="flex items-center gap-3 justify-center">
            <Button variant="primary" onClick={() => switchDisplay("quiz")}>
              <Icon name="sword" /> Start Game
            </Button>
            <Button variant="magenta" onClick={() => switchDisplay("quiz")}>
              <Icon name="users" /> Join Match
            </Button>
            <Button variant="ghost" onClick={() => switchDisplay("solo")}>
              <Icon name="spark" /> Solo Play
            </Button>
          </div>

          <div className="flex items-center gap-10 justify-center mt-12 text-(--text-mute) text-[13px]">
            <LandingStat num="1.2M" label="Matches / week" />
            <LandingDivider />
            <LandingStat num="48K" label="Active brawlers" />
            <LandingDivider />
            <LandingStat num="Season 4" label="Ends in 12d 4h" />
          </div>
        </div>

        <FloatingHud className="top-22 left-14"   label="LIVE MATCH" title="AP Bio · Round 3" bunnyExp="run"   color="cyan"    />
        <FloatingHud className="top-28 right-12"  label="RANK UP"    title="+42 XP earned"   bunnyExp="cheer" color="gold"    />
        <FloatingHud className="bottom-22 left-20" label="STREAK"    title="7 days strong"   bunnyExp="ready" color="magenta" />
      </div>
    </div>
  );
}

function LandingStat({ num, label }: { num: string; label: string }) {
  return (
    <div>
      <div className="font-pixel text-[22px] text-(--neon-cyan)">{num}</div>
      <div className="font-pixel-mini text-[8px] tracking-[.15em] text-(--text-mute)">{label}</div>
    </div>
  );
}

function LandingDivider() {
  return <div className="w-px h-7 bg-(--border)" />;
}

function FloatingHud({
  className,
  label,
  title,
  bunnyExp,
  color,
}: {
  className: string;
  label: string;
  title: string;
  bunnyExp: BunnyExpression;
  color: HudColor;
}) {
  return (
    <Glass className={`absolute flex items-center gap-2.5 px-3.5 py-2.5 animate-[bob_3s_ease-in-out_infinite] ${HUD_BORDER[color]} ${className}`}>
      <div className="w-8 h-8 rounded-lg overflow-hidden grid place-items-center shrink-0 bg-gradient-to-br from-(--bg-2) to-(--bg-1)">
        <BrawlerBunny size={32} expression={bunnyExp} glow={false} />
      </div>
      <div>
        <div className="font-pixel-mini text-[8px] tracking-[.15em] text-(--text-mute)">{label}</div>
        <div className="text-[13px] font-semibold">{title}</div>
      </div>
    </Glass>
  );
}

export default LandingHero;
