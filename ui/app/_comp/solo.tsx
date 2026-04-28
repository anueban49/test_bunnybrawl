// SoloPlay — three-stage flow: pick source → generating → playing quiz.
// The SourcePicker + loading animation + answer choices each live in their own files.
"use client";

import { useState } from "react";
import SceneBG from "./SceneBG";
import TopNav from "./TopNav";
import BrawlerBunny from "./BrawlerBunny";
import Icon from "./Icon";
import NeonChip from "./NeonChip";
import TimerRing from "./TimerRing";
import Eyebrow from "./Eyebrow";
import Button from "./Button";
import Glass from "./Glass";
import LoadingScreen from "./loading";
import SourcePicker, { type SourceKind } from "./solo/SourcePicker";
import SoloAnswerChoice from "./solo/SoloAnswerChoice";
import { soloQuestions } from "../mocks/solo";
import { useDisplay } from "../_providers/DisplayProvider";

type Stage = "source" | "generating" | "playing";

function SoloPlay() {
  const { switchDisplay } = useDisplay();
  const [stage, setStage] = useState<Stage>("source");
  const [source, setSource] = useState<SourceKind>("paste");
  const [selected, setSelected] = useState<number | null>(null);
  const [q, setQ] = useState(0);
  const question = soloQuestions[q];

  if (stage === "generating") return <LoadingScreen state="generating" />;
  if (stage === "source") {
    return (
      <SourcePicker
        source={source}
        setSource={setSource}
        setStage={() => {
          setStage("generating");
          setTimeout(() => setStage("playing"), 3200);
        }}
      />
    );
  }

  return (
    <div className="min-h-screen relative">
      <SceneBG particleCount={24} />
      <TopNav />

      <div className="flex flex-col gap-4 px-10 pt-4 pb-6 min-h-[calc(100vh-64px)]">
        <div className="flex justify-between gap-3.5">
          <div className="flex items-center gap-3.5">
            <button
              onClick={() => setStage("source")}
              className="bg-transparent border border-(--border) text-(--text-dim) rounded-lg px-3 py-2 cursor-pointer font-pixel-mini text-[9px] tracking-[.15em]"
            >
              ← EXIT
            </button>
            <NeonChip color="magenta"><Icon name="spark" size={10} /> SOLO PLAY</NeonChip>
            <div className="text-xs text-(--text-dim)">AP Biology · Cellular Respiration</div>
          </div>
          <div className="flex items-center gap-3.5">
            <div className="text-right">
              <div className="font-pixel-mini text-[8px] text-(--text-mute) tracking-[.2em]">QUESTION</div>
              <div className="font-pixel text-lg text-(--text)">{q + 1} / {soloQuestions.length}</div>
            </div>
            <TimerRing pct={0.68} seconds={14} size={60} color="magenta" />
          </div>
        </div>

        <div className="flex items-center gap-1">
          {soloQuestions.map((_, i) => {
            const done = i < q, current = i === q;
            const cls = done    ? "bg-(--neon-magenta) shadow-[0_0_8px_var(--neon-magenta)]"
                      : current ? "bg-(--neon-cyan)    shadow-[0_0_8px_var(--neon-cyan)]"
                                : "bg-white/[.08]";
            return <div key={i} className={`flex-1 h-1 rounded-sm ${cls}`} />;
          })}
        </div>

        <Glass className="flex-1 flex flex-col justify-center items-center relative mx-auto w-full px-12 py-10 max-w-[1000px] border-(--neon-magenta)/25">
          <div className="absolute -top-5 -right-5 animate-[bob_3s_ease-in-out_infinite] [filter:drop-shadow(0_0_16px_rgba(255,79,216,.4))]">
            <BrawlerBunny size={70} expression="think" />
          </div>

          <Eyebrow>◆ QUESTION {q + 1}</Eyebrow>
          <h2 className="text-center my-5 mb-9 max-w-2xl text-[32px] font-semibold leading-[1.25] -tracking-[.01em]">
            {question.text}
          </h2>

          <div className="grid grid-cols-2 gap-3 w-full max-w-2xl">
            {question.choices.map((c, i) => (
              <SoloAnswerChoice
                key={i}
                letter={String.fromCharCode(65 + i)}
                label={c}
                active={selected === i}
                onClick={() => setSelected(i)}
                correct={selected !== null && i === question.correct}
                wrong={selected === i && i !== question.correct}
              />
            ))}
          </div>

          {selected !== null && (
            <Button
              variant="primary"
              className="mt-6"
              onClick={() => {
                setSelected(null);
                if (q < soloQuestions.length - 1) setQ(q + 1);
                else switchDisplay("result");
              }}
            >
              {q < soloQuestions.length - 1 ? "Next question" : "See results"} <Icon name="arrow" size={14} />
            </Button>
          )}
        </Glass>

        <Glass className="flex items-center gap-2.5 px-3.5 py-2.5 mx-auto w-full max-w-[1000px]">
          <Icon name="spark" size={14} color="var(--neon-gold)" />
          <div className="text-xs text-(--text-dim)">
            <span className="font-hand text-lg text-(--neon-gold)">"Rome wasn't built in a day."</span>{" "}
            2 of 3 correct · on track.
          </div>
          <div className="ml-auto font-pixel text-lg text-(--neon-gold)">+8 XP</div>
        </Glass>
      </div>
    </div>
  );
}

export default SoloPlay;
