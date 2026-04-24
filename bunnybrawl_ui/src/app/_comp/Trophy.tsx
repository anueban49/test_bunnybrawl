import Icon from './Icon';
import { neonVar, neonRgba } from './neon';

function Trophy({ name, icon, color, got }) {
  const c = neonVar(color);
  const rgba = (a) => neonRgba(color, a);

  return (
    <div className="text-center">
      <div
        className={`w-full aspect-square rounded-xl grid place-items-center ${got ? '' : 'grayscale-[.5]'}`}
        style={{
          background: got ? `linear-gradient(135deg, ${rgba(0.2)}, ${rgba(0.05)})` : 'rgba(255,255,255,.02)',
          border: `1px solid ${got ? rgba(0.4) : 'var(--border)'}`,
          color: got ? c : 'var(--text-mute)',
          boxShadow: got ? `0 0 18px ${rgba(0.2)}` : 'none',
        }}
      >
        <Icon name={icon} size={22} />
      </div>
      <div
        className={`font-pixel-mini text-[7px] tracking-widest mt-1.5 ${got ? 'text-(--text-dim)' : 'text-(--text-mute)'}`}
      >
        {name}
      </div>
    </div>
  );
}

export default Trophy;
