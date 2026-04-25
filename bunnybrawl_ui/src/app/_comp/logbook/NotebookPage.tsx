// NotebookPage — paper-style detail view (binder rings + ruled lines + tape strip).
"use client";

import Icon from "../Icon";
import BrawlerBunny from "../BrawlerBunny";
import { useDisplay } from "../../_providers/DisplayProvider";
import type { LogbookEntry } from "../../mocks/logbook";

function NotebookPage({ entry }: { entry: LogbookEntry }) {
  const { switchDisplay } = useDisplay();
  const c = entry.content;

  return (
    <div className="rounded-xl border border-[rgba(120,90,60,.35)] bg-[linear-gradient(135deg,#f5ecd6,#e8dcbf)] text-[#2a1c14] h-full relative overflow-hidden">
      <div className="absolute left-5 top-0 bottom-0 w-7 flex flex-col justify-around py-7 border-r border-dashed border-[rgba(120,90,60,.35)]">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="w-4 h-4 rounded-full bg-[radial-gradient(circle_at_30%_30%,#e8dcbf,#a88b6b)] shadow-[inset_0_2px_3px_rgba(0,0,0,.15)]"
          />
        ))}
      </div>

      <div className="absolute inset-0 pointer-events-none left-15 bg-[linear-gradient(rgba(120,90,60,.15)_1px,transparent_1px)] bg-[size:100%_28px] bg-[position:0_42px]" />

      <div className="absolute top-3.5 left-1/2 -translate-x-1/2 -rotate-3 w-32 h-7 border border-dashed border-[rgba(120,90,60,.3)] bg-[rgba(255,209,102,.45)] shadow-[0_2px_6px_rgba(0,0,0,.1)]" />

      <div className="relative h-full flex flex-col gap-2.5 overflow-auto pl-20 pr-12 pt-8 pb-6">
        <div className="flex justify-between items-start">
          <div>
            <div className="font-pixel-mini text-[9px] tracking-[.2em] text-[#a88b6b]">
              {entry.subject.toUpperCase()} · {entry.date}
            </div>
            <h1 className="font-hand text-[54px] font-bold mt-1 leading-none text-[#2a1c14]">
              {c?.heading ?? entry.title}
            </h1>
            {c?.subheading && (
              <div className="font-hand text-2xl -mt-0.5 text-[#7a5a3d]">{c.subheading}</div>
            )}
          </div>
          <div className="flex items-center gap-2 mt-1.5">
            <button className="flex items-center gap-1.5 border border-[#a88b6b] rounded-lg px-3 py-2 cursor-pointer text-xs font-semibold bg-transparent text-[#2a1c14] font-sans">
              <Icon name="gear" size={12} /> Edit
            </button>
            <button
              onClick={() => switchDisplay("solo")}
              className="flex items-center gap-1.5 border-none rounded-lg px-3.5 py-2 cursor-pointer text-[13px] font-bold bg-[linear-gradient(135deg,#ff4fd8,#ff9566)] text-white shadow-[0_4px_16px_rgba(255,79,216,.35)] font-sans"
            >
              <Icon name="spark" size={14} /> Quiz me on this
            </button>
          </div>
        </div>

        {c?.paragraphs && (
          <div className="font-hand text-[22px] leading-relaxed mt-3 text-[#2a1c14]">
            {c.paragraphs.map((p, i) => <p key={i} className="mb-3.5">{p}</p>)}
          </div>
        )}

        {c?.bullets && (
          <div className="mt-1.5">
            <div className="font-hand text-[26px] font-bold text-[#7a3d5a]">Key points:</div>
            <ul className="font-hand text-[22px] leading-relaxed pl-6 mt-1.5 text-[#2a1c14] list-disc">
              {c.bullets.map((b, i) => <li key={i} className="mb-1">{b}</li>)}
            </ul>
          </div>
        )}

        <div className="absolute bottom-7 right-15 rotate-6 [filter:drop-shadow(0_4px_10px_rgba(0,0,0,.2))]">
          <BrawlerBunny size={90} expression="think" glow={false} />
        </div>

        {c?.scribbles?.map((s, i) => {
          const vars = {
            "--sc-x": s.x,
            "--sc-y": s.y,
            "--sc-rot": `${s.rot}deg`,
            "--sc-color": s.color ?? "#d36b3d",
          } as React.CSSProperties;
          return (
            <div
              key={i}
              style={vars}
              className="absolute font-hand text-2xl pointer-events-none left-(--sc-x) top-(--sc-y) rotate-(--sc-rot) text-(--sc-color)"
            >
              {s.text}
            </div>
          );
        })}
      </div>

      <div className="absolute bottom-0 right-0 w-10 h-10 bg-[linear-gradient(135deg,transparent_50%,rgba(120,90,60,.2)_50%)] border-l border-t border-dashed border-[rgba(120,90,60,.35)]" />
    </div>
  );
}

export default NotebookPage;
