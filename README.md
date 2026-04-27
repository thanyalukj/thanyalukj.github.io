# thanyalukj.com

Personal site — minimal, typographic, blog-ready. Built with Astro, hosted on GitHub Pages.

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

1. Create a public GitHub repo and push `main`.
2. Repo → Settings → Pages → Build and deployment → Source: **GitHub Actions**.
3. After the first deploy succeeds, set the custom domain:
   - Repo → Settings → Pages → Custom domain: `thanyalukj.com` → Save.
   - Wait for the DNS check, then enable **Enforce HTTPS**.

The `public/CNAME` file pins the custom domain on every build, so GitHub Pages
won't drop it.

### One-time Cloudflare DNS setup

In Cloudflare → DNS → Records, for the `thanyalukj.com` zone:

| Type  | Name | Content                     | Proxy    |
| ----- | ---- | --------------------------- | -------- |
| A     | @    | 185.199.108.153             | DNS only |
| A     | @    | 185.199.109.153             | DNS only |
| A     | @    | 185.199.110.153             | DNS only |
| A     | @    | 185.199.111.153             | DNS only |
| CNAME | www  | <github-username>.github.io | DNS only |

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
