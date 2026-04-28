// SoloAnswerChoice — one answer button in Solo play. Same state machine as the
// quiz version but magenta-accented instead of cyan.

type Props = {
  letter: string;
  label: string;
  active: boolean;
  onClick: () => void;
  correct: boolean;
  wrong: boolean;
};

function SoloAnswerChoice({ letter, label, active, onClick, correct, wrong }: Props) {
  const cls =
    correct ? "border-(--win)           bg-(--win)/10    text-(--win)    shadow-[0_0_24px_rgba(90,255,155,.35)]" :
    wrong   ? "border-(--danger)        bg-(--danger)/10 text-(--danger) shadow-[0_0_24px_rgba(255,85,119,.35)]" :
    active  ? "border-(--neon-magenta)  bg-(--neon-magenta)/10 text-(--text)" :
              "border-(--border)        bg-white/[.02]    text-(--text)";

  const chip =
    correct ? "bg-(--win)          text-[#0a0a1a]" :
    wrong   ? "bg-(--danger)       text-[#0a0a1a]" :
    active  ? "bg-(--neon-magenta) text-[#0a0a1a]" :
              "bg-white/5          text-(--text-dim)";

  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-3.5 text-left cursor-pointer rounded-xl transition-all duration-150 px-4.5 py-3.5 border-[1.5px] ${cls}`}
    >
      <div className={`w-9 h-9 rounded-lg grid place-items-center font-pixel-mini text-sm font-bold shrink-0 ${chip}`}>
        {letter}
      </div>
      <div className="text-base font-medium flex-1">{label}</div>
    </button>
  );
}

export default SoloAnswerChoice;
