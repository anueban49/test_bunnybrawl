// SourcePicker — "where does this quiz come from?" screen: paste notes / URL / logbook,
// plus settings + Generate button. Renders before the solo quiz actually starts.
"use client";

import Eyebrow from "../Eyebrow";
import Glass from "../Glass";
import Button from "../Button";
import Icon, { type IconName } from "../Icon";
import SettingRow from "./SettingRow";
import { useDisplay } from "../../_providers/DisplayProvider";
import { soloLogbookChoices } from "../../mocks/solo";
import SceneBG from "../SceneBG";
import TopNav from "../TopNav";

export type SourceKind = "paste" | "link" | "logbook";

type Props = {
  source: SourceKind;
  setSource: (s: SourceKind) => void;
  setStage: (s: "generating") => void;
};

const TABS: { id: SourceKind; label: string; icon: IconName }[] = [
  { id: "paste",   label: "Paste notes",  icon: "note" },
  { id: "link",    label: "Article URL",  icon: "link" },
  { id: "logbook", label: "From logbook", icon: "book" },
];

function SourcePicker({ source, setSource, setStage }: Props) {
  const { switchDisplay } = useDisplay();

  return (
    <div className="min-h-screen relative">
      <SceneBG particleCount={22} streaks={false} />
      <TopNav />

      <div className="px-10 py-7 overflow-auto min-h-[calc(100vh-64px)]">
        <div className="max-w-[1080px] mx-auto">
          <div className="flex justify-between mb-6">
            <div>
              <Eyebrow>◆ SOLO PLAY</Eyebrow>
              <h1 className="font-bold text-[42px] mt-1.5">
                Train yourself, <span className="text-(--neon-magenta)">level up faster.</span>
              </h1>
              <div className="text-(--text-dim) text-[15px] max-w-xl mt-2">
                Drop in any article, URL, or logbook entry — our AI forges a quick quiz.
                <span className="font-hand text-lg text-(--neon-gold) ml-1.5">
                  "Smooth seas never made a skilled sailor."
                </span>
              </div>
            </div>
            <Glass className="px-4.5 py-3.5">
              <div className="font-pixel-mini text-[8px] text-(--text-mute) tracking-[.2em]">XP PAYOUT</div>
              <div className="font-pixel text-[22px] text-(--neon-gold)">+5 – 15 XP</div>
              <div className="text-[10px] text-(--text-dim)">Solo practice</div>
            </Glass>
          </div>

          <div className="grid grid-cols-[1.3fr_1fr] gap-5">
            <Glass className="p-5">
              <Eyebrow>◆ CHOOSE YOUR SOURCE</Eyebrow>
              <div className="flex items-center gap-2 mb-3.5">
                {TABS.map((t) => {
                  const on = source === t.id;
                  return (
                    <button
                      key={t.id}
                      onClick={() => setSource(t.id)}
                      className={`flex-1 flex items-center justify-center gap-2 px-3 py-2.5 rounded-[10px] cursor-pointer font-semibold text-[13px] transition-all border-[1.5px] ${
                        on ? "bg-(--neon-magenta)/10 border-(--neon-magenta) text-(--neon-magenta)" : "bg-white/[.02] border-(--border) text-(--text-dim)"
                      }`}
                    >
                      <Icon name={t.icon} size={14} /> {t.label}
                    </button>
                  );
                })}
              </div>

              {source === "paste" && (
                <textarea
                  defaultValue="The mitochondrion is a double-membrane organelle found in most eukaryotic cells..."
                  className="w-full rounded-[10px] p-3.5 text-(--text) text-sm leading-relaxed resize-y outline-none border border-(--border) min-h-[180px] bg-black/30 font-sans"
                />
              )}

              {source === "link" && (
                <div className="flex items-center p-3.5 rounded-[10px] border border-(--border) bg-black/30">
                  <Icon name="link" size={16} color="var(--text-mute)" />
                  <input
                    defaultValue="https://en.wikipedia.org/wiki/Mitochondrion"
                    className="flex-1 bg-transparent border-none text-(--text) text-sm ml-2.5 outline-none"
                  />
                </div>
              )}

              {source === "logbook" && (
                <div className="flex flex-col gap-2">
                  {soloLogbookChoices.map((e, i) => (
                    <div
                      key={i}
                      className={`flex items-center p-3 rounded-[10px] cursor-pointer border ${
                        e.active ? "bg-(--neon-magenta)/10 border-(--neon-magenta)" : "bg-white/[.02] border-(--border)"
                      }`}
                    >
                      <Icon name="book" size={14} color={e.active ? "var(--neon-magenta)" : "var(--text-mute)"} />
                      <div className="ml-2.5 flex-1">
                        <div className="text-[13px] font-semibold">{e.title}</div>
                        <div className="text-[11px] text-(--text-dim)">{e.date} · {e.words} words</div>
                      </div>
                      {e.active && <Icon name="check" size={14} color="var(--neon-magenta)" />}
                    </div>
                  ))}
                </div>
              )}
            </Glass>

            <div className="flex flex-col gap-4">
              <Glass className="p-5">
                <Eyebrow>◆ QUIZ SETTINGS</Eyebrow>
                <SettingRow label="Questions"  options={["5", "10", "15", "20"]}                selected="10" />
                <SettingRow label="Difficulty" options={["Easy", "Medium", "Hard", "Mixed"]}    selected="Medium" />
                <SettingRow label="Style"      options={["MC", "True/False", "Mixed"]}          selected="MC" />
                <SettingRow label="Time per Q" options={["10s", "20s", "30s", "∞"]}             selected="20s" />
              </Glass>

              <Button variant="magenta" className="py-4.5 text-base" onClick={() => setStage("generating")}>
                <Icon name="spark" size={18} /> Generate Quiz
              </Button>

              <Glass className="p-3.5 flex items-center gap-2.5 bg-[rgba(255,209,102,.05)] border-(--neon-gold)/25">
                <Icon name="bolt" size={14} color="var(--neon-gold)" />
                <div className="text-xs text-(--text-dim)">
                  <b className="text-(--text)">Solo XP stacks.</b> Daily 500 XP cap resets at midnight.
                </div>
              </Glass>

              <Button variant="ghost" onClick={() => switchDisplay("dashboard")}>Cancel</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SourcePicker;
