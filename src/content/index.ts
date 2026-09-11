import type { Locale } from "@/lib/i18n";
import type { SiteContent } from "./types";
import { en } from "./en";
import { ar } from "./ar";

const content: Record<Locale, SiteContent> = { en, ar };

export function getContent(locale: Locale): SiteContent {
  return content[locale];
}

export type { SiteContent };
