import XPBar from './XPBar';

function Goal({ title, sub, pct }) {
  return (
    <div className="mb-3.5">
      <div className="flex justify-between mb-1">
        <div className="text-[13px] font-semibold">{title}</div>
        <div className="text-[11px] text-(--text-dim)">{sub}</div>
      </div>
      <XPBar pct={pct} height={8} />
    </div>
  );
}

export default Goal;
