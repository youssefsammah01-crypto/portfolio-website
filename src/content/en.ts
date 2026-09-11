import type { SiteContent } from "./types";

/**
 * English content. Replace every placeholder below with your own text.
 * Links, tech names and images live in `profile.ts`.
 */
export const en: SiteContent = {
  meta: {
    title: "Your Name — Full-Stack Developer",
    description:
      "Full-stack developer building fast, accessible web applications with TypeScript, React and Node.js.",
  },

  nav: {
    about: "About",
    projects: "Projects",
    skills: "Skills",
    experience: "Experience",
    menu: "Menu",
    skipToContent: "Skip to content",
  },

  hero: {
    status: "Available for work",
    name: "Your Name",
    role: "Full-Stack Developer",
    tagline:
      "I build web applications that are fast, accessible and pleasant to maintain — from the database up to the last pixel.",
    primaryCta: "Get in touch",
    cvCta: "Download CV",
  },

  about: {
    eyebrow: "01 — About",
    heading: "A short introduction",
    paragraphs: [
      "I am a full-stack developer based in Morocco. I work mostly with TypeScript on both ends of the stack: React and Next.js on the front, Node.js and PostgreSQL on the back.",
      "What I enjoy most is the part after the feature works — making it fast, making it accessible, and making it simple enough that the next person can change it without fear.",
      "Outside of client work I maintain a few small open-source tools and write about the things that took me too long to figure out.",
    ],
    facts: [
      { label: "Based in", value: "Casablanca, Morocco" },
      { label: "Experience", value: "3+ years" },
      { label: "Focus", value: "Web applications" },
      { label: "Languages", value: "Arabic, French, English" },
    ],
  },

  projects: {
    eyebrow: "02 — Work",
    heading: "Selected projects",
    intro:
      "A few things I have built recently. Each one is open source — the code is linked.",
    code: "Code",
    live: "Live",
    items: {
      "task-flow": {
        title: "TaskFlow",
        description:
          "A team task board with real-time updates, drag-and-drop columns and per-workspace permissions. Built on the Next.js App Router with a Postgres backend.",
      },
      "shop-api": {
        title: "Shop API",
        description:
          "A REST API for a small e-commerce shop: products, carts, orders and Stripe checkout. Containerised, documented with OpenAPI and covered by integration tests.",
      },
      "weather-dash": {
        title: "Weather Dashboard",
        description:
          "A clean dashboard for multi-city forecasts with charts, saved locations and an offline cache. A study in making a data-heavy UI stay calm.",
      },
      "dev-notes": {
        title: "Dev Notes",
        description:
          "A minimal MDX blog engine with syntax highlighting, reading time and RSS. What I use for my own writing.",
      },
    },
  },

  skills: {
    eyebrow: "03 — Stack",
    heading: "What I work with",
    intro: "The tools I reach for most often, grouped by where they sit.",
    groups: {
      frontend: "Frontend",
      backend: "Backend",
      tools: "Tools & Infra",
    },
  },

  experience: {
    eyebrow: "04 — Path",
    heading: "Experience & education",
    workLabel: "Experience",
    educationLabel: "Education",
    work: [
      {
        title: "Full-Stack Developer",
        org: "Company Name",
        period: "2023 — Present",
        description:
          "Lead the front-end of the main product and share ownership of the API. Cut initial load time in half by moving the dashboard to server components.",
      },
      {
        title: "Front-End Developer",
        org: "Agency Name",
        period: "2021 — 2023",
        description:
          "Built marketing sites and internal tools for a dozen clients. Set up the component library the team still uses today.",
      },
    ],
    education: [
      {
        title: "Engineering Degree, Computer Science",
        org: "University Name",
        period: "2018 — 2021",
        description:
          "Focus on distributed systems and software engineering. Final project: a real-time collaboration service.",
      },
    ],
  },

  footer: {
    heading: "Let's work together",
    blurb:
      "I am open to freelance projects and full-time roles. The fastest way to reach me is email — I answer within a day.",
    cta: "Say hello",
    builtWith: "Built with Next.js and Tailwind CSS",
    rights: "All rights reserved.",
  },
};
