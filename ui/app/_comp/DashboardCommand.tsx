// DashboardCommand — default home screen: player card / quick-play / stats / side widgets.
"use client";

import SceneBG from "./SceneBG";
import TopNav from "./TopNav";
import Eyebrow from "./Eyebrow";
import PixelAvatar from "./PixelAvatar";
import NeonChip from "./NeonChip";
import XPBar from "./XPBar";
import QuickPlayTile from "./QuickPlayTile";
import StatBlock from "./StatBlock";
import MatchRow from "./MatchRow";
import FriendRow from "./FriendRow";
import Icon from "./Icon";
import Button from "./Button";
import Glass from "./Glass";
import PixFrame from "./PixFrame";
import { mockUser } from "../mocks/user";
import { mockStats } from "../mocks/stats";
import { mockRecentMatches } from "../mocks/matches";
import { mockFriendsOnline } from "../mocks/friends";
import { useDisplay } from "../_providers/DisplayProvider";

function DashboardCommand() {
  const { switchDisplay } = useDisplay();

  return (
    <div className="min-h-screen relative">
      <SceneBG particleCount={24} streaks={false} />
      <TopNav />

      <div className="grid grid-cols-[minmax(280px,1fr)_minmax(360px,1.65fr)_minmax(260px,1fr)] gap-6 px-8 pt-6 pb-12 min-h-[calc(100vh-64px)] overflow-auto">
        {/* LEFT — Player card */}
        <Glass className="p-6 flex flex-col gap-4">
          <Eyebrow>◆ OPERATOR</Eyebrow>
          <div className="grid place-items-center">
            <PixFrame padOuter={6} padInner={6}>
              <PixelAvatar size={160} {...mockUser.avatar} />
            </PixFrame>
          </div>
          <div className="text-center">
            <div className="text-[22px] font-bold">{mockUser.name}</div>
            <div className="font-pixel-mini text-xs text-(--text-dim) mt-1.5">
              {mockUser.handle} · {mockUser.title}
            </div>
          </div>

          <div className="flex items-center justify-center gap-2">
            <NeonChip color="gold">LV. {mockUser.level}</NeonChip>
            <NeonChip color="magenta">FLAME {mockUser.streak}d STREAK</NeonChip>
          </div>

          <div>
            <div className="flex justify-between mt-2 font-pixel-mini text-[11px] tracking-[.12em]">
              <span>XP · {mockUser.xp} / {mockUser.xpMax}</span>
              <span className="text-(--neon-cyan) font-bold">
                {mockUser.xpMax - mockUser.xp} to LV.{mockUser.level + 1}
              </span>
            </div>
            <XPBar pct={mockUser.xp / mockUser.xpMax} height={16} />
          </div>

          <Button variant="ghost" onClick={() => switchDisplay("avatar")}>
            <Icon name="wand" size={16} /> Customize Avatar
          </Button>
        </Glass>

        {/* MIDDLE — Quick play + stats + recent */}
        <div className="flex flex-col gap-5 min-w-0">
          <div>
            <Eyebrow>◆ WELCOME BACK</Eyebrow>
            <h1 className="font-bold leading-tight text-[44px] -tracking-[.02em]">
              Ready to brawl, {mockUser.name.split(" ")[0]}?
            </h1>
            <div className="text-(--text-dim) text-[15px] mt-2.5 max-w-xl">
              <span className="font-hand text-xl text-(--neon-gold) font-bold">"No pain, no gain."</span>{" "}
              Your brain is warmed up.
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <QuickPlayTile title="Quick Match" subtitle="Jump into a live 1v1"        eta="~2 min"     icon="sword" color="cyan"    primary onClick={() => switchDisplay("quiz")} />
            <QuickPlayTile title="Solo Play"   subtitle="AI-generated from your notes" eta="+5–15 XP"  icon="spark" color="magenta"         onClick={() => switchDisplay("solo")} />
            <QuickPlayTile title="Logbook"     subtitle="Open your study notebook"     eta="12 entries" icon="book"  color="gold"            onClick={() => switchDisplay("logbook")} />
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <Eyebrow>◆ THIS SEASON</Eyebrow>
              <span className="font-pixel-mini text-[11px] tracking-[.12em] text-(--text-dim)">UPDATED JUST NOW</span>
            </div>
            <div className="grid grid-cols-4 gap-4">
              <StatBlock label="Wins"     value={mockStats.wins}            accent="cyan"    sub="↑ 6 this week"      />
              <StatBlock label="Accuracy" value={`${mockStats.accuracy}%`}  accent="lime"    sub="on 312 questions"   />
              <StatBlock label="Rank"     value={`#${mockStats.rank}`}      accent="gold"    sub="Top 3% · Diamond"   />
              <StatBlock label="Win rate" value={`${mockStats.winRate}%`}   accent="magenta" sub="vs 54% avg"         />
            </div>
          </div>

          <Glass className="p-4">
            <div className="flex justify-between mb-2">
              <Eyebrow>◆ RECENT BATTLES</Eyebrow>
              <button className="font-pixel-mini text-xs text-(--neon-cyan) bg-transparent border-none cursor-pointer">View all →</button>
            </div>
            <div className="flex flex-col gap-2">
              {mockRecentMatches.map((m, i) => <MatchRow key={i} {...m} />)}
            </div>
          </Glass>
        </div>

        {/* RIGHT — Side widgets */}
        <div className="flex flex-col gap-4">
          <Glass className="p-4">
            <Eyebrow>◆ DAILY QUEST</Eyebrow>
            <div className="text-sm font-semibold mb-1">Win 3 Algebra matches</div>
            <div className="text-xs text-(--text-dim) mb-2.5">Reward · 120 XP + Rare Badge</div>
            <XPBar pct={0.66} height={10} />
            <div className="flex justify-between mt-2 font-pixel-mini text-[11px] tracking-[.12em]">
              <span className="text-(--text-dim)">2 / 3</span>
              <span className="text-(--neon-gold)">18:42:10</span>
            </div>
          </Glass>

          <Glass className="p-4">
            <Eyebrow>◆ WEAKEST SUBJECT</Eyebrow>
            <div className="flex items-center gap-2.5">
              <div className="w-[46px] h-[46px] rounded-[10px] grid place-items-center text-(--neon-magenta) border border-(--neon-magenta)/40 bg-[linear-gradient(135deg,rgba(255,79,216,.2),rgba(255,79,216,.05))]">
                <Icon name="flame" size={22} />
              </div>
              <div className="flex-1">
                <div className="font-semibold text-sm">World History</div>
                <div className="text-xs text-(--text-dim)">54% accuracy · drill up</div>
              </div>
            </div>
            <Button variant="magenta" className="w-full mt-3" onClick={() => switchDisplay("solo")}>
              <Icon name="target" size={14} /> Train this now
            </Button>
          </Glass>

          <Glass className="p-4">
            <Eyebrow>◆ FRIENDS ONLINE</Eyebrow>
            <div className="flex flex-col gap-2">
              {mockFriendsOnline.map((f, i) => <FriendRow key={i} {...f} />)}
            </div>
          </Glass>
        </div>
      </div>
    </div>
  );
}

export default DashboardCommand;
