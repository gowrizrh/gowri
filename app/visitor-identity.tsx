"use client";

import * as Tooltip from "@radix-ui/react-tooltip";

export function VisitorIdentity({ ip }: { ip: string }) {
  // An ellipsis is deliberately distinct from IPv6's valid :: compression.
  const shortened = ip.includes(":") && ip.length > 18;
  const label = shortened ? `${ip.slice(0, 9)}…${ip.slice(-4)}` : ip;

  return (
    <span data-nosnippet="" className="whitespace-nowrap text-primary glow">
      {shortened ? (
        <Tooltip.Provider delayDuration={150}>
          <Tooltip.Root>
            <Tooltip.Trigger asChild>
              <span
                tabIndex={0}
                aria-label={`Visitor address: ${ip}`}
                className="cursor-help underline decoration-dotted underline-offset-4 focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-ring focus-visible:outline-offset-2"
              >
                {label}
              </span>
            </Tooltip.Trigger>
            <Tooltip.Portal>
              <Tooltip.Content
                side="bottom"
                sideOffset={4}
                className="z-[70] max-w-[calc(100vw-3rem)] break-all overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-tooltip-content-transform-origin)"
              >
                <span data-nosnippet="">{ip}</span>
              </Tooltip.Content>
            </Tooltip.Portal>
          </Tooltip.Root>
        </Tooltip.Provider>
      ) : (
        label
      )}
      @home
    </span>
  );
}
