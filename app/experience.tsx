"use client";

import { useState, type ReactNode } from "react";
import { Prompt } from "./prompt";

const experience = [
  {
    dates: "2025-now ",
    role: "Platform Engineer",
    org: "RAA",
    note: "hybrid cloud, multi region kubernetes fleets, gitops",
  },
  {
    dates: "2020-2024",
    role: "Senior DevOps Engineer",
    org: "Aligent",
    note: "devops, aws architecture, adobe commerce",
  },
  {
    dates: "2019-2020",
    role: "Software Developer",
    org: "The Distillery",
    note: "backend services",
  },
];

const views = {
  git: "git log --graph --oneline career",
  journalctl: "journalctl -u career.service",
} as const;

type View = keyof typeof views;

export function Experience({ visitor }: { visitor: ReactNode }) {
  const [view, setView] = useState<View>("git");

  return (
    <>
      <div data-nosnippet="" className="mt-10 flex flex-wrap gap-2 text-xs">
        {(["git", "journalctl"] as const).map((name) => (
          <button
            key={name}
            type="button"
            onClick={() => setView(name)}
            aria-pressed={view === name}
            className={`rounded border px-2 py-0.5 transition-colors ${view === name ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-primary"}`}
          >
            {name}
          </button>
        ))}
      </div>
      <Prompt cmd={views[view]} heading="career-heading" visitor={visitor} />
      {view === "git" && (
        <ul aria-label="Career git log" className="mt-3 space-y-1">
          {experience.map((entry, index) => (
            <li key={entry.role} className="flex items-baseline gap-3">
              <span aria-hidden="true" className="shrink-0 text-muted-foreground">
                *
              </span>
              <span className="shrink-0 text-primary glow">
                {(0x3fa9c1 * (index + 7)).toString(16).slice(0, 7)}
              </span>
              <span className="min-w-0">
                {index === 0 && <span className="text-primary">(HEAD -&gt; main) </span>}
                {entry.role} @ {entry.org}{" "}
                <span className="text-muted-foreground">({entry.dates.trim()})</span>
              </span>
            </li>
          ))}
        </ul>
      )}
      {view === "journalctl" && (
        <div className="mt-3 space-y-2">
          <p className="text-muted-foreground">
            -- Logs begin at {experience[experience.length - 1].dates.split("-")[0]}. --
          </p>
          {[...experience].reverse().map((entry) => (
            <p key={entry.role}>
              <span className="text-muted-foreground">
                {entry.dates.trim().split("-")[0]} home{" "}
              </span>
              <span className="text-primary glow">career[{entry.org.length * 97}]: </span>
              Started {entry.role} at {entry.org}.{" "}
              <span className="text-muted-foreground">{entry.note}</span>
            </p>
          ))}
          <p className="text-muted-foreground">-- career.service: active (running) --</p>
        </div>
      )}
    </>
  );
}
