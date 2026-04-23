// logbook.jsx — Notebook-style study logbook

'use client';
import { useState } from 'react';
import SceneBG from './SceneBG';
import TopNav from './TopNav';
import Eyebrow from './Eyebrow';
import Icon from './Icon';
import NeonChip from './NeonChip';
import BrawlerBunny from './BrawlerBunny';

const entries = [
  { id: 0, title: 'Cellular Respiration', subject: 'AP Biology', date: 'Apr 21, 2026', color: 'magenta', words: 412, tag: 'Exam prep',
    content: {
      heading: 'Cellular Respiration',
      subheading: 'How cells turn food into usable energy',
      paragraphs: [
        "The mitochondrion is a double-membrane organelle that most eukaryotic cells rely on. It generates most of the cell's ATP through oxidative phosphorylation.",
        'Inner membrane folds = cristae. More cristae = more surface area = more ETC reactions = more ATP.',
        'Stages: glycolysis (cytoplasm) → pyruvate oxidation → Krebs cycle → electron transport chain + chemiosmosis.',
      ],
      bullets: ['Net ATP from 1 glucose (aerobic): ~30–32', 'O₂ = final electron acceptor in ETC', 'NADH and FADH₂ = electron carriers', 'Endosymbiotic theory: mitochondria evolved from ancient bacteria'],
      scribbles: [
        { text: 'ATP = "energy currency"', x: '74%', y: '25%', rot: -4 },
        { text: 'MEMORIZE THIS!', x: '68%', y: '60%', rot: 6, color: 'var(--neon-magenta)' },
      ],
    },
  },
  { id: 1, title: 'Systems of Equations',     subject: 'Algebra II',   date: 'Apr 19, 2026', color: 'cyan',    words: 288, tag: 'Homework' },
  { id: 2, title: 'Causes of WWI',             subject: 'World History', date: 'Apr 17, 2026', color: 'gold',    words: 196, tag: 'Short notes' },
  { id: 3, title: 'Photosynthesis',            subject: 'AP Biology',   date: 'Apr 14, 2026', color: 'lime',    words: 356, tag: 'Exam prep' },
  { id: 4, title: 'Shakespeare · Macbeth Act I', subject: 'English Lit', date: 'Apr 12, 2026', color: 'violet', words: 622, tag: 'Annotations' },
  { id: 5, title: 'Pythagorean Triples',       subject: 'Geometry',     date: 'Apr 10, 2026', color: 'cyan',    words: 178, tag: 'Quick ref' },
];

function Logbook({ onNav }) {
  const [activeEntry, setActiveEntry] = useState(0);
  const entry = entries[activeEntry];

  return (
    <div className="screen">
      <SceneBG particleCount={16} streaks={false} />
      <TopNav onNav={onNav} active="logbook" />

      <div
        className="grid gap-5.5 px-10 py-6"
        style={{ gridTemplateColumns: '320px 1fr', height: 'calc(100% - 64px)', padding: '24px 40px 30px' }}
      >
        {/* Entry list */}
        <div className="glass p-4.5 flex flex-col">
          <div className="flex justify-between mb-3.5">
            <Eyebrow>◆ LOGBOOK</Eyebrow>
            <button className="bg-transparent border-none text-(--neon-cyan) cursor-pointer flex items-center gap-1 text-xs font-semibold">
              <Icon name="plus" size={14} /> New
            </button>
          </div>

          <div className="row py-2 px-3 rounded-lg border border-(--border) mb-3.5" style={{ background: 'rgba(0,0,0,.3)' }}>
            <Icon name="target" size={14} color="var(--text-mute)" />
            <input
              placeholder="Search entries…"
              className="flex-1 bg-transparent border-none text-(--text) text-[13px] ml-2.5 outline-none"
              style={{ fontFamily: 'var(--font-display)' }}
            />
          </div>

          <div className="scroll col gap-8 overflow-y-auto flex-1">
            {entries.map((e, i) => (
              <EntryCard key={e.id} e={e} active={i === activeEntry} onClick={() => setActiveEntry(i)} />
            ))}
          </div>

          <div className="glass p-3 mt-3.5 row gap-8" style={{ background: 'rgba(255,209,102,.05)', borderColor: 'rgba(255,209,102,.2)' }}>
            <Icon name="bolt" size={14} color="var(--neon-gold)" />
            <div className="text-[11px] text-(--text-dim)">
              <b className="text-(--text)">12 entries</b> · 3,240 words this month
            </div>
          </div>
        </div>

        {/* Notebook page */}
        <div className="relative">
          <NotebookPage entry={entry} onNav={onNav} />
        </div>
      </div>
    </div>
  );
}

function EntryCard({ e, active, onClick }) {
  const colorMap = { cyan: 'var(--neon-cyan)', magenta: 'var(--neon-magenta)', gold: 'var(--neon-gold)', lime: 'var(--neon-lime)', violet: 'var(--neon-violet)' };
  const c = colorMap[e.color];
  return (
    <button
      onClick={onClick}
      className="text-left px-3.5 py-3 rounded-[10px] cursor-pointer transition-all duration-150 w-full"
      style={{
        background: active ? `linear-gradient(135deg, ${c}1e, ${c}08)` : 'rgba(255,255,255,.02)',
        border: `1.5px solid ${active ? c : 'var(--border)'}`,
        color: 'var(--text)', fontFamily: 'var(--font-display)',
        boxShadow: active ? `0 0 14px ${c}33` : 'none',
      }}
    >
      <div className="flex justify-between mb-1">
        <div className="w-1.5 h-1.5 rounded-full" style={{ background: c, boxShadow: `0 0 6px ${c}` }} />
        <div className="font-pixel-mini text-[8px] tracking-[.15em] text-(--text-mute)">{e.date}</div>
      </div>
      <div className="text-sm font-bold mb-0.5">{e.title}</div>
      <div className="text-[11px] text-(--text-dim) mb-1.5">{e.subject}</div>
      <div className="row gap-6">
        <NeonChip color="muted" style={{ padding: '2px 6px', fontSize: 7 }}>{e.tag}</NeonChip>
        <div className="font-pixel-mini text-[8px] text-(--text-mute) tracking-[.15em]">{e.words}w</div>
      </div>
    </button>
  );
}

function NotebookPage({ entry, onNav }) {
  const c = entry.content;
  return (
    <div
      className="glass h-full relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #f5ecd6, #e8dcbf)', borderColor: 'rgba(120,90,60,.35)', color: '#2a1c14', padding: 0 }}
    >
      {/* Binder rings */}
      <div
        className="absolute left-5 top-0 bottom-0 w-7.5 flex flex-col justify-around py-7.5"
        style={{ borderRight: '1px dashed rgba(120,90,60,.35)' }}
      >
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="w-4.5 h-4.5 rounded-full"
            style={{ background: 'radial-gradient(circle at 30% 30%, #e8dcbf, #a88b6b)', boxShadow: 'inset 0 2px 3px rgba(0,0,0,.15)' }}
          />
        ))}
      </div>

      {/* Ruled lines */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          left: 60,
          backgroundImage: 'linear-gradient(rgba(120,90,60,.15) 1px, transparent 1px)',
          backgroundSize: '100% 28px',
          backgroundPosition: '0 42px',
        }}
      />

      {/* Tape strip */}
      <div
        className="absolute top-3.5 left-1/2 -translate-x-1/2 -rotate-3 w-35 h-7 border border-dashed"
        style={{ background: 'rgba(255,209,102,.45)', boxShadow: '0 2px 6px rgba(0,0,0,.1)', borderColor: 'rgba(120,90,60,.3)' }}
      />

      {/* Page content */}
      <div
        className="scroll relative h-full flex flex-col gap-2.5 overflow-auto"
        style={{ padding: '34px 50px 24px 80px' }}
      >
        <div className="flex justify-between items-start">
          <div>
            <div className="font-pixel-mini text-[9px] tracking-[.2em]" style={{ color: '#a88b6b' }}>
              {entry.subject.toUpperCase()} · {entry.date}
            </div>
            <h1 className="font-hand text-[54px] font-bold mt-1 leading-none" style={{ color: '#2a1c14' }}>
              {c?.heading || entry.title}
            </h1>
            {c?.subheading && (
              <div className="font-hand text-2xl -mt-0.5" style={{ color: '#7a5a3d' }}>{c.subheading}</div>
            )}
          </div>
          <div className="row gap-8 mt-1.5">
            <button
              className="flex items-center gap-1.5 border rounded-lg px-3 py-2 cursor-pointer text-xs font-semibold"
              style={{ background: 'transparent', borderColor: '#a88b6b', color: '#2a1c14', fontFamily: 'var(--font-display)' }}
            >
              <Icon name="gear" size={12} /> Edit
            </button>
            <button
              onClick={() => onNav('solo')}
              className="flex items-center gap-1.5 border-none rounded-lg px-3.5 py-2.25 cursor-pointer text-[13px] font-bold"
              style={{ background: 'linear-gradient(135deg, #ff4fd8, #ff9566)', color: '#fff', boxShadow: '0 4px 16px rgba(255,79,216,.35)', fontFamily: 'var(--font-display)' }}
            >
              <Icon name="spark" size={14} /> Quiz me on this
            </button>
          </div>
        </div>

        {c?.paragraphs && (
          <div className="font-hand text-[22px] leading-relaxed mt-3" style={{ color: '#2a1c14' }}>
            {c.paragraphs.map((p, i) => <p key={i} className="mb-3.5">{p}</p>)}
          </div>
        )}

        {c?.bullets && (
          <div className="mt-1.5">
            <div className="font-hand text-[26px] font-bold" style={{ color: '#7a3d5a' }}>Key points:</div>
            <ul className="font-hand text-[22px] leading-relaxed pl-6 mt-1.5" style={{ color: '#2a1c14' }}>
              {c.bullets.map((b, i) => <li key={i} className="mb-1">{b}</li>)}
            </ul>
          </div>
        )}

        {/* Pixel sticker */}
        <div className="absolute bottom-7.5 right-15 rotate-6" style={{ filter: 'drop-shadow(0 4px 10px rgba(0,0,0,.2))' }}>
          <BrawlerBunny size={90} expression="think" glow={false} />
        </div>

        {/* Scribbles */}
        {c?.scribbles?.map((s, i) => (
          <div
            key={i}
            className="absolute font-hand text-2xl pointer-events-none"
            style={{ left: s.x, top: s.y, transform: `rotate(${s.rot}deg)`, color: s.color || '#d36b3d' }}
          >
            {s.text}
          </div>
        ))}
      </div>

      {/* Page corner fold */}
      <div
        className="absolute bottom-0 right-0 w-10 h-10"
        style={{ background: 'linear-gradient(135deg, transparent 50%, rgba(120,90,60,.2) 50%)', borderLeft: '1px dashed rgba(120,90,60,.35)', borderTop: '1px dashed rgba(120,90,60,.35)' }}
      />
    </div>
  );
}

export default Logbook;
