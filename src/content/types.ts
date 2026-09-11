import type { ProjectSlug, SkillGroupKey } from "./profile";

export type TimelineEntry = {
  title: string;
  org: string;
  period: string;
  description: string;
};

/**
 * The shape every locale file must fill in. `en.ts` and `ar.ts` are both typed
 * as `SiteContent`, so a missing field or an untranslated project is a
 * compile-time error rather than a blank spot on the page.
 */
export type SiteContent = {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    about: string;
    projects: string;
    skills: string;
    experience: string;
    menu: string;
    skipToContent: string;
  };
  hero: {
    status: string;
    role: string;
    /** Displayed as the big headline. Keep it short. */
    name: string;
    tagline: string;
    primaryCta: string;
    cvCta: string;
  };
  about: {
    heading: string;
    eyebrow: string;
    paragraphs: string[];
    facts: { label: string; value: string }[];
  };
  projects: {
    heading: string;
    eyebrow: string;
    intro: string;
    code: string;
    live: string;
    /** One entry per slug in `profile.ts`. */
    items: Record<ProjectSlug, { title: string; description: string }>;
  };
  skills: {
    heading: string;
    eyebrow: string;
    intro: string;
    /** One label per group key in `profile.ts`. */
    groups: Record<SkillGroupKey, string>;
  };
  experience: {
    heading: string;
    eyebrow: string;
    workLabel: string;
    educationLabel: string;
    work: TimelineEntry[];
    education: TimelineEntry[];
  };
  footer: {
    heading: string;
    blurb: string;
    cta: string;
    builtWith: string;
    rights: string;
  };
};
