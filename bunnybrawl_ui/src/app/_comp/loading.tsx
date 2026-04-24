// loading.jsx — Loading screen with running scholar bunny

'use client';
import { useEffect, useState } from 'react';
import SceneBG from './SceneBG';
import BrawlerBunny from './BrawlerBunny';
import XPBar from './XPBar';
import NeonChip from './NeonChip';
import { loadingTips } from './mockData';

function LoadingScreen({ onNav, state = 'running' }) {
  const [tipIdx, setTipIdx] = useState(0);
  const [progress, setProgress] = useState(0);

  const tips = loadingTips;

  useEffect(() => {
    const id = setInterval(() => setTipIdx(i => (i + 1) % tips.length), 2800);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const id = setInterval(() => setProgress(p => (p < 0.96 ? p + 0.02 : p)), 100);
    return () => clearInterval(id);
  }, []);

  const tip = tips[tipIdx];
  const label = state === 'generating' ? 'Generating quiz…'
              : state === 'resting'    ? 'Waiting for opponent…'
              : state === 'rushing'    ? 'Match starting…'
              : 'Loading arena…';

  return (
    <div className="screen loading-screen">
      <SceneBG particleCount={30} grid={true} />

      <div className="loading-inner">
        {/* Corner bunny running */}
        <div className="absolute bottom-7.5 left-7.5 w-130 h-35 overflow-hidden pointer-events-none">
          {/* ground line */}
          <div
            className="absolute bottom-2.5 left-0 right-0 h-0.5"
            style={{
              background: 'linear-gradient(90deg, transparent, var(--neon-cyan), transparent)',
              boxShadow: '0 0 8px var(--neon-cyan)',
            }}
          />
          {/* dust clouds */}
          {[0,1,2,3,4].map(i => (
            <div
              key={i}
              className="absolute rounded-full"
              style={{
                bottom: 14, left: 20 + i * 30,
                width: 6 + i * 2, height: 6 + i * 2,
                background: 'rgba(94,246,255,.2)',
                animation: `dust 1.6s ${i * 0.15}s ease-out infinite`,
              }}
            />
          ))}
          <style>{`
            @keyframes dust {
              0%   { transform: translateX(0) scale(.8);   opacity: .8; }
              100% { transform: translateX(-60px) scale(1.6); opacity: 0; }
            }
            @keyframes runbob {
              0%, 100% { transform: translateY(0) rotate(-2deg); }
              50%       { transform: translateY(-6px) rotate(2deg); }
            }
            @keyframes rest {
              0%, 100% { transform: translateY(0); }
              50%       { transform: translateY(-2px); }
            }
            @keyframes streak {
              0%   { transform: translateX(20px);  opacity: 0; }
              50%  {                                 opacity: .8; }
              100% { transform: translateX(240px); opacity: 0; }
            }
          `}</style>
          {/* bunny */}
          <div
            className="absolute bottom-5 left-15"
            style={{
              animation: state === 'resting' ? 'rest 2.4s ease-in-out infinite' : 'runbob .35s linear infinite',
              filter: 'drop-shadow(0 0 18px rgba(94,246,255,.5)) drop-shadow(0 0 30px rgba(255,79,216,.3))',
            }}
          >
            <BrawlerBunny
              size={110}
              expression={state === 'resting' ? 'rest' : 'run'}
              glow={false}
            />
          </div>
          {/* speed streaks */}
          {[0,1,2].map(i => (
            <div
              key={i}
              className="absolute left-0 w-17.5 h-0.5 opacity-60"
              style={{
                bottom: 40 + i * 22,
                background: 'linear-gradient(90deg, var(--neon-cyan), transparent)',
                animation: `streak 1.2s ${i * 0.2}s linear infinite`,
              }}
            />
          ))}
        </div>

        {/* Center — logo + tip */}
        <div className="text-center z-2 max-w-180 p-10">
          <div className="row justify-center gap-3.5 mb-5">
            <div
              className="w-16 h-16 rounded-[14px] grid place-items-center"
              style={{
                background: 'linear-gradient(135deg, var(--neon-cyan), var(--neon-magenta))',
                boxShadow: 'var(--glow-cyan)',
              }}
            >
              <BrawlerBunny size={52} glow={false} />
            </div>
          </div>

          <div
            className="font-pixel-mini text-[10px] tracking-[.3em] text-(--neon-cyan)"
            style={{ textShadow: 'var(--glow-cyan)' }}
          >
            {label.toUpperCase()} <span className="blink">▮</span>
          </div>

          <h1
            className="font-hand text-[56px] font-bold text-(--neon-gold) mt-5.5 leading-none"
            style={{ textShadow: '0 0 20px rgba(255,209,102,.4)' }}
          >
            "{tip.idiom}"
          </h1>
          <p className="text-[17px] text-(--text-dim) mt-3.5 max-w-135 mx-auto leading-relaxed">
            {tip.sub}
          </p>

          {/* Progress bar */}
          <div className="mt-10 max-w-110 mx-auto">
            <XPBar pct={progress} height={12} />
            <div className="row justify-between mt-2 font-pixel-mini text-[8px] tracking-[.2em] text-(--text-mute)">
              <span>FORGING QUESTIONS</span>
              <span className="text-(--neon-cyan)">{Math.round(progress * 100)}%</span>
            </div>
          </div>

          {/* affirmation chips */}
          <div className="row gap-8 justify-center mt-7 flex-wrap">
            <NeonChip color="cyan">◆ YOU'VE GOT THIS</NeonChip>
            <NeonChip color="magenta">◆ ONE STEP AT A TIME</NeonChip>
            <NeonChip color="gold">★ FOCUS ON THE GAINS</NeonChip>
          </div>
        </div>
      </div>

      {/* bottom tip */}
      <div className="absolute bottom-5.5 right-7.5 font-pixel-mini text-[8px] tracking-[.2em] text-(--text-mute)">
        TIP · SPACE = PASS · 1-4 = ANSWER
      </div>
    </div>
  );
}

export default LoadingScreen;
