// DashboardCommand.jsx — DashboardCommand component

import SceneBG from './SceneBG';
import TopNav from './TopNav';
import Eyebrow from './Eyebrow';
import PixelAvatar from './PixelAvatar';
import NeonChip from './NeonChip';
import XPBar from './XPBar';
import QuickPlayTile from './QuickPlayTile';
import StatBlock from './StatBlock';
import MatchRow from './MatchRow';
import FriendRow from './FriendRow';
import Icon from './Icon';
import { mockUser, mockStats, mockRecentMatches, mockFriendsOnline } from './mockData';

function DashboardCommand({ onNav }) {
  const user = mockUser;
  const stats = mockStats;
  const recentMatches = mockRecentMatches;
  const friendsOnline = mockFriendsOnline;

  return (
    <div className="screen">
      <SceneBG particleCount={24} streaks={false} />
      <TopNav onNav={onNav} active="dashboard" />

      <div className="scroll dashboard-grid">
        {/* LEFT — Player card */}
        <div className="glass panel-card">
          <Eyebrow className="mb-10">◆ OPERATOR</Eyebrow>
          <div className="grid-center">
            <div className="pix-frame pix-frame-sm">
              <div className="pix-inner pix-inner-sm">
                <PixelAvatar size={160} {...user.avatar} />
              </div>
            </div>
          </div>
          <div className="text-center">
            <div className="title-22">{user.name}</div>
            <div className="subtitle-mini">{user.handle} · {user.title}</div>
          </div>

          <div className="row gap-8 justify-center">
            <NeonChip color="gold">LV. {user.level}</NeonChip>
            <NeonChip color="magenta">FLAME {user.streak}d STREAK</NeonChip>
          </div>

          <div>
            <div className="row justify-between dashboard-caption-row">
              <span>XP · {user.xp} / {user.xpMax}</span>
              <span className="text-highlight">{user.xpMax - user.xp} to LV.{user.level+1}</span>
            </div>
            <XPBar pct={user.xp/user.xpMax} height={16} />
          </div>

          <button className="btn btn-ghost" onClick={() => onNav('avatar')}>
            <Icon name="wand" size={16}/> Customize Avatar
          </button>
        </div>

        {/* MIDDLE — Quick play + recent + subjects */}
        <div className="col gap-20 panel-body">
          <div className="row gap-16 items-end">
            <div>
              <Eyebrow className="mb-8">◆ WELCOME BACK</Eyebrow>
              <h1 className="display title-xl">Ready to brawl, {user.name.split(' ')[0]}?</h1>
              <div className="dashboard-hero-copy">
                <span className="gold-quote">"No pain, no gain."</span> Your brain is warmed up.
              </div>
            </div>
          </div>

          {/* Quick-play tiles */}
          <div className="dashboard-quick-grid">
            <QuickPlayTile
              title="Quick Match" subtitle="Jump into a live 1v1" eta="~2 min"
              icon="sword" color="cyan"
              onClick={() => onNav('quiz')}
              primary
            />
            <QuickPlayTile
              title="Solo Play" subtitle="AI-generated from your notes" eta="+5–15 XP"
              icon="spark" color="magenta"
              onClick={() => onNav('solo')}
            />
            <QuickPlayTile
              title="Logbook" subtitle="Open your study notebook" eta="12 entries"
              icon="book" color="gold"
              onClick={() => onNav('logbook')}
            />
          </div>

          {/* Stats */}
          <div>
            <div className="row justify-between dashboard-gap-bottom">
              <Eyebrow>◆ THIS SEASON</Eyebrow>
              <span className="caption-sm">UPDATED JUST NOW</span>
            </div>
            <div className="dashboard-stats-grid">
              <StatBlock label="Wins" value={stats.wins} accent="cyan" sub="↑ 6 this week" />
              <StatBlock label="Accuracy" value={`${stats.accuracy}%`} accent="lime" sub="on 312 questions" />
              <StatBlock label="Rank" value={`#${stats.rank}`} accent="gold" sub="Top 3% · Diamond" />
              <StatBlock label="Win rate" value={`${stats.winRate}%`} accent="magenta" sub="vs 54% avg" />
            </div>
          </div>

          {/* Recent matches */}
          <div className="glass panel-sm">
            <div className="row justify-between dashboard-gap-bottom">
              <Eyebrow>◆ RECENT BATTLES</Eyebrow>
              <button className="ghost-link">
                View all →
              </button>
            </div>
            <div className="col gap-8">
              {recentMatches.map((match, i) => <MatchRow key={i} {...match} />)}
            </div>
          </div>
        </div>

        {/* RIGHT — Daily + challenges */}
        <div className="col gap-16">
          <div className="glass panel-sm">
            <Eyebrow className="mb-10">◆ DAILY QUEST</Eyebrow>
            <div className="text-strong text-sm mb-4">Win 3 Algebra matches</div>
            <div className="caption-xs mb-10">Reward · 120 XP + Rare Badge</div>
            <XPBar pct={0.66} height={10} />
            <div className="row justify-between dashboard-caption-row">
              <span className="text-muted">2 / 3</span>
              <span className="text-gold">18:42:10</span>
            </div>
          </div>

          <div className="glass panel-sm">
            <Eyebrow className="mb-10">◆ WEAKEST SUBJECT</Eyebrow>
            <div className="row gap-10 items-center">
              <div className="badge-box">
                <Icon name="flame" size={22}/>
              </div>
              <div className="flex-1">
                <div className="text-strong text-sm">World History</div>
                <div className="caption-xs">54% accuracy · drill up</div>
              </div>
            </div>
            <button className="btn btn-magenta dashboard-action-btn" onClick={() => onNav('solo')}>
              <Icon name="target" size={14}/> Train this now
            </button>
          </div>

          <div className="glass panel-sm">
            <Eyebrow className="mb-10">◆ FRIENDS ONLINE</Eyebrow>
            <div className="col gap-8">
              {friendsOnline.map((friend, i) => <FriendRow key={i} {...friend} />)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardCommand;