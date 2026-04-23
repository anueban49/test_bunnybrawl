// quiz.jsx — Live quiz battle screen

'use client';
import { useState, useEffect } from 'react';
import SceneBG from './SceneBG';
import TopNav from './TopNav';
import Eyebrow from './Eyebrow';
import NeonChip from './NeonChip';
import PixelAvatar from './PixelAvatar';
import TimerRing from './TimerRing';
import Icon from './Icon';

function QuizBattle({ onNav }) {
  const [selected, setSelected] = useState(null);
  const [timer, setTimer] = useState(12);
  const [yourScore] = useState(6);
  const [oppScore] = useState(5);
  const [round] = useState(7);

  useEffect(() => {
    const id = setInterval(() => setTimer(t => (t > 0 ? t - 1 : 12)), 1000);
    return () => clearInterval(id);
  }, []);

  const q = {
    text: 'Which organelle is responsible for producing ATP in eukaryotic cells?',
    subject: 'AP Biology · Cellular Respiration',
    choices: [
      { id: 'a', label: 'Ribosome' },
      { id: 'b', label: 'Mitochondrion' },
      { id: 'c', label: 'Golgi apparatus' },
      { id: 'd', label: 'Endoplasmic reticulum' },
    ],
    correct: 'b',
  };

  return (
    <div className="screen">
      <SceneBG particleCount={26} />
      <TopNav onNav={onNav} active="quiz" />

      <div
        className="grid gap-4 px-8 pb-7"
        style={{ padding: '18px 32px 28px', height: 'calc(100% - 64px)', gridTemplateRows: 'auto 1fr auto' }}
      >
        {/* Top HUD */}
        <div className="flex justify-between gap-5">
          <PlayerHUD side="left" name="Kai Nakamura" handle="@kai_q" level={24}
            score={yourScore} color="cyan"
            avatar={{ hair: 'spike', hairColor: '#ffd166', outfit: 'hoodie', outfitColor: '#ff4fd8', accessory: 'glasses' }} />

          <div className="text-center">
            <Eyebrow className="flex justify-center">◆ ROUND {round} / 10 · {q.subject.split(' · ')[0]}</Eyebrow>
            <div className="font-pixel-mini text-[10px] text-(--text-mute) tracking-[.2em] mt-1.5">BEST OF 10 · RANKED</div>
          </div>

          <PlayerHUD side="right" name="Nova Sarkar" handle="@neon_nova" level={26}
            score={oppScore} color="magenta"
            avatar={{ hair: 'mohawk', hairColor: '#5ef6ff', outfit: 'jacket', outfitColor: '#ff4fd8', accessory: 'visor', effect: 'flame' }} />
        </div>

        {/* Main battle area */}
        <div className="grid relative">
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(94,246,255,.1) 0%, transparent 60%)' }}
          />

          <div
            className="glass flex flex-col items-center mx-auto w-full"
            style={{ padding: '36px 48px', maxWidth: 920, borderColor: 'rgba(94,246,255,.3)' }}
          >
            <div className="flex justify-between w-full mb-6">
              <div>
                <NeonChip color="cyan">◆ QUESTION {round}</NeonChip>
                <div className="text-[11px] text-(--text-dim) mt-1.5">{q.subject}</div>
              </div>
              <div className="row gap-14 items-center">
                <div className="text-right">
                  <div className="font-pixel-mini text-[8px] text-(--text-mute) tracking-[.2em]">TIME LEFT</div>
                  <div className="text-[11px] mt-0.5" style={{ color: timer < 5 ? 'var(--danger)' : 'var(--text-dim)' }}>
                    {timer < 5 ? 'Hurry!' : 'Think it through'}
                  </div>
                </div>
                <TimerRing pct={timer / 12} seconds={timer} size={80} color={timer < 5 ? 'magenta' : 'cyan'} />
              </div>
            </div>

            <div className="text-center py-3 pb-9">
              <h2 style={{ fontSize: 34, fontWeight: 600, lineHeight: 1.25, letterSpacing: '-.01em', maxWidth: 700 }}>
                {q.text}
              </h2>
            </div>

            <div className="grid grid-cols-2 gap-3.5 w-full">
              {q.choices.map((c, i) => (
                <AnswerChoice
                  key={c.id}
                  letter={String.fromCharCode(65 + i)}
                  label={c.label}
                  active={selected === c.id}
                  onClick={() => setSelected(c.id)}
                  correct={!!selected && c.id === q.correct}
                  wrong={selected === c.id && c.id !== q.correct}
                />
              ))}
            </div>

            {selected && (
              <div
                className="mt-5 font-pixel-mini text-[10px] tracking-[.2em]"
                style={{ color: selected === q.correct ? 'var(--win)' : 'var(--danger)' }}
              >
                {selected === q.correct ? '◆ LOCKED IN · WAITING FOR OPPONENT' : '◆ CHANCE SPENT · WAITING'}
              </div>
            )}
          </div>
        </div>

        {/* Score bars */}
        <div className="row gap-20">
          <ScoreBar score={yourScore} max={10} color="cyan"    name="YOU" />
          <div className="font-pixel text-[32px] text-(--text-mute) px-2">{yourScore}–{oppScore}</div>
          <ScoreBar score={oppScore}  max={10} color="magenta" name="NOVA" />
        </div>
      </div>
    </div>
  );
}

function PlayerHUD({ side, name, handle, level, score, color, avatar }) {
  const isLeft = side === 'left';
  const colorMap = {
    cyan:    { glow: '0 0 20px rgba(94,246,255,.4)',  text: 'var(--neon-cyan)',    border: 'rgba(94,246,255,.5)' },
    magenta: { glow: '0 0 20px rgba(255,79,216,.4)', text: 'var(--neon-magenta)', border: 'rgba(255,79,216,.5)' },
  };
  const c = colorMap[color];
  return (
    <div
      className="glass flex gap-3.5 shrink-0 p-3.5"
      style={{
        flexDirection: isLeft ? 'row' : 'row-reverse',
        borderColor: c.border,
        boxShadow: c.glow,
        minWidth: 280,
      }}
    >
      <div
        className="pix-frame shrink-0"
        style={{
          padding: 3, borderRadius: 10,
          background: color === 'cyan'
            ? 'linear-gradient(135deg, var(--neon-cyan), var(--neon-violet))'
            : 'linear-gradient(135deg, var(--neon-magenta), #ff9566)',
        }}
      >
        <div className="pix-inner" style={{ padding: 3, borderRadius: 7 }}>
          <PixelAvatar size={56} {...avatar} />
        </div>
      </div>
      <div className="flex-1" style={{ textAlign: isLeft ? 'left' : 'right' }}>
        <div className="text-sm font-bold">{name}</div>
        <div className="text-[11px] text-(--text-dim)">{handle} · LV {level}</div>
        <div
          className="font-pixel text-[26px] mt-0.5"
          style={{ color: c.text, textShadow: `0 0 10px ${c.text}` }}
        >
          {score}
        </div>
      </div>
    </div>
  );
}

function AnswerChoice({ letter, label, active, onClick, correct, wrong }) {
  let borderC = 'var(--border)';
  let bgC = 'rgba(255,255,255,.02)';
  let glow = 'none';
  let labelC = 'var(--text)';

  if (correct)     { borderC = 'var(--win)';       bgC = 'rgba(90,255,155,.1)';  glow = '0 0 24px rgba(90,255,155,.35)';  labelC = 'var(--win)'; }
  else if (wrong)  { borderC = 'var(--danger)';    bgC = 'rgba(255,85,119,.1)';  glow = '0 0 24px rgba(255,85,119,.35)';  labelC = 'var(--danger)'; }
  else if (active) { borderC = 'var(--neon-cyan)'; bgC = 'rgba(94,246,255,.08)'; glow = '0 0 20px rgba(94,246,255,.3)'; }

  return (
    <button
      onClick={onClick}
      className="flex items-center gap-3.5 text-left cursor-pointer rounded-xl transition-all duration-150 p-[18px_20px]"
      style={{ background: bgC, border: `1.5px solid ${borderC}`, color: labelC, fontFamily: 'var(--font-display)', boxShadow: glow }}
      onMouseEnter={e => { if (!active && !correct && !wrong) { e.currentTarget.style.borderColor = 'var(--neon-cyan)'; e.currentTarget.style.background = 'rgba(94,246,255,.05)'; } }}
      onMouseLeave={e => { if (!active && !correct && !wrong) { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.background = 'rgba(255,255,255,.02)'; } }}
    >
      <div
        className="w-10 h-10 rounded-lg grid place-items-center font-pixel-mini text-sm font-bold shrink-0"
        style={{
          background: correct ? 'var(--win)' : wrong ? 'var(--danger)' : active ? 'var(--neon-cyan)' : 'rgba(255,255,255,.05)',
          color: (correct || wrong || active) ? '#0a0a1a' : 'var(--text-dim)',
        }}
      >
        {letter}
      </div>
      <div className="text-[17px] font-medium flex-1">{label}</div>
      {correct && <Icon name="check" size={22} color="var(--win)" />}
      {wrong   && <Icon name="x"     size={22} color="var(--danger)" />}
    </button>
  );
}

function ScoreBar({ score, max, color, name }) {
  const gradMap = {
    cyan:    'linear-gradient(90deg, var(--neon-cyan), var(--neon-violet))',
    magenta: 'linear-gradient(90deg, var(--neon-magenta), #ff9566)',
  };
  const pct = score / max;
  return (
    <div className="flex-1 flex flex-col">
      <div
        className="flex justify-between mb-1 font-pixel-mini text-[9px] tracking-[.15em]"
      >
        <span style={{ color: `var(--neon-${color})` }}>{name}</span>
        <span className="text-(--text-mute)">{score} / {max}</span>
      </div>
      <div
        className="h-2.5 rounded-md overflow-hidden border border-(--border)"
        style={{ background: 'rgba(0,0,0,.35)' }}
      >
        <div
          className="h-full rounded-md"
          style={{ width: `${pct * 100}%`, background: gradMap[color], boxShadow: `0 0 14px var(--neon-${color})` }}
        />
      </div>
    </div>
  );
}

export default QuizBattle;
