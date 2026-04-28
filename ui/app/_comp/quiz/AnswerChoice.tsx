// AnswerChoice — one answer button in the quiz grid.
// Colour state machine: base → active → correct/wrong.
import Icon from "../Icon";

type Props = {
  letter: string;
  label: string;
  active: boolean;
  onClick: () => void;
  correct: boolean;
  wrong: boolean;
};

function AnswerChoice({ letter, label, active, onClick, correct, wrong }: Props) {
  const cls =
    correct ? "border-(--win)         bg-(--win)/10    text-(--win)    shadow-[0_0_24px_rgba(90,255,155,.35)]" :
    wrong   ? "border-(--danger)      bg-(--danger)/10 text-(--danger) shadow-[0_0_24px_rgba(255,85,119,.35)]" :
    active  ? "border-(--neon-cyan)   bg-(--neon-cyan)/10 text-(--text) shadow-[0_0_20px_rgba(94,246,255,.3)]" :
              "border-(--border)      bg-white/[.02]    text-(--text) hover:border-(--neon-cyan) hover:bg-(--neon-cyan)/5";

  const chip =
    correct ? "bg-(--win)       text-[#0a0a1a]" :
    wrong   ? "bg-(--danger)    text-[#0a0a1a]" :
    active  ? "bg-(--neon-cyan) text-[#0a0a1a]" :
              "bg-white/5       text-(--text-dim)";

  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-3.5 text-left cursor-pointer rounded-xl transition-all duration-150 px-5 py-4 border-[1.5px] ${cls}`}
    >
      <div className={`w-10 h-10 rounded-lg grid place-items-center font-pixel-mini text-sm font-bold shrink-0 ${chip}`}>
        {letter}
      </div>
      <div className="text-[17px] font-medium flex-1">{label}</div>
      {correct && <Icon name="check" size={22} color="var(--win)" />}
      {wrong   && <Icon name="x"     size={22} color="var(--danger)" />}
    </button>
  );
}

export default AnswerChoice;
