// Leaderboard — global rankings: filter pills + top-3 podium + scrollable list.
"use client";

import SceneBG from "./SceneBG";
import TopNav from "./TopNav";
import Eyebrow from "./Eyebrow";
import Glass from "./Glass";
import PodiumCard from "./leaderboard/PodiumCard";
import LeaderRow from "./leaderboard/LeaderRow";
import { leaderboardPlayers } from "../mocks/leaderboard";

const FILTERS = ["Global", "Friends", "School", "Grade"] as const;

function Leaderboard() {
  const podium = leaderboardPlayers.slice(0, 3);

  return (
    <div className="min-h-screen relative">
      <SceneBG particleCount={26} />
      <TopNav />

      <div className="overflow-auto px-10 py-6 min-h-[calc(100vh-64px)]">
        <div className="max-w-300 mx-auto">
          <div className="flex justify-between mb-5">
            <div>
              <Eyebrow>◆ GLOBAL LEADERBOARD · SEASON 4</Eyebrow>
              <h1 className="font-bold text-[42px] mt-1 leading-tight">The sharpest minds on the platform.</h1>
            </div>
            <div className="flex items-center gap-2">
              {FILTERS.map((t, i) => {
                const on = i === 0;
                return (
                  <button
                    key={t}
                    className={`px-3.5 py-2 rounded-lg cursor-pointer font-semibold text-xs transition-all border ${
                      on ? "bg-(--neon-cyan)/10 border-(--neon-cyan) text-(--neon-cyan)" : "bg-white/2 border-(--border) text-(--text-dim)"
                    }`}
                  >
                    {t}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-[1fr_1.15fr_1fr] gap-4 items-end mb-6">
            <PodiumCard p={podium[1]} place={2} height={170} color="cyan"    />
            <PodiumCard p={podium[0]} place={1} height={220} color="gold"    />
            <PodiumCard p={podium[2]} place={3} height={140} color="magenta" />
          </div>

          <Glass className="p-1">
            <div className="flex items-center px-4 py-2.5 font-pixel-mini text-[9px] tracking-[.2em] text-(--text-mute) border-b border-(--border)">
              <div className="w-12">RANK</div>
              <div className="flex-1">BRAWLER</div>
              <div className="w-25 text-right">WINS</div>
              <div className="w-25 text-right">ACCURACY</div>
              <div className="w-35 text-right">XP</div>
              <div className="w-15" />
            </div>
            {leaderboardPlayers.slice(3).map((p) => <LeaderRow key={p.rank} p={p} />)}
          </Glass>
        </div>
      </div>
    </div>
  );
}

export default Leaderboard;
