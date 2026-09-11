export const locales = ["en", "ar"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export function isRtl(locale: Locale): boolean {
  return locale === "ar";
}

export function dirOf(locale: Locale): "rtl" | "ltr" {
  return isRtl(locale) ? "rtl" : "ltr";
}

/** The locale the language switcher points at. */
export const otherLocale: Record<Locale, Locale> = { en: "ar", ar: "en" };

/** Label shown on the language switcher, written in the target language. */
export const localeLabel: Record<Locale, string> = { en: "English", ar: "العربية" };
