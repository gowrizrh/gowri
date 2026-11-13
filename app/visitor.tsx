import { headers } from "next/headers";
import { Suspense } from "react";
import { VisitorIdentity } from "./visitor-identity";

async function RequestVisitor() {
  const requestHeaders = await headers();
  const raw =
    requestHeaders.get("x-real-ip") ??
    requestHeaders.get("x-forwarded-for")?.split(",")[0];

  return <VisitorIdentity ip={raw?.trim() || "guest"} />;
}

export function Visitor() {
  return (
    <Suspense
      fallback={
        <span aria-hidden="true" data-nosnippet="" className="whitespace-nowrap text-primary glow">
          loading@home
        </span>
      }
    >
      <RequestVisitor />
    </Suspense>
  );
}
