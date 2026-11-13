<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Project Context

This is Gowri's personal website, migrated from a Lovable project to Next.js.
Keep this file current when architecture or confirmed design decisions change.

## Design Intent

- Keep the site to the homepage unless the user asks for more routes or scope.
- Preserve the unframed shell-inspired presentation; commands are decorative,
  not executable. Do not add terminal-window chrome or generic portfolio UI.
- Every prompt displays `visitor-ip@home`. Use the Vercel request address and
  `guest` fallback, not a hardcoded IP. This is display-only proxy data, not
  authenticated identity. Do not persist it or publicly cache responses that
  contain it.
- Long IPv6 addresses are abbreviated in the prompt; the full address is
  available in an accessible tooltip that dismisses with Escape.
- Keep both career presentations: `git log --graph --oneline career` and
  `journalctl -u career.service`. They represent the same career data. Hashes
  and journal process IDs are decorative.
- Keep the distinct Projects section with the confirmed
  `mage-os/mageos-async-events` GitHub link. Do not invent career details,
  project URLs, or contribution claims.
- Keep the keyboard-accessible six-colour selector and independent retro CRT
  toggle. Original amber and retro are the defaults; neither setting persists.
- Preserve JetBrains Mono, VT323 display text, responsive layout, restrained
  glow/scanlines, and the existing about copy.
- Skills and writings are not part of the current site. Do not restore them
  unless requested.
- Visitor identities and appearance controls must remain excluded from search
  snippets with `data-nosnippet`.

## Implementation Map

- React 19, TypeScript, Next.js 16 App Router, and Tailwind CSS 4.
- [app/page.tsx](app/page.tsx) owns the server-rendered homepage content and
  structured-data script.
- [app/appearance.tsx](app/appearance.tsx) owns client-side palette and CRT
  state; [app/experience.tsx](app/experience.tsx) owns the career view toggle.
- [app/visitor.tsx](app/visitor.tsx) reads `x-real-ip`, then the first
  `x-forwarded-for` value, inside an async component behind Suspense. Keep this
  request-time read out of the static shell.
- [app/visitor-identity.tsx](app/visitor-identity.tsx) formats the address and
  provides the accessible IPv6 tooltip. [app/prompt.tsx](app/prompt.tsx) shares
  prompt markup.
- [app/globals.css](app/globals.css) owns the palette tokens, global typography,
  glow, CRT scanlines, and cursor animation. `retro` gates glow and scanlines;
  the cursor blink remains separate.
- [app/layout.tsx](app/layout.tsx) owns self-hosted fonts and Next.js metadata.
  [lib/seo.ts](lib/seo.ts) owns site identity and ProfilePage/Person JSON-LD.
- [app/error.tsx](app/error.tsx) and [app/not-found.tsx](app/not-found.tsx)
  provide recovery and not-found UI.
- [public/robots.txt](public/robots.txt), [public/sitemap.xml](public/sitemap.xml),
  and [public/social-preview.png](public/social-preview.png) are the public SEO
  assets. The sitemap currently lists only the homepage.

## Development And Verification

- Use Bun for package management and scripts. See [README.md](README.md).
- Available commands: `bun run dev`, `bun run lint`, `bun run build`, and
  `bun run start`. A test runner is not currently configured.
- Read the installed Next.js guidance under `node_modules/next/dist/docs/`
  before changing framework APIs; this project uses Next.js 16.4.
- Keep dependencies minimal and the server/client boundary clear. Do not move
  request headers or interactive state into unrelated components.
