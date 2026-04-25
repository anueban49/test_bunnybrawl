// Goal — one row in "Season goals" (title + progress + sub-label).
import XPBar from "./XPBar";
import type { MockGoal } from "../mocks/goals";

function Goal({ title, sub, pct }: MockGoal) {
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
