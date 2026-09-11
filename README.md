# Portfolio website

Personal developer portfolio — bilingual **English / العربية** with full RTL
support, dark minimal design.

**Stack:** Next.js 16 (App Router, Turbopack) · React 19 · TypeScript ·
Tailwind CSS v4 · deployed on Vercel.

## Run locally

Requires Node.js 20.9 or newer.

```bash
npm install
npm run dev
```

Open <http://localhost:3000> — it redirects to `/en`. The Arabic version is at
`/ar`.

| Command | What it does |
| --- | --- |
| `npm run dev` | Dev server with hot reload |
| `npm run build` | Production build (type-checks too) |
| `npm run start` | Serve the production build |
| `npm run lint` | ESLint |

## Editing your content

All text, links and data live in **three files** under `src/content/`.
Components contain no copy, so you never need to touch them to update the site.

| File | What goes in it |
| --- | --- |
| `profile.ts` | Anything that is the same in both languages: email, social links, CV path, site URL, project links/tags/images, tech names. |
| `en.ts` | Every English sentence on the site. |
| `ar.ts` | Every Arabic sentence on the site. |

Both locale files are typed against `src/content/types.ts`. If you add a project
to `profile.ts` and forget to translate it, or leave a field out, `npm run build`
fails and tells you exactly what is missing.

### Checklist before going live

- [ ] `profile.ts` → `siteUrl`, `email`, and the GitHub/LinkedIn links in `socials`
- [ ] `profile.ts` → replace the four sample projects with yours
- [ ] `en.ts` and `ar.ts` → your name, role, bio, experience and education
- [ ] Optional: CV and project screenshots (below)

### Adding a CV

Put the PDF at `public/cv.pdf`, then in `profile.ts` set:

```ts
export const cvUrl = "/cv.pdf";
```

The "Download CV" button appears automatically once `cvUrl` is not empty.

### Adding project screenshots

Put images in `public/images/projects/` (16:10 looks best, e.g. 1600×1000),
then set `image` on the project in `profile.ts`:

```ts
image: "/images/projects/task-flow.png",
```

Projects with `image: null` get a generated gradient cover instead.

## How it is built

```
src/
├─ app/
│  ├─ [locale]/layout.tsx   Root layout: <html lang dir>, fonts, metadata
│  ├─ [locale]/page.tsx     Composes the sections
│  ├─ globals.css           Design tokens (@theme) + reveal animation
│  ├─ sitemap.ts, robots.ts
├─ components/              One file per section + Nav, Footer, icons
├─ content/                 ← your content (see above)
└─ lib/i18n.ts              Locales, direction helpers
```

- **There is no `src/app/layout.tsx`.** The root layout sits under `[locale]`
  so `<html lang>` and `<html dir>` can change per language — the pattern from
  the Next.js internationalization guide.
- `/` → `/en` is a redirect in `next.config.ts`. Only `/en` and `/ar` exist
  (`dynamicParams = false`); anything else is a 404.
- **RTL:** components use Tailwind's logical utilities only (`ms-`, `ps-`,
  `start-`, `border-s`, `text-start`…), never `ml-`/`left-`, so the layout
  mirrors itself in Arabic. Letter-spacing and the monospace font are applied
  with the `ltr:` variant because both break connected Arabic script.
- Both pages are statically prerendered at build time.

## Deploy

1. Push this repository to GitHub.
2. On [vercel.com/new](https://vercel.com/new), import the repository. Vercel
   detects Next.js — no configuration needed.
3. Once deployed, put the real URL in `siteUrl` in `profile.ts` and push again
   (it feeds the sitemap, canonical URLs and social previews).

Every push to `main` redeploys automatically.
