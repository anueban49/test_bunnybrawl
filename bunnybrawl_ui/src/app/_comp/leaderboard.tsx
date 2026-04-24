// leaderboard.jsx — Global leaderboard

import SceneBG from './SceneBG';
import TopNav from './TopNav';
import Eyebrow from './Eyebrow';
import NeonChip from './NeonChip';
import PixelAvatar from './PixelAvatar';
import Icon from './Icon';

const players = [
  { rank: 1, name: 'NEON_NOVA',     handle: '@neon_nova',    xp: 48230, wins: 312, acc: 91, avatar: { hair: 'mohawk', hairColor: '#ff4fd8', outfit: 'jacket', outfitColor: '#5ef6ff', accessory: 'visor', effect: 'flame' } },
  { rank: 2, name: 'PIXEL_WRAITH',  handle: '@pixel_wraith', xp: 44120, wins: 289, acc: 88, avatar: { hair: 'long',   hairColor: '#9f7bff', outfit: 'robe',   outfitColor: '#ffd166', accessory: 'crown' } },
  { rank: 3, name: 'QUIZZARD_99',   handle: '@quizzard_99',  xp: 41860, wins: 271, acc: 87, avatar: { hair: 'spike',  hairColor: '#ffd166', outfit: 'hoodie', outfitColor: '#ff4fd8', accessory: 'glasses' } },
  { rank: 4, name: 'ZENITH_OWL',    handle: '@zenith_owl',   xp: 39200, wins: 258, acc: 85, avatar: { hair: 'bob',    hairColor: '#5ef6ff', outfit: 'tee',    outfitColor: '#9f7bff' } },
  { rank: 5, name: 'ASHRAM_K',      handle: '@ashram.k',     xp: 37480, wins: 241, acc: 83, avatar: { hair: 'buzz',   hairColor: '#1a1024', outfit: 'jacket', outfitColor: '#b6ff6e' } },
  { rank: 6, name: 'RIO_FLARE',     handle: '@rioflare',     xp: 35100, wins: 233, acc: 82, avatar: { hair: 'mohawk', hairColor: '#ff9566', outfit: 'tee',    outfitColor: '#ff4fd8', effect: 'flame' } },
  { rank: 7, name: 'MIKA_SOL',      handle: '@mikasol',      xp: 33720, wins: 224, acc: 81, avatar: { hair: 'long',   hairColor: '#ffd166', outfit: 'robe',   outfitColor: '#9f7bff' } },
  { rank: 8, name: 'YUI_HART',      handle: '@yui_hart',     xp: 32010, wins: 219, acc: 80, avatar: { hair: 'bob',    hairColor: '#1a1024', outfit: 'hoodie', outfitColor: '#5ef6ff', accessory: 'headset' } },
  { rank: 9, name: 'KAI (YOU)',     handle: '@kai_q',        xp: 29840, wins: 47,  acc: 82, you: true, avatar: { hair: 'spike', hairColor: '#ffd166', outfit: 'hoodie', outfitColor: '#ff4fd8', accessory: 'glasses' } },
  { rank: 10, name: 'DAN_BRAVE',   handle: '@danbrave',     xp: 28500, wins: 205, acc: 79, avatar: { hair: 'buzz',   hairColor: '#9f7bff', outfit: 'jacket', outfitColor: '#ffd166' } },
];

function Leaderboard({ onNav }) {
  const podium = players.slice(0, 3);

  return (
    <div className="screen">
      <SceneBG particleCount={26} />
      <TopNav onNav={onNav} active="leaderboard" />

      <div className="scroll overflow-auto px-10 py-6" style={{ height: 'calc(100% - 64px)', padding: '24px 40px 40px' }}>
        <div className="max-w-300 mx-auto">
          {/* Header */}
          <div className="flex justify-between mb-5">
            <div>
              <Eyebrow>◆ GLOBAL LEADERBOARD · SEASON 4</Eyebrow>
              <h1 className="display mt-1" style={{ fontSize: 42 }}>The sharpest minds on the platform.</h1>
            </div>
            <div className="row gap-8">
              {['Global', 'Friends', 'School', 'Grade'].map((t, i) => (
                <button
                  key={t}
                  className="px-3.5 py-2 rounded-lg cursor-pointer font-semibold text-xs transition-all"
                  style={{
                    background: i === 0 ? 'rgba(94,246,255,.1)' : 'rgba(255,255,255,.02)',
                    border: `1px solid ${i === 0 ? 'var(--neon-cyan)' : 'var(--border)'}`,
                    color: i === 0 ? 'var(--neon-cyan)' : 'var(--text-dim)',
                  }}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          {/* Podium */}
          <div className="grid gap-4 items-end mb-6" style={{ gridTemplateColumns: '1fr 1.15fr 1fr' }}>
            <PodiumCard p={podium[1]} place={2} height={170} color="cyan" />
            <PodiumCard p={podium[0]} place={1} height={220} color="gold" />
            <PodiumCard p={podium[2]} place={3} height={140} color="magenta" />
          </div>

          {/* List */}
          <div className="glass p-1">
            <div
              className="flex px-4.5 py-2.5 font-pixel-mini text-[9px] tracking-[.2em] text-(--text-mute) border-b border-(--border)"
            >
              <div className="w-12.5">RANK</div>
              <div className="flex-1">BRAWLER</div>
              <div className="w-25 text-right">WINS</div>
              <div className="w-25 text-right">ACCURACY</div>
              <div className="w-35 text-right">XP</div>
              <div className="w-15" />
            </div>
            {players.slice(3).map(p => <LeaderRow key={p.rank} p={p} />)}
          </div>
        </div>
      </div>
    </div>
  );
}

function PodiumCard({ p, place, height, color }) {
  const colorMap = {
    gold:    { g: 'linear-gradient(180deg, rgba(255,209,102,.25), rgba(255,209,102,.05))', b: 'var(--neon-gold)',    t: 'var(--neon-gold)' },
    cyan:    { g: 'linear-gradient(180deg, rgba(94,246,255,.2),   rgba(94,246,255,.05))',  b: 'var(--neon-cyan)',    t: 'var(--neon-cyan)' },
    magenta: { g: 'linear-gradient(180deg, rgba(255,79,216,.2),   rgba(255,79,216,.05))',  b: 'var(--neon-magenta)', t: 'var(--neon-magenta)' },
  };
  const c = colorMap[color];
  return (
    <div className="text-center relative">
      <div className="relative mb-2 flex justify-center">
        {place === 1 && (
          <div className="absolute -top-3.5 z-2" style={{ filter: 'drop-shadow(0 0 12px var(--neon-gold))' }}>
            <Icon name="crown" size={36} color="var(--neon-gold)" />
          </div>
        )}
        <div
          className="pix-frame"
          style={{ padding: 4, background: `linear-gradient(135deg, ${c.b}, ${c.b}66)`, boxShadow: `0 0 30px ${c.b}66` }}
        >
          <div className="pix-inner" style={{ padding: 6 }}>
            <PixelAvatar size={96} {...p.avatar} />
          </div>
        </div>
      </div>
      <div className="text-base font-bold mb-0.5">{p.name}</div>
      <div className="text-[11px] text-(--text-dim) mb-2.5">{p.handle}</div>

      <div
        className="flex flex-col items-center justify-start relative overflow-hidden pt-4.5 px-2.5 pb-2.5 rounded-t-xl"
        style={{ height, background: c.g, border: `1px solid ${c.b}55`, borderBottom: 'none' }}
      >
        <div className="font-pixel-mini text-[40px]" style={{ color: c.t, textShadow: `0 0 20px ${c.b}` }}>#{place}</div>
        <div className="font-pixel text-[22px] text-(--text) mt-2">{p.xp.toLocaleString()}</div>
        <div className="font-pixel-mini text-[8px] tracking-[.2em] text-(--text-dim)">XP</div>
        <div className="absolute bottom-0 left-0 right-0 h-0.5" style={{ background: c.b, boxShadow: `0 0 12px ${c.b}` }} />
      </div>
    </div>
  );
}

function LeaderRow({ p }) {
  const you = p.you;
  return (
    <div
      className="flex items-center px-4.5 py-2.5"
      style={{
        background:   you ? 'linear-gradient(90deg, rgba(94,246,255,.08), rgba(255,79,216,.05))' : 'transparent',
        border:       you ? '1px solid var(--neon-cyan)' : '1px solid transparent',
        borderRadius: you ? 10 : 0,
        margin:       you ? '4px 6px' : 0,
        boxShadow:    you ? '0 0 20px rgba(94,246,255,.15)' : 'none',
        borderBottom: you ? '1px solid var(--neon-cyan)' : '1px solid var(--border)',
      }}
    >
      <div
        className="w-12.5 font-pixel text-[20px]"
        style={{ color: you ? 'var(--neon-cyan)' : 'var(--text-dim)' }}
      >
        #{p.rank}
      </div>
      <div className="flex-1 flex items-center gap-3 min-w-0">
        <div
          className="p-0.5 rounded-lg shrink-0"
          style={{ background: you ? 'linear-gradient(135deg, var(--neon-cyan), var(--neon-magenta))' : 'var(--border)' }}
        >
          <div className="p-0.5 rounded-md" style={{ background: 'var(--bg-2)' }}>
            <PixelAvatar size={42} {...p.avatar} />
          </div>
        </div>
        <div className="min-w-0">
          <div className="row gap-6">
            <div className="text-sm font-bold" style={{ color: you ? 'var(--neon-cyan)' : 'var(--text)' }}>{p.name}</div>
            {you && <NeonChip color="cyan" style={{ padding: '2px 6px', fontSize: 7 }}>YOU</NeonChip>}
          </div>
          <div className="text-[11px] text-(--text-dim)">{p.handle}</div>
        </div>
      </div>
      <div className="w-25 text-right font-pixel text-base text-(--text)">{p.wins}</div>
      <div className="w-25 text-right font-pixel text-base" style={{ color: p.acc > 85 ? 'var(--win)' : 'var(--text)' }}>{p.acc}%</div>
      <div className="w-35 text-right font-pixel text-[18px] text-(--neon-gold)" style={{ textShadow: '0 0 10px rgba(255,209,102,.3)' }}>
        {p.xp.toLocaleString()}
      </div>
      <div className="w-15 text-right">
        {!you && (
          <button className="bg-transparent border border-(--border) text-(--text-dim) rounded-md px-2 py-1 text-[10px] cursor-pointer font-pixel-mini tracking-[.15em]">
            DUEL
          </button>
        )}
      </div>
    </div>
  );
}

export default Leaderboard;
