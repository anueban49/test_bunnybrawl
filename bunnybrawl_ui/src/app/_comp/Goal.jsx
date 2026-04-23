// Goal.jsx — Goal component

import XPBar from './XPBar';

function Goal({ title, sub, pct }) {
  return (
    <div style={{ marginBottom: 14 }}>
      <div className="row" style={{ justifyContent:'space-between', marginBottom: 4 }}>
        <div style={{ fontSize: 13, fontWeight: 600 }}>{title}</div>
        <div style={{ fontSize: 11, color:'var(--text-dim)' }}>{sub}</div>
      </div>
      <XPBar pct={pct} height={8}/>
    </div>
  );
}

export default Goal;