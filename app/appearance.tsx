"use client";

import { useState, type ReactNode } from "react";

const palettes = [
  "arctic cyan",
  "original amber",
  "soft amber",
  "green phosphor",
  "slate & copper",
  "midnight lavender",
];

export function Appearance({ children }: { children: ReactNode }) {
  const [retro, setRetro] = useState(true);
  const [palette, setPalette] = useState("arctic cyan");

  return (
    <main
      data-palette={palette}
      className={`${retro ? "retro" : ""} min-h-screen px-6 pt-24 pb-12 md:py-20`}
    >
      <div
        data-nosnippet=""
        className="fixed right-4 top-4 z-[60] flex flex-wrap items-center gap-2 text-xs"
      >
        <label htmlFor="palette" className="sr-only">
          Colour scheme
        </label>
        <select
          id="palette"
          value={palette}
          onChange={(event) => setPalette(event.target.value)}
          className="max-w-[45vw] rounded border bg-background px-2 py-1 text-primary focus-visible:outline-2 focus-visible:outline-ring focus-visible:outline-offset-2"
        >
          {palettes.map((name) => (
            <option key={name} value={name}>
              {name}
            </option>
          ))}
        </select>
        <button
          type="button"
          onClick={() => setRetro((current) => !current)}
          aria-pressed={retro}
          className="rounded border bg-background px-3 py-1 text-muted-foreground transition-colors hover:bg-secondary hover:text-primary focus-visible:outline-2 focus-visible:outline-ring focus-visible:outline-offset-2"
        >
          [{retro ? "x" : " "}] retro crt
        </button>
      </div>
      {children}
    </main>
  );
}
