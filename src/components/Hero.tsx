import type { SiteContent } from "@/content/types";
import { cvUrl, email, socials } from "@/content/profile";
import { ArrowUpRightIcon, DownloadIcon, SocialIconFor, socialLabels } from "./icons";
import Reveal from "./Reveal";

export default function Hero({ hero }: { hero: SiteContent["hero"] }) {
  return (
    <section id="top" className="relative isolate overflow-hidden">
      {/* Ambient accent glow — the only decorative element on the page. It is
          centred, so physical `left` is correct in both directions. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[-12rem] -z-10 h-[34rem] w-[54rem] max-w-[140vw] -translate-x-1/2 rounded-full opacity-[0.08] blur-[110px]"
        style={{
          background:
            "radial-gradient(circle, var(--color-accent) 0%, transparent 65%)",
        }}
      />

      <div className="mx-auto w-full max-w-5xl px-6 pt-36 pb-20 sm:pt-44 sm:pb-28">
        <Reveal>
          <p className="inline-flex items-center gap-2.5 rounded-full border border-border bg-surface px-3.5 py-1.5 text-xs text-muted">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-accent" />
            </span>
            {hero.status}
          </p>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="mt-8 text-5xl font-semibold text-balance sm:text-6xl lg:text-7xl ltr:tracking-tight">
            {hero.name}
          </h1>
          <p className="mt-3 text-2xl font-medium text-muted sm:text-3xl">
            {hero.role}
          </p>
        </Reveal>

        <Reveal delay={160}>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted text-pretty">
            {hero.tagline}
          </p>
        </Reveal>

        <Reveal delay={240}>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${email}`}
              className="group inline-flex items-center gap-2 rounded-full bg-fg px-5 py-2.5 text-sm font-medium text-bg transition-opacity hover:opacity-90"
            >
              {hero.primaryCta}
              <ArrowUpRightIcon className="size-4 transition-transform group-hover:-translate-y-0.5 rtl:-scale-x-100" />
            </a>

            {cvUrl ? (
              <a
                href={cvUrl}
                download
                className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-2.5 text-sm font-medium text-fg transition-colors hover:border-border-strong hover:bg-elevated"
              >
                {hero.cvCta}
                <DownloadIcon className="size-4" />
              </a>
            ) : null}
          </div>
        </Reveal>

        <Reveal delay={320}>
          <ul className="mt-12 flex items-center gap-2">
            {socials.map((social) => (
              <li key={social.icon}>
                <a
                  href={social.href}
                  target={social.icon === "mail" ? undefined : "_blank"}
                  rel={social.icon === "mail" ? undefined : "noreferrer noopener"}
                  aria-label={socialLabels[social.icon]}
                  className="inline-flex size-10 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-border-strong hover:text-fg"
                >
                  <SocialIconFor icon={social.icon} className="size-[18px]" />
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
