// ResultScreen — post-match win / defeat screen with rewards + next-step buttons.
"use client";

import SceneBG from "./SceneBG";
import TopNav from "./TopNav";
import Icon, { type IconName } from "./Icon";
import XPBar from "./XPBar";
import PixelAvatar from "./PixelAvatar";
import Confetti from "./Confetti";
import Button from "./Button";
import Glass from "./Glass";
import PixFrame from "./PixFrame";
import { useDisplay } from "../_providers/DisplayProvider";
import type { AvatarConfig } from "./types";
import type { NeonColor } from "./neon";

type Outcome = "win" | "lose";

function ResultScreen({ outcome = "win" }: { outcome?: Outcome }) {
  const { switchDisplay } = useDisplay();
  const win = outcome === "win";
  const bannerGrad = win
    ? "bg-gradient-to-br from-(--neon-gold) to-(--neon-magenta) [text-shadow:0_0_60px_rgba(255,209,102,.4)]"
    : "bg-gradient-to-br from-(--danger) to-[#8a4a88] [text-shadow:0_0_60px_rgba(255,85,119,.4)]";
  const halo = win
    ? "bg-[radial-gradient(circle,rgba(255,209,102,.4),transparent_70%)]"
    : "bg-[radial-gradient(circle,rgba(255,85,119,.3),transparent_70%)]";

  return (
    <div className="min-h-screen relative">
      <SceneBG particleCount={18} streaks={false} />
      {win && <Confetti count={60} />}
      <TopNav />

      <div className="flex flex-col items-center justify-center px-10 pt-5 pb-10 min-h-[calc(100vh-64px)]">
        <div className="text-center max-w-4xl w-full">
          <div className="relative inline-block">
            <div className={`absolute -inset-8 blur-[20px] ${halo}`} />
            <h1 className={`relative font-bold leading-[0.9] text-[140px] -tracking-[.04em] bg-clip-text text-transparent ${bannerGrad}`}>
              {win ? "VICTORY!" : "DEFEAT"}
            </h1>
          </div>

          <div className="font-hand text-[28px] text-(--neon-cyan) mt-1">
            {win ? '"The harder the battle, the sweeter the victory."' : '"Smooth seas never made a skilled sailor."'}
          </div>

          <div className="grid grid-cols-[1fr_auto_1fr] gap-6 items-center mt-9 mx-auto max-w-4xl">
            <SideCard you score={8} acc={80} avgSec={13.2} color="cyan" won={win}
              avatar={{ hair: "spike", hairColor: "#ffd166", outfit: "hoodie", outfitColor: "#ff4fd8", accessory: "glasses" }}
              name="KAI" handle="@kai_q" />
            <div className="font-pixel text-[44px] text-(--text-mute)">VS</div>
            <SideCard score={5} acc={50} avgSec={14.7} color="magenta" won={!win}
              avatar={{ hair: "mohawk", hairColor: "#5ef6ff", outfit: "jacket", outfitColor: "#ff4fd8", accessory: "visor", effect: "flame" }}
              name="NOVA" handle="@neon_nova" />
          </div>

          <Glass className="grid grid-cols-4 gap-3.5 p-5 mx-auto mt-8 max-w-4xl">
            <Reward label="XP EARNED" value="+128"                    color="cyan"                     icon="spark" />
            <Reward label="RANK"      value={win ? "+12" : "−4"}     color={win ? "gold" : "magenta"} icon="up"    />
            <Reward label="STREAK"    value={win ? "8 DAYS" : "RESET"} color={win ? "magenta" : "muted"} icon="flame" />
            <Reward label="BADGE"     value={win ? "CENTURION" : "—"} color={win ? "gold" : "muted"}   icon="medal" />
          </Glass>

          <div className="max-w-md mx-auto mt-6">
            <div className="flex justify-between mb-2">
              <span className="font-pixel-mini text-[9px] tracking-[.15em] text-(--text-dim)">LV 24 → LV 25</span>
              <span className="font-pixel text-sm text-(--neon-cyan)">2,480 / 3,000 XP</span>
            </div>
            <XPBar pct={0.83} height={16} />
          </div>

          <div className="flex justify-center gap-3 mt-8">
            <Button variant="primary" onClick={() => switchDisplay("quiz")}>        <Icon name="sword" />  Play Again  </Button>
            <Button variant="ghost"   onClick={() => switchDisplay("dashboard")}>   <Icon name="user" />   Dashboard   </Button>
            <Button variant="ghost"   onClick={() => switchDisplay("leaderboard")}> <Icon name="trophy" /> Leaderboard </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

type SideProps = {
  you?: boolean;
  score: number;
  acc: number;
  avgSec: number;
  color: "cyan" | "magenta";
  won: boolean;
  avatar: AvatarConfig;
  name: string;
  handle: string;
};

function SideCard({ you, score, acc, avgSec, color, won, avatar, name, handle }: SideProps) {
  const border = won
    ? "border-(--neon-gold) shadow-[0_0_40px_rgba(255,209,102,.25)]"
    : color === "cyan" ? "border-(--neon-cyan)" : "border-(--neon-magenta)";
  const scoreColor = color === "cyan"
    ? "text-(--neon-cyan)    [text-shadow:0_0_18px_var(--neon-cyan)]"
    : "text-(--neon-magenta) [text-shadow:0_0_18px_var(--neon-magenta)]";

  return (
    <Glass className={`p-5 text-center relative ${border}`}>
      {won && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 font-pixel-mini text-[9px] tracking-[.2em] px-2.5 py-1 rounded-sm bg-(--neon-gold) text-[#2a1a00] shadow-[0_0_14px_rgba(255,209,102,.6)]">
          WINNER
        </div>
      )}
      <div className="flex justify-center mb-3">
        <PixFrame padOuter={3} padInner={4}>
          <PixelAvatar size={90} {...avatar} />
        </PixFrame>
      </div>
      <div className="text-base font-bold">{name}{you && " (YOU)"}</div>
      <div className="text-[11px] text-(--text-dim)">{handle}</div>
      <div className={`font-pixel text-[54px] mt-2.5 ${scoreColor}`}>{score}</div>
      <div className="font-pixel-mini text-[8px] tracking-[.2em] text-(--text-mute) -mt-1">/ 10 CORRECT</div>
      <div className="flex justify-center gap-3 mt-2.5 text-[11px] text-(--text-dim)">
        <span>ACC {acc}%</span><span>·</span><span>AVG {avgSec.toFixed(1)}s</span>
      </div>
    </Glass>
  );
}

const REWARD_COLOR: Record<NeonColor, string> = {
  cyan:    "text-(--neon-cyan)    [text-shadow:0_0_12px_rgba(94,246,255,.35)]",
  magenta: "text-(--neon-magenta) [text-shadow:0_0_12px_rgba(255,79,216,.35)]",
  gold:    "text-(--neon-gold)    [text-shadow:0_0_12px_rgba(255,209,102,.35)]",
  lime:    "text-(--neon-lime)",
  violet:  "text-(--neon-violet)",
  muted:   "text-(--text-mute)",
};

function Reward({ label, value, color, icon }: { label: string; value: string; color: NeonColor; icon: IconName }) {
  return (
    <div className="px-1.5 py-2.5 text-center border-r border-(--border) last:border-r-0">
      <div className={`flex justify-center mb-1.5 ${REWARD_COLOR[color]}`}><Icon name={icon} size={18} /></div>
      <div className={`font-pixel text-[22px] ${REWARD_COLOR[color]}`}>{value}</div>
      <div className="font-pixel-mini text-[8px] tracking-[.15em] text-(--text-mute) mt-0.5">{label}</div>
    </div>
  );
}

export default ResultScreen;
