// result.jsx — Win/Lose result screen

import SceneBG from './SceneBG';
import TopNav from './TopNav';
import Icon from './Icon';
import XPBar from './XPBar';
import PixelAvatar from './PixelAvatar';
import Confetti from './Confetti';

function ResultScreen({ onNav, outcome = 'win' }) {
  const win = outcome === 'win';
  return (
    <div className="screen">
      <SceneBG particleCount={18} streaks={false} />
      {win && <Confetti count={60} />}
      <TopNav onNav={onNav} active="quiz" />

      <div
        className="flex flex-col items-center justify-center px-10 pb-10"
        style={{ height: 'calc(100% - 64px)', padding: '20px 40px 40px' }}
      >
        <div className="text-center max-w-250 w-full">
          {/* Banner */}
          <div className="relative inline-block">
            <div
              className="absolute -inset-7.5 blur-[20px]"
              style={{ background: win ? 'radial-gradient(circle, rgba(255,209,102,.4), transparent 70%)' : 'radial-gradient(circle, rgba(255,85,119,.3), transparent 70%)' }}
            />
            <h1
              className="display relative"
              style={{
                fontSize: 140, lineHeight: 0.9, letterSpacing: '-.04em',
                background: win ? 'linear-gradient(135deg, var(--neon-gold), var(--neon-magenta))' : 'linear-gradient(135deg, var(--danger), #8a4a88)',
                WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent',
                textShadow: win ? '0 0 60px rgba(255,209,102,.4)' : '0 0 60px rgba(255,85,119,.4)',
              }}
            >
              {win ? 'VICTORY!' : 'DEFEAT'}
            </h1>
          </div>

          <div className="font-hand text-[28px] text-(--neon-cyan) mt-1">
            {win ? '"The harder the battle, the sweeter the victory."' : '"Smooth seas never made a skilled sailor."'}
          </div>

          {/* Score comparison */}
          <div
            className="grid gap-6 items-center mt-9 mx-auto"
            style={{ gridTemplateColumns: '1fr auto 1fr', maxWidth: 820 }}
          >
            <SideCard you score={8} acc={80} color="cyan" won={win}
              avatar={{ hair: 'spike', hairColor: '#ffd166', outfit: 'hoodie', outfitColor: '#ff4fd8', accessory: 'glasses' }}
              name="KAI" handle="@kai_q" />
            <div className="font-pixel text-[44px] text-(--text-mute)">VS</div>
            <SideCard you={false} score={5} acc={50} color="magenta" won={!win}
              avatar={{ hair: 'mohawk', hairColor: '#5ef6ff', outfit: 'jacket', outfitColor: '#ff4fd8', accessory: 'visor', effect: 'flame' }}
              name="NOVA" handle="@neon_nova" />
          </div>

          {/* Rewards */}
          <div className="glass grid gap-3.5 p-[20px_24px] mx-auto mt-8" style={{ gridTemplateColumns: 'repeat(4,1fr)', maxWidth: 820 }}>
            <Reward label="XP EARNED" value="+128"                   color="cyan"                    icon="spark" />
            <Reward label="RANK"      value={win ? '+12' : '−4'}     color={win ? 'gold' : 'magenta'} icon="up" />
            <Reward label="STREAK"    value={win ? '8 DAYS' : 'RESET'} color={win ? 'magenta' : 'muted'} icon="flame" />
            <Reward label="BADGE"     value={win ? 'CENTURION' : '—'} color={win ? 'gold' : 'muted'}  icon="medal" />
          </div>

          {/* XP bar */}
          <div className="max-w-125 mx-auto mt-6">
            <div className="flex justify-between mb-2">
              <span className="font-pixel-mini text-[9px] tracking-[.15em] text-(--text-dim)">LV 24 → LV 25</span>
              <span className="font-pixel text-sm text-(--neon-cyan)">2,480 / 3,000 XP</span>
            </div>
            <XPBar pct={0.83} height={16} />
          </div>

          {/* Actions */}
          <div className="row gap-12 justify-center mt-8">
            <button className="btn btn-primary"  onClick={() => onNav('quiz')}>        <Icon name="sword" />  Play Again   </button>
            <button className="btn btn-ghost"    onClick={() => onNav('dashboard')}>   <Icon name="user" />   Dashboard    </button>
            <button className="btn btn-ghost"    onClick={() => onNav('leaderboard')}> <Icon name="trophy" /> Leaderboard  </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function SideCard({ you, score, acc, color, won, avatar, name, handle }) {
  const colorMap = {
    cyan:    { c: 'var(--neon-cyan)',    g: '0 0 30px rgba(94,246,255,.3)' },
    magenta: { c: 'var(--neon-magenta)', g: '0 0 30px rgba(255,79,216,.3)' },
  };
  const c = colorMap[color];
  return (
    <div
      className="glass p-5 text-center relative"
      style={{ borderColor: won ? 'var(--neon-gold)' : c.c, boxShadow: won ? '0 0 40px rgba(255,209,102,.25)' : 'none' }}
    >
      {won && (
        <div
          className="absolute -top-3.5 left-1/2 -translate-x-1/2 font-pixel-mini text-[9px] tracking-[.2em] px-2.5 py-1 rounded-sm"
          style={{ background: 'var(--neon-gold)', color: '#2a1a00', boxShadow: '0 0 14px rgba(255,209,102,.6)' }}
        >
          WINNER
        </div>
      )}
      <div className="flex justify-center mb-3">
        <div
          className="pix-frame"
          style={{ padding: 3, background: `linear-gradient(135deg, ${c.c}, ${c.c}88)`, boxShadow: c.g }}
        >
          <div className="pix-inner" style={{ padding: 4 }}>
            <PixelAvatar size={90} {...avatar} />
          </div>
        </div>
      </div>
      <div className="text-base font-bold">{name}{you && ' (YOU)'}</div>
      <div className="text-[11px] text-(--text-dim)">{handle}</div>
      <div className="font-pixel text-[54px] mt-2.5" style={{ color: c.c, textShadow: `0 0 18px ${c.c}` }}>{score}</div>
      <div className="font-pixel-mini text-[8px] tracking-[.2em] text-(--text-mute) -mt-1">/ 10 CORRECT</div>
      <div className="flex justify-center gap-3 mt-2.5 text-[11px] text-(--text-dim)">
        <span>ACC {acc}%</span><span>·</span><span>AVG {(12 + Math.random() * 4).toFixed(1)}s</span>
      </div>
    </div>
  );
}

function Reward({ label, value, color, icon }) {
  const colorMap = {
    cyan: 'var(--neon-cyan)', magenta: 'var(--neon-magenta)', gold: 'var(--neon-gold)',
    lime: 'var(--neon-lime)', violet: 'var(--neon-violet)',   muted: 'var(--text-mute)',
  };
  const c = colorMap[color];
  return (
    <div className="px-1.5 py-2.5 text-center border-r border-(--border)">
      <div className="flex justify-center mb-1.5" style={{ color: c }}>
        <Icon name={icon} size={18} />
      </div>
      <div className="font-pixel text-[22px]" style={{ color: c, textShadow: `0 0 12px ${c}55` }}>{value}</div>
      <div className="font-pixel-mini text-[8px] tracking-[.15em] text-(--text-mute) mt-0.5">{label}</div>
    </div>
  );
}

export default ResultScreen;
