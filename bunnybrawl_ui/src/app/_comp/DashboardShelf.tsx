import SceneBG from './SceneBG';
import TopNav from './TopNav';
import Eyebrow from './Eyebrow';
import StatBlock from './StatBlock';
import MatchRow from './MatchRow';
import Trophy from './Trophy';
import Goal from './Goal';
import BrawlerBunny from './BrawlerBunny';
import Icon from './Icon';
import { mockUser, mockStats, mockRecentMatches, mockTrophies, mockGoals } from './mockData';

export function DashboardShelf({ onNav }) {
  const user = mockUser;
  const stats = mockStats;

  return (
    <div className="screen">
      <SceneBG particleCount={20} />
      <TopNav onNav={onNav} active="dashboard" />

      <div className="scroll px-10 py-8 h-[calc(100%-64px)] overflow-auto">
        {/* Banner */}
        <div
          className="glass grid grid-cols-[1fr_auto] gap-6 items-center mb-5.5 px-8 py-7 border-(--neon-cyan)/30"
          style={{ background: 'linear-gradient(120deg, rgba(94,246,255,.08), rgba(255,79,216,.08))' }}
        >
          <div>
            <Eyebrow>◆ HELLO, BRAWLER</Eyebrow>
            <h1 className="display text-[42px] mt-1.5">
              You're <span className="text-(--neon-cyan)">3 wins</span> from Diamond tier.
            </h1>
            <div className="text-(--text-dim) text-sm mt-2">
              <span className="font-hand text-xl text-(--neon-gold)">
                "The harder the battle, the sweeter the victory."
              </span>
            </div>
            <div className="row gap-2.5 mt-4">
              <button className="btn btn-primary" onClick={() => onNav('quiz')}>
                <Icon name="sword" /> Start Match
              </button>
              <button className="btn btn-ghost" onClick={() => onNav('solo')}>
                <Icon name="spark" /> Solo Practice
              </button>
            </div>
          </div>
          <div className="relative">
            <BrawlerBunny size={160} expression="cheer" />
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-5 gap-3.5 mb-5.5">
          <StatBlock label="Level" value={user.level} accent="gold" sub={`XP ${user.xp}/${user.xpMax}`} />
          <StatBlock label="Wins" value={stats.wins} accent="cyan" sub="this season" />
          <StatBlock label="Accuracy" value={`${stats.accuracy}%`} accent="lime" sub="312 answered" />
          <StatBlock label="Rank" value={`#${stats.rank}`} accent="magenta" sub="Diamond III" />
          <StatBlock label="Streak" value={`${user.streak}d`} accent="violet" sub="Personal best" />
        </div>

        {/* Trophy shelf */}
        <div className="glass p-6 mb-5.5">
          <div className="flex justify-between mb-4">
            <Eyebrow>◆ TROPHY SHELF · 14 / 48</Eyebrow>
            <span className="text-[11px] text-(--text-mute)">Hover to inspect</span>
          </div>
          <div className="grid grid-cols-8 gap-3">
            {mockTrophies.map((trophy, i) => (
              <Trophy key={i} {...trophy} />
            ))}
          </div>
        </div>

        {/* Recent + goals */}
        <div className="grid grid-cols-[1.3fr_1fr] gap-5.5">
          <div className="glass p-5">
            <Eyebrow className="mb-3">◆ RECENT BATTLES</Eyebrow>
            <div className="col gap-8">
              {mockRecentMatches.map((match, i) => (
                <MatchRow key={i} {...match} />
              ))}
            </div>
          </div>
          <div className="glass p-5">
            <Eyebrow className="mb-3">◆ SEASON GOALS</Eyebrow>
            {mockGoals.map((goal, i) => (
              <Goal key={i} {...goal} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardShelf;
