# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this project is

Personal site at https://thanyalukj.com — minimal, typographic, blog-ready. Built with Astro, hosted on GitHub Pages, custom domain via Cloudflare DNS-only. Owner: a senior mobile engineer; this is a small content site, not an app.

The full deploy and DNS context is in `README.md` and is the source of truth for how the site is hosted.

## Commands

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # static output → dist/
npm run preview   # serve dist/ locally to smoke-test the production build
npm test          # vitest unit tests (src/**/*.test.ts)
npm run test:watch
npm run format    # prettier --write .
npx astro check   # type-check .astro files (TS strict)
```

Run a single vitest test:

```bash
npx vitest run src/lib/format.test.ts -t "formats a date"
```

## Architecture

### Content model (the most important thing to understand)

The site has **two distinct content sources**, and edits should land in whichever fits:

1. **`src/content/site.ts`** — single TypeScript module exporting one typed `site` config. All editable copy that is *not* a blog post lives here: name, headline, homepage bio, "Now" text, `/about` paragraphs, social links. Every layout/component/page that needs that copy imports from this module — there is no template hunting. **When the user asks to change anything visible on `/`, `/about`, the nav, or the footer, this is almost always the file to edit.**

2. **Astro Content Collection at `src/content/writing/`** — Markdown files with frontmatter `{ title, description, pubDate, draft }`. Schema in `src/content/config.ts` (zod). The writing index (`/writing`) and post route (`/writing/[...slug]`) read from this collection via `getCollection("writing")`. Drafts (`draft: true`) are excluded only in production builds — they're visible in `npm run dev`.

### Routing

| Path | File |
|---|---|
| `/` | `src/pages/index.astro` |
| `/about` | `src/pages/about.astro` |
| `/writing` | `src/pages/writing/index.astro` |
| `/writing/<slug>` | `src/pages/writing/[...slug].astro` |

Adding a post = drop a new `.md` in `src/content/writing/`. No registration, no rebuild config — `getStaticPaths()` in `[...slug].astro` discovers it.

### Layout chain

`BaseLayout.astro` → renders `<head>` (title, description, canonical, OG) + `<Nav />` + `<slot />` + `<Footer />`. All pages wrap with this. Posts use `PostLayout.astro` which itself wraps `BaseLayout` and adds the post title + meta line.

### Styling

- Plain CSS, no Tailwind.
- Design tokens live in `src/styles/global.css` as CSS custom properties (palette, font stacks, reading widths). Imported once in `BaseLayout`.
- Per-component styles use Astro's scoped `<style>` blocks (auto data-attribute scoping). When a component grows complex styles, prefer scoped over adding to global.

### Utilities

`src/lib/format.ts` — `formatPostDate` (writing index, "YYYY · MMM"), `formatPostDateLong` (post meta, "Month YYYY"), `readingTime` (post meta, ceiling at 200 wpm). These have tests in `format.test.ts`. Other code is template/config and intentionally untested.

### Zero JS by design

The build ships **0 bytes of client-side JavaScript**. Astro renders to static HTML; no `client:*` directives are used anywhere. If a future feature needs interactivity, add a framework component (React/Svelte/etc.) and an explicit `client:load|visible|idle` directive — but treat that as a deliberate scope decision, not a default.

## Deploy

`.github/workflows/deploy.yml` builds on push to `main` and publishes to GitHub Pages via `actions/deploy-pages@v4`. Workflow runs `npm test` before `npm run build` — failing tests block deploy. `public/CNAME` (`thanyalukj.com`) is copied into `dist/` automatically.

## Project conventions

- **TypeScript strict** (`astro/tsconfigs/strict`).
- **No comments by default** — code should be self-explanatory; only annotate non-obvious *why*.
- **Prettier** (`.prettierrc`) is the formatter. Run `npm run format` before committing if you've touched many files. Markdown content files are auto-formatted too.
- **Commits** use Conventional Commits: `feat`, `chore`, `docs`, `feat(scope)`, etc. (see `git log`).
- **Out of scope for v1** (don't add unprompted): dark mode, RSS feed, tags/search/pagination on writing index, comments, analytics, syntax highlighting, MDX, OG image generation. Each is intentionally deferred per the design spec at `docs/superpowers/specs/2026-04-27-personal-website-design.md`.

## Working with the owner's writing

Treat blog posts under `src/content/writing/*.md` as the user's voice. When editing prose:

- **Preserve faith references intact.** scripture citations (e.g., "Genesis 16:13 (NIV) ..."), prayers, and threefold biblical-style emphasis ("Holy, holy, holy" / "Planning, Planning, Planning") are intentional content. Never remove or secularize them.
- Match the conversational, slightly informal tone — don't polish into corporate prose.
- The placeholder code-block + blockquote that ship in *new* sample posts can be deleted once real content fills them, but verify with the user before stripping anything that looks like real content.
