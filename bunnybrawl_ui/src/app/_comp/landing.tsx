// landing.jsx — Landing page (Hero variation)

import SceneBG from './SceneBG';
import TopNav from './TopNav';
import BrawlerBunny from './BrawlerBunny';
import Icon from './Icon';
import Eyebrow from './Eyebrow';

function LandingHero({ onNav }) {
  return (
    <div className="screen flex flex-col">
      <SceneBG particleCount={48} />
      <TopNav onNav={onNav} active="landing" />

      <div className="flex-1 grid place-items-center relative px-15 pt-5 pb-15">
        <div className="text-center max-w-225 z-2">
          <Eyebrow className="mb-5">◆ Season 4 · Live Now · 12,482 online</Eyebrow>

          <div className="inline-flex items-center gap-6 mb-4.5">
            <div style={{ filter: 'drop-shadow(0 0 30px rgba(255,79,216,.5))' }}>
              <BrawlerBunny size={160} expression="cheer" />
            </div>
          </div>

          <h1 className="display mt-2.5" style={{ fontSize: 92, lineHeight: 0.92 }}>
            <span className="text-(--text)">Compete. </span>
            <span style={{
              background: 'linear-gradient(135deg, var(--neon-cyan), var(--neon-magenta))',
              WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent',
              textShadow: '0 0 32px rgba(94,246,255,.3)',
            }}>Learn.</span>
            <span style={{ color: 'var(--neon-gold)', textShadow: '0 0 24px rgba(255,209,102,.4)' }}> Win.</span>
          </h1>

          <p className="text-[20px] text-(--text-dim) max-w-155 mx-auto mt-5.5 mb-8 leading-relaxed">
            Challenge other students, sharpen your edge, and level up. The harder the battle, the sweeter the victory.
          </p>

          <div className="row gap-14 justify-center">
            <button className="btn btn-primary" onClick={() => onNav('quiz')}>
              <Icon name="sword" /> Start Game
            </button>
            <button className="btn btn-magenta" onClick={() => onNav('quiz')}>
              <Icon name="users" /> Join Match
            </button>
            <button className="btn btn-ghost" onClick={() => onNav('solo')}>
              <Icon name="spark" /> Solo Play
            </button>
          </div>

          <div className="row gap-28 justify-center mt-12.5 text-(--text-mute) text-[13px]">
            <LandingStat num="1.2M" label="Matches / week" />
            <LandingDivider />
            <LandingStat num="48K" label="Active brawlers" />
            <LandingDivider />
          </div>
        </div>

        <FloatingHudCard style={{ top: 90, left: 60 }}    label="LIVE MATCH" title="AP Bio · Round 3" bunnyExp="run"   color="cyan" />
        <FloatingHudCard style={{ top: 120, right: 50 }}  label="RANK UP"    title="+42 XP earned"   bunnyExp="cheer" color="gold" />
        <FloatingHudCard style={{ bottom: 90, left: 80 }} label="STREAK"     title="7 days strong"   bunnyExp="ready" color="magenta" />
      </div>
    </div>
  );
}

function LandingStat({ num, label }) {
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

function FloatingHudCard({ style, label, title, bunnyExp, color }) {
  const colorMap = { cyan: 'rgba(94,246,255,.5)', magenta: 'rgba(255,79,216,.5)', gold: 'rgba(255,209,102,.5)' };
  return (
    <div
      className="glass bob absolute flex items-center gap-2.5 px-3.5 py-2.5"
      style={{ borderColor: colorMap[color], ...style }}
    >
      <div
        className="w-8.5 h-8.5 rounded-lg overflow-hidden grid place-items-center shrink-0"
        style={{ background: 'linear-gradient(135deg, var(--bg-2), var(--bg-1))' }}
      >
        <BrawlerBunny size={32} expression={bunnyExp} glow={false} />
      </div>
      <div>
        <div className="font-pixel-mini text-[8px] tracking-[.15em] text-(--text-mute)">{label}</div>
        <div className="text-[13px] font-semibold">{title}</div>
      </div>
    </div>
  );
}

export default LandingHero;
