'use client';
import { useState } from 'react';
import type { AvatarConfig, HairStyle, OutfitStyle, Accessory, Effect } from './types';
import SceneBG from './SceneBG';
import TopNav from './TopNav';
import PixelAvatar from './PixelAvatar';

function PanelLabel({ children, className = '' }) {
  return (
    <div className={`font-pixel-mini text-[9px] tracking-[.2em] text-(--text-mute) mb-2 ${className}`}>
      {children}
    </div>
  );
}

function OptionGrid({ items, cols = 4, render }) {
  return (
    <div className="grid gap-2" style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}>
      {items.map(render)}
    </div>
  );
}

function OptionCard({ active, onClick, label, children }) {
  return (
    <button
      onClick={onClick}
      className="flex flex-col items-center gap-1.5 p-2 rounded-lg cursor-pointer transition-all"
      style={{
        background: active ? 'rgba(94,246,255,.1)' : 'rgba(255,255,255,.02)',
        border: `1.5px solid ${active ? 'var(--neon-cyan)' : 'var(--border)'}`,
        boxShadow: active ? '0 0 12px rgba(94,246,255,.3)' : 'none',
      }}
    >
      {children}
      <span className="font-pixel-mini text-[8px] tracking-[.15em] text-(--text-dim) capitalize">{label}</span>
    </button>
  );
}

function SwatchRow({ colors, active, onPick }) {
  return (
    <div className="flex flex-wrap gap-2">
      {colors.map(c => (
        <button
          key={c}
          onClick={() => onPick(c)}
          className="w-7 h-7 rounded-md cursor-pointer transition-all"
          style={{
            background: c,
            border: `2px solid ${active === c ? 'var(--neon-cyan)' : 'transparent'}`,
            boxShadow: active === c ? `0 0 10px ${c}88` : 'none',
          }}
        />
      ))}
    </div>
  );
}

function AvatarCustomize({ onNav }) {
  const [state, setState] = useState<AvatarConfig>({
    hair: 'spike',
    hairColor: '#5ef6ff',
    skin: '#f2c7a5',
    outfit: 'hoodie',
    outfitColor: '#ff4fd8',
    accessory: 'glasses',
    effect: 'sparkle',
  });

  const [tab, setTab] = useState<'hair'|'body'|'outfit'|'extras'>('hair');
  const set = <K extends keyof AvatarConfig>(key: K, value: AvatarConfig[K]) =>
    setState((s) => ({ ...s, [key]: value }));

  const hairOptions: HairStyle[] = ['spike', 'bob', 'buzz', 'long', 'mohawk'];
  const hairColors = ['#5ef6ff', '#ff4fd8', '#ffd166', '#b6ff6e', '#9f7bff', '#ff9566', '#1a1024', '#f4e4cc'];
  const skinColors = ['#f9dcc0', '#f2c7a5', '#e0a888', '#c18867', '#8a5a3d', '#5a3d2a'];
  const outfitOptions: OutfitStyle[] = ['hoodie', 'tee', 'jacket', 'robe'];
  const outfitColors = ['#ff4fd8', '#5ef6ff', '#ffd166', '#b6ff6e', '#9f7bff', '#ff9566', '#3b2f7a', '#e53950'];
  const accOptions: Accessory[] = ['glasses', 'visor', 'headset', 'crown'];
  const effectOptions: (Effect | 'none')[] = ['sparkle', 'flame', 'none'];

  return (
    <div className="screen">
      <SceneBG particleCount={22} />
      <TopNav onNav={onNav} active="dashboard" />

      <div
        className="grid gap-6 px-10 py-6"
        style={{ gridTemplateColumns: '1fr 420px', height: 'calc(100% - 64px)' }}
      >
        {/* LEFT — preview stage */}
        <div className="glass flex flex-col p-6 relative overflow-hidden">
          <div className="flex justify-between items-center">
            <div>
              <div className="eyebrow">◆ AVATAR FORGE</div>
              <h1 className="display text-3xl mt-1">Craft your brawler</h1>
            </div>
          </div>

          <div className="flex-1 relative grid place-items-center mt-5">
            {/* spinning ring */}
            <div
              className="absolute w-95 h-95 rounded-full"
              style={{
                background: 'conic-gradient(from 0deg, transparent, rgba(94,246,255,.15), transparent 30%, transparent 60%, rgba(255,79,216,.15), transparent 90%)',
                animation: 'spin 8s linear infinite',
              }}
            />
            {/* floor glow */}
            <div
              className="absolute bottom-[20%] w-115 h-1.5 rounded-full blur-sm"
              style={{ background: 'radial-gradient(ellipse, rgba(94,246,255,.4), transparent 70%)' }}
            />
            <div
              className="relative bob"
              style={{ filter: 'drop-shadow(0 10px 30px rgba(94,246,255,.3)) drop-shadow(0 0 60px rgba(255,79,216,.25))' }}
            >
              <PixelAvatar size={320} {...state} />
            </div>
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
              <div className="glass px-4 py-2">
                <div className="font-pixel-mini text-[9px] tracking-[.2em] text-(--text-mute)">AS SEEN IN MATCH</div>
              </div>
            </div>
          </div>

          <div className="flex justify-between mt-5 gap-3">
            <div className="flex gap-3">
              <button className="btn btn-ghost px-4 py-2 text-sm">Discard</button>
              <button className="btn btn-ghost px-4 py-2 text-sm">Randomize</button>
            </div>
            <button className="btn btn-primary" onClick={() => onNav('dashboard')}>
              Save & Equip
            </button>
          </div>
        </div>

        {/* RIGHT — editor panel */}
        <div className="glass flex flex-col p-5 overflow-hidden">
          {/* tabs */}
          <div
            className="flex p-1 rounded-lg border border-(--border)"
            style={{ background: 'rgba(0,0,0,.25)' }}
          >
            {( ['hair','body','outfit','extras'] as const ).map(t => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className="flex-1 text-xs font-bold py-2 rounded-md transition-all cursor-pointer capitalize"
                style={{
                  background: tab === t ? 'linear-gradient(90deg, var(--neon-cyan), var(--neon-magenta))' : 'transparent',
                  color: tab === t ? '#0a0a1a' : 'var(--text-dim)',
                  boxShadow: tab === t ? '0 0 10px var(--neon-cyan)' : 'none',
                }}
              >
                {t}
              </button>
            ))}
          </div>

          <div className="mt-4 overflow-y-auto flex-1 pr-2 scroll">
            {tab === 'hair' && (
              <>
                <PanelLabel>STYLE</PanelLabel>
                <OptionGrid items={hairOptions} cols={5} render={v => (
                  <OptionCard key={v} active={state.hair === v} onClick={() => set('hair', v)} label={v}>
                    <PixelAvatar size={70} hair={v} hairColor={state.hairColor} skin={state.skin} outfit="tee" outfitColor="#333" />
                  </OptionCard>
                )} />
                <PanelLabel className="mt-4">COLOR</PanelLabel>
                <SwatchRow colors={hairColors} active={state.hairColor} onPick={c => set('hairColor', c)} />
              </>
            )}

            {tab === 'body' && (
              <>
                <PanelLabel>SKIN TONE</PanelLabel>
                <SwatchRow colors={skinColors} active={state.skin} onPick={c => set('skin', c)} />
                <div className="flex justify-center mt-6">
                  <PixelAvatar size={120} {...state} />
                </div>
              </>
            )}

            {tab === 'outfit' && (
              <>
                <PanelLabel>STYLE</PanelLabel>
                <OptionGrid items={outfitOptions} cols={4} render={v => (
                  <OptionCard key={v} active={state.outfit === v} onClick={() => set('outfit', v)} label={v}>
                    <PixelAvatar size={70} hair={state.hair} hairColor={state.hairColor} skin={state.skin} outfit={v} outfitColor={state.outfitColor} />
                  </OptionCard>
                )} />
                <PanelLabel className="mt-4">COLOR</PanelLabel>
                <SwatchRow colors={outfitColors} active={state.outfitColor} onPick={c => set('outfitColor', c)} />
              </>
            )}

            {tab === 'extras' && (
              <>
                <PanelLabel>ACCESSORY</PanelLabel>
                <OptionGrid items={accOptions} cols={4} render={v => (
                  <OptionCard key={v} active={state.accessory === v} onClick={() => set('accessory', v)} label={v}>
                    <PixelAvatar size={70} {...state} accessory={v} />
                  </OptionCard>
                )} />
                <PanelLabel className="mt-4">EFFECT</PanelLabel>
                <OptionGrid items={effectOptions} cols={3} render={v => (
                  <OptionCard key={v} active={(state.effect || 'none') === v} onClick={() => set('effect', v === 'none' ? undefined : v)} label={v}>
                    <PixelAvatar size={70} {...state} effect={v === 'none' ? undefined : v} />
                  </OptionCard>
                )} />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AvatarCustomize;
