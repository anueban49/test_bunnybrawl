import Icon from './Icon';
import { neonVar, neonRgba } from './neon';

function QuickPlayTile({ title, subtitle, eta, icon, color, onClick, primary }) {
  const text = neonVar(color);
  const border = neonRgba(color, 0.4);
  const glow = `0 0 24px ${neonRgba(color, 0.25)}`;

  return (
    <button
      className="glass p-4.5 text-left cursor-pointer relative overflow-hidden w-full transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5"
      onClick={onClick}
      style={{
        borderColor: border,
        boxShadow: primary ? glow : 'none',
        color: 'inherit',
        fontFamily: 'inherit',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = glow;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = primary ? glow : 'none';
      }}
    >
      <div className="flex justify-between items-start">
        <div
          className="w-10 h-10 rounded-[10px] grid place-items-center shrink-0 bg-white/5"
          style={{ border: `1px solid ${border}`, color: text }}
        >
          <Icon name={icon} size={20} />
        </div>
        <Icon name="arrow" size={16} color="var(--text-mute)" />
      </div>
      <div className="text-[18px] font-bold mt-4 tracking-[-0.01em]">{title}</div>
      <div className="text-xs text-(--text-dim) mt-1">{subtitle}</div>
      <div
        className="font-pixel-mini text-[8px] tracking-[.2em] mt-3.5"
        style={{ color: text }}
      >
        {eta}
      </div>
    </button>
  );
}

export default QuickPlayTile;
