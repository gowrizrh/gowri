import type { ReactNode } from "react";

export function Prompt({
  cmd,
  heading,
  visitor,
}: {
  cmd: string;
  heading?: string;
  visitor: ReactNode;
}) {
  const Tag = heading ? "h2" : "p";

  return (
    <Tag id={heading} className="mt-10 first:mt-0 text-inherit font-normal">
      {visitor}
      <span className="text-muted-foreground">:</span>
      <span className="text-primary">~</span>
      <span className="text-muted-foreground">$ </span>
      <span>{cmd}</span>
    </Tag>
  );
}
