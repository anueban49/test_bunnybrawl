// QuizBattle — live 1v1 quiz screen: 2 HUDs + question card + dual score bars.
"use client";

import { useEffect, useState } from "react";
import SceneBG from "./SceneBG";
import TopNav from "./TopNav";
import Eyebrow from "./Eyebrow";
import NeonChip from "./NeonChip";
import TimerRing from "./TimerRing";
import Glass from "./Glass";
import PlayerHUD from "./quiz/PlayerHUD";
import AnswerChoice from "./quiz/AnswerChoice";
import ScoreBar from "./quiz/ScoreBar";
import { liveQuizQuestion } from "../mocks/quiz";

function QuizBattle() {
  const [selected, setSelected] = useState<string | null>(null);
  const [timer, setTimer] = useState(12);
  const yourScore = 6;
  const oppScore = 5;
  const round = 7;

  useEffect(() => {
    const id = setInterval(() => setTimer((t) => (t > 0 ? t - 1 : 12)), 1000);
    return () => clearInterval(id);
  }, []);

  const q = liveQuizQuestion;

  return (
    <div className="min-h-screen relative">
      <SceneBG particleCount={26} />
      <TopNav />

      <div className="grid gap-4 px-8 pt-4 pb-7 min-h-[calc(100vh-64px)] grid-rows-[auto_1fr_auto]">
        <div className="flex justify-between gap-5">
          <PlayerHUD side="left" name="Kai Nakamura" handle="@kai_q" level={24}
            score={yourScore} color="cyan"
            avatar={{ hair: "spike", hairColor: "#ffd166", outfit: "hoodie", outfitColor: "#ff4fd8", accessory: "glasses" }} />
          <div className="text-center">
            <Eyebrow className="flex justify-center">
              ◆ ROUND {round} / 10 · {q.subject.split(" · ")[0]}
            </Eyebrow>
            <div className="font-pixel-mini text-[10px] text-(--text-mute) tracking-[.2em] mt-1.5">
              BEST OF 10 · RANKED
            </div>
          </div>
          <PlayerHUD side="right" name="Nova Sarkar" handle="@neon_nova" level={26}
            score={oppScore} color="magenta"
            avatar={{ hair: "mohawk", hairColor: "#5ef6ff", outfit: "jacket", outfitColor: "#ff4fd8", accessory: "visor", effect: "flame" }} />
        </div>

        <div className="relative grid">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none bg-[radial-gradient(circle,rgba(94,246,255,.1)_0%,transparent_60%)]" />

          <Glass className="flex flex-col items-center mx-auto w-full px-12 py-9 max-w-[920px] border-(--neon-cyan)/30">
            <div className="flex justify-between w-full mb-6">
              <div>
                <NeonChip color="cyan">◆ QUESTION {round}</NeonChip>
                <div className="text-[11px] text-(--text-dim) mt-1.5">{q.subject}</div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <div className="font-pixel-mini text-[8px] text-(--text-mute) tracking-[.2em]">TIME LEFT</div>
                  <div className={`text-[11px] mt-0.5 ${timer < 5 ? "text-(--danger)" : "text-(--text-dim)"}`}>
                    {timer < 5 ? "Hurry!" : "Think it through"}
                  </div>
                </div>
                <TimerRing pct={timer / 12} seconds={timer} size={80} color={timer < 5 ? "magenta" : "cyan"} />
              </div>
            </div>

            <div className="text-center py-3 pb-9">
              <h2 className="text-[34px] font-semibold leading-[1.25] -tracking-[.01em] max-w-[700px]">{q.text}</h2>
            </div>

            <div className="grid grid-cols-2 gap-3.5 w-full">
              {q.choices.map((c, i) => (
                <AnswerChoice
                  key={c.id}
                  letter={String.fromCharCode(65 + i)}
                  label={c.label}
                  active={selected === c.id}
                  onClick={() => setSelected(c.id)}
                  correct={!!selected && c.id === q.correct}
                  wrong={selected === c.id && c.id !== q.correct}
                />
              ))}
            </div>

            {selected && (
              <div className={`mt-5 font-pixel-mini text-[10px] tracking-[.2em] ${selected === q.correct ? "text-(--win)" : "text-(--danger)"}`}>
                {selected === q.correct ? "◆ LOCKED IN · WAITING FOR OPPONENT" : "◆ CHANCE SPENT · WAITING"}
              </div>
            )}
          </Glass>
        </div>

        <div className="flex items-center gap-5">
          <ScoreBar score={yourScore} max={10} color="cyan"    name="YOU"  />
          <div className="font-pixel text-[32px] text-(--text-mute) px-2">{yourScore}–{oppScore}</div>
          <ScoreBar score={oppScore}  max={10} color="magenta" name="NOVA" />
        </div>
      </div>
    </div>
  );
}

export default QuizBattle;
