import type { Metadata } from "next";
import type { ReactNode } from "react";
import { IBM_Plex_Sans_Arabic, Inter, JetBrains_Mono } from "next/font/google";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import { getContent } from "@/content";
import { siteUrl } from "@/content/profile";
import { defaultLocale, dirOf, isLocale, locales } from "@/lib/i18n";
import "../globals.css";

/**
 * This is the root layout — there is deliberately no `src/app/layout.tsx`.
 * In an i18n App Router app the topmost layout lives under the locale segment
 * so `<html lang>` and `<html dir>` can be set per language.
 */

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const plexArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plex-arabic",
  display: "swap",
});

type LocaleParams = { params: Promise<{ locale: string }> };

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

/** Only `/en` and `/ar` exist; anything else 404s without hitting this code. */
export const dynamicParams = false;

export async function generateMetadata({
  params,
}: LocaleParams): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale = isLocale(raw) ? raw : defaultLocale;
  const { meta } = getContent(locale);

  return {
    metadataBase: new URL(siteUrl),
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: `/${locale}`,
      languages: { en: "/en", ar: "/ar", "x-default": "/en" },
    },
    openGraph: {
      type: "website",
      url: `/${locale}`,
      title: meta.title,
      description: meta.description,
      locale: locale === "ar" ? "ar_MA" : "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleParams & { children: ReactNode }) {
  const { locale: raw } = await params;
  // `dynamicParams = false` guarantees `raw` is a known locale; the fallback
  // only exists to keep the type honest.
  const locale = isLocale(raw) ? raw : defaultLocale;
  const content = getContent(locale);

  return (
    <html
      lang={locale}
      dir={dirOf(locale)}
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${jetbrainsMono.variable} ${plexArabic.variable} antialiased`}
    >
      <body className="min-h-dvh">
        <a
          href="#top"
          className="sr-only focus:not-sr-only focus:absolute focus:start-4 focus:top-4 focus:z-100 focus:rounded-full focus:bg-fg focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-bg"
        >
          {content.nav.skipToContent}
        </a>

        <Nav locale={locale} nav={content.nav} name={content.hero.name} />
        <main>{children}</main>
        <Footer footer={content.footer} name={content.hero.name} />
      </body>
    </html>
  );
}
