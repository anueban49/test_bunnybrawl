// DashboardShelf — alternative dashboard layout with trophy shelf + goals.
// (Currently not reachable from the nav; kept as a variant for designer review.)
"use client";

import SceneBG from "./SceneBG";
import TopNav from "./TopNav";
import Eyebrow from "./Eyebrow";
import StatBlock from "./StatBlock";
import MatchRow from "./MatchRow";
import Trophy from "./Trophy";
import Goal from "./Goal";
import BrawlerBunny from "./BrawlerBunny";
import Icon from "./Icon";
import Button from "./Button";
import Glass from "./Glass";
import { mockUser } from "../mocks/user";
import { mockStats } from "../mocks/stats";
import { mockRecentMatches } from "../mocks/matches";
import { mockTrophies } from "../mocks/trophies";
import { mockGoals } from "../mocks/goals";
import { useDisplay } from "../_providers/DisplayProvider";

export function DashboardShelf() {
  const { switchDisplay } = useDisplay();

  return (
    <div className="min-h-screen relative">
      <SceneBG particleCount={20} />
      <TopNav />

      <div className="px-10 py-8 h-[calc(100%-64px)] overflow-auto">
        <Glass className="grid grid-cols-[1fr_auto] gap-6 items-center mb-5 px-8 py-7 border-(--neon-cyan)/30 bg-[linear-gradient(120deg,rgba(94,246,255,.08),rgba(255,79,216,.08))]">
          <div>
            <Eyebrow>◆ HELLO, BRAWLER</Eyebrow>
            <h1 className="font-bold text-[42px] mt-1.5 leading-tight">
              You're <span className="text-(--neon-cyan)">3 wins</span> from Diamond tier.
            </h1>
            <div className="text-(--text-dim) text-sm mt-2">
              <span className="font-hand text-xl text-(--neon-gold)">
                "The harder the battle, the sweeter the victory."
              </span>
            </div>
            <div className="flex gap-2.5 mt-4">
              <Button variant="primary" onClick={() => switchDisplay("quiz")}>
                <Icon name="sword" /> Start Match
              </Button>
              <Button variant="ghost" onClick={() => switchDisplay("solo")}>
                <Icon name="spark" /> Solo Practice
              </Button>
            </div>
          </div>
          <BrawlerBunny size={160} expression="cheer" />
        </Glass>

        <div className="grid grid-cols-5 gap-3.5 mb-5">
          <StatBlock label="Level"    value={mockUser.level}           accent="gold"    sub={`XP ${mockUser.xp}/${mockUser.xpMax}`} />
          <StatBlock label="Wins"     value={mockStats.wins}           accent="cyan"    sub="this season"                           />
          <StatBlock label="Accuracy" value={`${mockStats.accuracy}%`} accent="lime"    sub="312 answered"                          />
          <StatBlock label="Rank"     value={`#${mockStats.rank}`}     accent="magenta" sub="Diamond III"                           />
          <StatBlock label="Streak"   value={`${mockUser.streak}d`}    accent="violet"  sub="Personal best"                         />
        </div>

        <Glass className="p-6 mb-5">
          <div className="flex justify-between mb-4">
            <Eyebrow>◆ TROPHY SHELF · 14 / 48</Eyebrow>
            <span className="text-[11px] text-(--text-mute)">Hover to inspect</span>
          </div>
          <div className="grid grid-cols-8 gap-3">
            {mockTrophies.map((t, i) => <Trophy key={i} {...t} />)}
          </div>
        </Glass>

        <div className="grid grid-cols-[1.3fr_1fr] gap-5">
          <Glass className="p-5">
            <Eyebrow>◆ RECENT BATTLES</Eyebrow>
            <div className="flex flex-col gap-2">
              {mockRecentMatches.map((m, i) => <MatchRow key={i} {...m} />)}
            </div>
          </Glass>
          <Glass className="p-5">
            <Eyebrow>◆ SEASON GOALS</Eyebrow>
            {mockGoals.map((g, i) => <Goal key={i} {...g} />)}
          </Glass>
        </div>
      </div>
    </div>
  );
}

export default DashboardShelf;
