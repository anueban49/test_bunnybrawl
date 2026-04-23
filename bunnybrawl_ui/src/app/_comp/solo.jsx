// solo.jsx — Solo play (AI-generated quiz from source)

'use client';
import { useState } from 'react';
import SceneBG from './SceneBG';
import TopNav from './TopNav';
import BrawlerBunny from './BrawlerBunny';
import Icon from './Icon';
import NeonChip from './NeonChip';
import TimerRing from './TimerRing';
import Eyebrow from './Eyebrow';
import LoadingScreen from './loading';

const questions = [
  { text: 'The mitochondrion is often called the "powerhouse of the cell" because it produces:', choices: ['Glucose', 'ATP', 'Proteins', 'DNA'], correct: 1 },
  { text: 'Which process in mitochondria requires oxygen to produce the most ATP?', choices: ['Glycolysis', 'Fermentation', 'Oxidative phosphorylation', 'Calvin cycle'], correct: 2 },
  { text: 'What molecule carries electrons to the electron transport chain?', choices: ['ATP', 'NADH', 'Glucose', 'mRNA'], correct: 1 },
];

function SoloPlay({ onNav }) {
  const [stage, setStage] = useState('source');
  const [source, setSource] = useState('paste');
  const [selected, setSelected] = useState(null);
  const [q, setQ] = useState(0);
  const question = questions[q];

  if (stage === 'generating') return <LoadingScreen onNav={onNav} state="generating" />;

  if (stage === 'source') return <SourcePicker onNav={onNav} source={source} setSource={setSource} setStage={setStage} />;

  return (
    <div className="screen">
      <SceneBG particleCount={24} />
      <TopNav onNav={onNav} active="solo" />

      <div className="flex flex-col gap-4 px-10 pb-6" style={{ padding: '18px 40px 24px', height: 'calc(100% - 64px)' }}>
        {/* Top bar */}
        <div className="flex justify-between gap-3.5">
          <div className="row gap-14">
            <button
              onClick={() => setStage('source')}
              className="bg-transparent border border-(--border) text-(--text-dim) rounded-lg px-3 py-2 cursor-pointer font-pixel-mini text-[9px] tracking-[.15em]"
            >
              ← EXIT
            </button>
            <NeonChip color="magenta"><Icon name="spark" size={10} /> SOLO PLAY</NeonChip>
            <div className="text-xs text-(--text-dim)">AP Biology · Cellular Respiration</div>
          </div>
          <div className="row gap-14">
            <div className="text-right">
              <div className="font-pixel-mini text-[8px] text-(--text-mute) tracking-[.2em]">QUESTION</div>
              <div className="font-pixel text-[18px] text-(--text)">{q + 1} / {questions.length}</div>
            </div>
            <TimerRing pct={0.68} seconds={14} size={60} color="magenta" />
          </div>
        </div>

        {/* Progress dots */}
        <div className="row gap-4">
          {questions.map((_, i) => (
            <div
              key={i}
              className="flex-1 h-1 rounded-sm"
              style={{
                background: i < q ? 'var(--neon-magenta)' : i === q ? 'var(--neon-cyan)' : 'rgba(255,255,255,.08)',
                boxShadow: i <= q ? `0 0 8px ${i < q ? 'var(--neon-magenta)' : 'var(--neon-cyan)'}` : 'none',
              }}
            />
          ))}
        </div>

        {/* Question card */}
        <div
          className="glass flex-1 flex flex-col justify-center items-center relative mx-auto w-full p-[40px_48px]"
          style={{ borderColor: 'rgba(255,79,216,.25)', maxWidth: 1000 }}
        >
          <div className="absolute -top-5 -right-5">
            <div className="bob" style={{ filter: 'drop-shadow(0 0 16px rgba(255,79,216,.4))' }}>
              <BrawlerBunny size={70} expression="think" />
            </div>
          </div>

          <Eyebrow>◆ QUESTION {q + 1}</Eyebrow>
          <h2
            className="text-center my-5 mb-9 max-w-180"
            style={{ fontSize: 32, fontWeight: 600, lineHeight: 1.25, letterSpacing: '-.01em' }}
          >
            {question.text}
          </h2>

          <div className="grid grid-cols-2 gap-3 w-full max-w-180">
            {question.choices.map((c, i) => (
              <SoloAnswerChoice
                key={i}
                letter={String.fromCharCode(65 + i)}
                label={c}
                active={selected === i}
                onClick={() => setSelected(i)}
                correct={selected !== null && i === question.correct}
                wrong={selected === i && i !== question.correct}
              />
            ))}
          </div>

          {selected !== null && (
            <button
              className="btn btn-primary mt-6"
              onClick={() => { setSelected(null); if (q < questions.length - 1) setQ(q + 1); else onNav('result'); }}
            >
              {q < questions.length - 1 ? 'Next question' : 'See results'} <Icon name="arrow" size={14} />
            </button>
          )}
        </div>

        {/* Footer XP tracker */}
        <div className="row gap-16 mx-auto w-full" style={{ maxWidth: 1000 }}>
          <div className="glass flex items-center gap-2.5 p-[10px_14px] flex-1">
            <Icon name="spark" size={14} color="var(--neon-gold)" />
            <div className="text-xs text-(--text-dim)">
              <span className="font-hand text-[18px] text-(--neon-gold)">"Rome wasn't built in a day."</span>{' '}
              2 of 3 correct · on track.
            </div>
            <div className="ml-auto font-pixel text-[18px] text-(--neon-gold)">+8 XP</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SourcePicker({ onNav, source, setSource, setStage }) {
  return (
    <div className="screen">
      <SceneBG particleCount={22} streaks={false} />
      <TopNav onNav={onNav} active="solo" />

      <div className="scroll px-10 py-7 overflow-auto" style={{ height: 'calc(100% - 64px)' }}>
        <div className="max-w-270 mx-auto">
          <div className="flex justify-between mb-6">
            <div>
              <Eyebrow>◆ SOLO PLAY</Eyebrow>
              <h1 className="display mt-1.5" style={{ fontSize: 42 }}>
                Train yourself, <span className="text-(--neon-magenta)">level up faster.</span>
              </h1>
              <div className="text-(--text-dim) text-[15px] max-w-155 mt-2">
                Drop in any article, URL, or logbook entry — our AI forges a quick quiz.
                <span className="font-hand text-[19px] text-(--neon-gold) ml-1.5">
                  "Smooth seas never made a skilled sailor."
                </span>
              </div>
            </div>
            <div className="glass p-[14px_18px]">
              <div className="font-pixel-mini text-[8px] text-(--text-mute) tracking-[.2em]">XP PAYOUT</div>
              <div className="font-pixel text-[22px] text-(--neon-gold)">+5 – 15 XP</div>
              <div className="text-[10px] text-(--text-dim)">Solo practice</div>
            </div>
          </div>

          <div className="grid gap-5" style={{ gridTemplateColumns: '1.3fr 1fr' }}>
            {/* Source picker */}
            <div className="glass p-5.5">
              <Eyebrow className="mb-3.5">◆ CHOOSE YOUR SOURCE</Eyebrow>
              <div className="row gap-8 mb-3.5">
                {[
                  { id: 'paste', label: 'Paste notes', icon: 'note' },
                  { id: 'link',  label: 'Article URL', icon: 'link' },
                  { id: 'logbook', label: 'From logbook', icon: 'book' },
                ].map(s => (
                  <button
                    key={s.id}
                    onClick={() => setSource(s.id)}
                    className="flex-1 flex items-center justify-center gap-2 px-3 py-2.5 rounded-[10px] cursor-pointer font-semibold text-[13px] transition-all"
                    style={{
                      background: source === s.id ? 'rgba(255,79,216,.1)' : 'rgba(255,255,255,.02)',
                      border: `1.5px solid ${source === s.id ? 'var(--neon-magenta)' : 'var(--border)'}`,
                      color: source === s.id ? 'var(--neon-magenta)' : 'var(--text-dim)',
                    }}
                  >
                    <Icon name={s.icon} size={14} /> {s.label}
                  </button>
                ))}
              </div>

              {source === 'paste' && (
                <div>
                  <div className="text-xs text-(--text-dim) mb-2">Paste your notes or textbook excerpt</div>
                  <textarea
                    defaultValue="The mitochondrion is a double-membrane organelle found in most eukaryotic cells..."
                    className="w-full rounded-[10px] p-3.5 text-(--text) text-sm leading-relaxed resize-y outline-none border border-(--border)"
                    style={{ minHeight: 180, background: 'rgba(0,0,0,.3)', fontFamily: 'var(--font-display)' }}
                  />
                </div>
              )}

              {source === 'link' && (
                <div>
                  <div className="text-xs text-(--text-dim) mb-2">Paste a link to any article</div>
                  <div className="row p-3.5 rounded-[10px] border border-(--border)" style={{ background: 'rgba(0,0,0,.3)' }}>
                    <Icon name="link" size={16} color="var(--text-mute)" />
                    <input
                      defaultValue="https://en.wikipedia.org/wiki/Mitochondrion"
                      className="flex-1 bg-transparent border-none text-(--text) text-sm ml-2.5 outline-none"
                    />
                  </div>
                </div>
              )}

              {source === 'logbook' && (
                <div>
                  <div className="text-xs text-(--text-dim) mb-2.5">Pick an entry from your logbook</div>
                  <div className="col gap-8">
                    {[
                      { title: 'Cellular Respiration', date: 'Apr 21', words: 412, active: true },
                      { title: 'Algebra II · Systems of equations', date: 'Apr 19', words: 288 },
                      { title: 'WWI causes · short notes', date: 'Apr 17', words: 196 },
                    ].map((e, i) => (
                      <div
                        key={i}
                        className="row p-3 rounded-[10px] cursor-pointer"
                        style={{
                          background: e.active ? 'rgba(255,79,216,.08)' : 'rgba(255,255,255,.02)',
                          border: `1px solid ${e.active ? 'var(--neon-magenta)' : 'var(--border)'}`,
                        }}
                      >
                        <Icon name="book" size={14} color={e.active ? 'var(--neon-magenta)' : 'var(--text-mute)'} />
                        <div className="ml-2.5 flex-1">
                          <div className="text-[13px] font-semibold">{e.title}</div>
                          <div className="text-[11px] text-(--text-dim)">{e.date} · {e.words} words</div>
                        </div>
                        {e.active && <Icon name="check" size={14} color="var(--neon-magenta)" />}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Quiz settings */}
            <div className="col gap-4">
              <div className="glass p-5">
                <Eyebrow className="mb-3">◆ QUIZ SETTINGS</Eyebrow>
                <SettingRow label="Questions"   options={['5','10','15','20']}             selected="10" />
                <SettingRow label="Difficulty"  options={['Easy','Medium','Hard','Mixed']} selected="Medium" />
                <SettingRow label="Style"       options={['MC','True/False','Mixed']}      selected="MC" />
                <SettingRow label="Time per Q"  options={['10s','20s','30s','∞']}          selected="20s" />
              </div>

              <button
                className="btn btn-magenta justify-center p-4.5 text-base"
                onClick={() => { setStage('generating'); setTimeout(() => setStage('playing'), 3200); }}
              >
                <Icon name="spark" size={18} /> Generate Quiz
              </button>

              <div className="glass p-3.5 row gap-2.5" style={{ background: 'rgba(255,209,102,.05)', borderColor: 'rgba(255,209,102,.25)' }}>
                <Icon name="bolt" size={14} color="var(--neon-gold)" />
                <div className="text-xs text-(--text-dim)">
                  <b className="text-(--text)">Solo XP stacks.</b> Daily 500 XP cap resets at midnight.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SettingRow({ label, options, selected }) {
  return (
    <div className="mb-3.5">
      <div className="font-pixel-mini text-[9px] tracking-[.15em] text-(--text-mute) mb-1.5">{label.toUpperCase()}</div>
      <div className="row gap-6">
        {options.map(o => (
          <button
            key={o}
            className="px-3 py-1.5 rounded-lg cursor-pointer font-semibold text-xs transition-all"
            style={{
              background: o === selected ? 'rgba(94,246,255,.1)' : 'rgba(255,255,255,.02)',
              border: `1px solid ${o === selected ? 'var(--neon-cyan)' : 'var(--border)'}`,
              color: o === selected ? 'var(--neon-cyan)' : 'var(--text-dim)',
            }}
          >
            {o}
          </button>
        ))}
      </div>
    </div>
  );
}

function SoloAnswerChoice({ letter, label, active, onClick, correct, wrong }) {
  let borderC = 'var(--border)';
  let bgC = 'rgba(255,255,255,.02)';
  let glow = 'none';
  let labelC = 'var(--text)';

  if (correct)     { borderC = 'var(--win)';         bgC = 'rgba(90,255,155,.1)'; glow = '0 0 24px rgba(90,255,155,.35)'; labelC = 'var(--win)'; }
  else if (wrong)  { borderC = 'var(--danger)';      bgC = 'rgba(255,85,119,.1)'; glow = '0 0 24px rgba(255,85,119,.35)'; labelC = 'var(--danger)'; }
  else if (active) { borderC = 'var(--neon-magenta)'; bgC = 'rgba(255,79,216,.08)'; }

  return (
    <button
      onClick={onClick}
      className="flex items-center gap-3.5 text-left cursor-pointer rounded-xl transition-all duration-150 p-[14px_18px]"
      style={{ background: bgC, border: `1.5px solid ${borderC}`, color: labelC, fontFamily: 'var(--font-display)', boxShadow: glow }}
    >
      <div
        className="w-9 h-9 rounded-lg grid place-items-center font-pixel-mini text-sm font-bold shrink-0"
        style={{
          background: correct ? 'var(--win)' : wrong ? 'var(--danger)' : active ? 'var(--neon-magenta)' : 'rgba(255,255,255,.05)',
          color: (correct || wrong || active) ? '#0a0a1a' : 'var(--text-dim)',
        }}
      >
        {letter}
      </div>
      <div className="text-base font-medium flex-1">{label}</div>
    </button>
  );
}

export default SoloPlay;
