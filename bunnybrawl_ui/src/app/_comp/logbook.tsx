// Logbook — split-pane study notebook: entry list on the left, paper page on the right.
"use client";

import { useState } from "react";
import SceneBG from "./SceneBG";
import TopNav from "./TopNav";
import Eyebrow from "./Eyebrow";
import Icon from "./Icon";
import Glass from "./Glass";
import EntryCard from "./logbook/EntryCard";
import NotebookPage from "./logbook/NotebookPage";
import { logbookEntries } from "../mocks/logbook";

function Logbook() {
  const [activeEntry, setActiveEntry] = useState(0);
  const entry = logbookEntries[activeEntry];

  return (
    <div className="min-h-screen relative">
      <SceneBG particleCount={16} streaks={false} />
      <TopNav />

      <div className="grid grid-cols-[320px_1fr] gap-5 px-10 py-6 h-[calc(100vh-64px)]">
        <Glass className="p-4 flex flex-col">
          <div className="flex justify-between mb-3.5">
            <Eyebrow>◆ LOGBOOK</Eyebrow>
            <button className="bg-transparent border-none text-(--neon-cyan) cursor-pointer flex items-center gap-1 text-xs font-semibold">
              <Icon name="plus" size={14} /> New
            </button>
          </div>

          <div className="flex items-center py-2 px-3 rounded-lg border border-(--border) mb-3.5 bg-black/30">
            <Icon name="target" size={14} color="var(--text-mute)" />
            <input
              placeholder="Search entries…"
              className="flex-1 bg-transparent border-none text-(--text) text-[13px] ml-2.5 outline-none font-sans"
            />
          </div>

          <div className="flex flex-col gap-2 overflow-y-auto flex-1">
            {logbookEntries.map((e, i) => (
              <EntryCard key={e.id} e={e} active={i === activeEntry} onClick={() => setActiveEntry(i)} />
            ))}
          </div>

          <Glass className="p-3 mt-3.5 flex items-center gap-2 bg-[rgba(255,209,102,.05)] border-(--neon-gold)/20">
            <Icon name="bolt" size={14} color="var(--neon-gold)" />
            <div className="text-[11px] text-(--text-dim)">
              <b className="text-(--text)">12 entries</b> · 3,240 words this month
            </div>
          </Glass>
        </Glass>

        <div className="relative">
          <NotebookPage entry={entry} />
        </div>
      </div>
    </div>
  );
}

export default Logbook;
