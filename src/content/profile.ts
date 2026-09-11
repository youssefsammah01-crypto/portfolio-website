/**
 * Everything here is the SAME in English and Arabic: links, tech names, image
 * paths, dates. Translatable text lives in `en.ts` and `ar.ts`.
 *
 * Adding a project here without translating it in both locale files is a
 * TypeScript error — that is intentional, it keeps the two languages in sync.
 */

/** Used for canonical URLs, sitemap and Open Graph. Change it if you add a custom domain. */
export const siteUrl = "https://portfolio-website-sigma-gules-98.vercel.app";

export const email = "you@example.com";

/**
 * Drop a PDF at `public/cv.pdf` and set this to "/cv.pdf".
 * While it is empty the "Download CV" button stays hidden.
 */
export const cvUrl = "";

export const socials = [
  { icon: "github", href: "https://github.com/your-username" },
  { icon: "linkedin", href: "https://www.linkedin.com/in/your-username" },
  { icon: "mail", href: `mailto:${email}` },
] as const;

export type SocialIcon = (typeof socials)[number]["icon"];

/**
 * Structure of each project. The title and description are translated in
 * `en.ts` / `ar.ts`, keyed by `slug`.
 *
 * Every field is spelled out on every project — use `null` for the ones you do
 * not have. That keeps the list uniform and makes the options obvious.
 *
 * `image`: put a file in `public/images/projects/` and point at it, e.g.
 * "/images/projects/my-app.png". With `null` the card draws a generated
 * gradient cover instead.
 */
export const projects = [
  {
    slug: "task-flow",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Prisma"],
    repoUrl: "https://github.com/your-username/task-flow",
    liveUrl: "https://task-flow.vercel.app",
    image: null,
  },
  {
    slug: "shop-api",
    tags: ["Node.js", "Express", "MongoDB", "Docker"],
    repoUrl: "https://github.com/your-username/shop-api",
    liveUrl: null,
    image: null,
  },
  {
    slug: "weather-dash",
    tags: ["React", "Tailwind CSS", "Chart.js"],
    repoUrl: "https://github.com/your-username/weather-dash",
    liveUrl: "https://weather-dash.vercel.app",
    image: null,
  },
  {
    slug: "dev-notes",
    tags: ["Next.js", "MDX", "Tailwind CSS"],
    repoUrl: "https://github.com/your-username/dev-notes",
    liveUrl: null,
    image: null,
  },
] as const;

export type ProjectSlug = (typeof projects)[number]["slug"];

/** Tech names are not translated — only the category label is. */
export const skillGroups = [
  {
    key: "frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML / CSS"],
  },
  {
    key: "backend",
    items: ["Node.js", "Express", "PostgreSQL", "MongoDB", "REST APIs"],
  },
  {
    key: "tools",
    items: ["Git", "Docker", "Vercel", "Figma", "Linux"],
  },
] as const;

export type SkillGroupKey = (typeof skillGroups)[number]["key"];
