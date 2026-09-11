"use client";

import { useEffect, useState } from "react";
import type { Locale } from "@/lib/i18n";
import type { SiteContent } from "@/content/types";
import LocaleSwitcher from "./LocaleSwitcher";
import { CloseIcon, MenuIcon } from "./icons";

export default function Nav({
  locale,
  nav,
  name,
}: {
  locale: Locale;
  nav: SiteContent["nav"];
  name: string;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#about", label: nav.about },
    { href: "#projects", label: nav.projects },
    { href: "#skills", label: nav.skills },
    { href: "#experience", label: nav.experience },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "border-b border-border bg-bg/80 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between gap-4 px-6 py-4">
        <a
          href="#top"
          className="text-sm font-semibold text-fg transition-opacity hover:opacity-70"
        >
          {name}
        </a>

        <nav aria-label={nav.menu} className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted transition-colors hover:text-fg"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LocaleSwitcher locale={locale} />
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={nav.menu}
            className="inline-flex size-9 items-center justify-center rounded-full border border-border text-muted transition-colors hover:text-fg md:hidden"
          >
            {open ? <CloseIcon className="size-5" /> : <MenuIcon className="size-5" />}
          </button>
        </div>
      </div>

      <nav
        id="mobile-nav"
        aria-label={nav.menu}
        hidden={!open}
        className="border-t border-border bg-bg/95 backdrop-blur-md md:hidden"
      >
        <ul className="mx-auto flex w-full max-w-5xl flex-col px-6 py-2">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-3 text-sm text-muted transition-colors hover:text-fg"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
