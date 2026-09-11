"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { localeLabel, otherLocale, type Locale } from "@/lib/i18n";
import { GlobeIcon } from "./icons";

/**
 * Swaps the first path segment (`/en/...` <-> `/ar/...`) and carries the
 * current anchor across, so switching language keeps you in the same section.
 */
export default function LocaleSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const target = otherLocale[locale];
  const [hash, setHash] = useState("");

  // Read after mount only: the server has no access to the fragment, so using
  // it during render would break hydration.
  useEffect(() => {
    const sync = () => setHash(window.location.hash);
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, []);

  const segments = (pathname || `/${locale}`).split("/");
  segments[1] = target;
  const href = `${segments.join("/")}${hash}`;

  return (
    <Link
      href={href}
      hrefLang={target}
      aria-label={`Switch language to ${localeLabel[target]}`}
      className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1.5 text-sm text-muted transition-colors hover:border-border-strong hover:text-fg"
    >
      <GlobeIcon className="size-4 shrink-0" />
      <span>{localeLabel[target]}</span>
    </Link>
  );
}
