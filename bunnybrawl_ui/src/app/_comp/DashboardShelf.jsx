// DashboardShelf.jsx — DashboardShelf component

import SceneBG from './SceneBG';
import TopNav from './TopNav';
import Eyebrow from './Eyebrow';
import NeonChip from './NeonChip';
import StatBlock from './StatBlock';
import XPBar from './XPBar';
import MatchRow from './MatchRow';
import Trophy from './Trophy';
import Goal from './Goal';
import BrawlerBunny from './BrawlerBunny';
import Icon from './Icon';
import { mockUser, mockStats, mockRecentMatches, mockTrophies, mockGoals } from './mockData';

export function DashboardShelf({ onNav }) {
  const user = mockUser;
  const stats = mockStats;
  const recentMatches = mockRecentMatches;
  const trophies = mockTrophies;
  const goals = mockGoals;

  return (
    <div className="screen">
        \
        
      <SceneBG particleCount={20} />
      <TopNav onNav={onNav} active="dashboard" />

      <div style={{ padding: '32px 40px', height:'calc(100% - 64px)', overflow:'auto' }} className="scroll">
        {/* Banner */}
        <div className="glass" style={{
          padding: '28px 32px', marginBottom: 22,
          background: 'linear-gradient(120deg, rgba(94,246,255,.08), rgba(255,79,216,.08))',
          borderColor: 'rgba(94,246,255,.3)',
          display:'grid', gridTemplateColumns: '1fr auto', gap: 24, alignItems:'center',
        }}>
          <div>
            <Eyebrow>◆ HELLO, BRAWLER</Eyebrow>
            <h1 className="display" style={{ fontSize: 42, marginTop: 6 }}>
              You're <span style={{ color:'var(--neon-cyan)' }}>3 wins</span> from Diamond tier.
            </h1>
            <div style={{ color:'var(--text-dim)', marginTop: 8, fontSize: 14 }}>
              <span style={{ fontFamily:'var(--font-hand)', fontSize: 20, color:'var(--neon-gold)' }}>"The harder the battle, the sweeter the victory."</span>
            </div>
            <div className="row gap-10" style={{ marginTop: 16 }}>
              <button className="btn btn-primary" onClick={() => onNav('quiz')}><Icon name="sword"/> Start Match</button>
              <button className="btn btn-ghost" onClick={() => onNav('solo')}><Icon name="spark"/> Solo Practice</button>
            </div>
          </div>
          <div style={{ position:'relative' }}>
            <BrawlerBunny size={160} expression="cheer" />
          </div>
        </div>

        {/* Stats row */}
        <div style={{ display:'grid', gridTemplateColumns:'repeat(5,1fr)', gap: 14, marginBottom: 22 }}>
          <StatBlock label="Level" value={user.level} accent="gold" sub={`XP ${user.xp}/${user.xpMax}`}/>
          <StatBlock label="Wins" value={stats.wins} accent="cyan" sub="this season"/>
          <StatBlock label="Accuracy" value={`${stats.accuracy}%`} accent="lime" sub="312 answered"/>
          <StatBlock label="Rank" value={`#${stats.rank}`} accent="magenta" sub="Diamond III"/>
          <StatBlock label="Streak" value={`${user.streak}d`} accent="violet" sub="Personal best"/>
        </div>

        {/* Trophy shelf */}
        <div className="glass" style={{ padding: 24, marginBottom: 22 }}>
          <div className="row" style={{ justifyContent:'space-between', marginBottom: 16 }}>
            <Eyebrow>◆ TROPHY SHELF · 14 / 48</Eyebrow>
            <span style={{ fontSize: 11, color:'var(--text-mute)' }}>Hover to inspect</span>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(8, 1fr)', gap: 12 }}>
            {trophies.map((trophy, i) => <Trophy key={i} {...trophy} />)}
          </div>
        </div>

        {/* Recent + goals */}
        <div style={{ display:'grid', gridTemplateColumns:'1.3fr 1fr', gap: 22 }}>
          <div className="glass" style={{ padding: 20 }}>
            <Eyebrow style={{ marginBottom: 12 }}>◆ RECENT BATTLES</Eyebrow>
            <div className="col gap-8">
              {recentMatches.map((match, i) => <MatchRow key={i} {...match} />)}
            </div>
          </div>
          <div className="glass" style={{ padding: 20 }}>
            <Eyebrow style={{ marginBottom: 12 }}>◆ SEASON GOALS</Eyebrow>
            {goals.map((goal, i) => <Goal key={i} {...goal} />)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardShelf;