# thanyalukj.com

Personal site — minimal, typographic, blog-ready. Built with Astro, hosted on GitHub Pages.

**Repo:** [thanyalukj/thanyalukj.github.io](https://github.com/thanyalukj/thanyalukj.github.io)
**Default URL:** https://thanyalukj.github.io
**Custom domain:** https://thanyalukj.com

## Local development

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output → dist/
npm test         # vitest unit tests
npm run format   # prettier
```

## Editing content

- **Site copy** (name, headline, bio, "Now", links, /about paragraphs):
  edit `src/content/site.ts`. One file, one source of truth.
- **Blog posts:** add a Markdown file under `src/content/writing/`.
  Frontmatter:
  ```yaml
  ---
  title: "Post title"
  description: "One sentence shown on the writing index."
  pubDate: 2026-04-27
  draft: false
  ---
  ```
  `draft: true` excludes the post from production builds.

## Deploying

Push to `main`. The GitHub Actions workflow at `.github/workflows/deploy.yml`
builds and deploys to GitHub Pages automatically.

### One-time GitHub setup

The repo is `thanyalukj/thanyalukj.github.io` — a GitHub user site, so it's
automatically served at `https://thanyalukj.github.io/` once the first deploy
succeeds.

1. **Settings → Pages → Build and deployment → Source: "GitHub Actions"**
   (it may default to "Deploy from a branch" — flip it to GitHub Actions so
   our workflow can publish).
2. After the first Actions run goes green, set the custom domain:
   - **Settings → Pages → Custom domain:** `thanyalukj.com` → Save.
   - Wait for the DNS check, then enable **Enforce HTTPS**.

The `public/CNAME` file pins the custom domain on every build, so GitHub Pages
won't drop it.

### One-time Cloudflare DNS setup

In Cloudflare → DNS → Records, for the `thanyalukj.com` zone:

| Type  | Name | Content              | Proxy    |
| ----- | ---- | -------------------- | -------- |
| A     | @    | 185.199.108.153      | DNS only |
| A     | @    | 185.199.109.153      | DNS only |
| A     | @    | 185.199.110.153      | DNS only |
| A     | @    | 185.199.111.153      | DNS only |
| CNAME | www  | thanyalukj.github.io | DNS only |

Use **DNS only** (gray cloud) initially so GitHub Pages can issue the
Let's Encrypt cert. After HTTPS is confirmed working you can flip the
proxy on if you want Cloudflare's CDN/edge features.

## Stack

- [Astro](https://astro.build) — static site generator
- TypeScript (strict)
- Vitest for unit tests
- Plain CSS (no Tailwind), CSS custom properties for tokens

## Structure

```
src/
  content/
    site.ts             # all editable copy
    config.ts           # collection schemas
    writing/*.md        # blog posts
  layouts/              # BaseLayout, PostLayout
  components/           # Nav, Footer, NowBlock
  pages/                # routes (index, about, writing/*)
  lib/                  # date/reading-time helpers (with tests)
  styles/global.css     # design tokens + base styles
public/
  CNAME                 # custom domain pin
  favicon.svg
.github/workflows/
  deploy.yml            # build + GitHub Pages deploy
```
