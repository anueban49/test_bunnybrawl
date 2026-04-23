// QuickPlayTile.jsx — quick-play mode selection tile

import Icon from './Icon';

function QuickPlayTile({ title, subtitle, eta, icon, color, onClick, primary }) {
  const colorMap = {
    cyan:    { border: 'rgba(94,246,255,.4)',   glow: '0 0 24px rgba(94,246,255,.25)',   text: 'var(--neon-cyan)' },
    magenta: { border: 'rgba(255,79,216,.4)',   glow: '0 0 24px rgba(255,79,216,.25)',   text: 'var(--neon-magenta)' },
    gold:    { border: 'rgba(255,209,102,.4)',  glow: '0 0 24px rgba(255,209,102,.25)',  text: 'var(--neon-gold)' },
  };
  const c = colorMap[color];
  return (
    <button
      className="glass p-4.5 text-left cursor-pointer relative overflow-hidden w-full transition-[transform,box-shadow] duration-200"
      onClick={onClick}
      style={{
        borderColor: c.border,
        boxShadow: primary ? c.glow : 'none',
        color: 'inherit',
        fontFamily: 'inherit',
      }}
      onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = c.glow; }}
      onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = primary ? c.glow : ''; }}
    >
      <div className="flex justify-between items-start">
        <div
          className="w-10 h-10 rounded-[10px] grid place-items-center shrink-0"
          style={{ background: 'rgba(255,255,255,.05)', border: `1px solid ${c.border}`, color: c.text }}
        >
          <Icon name={icon} size={20} />
        </div>
        <Icon name="arrow" size={16} color="var(--text-mute)" />
      </div>
      <div className="text-[18px] font-bold mt-4 tracking-[-0.01em]">{title}</div>
      <div className="text-xs text-(--text-dim) mt-1">{subtitle}</div>
      <div className="font-pixel-mini text-[8px] tracking-[.2em] mt-3.5" style={{ color: c.text }}>{eta}</div>
    </button>
  );
}

export default QuickPlayTile;
