# Gowri's personal site

A single-page, shell-inspired personal site. Shell commands are presentation,
not an executable terminal; the page stays unframed without terminal-window
chrome.

The homepage includes an about line, career views, confirmed credentials, and
one selected project. Appearance controls provide six colour palettes and an
independent retro CRT effect. The theme uses JetBrains Mono and VT323.

## Development

Use Bun to install dependencies and run scripts:

```sh
bun install
bun run dev
```

Run the production build and linter with:

```sh
bun run build
bun run lint
```

## Visitor address

Prompts display the address from the request's `x-real-ip` header, or the first
`x-forwarded-for` value, with `guest` as a fallback. Vercel supplies these
headers. Treat the address as display-only proxy data, not authenticated
identity. The application does not persist it, and responses containing it
must not be publicly cached.

## Analytics

The site sends page views to the self-hosted Umami instance at
`https://awe-theta.vercel.app`. The tracker is configured in
[app/layout.tsx](./app/layout.tsx) and runs only on Vercel production and preview
deployments, not local runs. Vercel system environment variables must be enabled
so that `VERCEL_ENV` is available.

## Site assets

- [Social preview](./public/social-preview.png)
- [Robots rules](./public/robots.txt)
- [Sitemap](./public/sitemap.xml)

Site metadata and structured profile data are in [lib/seo.ts](./lib/seo.ts).
