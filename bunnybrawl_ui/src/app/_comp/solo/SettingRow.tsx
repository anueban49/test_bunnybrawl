// SettingRow — label + horizontal chip row used in the Solo quiz-settings panel.

type Props = {
  label: string;
  options: string[];
  selected: string;
};

function SettingRow({ label, options, selected }: Props) {
  return (
    <div className="mb-3.5">
      <div className="font-pixel-mini text-[9px] tracking-[.15em] text-(--text-mute) mb-1.5">
        {label.toUpperCase()}
      </div>
      <div className="flex items-center gap-1.5">
        {options.map((o) => {
          const on = o === selected;
          return (
            <button
              key={o}
              className={`px-3 py-1.5 rounded-lg cursor-pointer font-semibold text-xs transition-all border ${
                on
                  ? "bg-(--neon-cyan)/10 border-(--neon-cyan) text-(--neon-cyan)"
                  : "bg-white/[.02] border-(--border) text-(--text-dim)"
              }`}
            >
              {o}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default SettingRow;
