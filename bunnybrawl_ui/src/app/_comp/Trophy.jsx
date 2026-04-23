// Trophy.jsx — Trophy component

import Icon from './Icon';

function Trophy({ name, icon, color, got }) {
  const map = {
    cyan:'var(--neon-cyan)', magenta:'var(--neon-magenta)', gold:'var(--neon-gold)',
    lime:'var(--neon-lime)', violet:'var(--neon-violet)', muted:'var(--text-mute)',
  };
  const c = map[color];
  return (
    <div style={{ textAlign:'center' }}>
      <div style={{
        width:'100%', aspectRatio:'1', borderRadius: 12,
        background: got ? `linear-gradient(135deg, ${c}33, ${c}0c)` : 'rgba(255,255,255,.02)',
        border: `1px solid ${got ? c + '66' : 'var(--border)'}`,
        display:'grid', placeItems:'center', color: got ? c : 'var(--text-mute)',
        boxShadow: got ? `0 0 18px ${c}33` : 'none',
        filter: got ? 'none' : 'grayscale(.5)',
      }}>
        <Icon name={icon} size={22} />
      </div>
      <div style={{ fontFamily:'var(--font-pixel-mini)', fontSize: 7, letterSpacing:'.1em',
                    marginTop: 6, color: got ? 'var(--text-dim)' : 'var(--text-mute)' }}>
        {name}
      </div>
    </div>
  );
}

export default Trophy;