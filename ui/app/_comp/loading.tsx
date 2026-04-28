// loading.tsx — Loading screen component for Bunny Brawl.

'use client';
import { useEffect, useState } from 'react';
import SceneBG from './SceneBG';
import BrawlerBunny from './BrawlerBunny';
import XPBar from './XPBar';
import NeonChip from './NeonChip';
import { loadingTips } from '../mocks/loadingTips';

type LoadingState = 'running' | 'generating' | 'resting' | 'rushing';

interface LoadingScreenProps {
  onNav?: () => void;
  state?: LoadingState;
}

const LABELS: Record<LoadingState, string> = {
  running: 'Loading arena…',
  generating: 'Generating quiz…',
  resting: 'Waiting for opponent…',
  rushing: 'Match starting…',
};

function LoadingScreen({ state = 'running' }: LoadingScreenProps) {
  const [tipIndex, setTipIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const token = window.setInterval(() => {
      setTipIndex((current) => (current + 1) % loadingTips.length);
    }, 2800);
    return () => window.clearInterval(token);
  }, []);

  useEffect(() => {
    const token = window.setInterval(() => {
      setProgress((current) => (current < 0.96 ? current + 0.02 : current));
    }, 100);
    return () => window.clearInterval(token);
  }, []);

  const tip = loadingTips[tipIndex];
  const label = LABELS[state];
  const bunnyClass = state === 'resting' ? 'loading-bunny loading-resting' : 'loading-bunny';

  return (
    <div className="screen loading-screen">
      <SceneBG particleCount={30} grid />

      <div className="loading-inner">
        <div className="loading-runner">
          <div className="loading-ground" />

          <div className="loading-dust">
            {[...Array(5)].map((_, index) => (
              <span key={index} className={`loading-dust-dot loading-dust-${index + 1}`} />
            ))}
          </div>

          <div className={bunnyClass}>
            <BrawlerBunny
              size={110}
              expression={state === 'resting' ? 'rest' : 'run'}
              glow={false}
            />
          </div>

          <div className="loading-streaks">
            {[...Array(3)].map((_, index) => (
              <span key={index} className={`loading-streak loading-streak-${index + 1}`} />
            ))}
          </div>
        </div>

        <div className="loading-hero">
          <div className="loading-logo">
            <BrawlerBunny size={52} glow={false} />
          </div>

          <div className="loading-label">
            {label.toUpperCase()} <span className="blink">▮</span>
          </div>

          <h1 className="loading-title">"{tip.idiom}"</h1>
          <p className="loading-copy">{tip.sub}</p>

          <div className="loading-progress">
            <XPBar pct={progress} height={12} />
            <div className="loading-progress-meta">
              <span>FORGING QUESTIONS</span>
              <span>{Math.round(progress * 100)}%</span>
            </div>
          </div>

          <div className="loading-chips">
            <NeonChip color="cyan">◆ YOU'VE GOT THIS</NeonChip>
            <NeonChip color="magenta">◆ ONE STEP AT A TIME</NeonChip>
            <NeonChip color="gold">★ FOCUS ON THE GAINS</NeonChip>
          </div>
        </div>
      </div>

      <div className="loading-footer">TIP · SPACE = PASS · 1-4 = ANSWER</div>
    </div>
  );
}

export default LoadingScreen;
