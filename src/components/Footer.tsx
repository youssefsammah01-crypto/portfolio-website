import { email, socials } from "@/content/profile";
import type { SiteContent } from "@/content/types";
import { ArrowUpRightIcon, SocialIconFor, socialLabels } from "./icons";
import Reveal from "./Reveal";

export default function Footer({
  footer,
  name,
}: {
  footer: SiteContent["footer"];
  name: string;
}) {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="border-t border-border">
      <div className="mx-auto w-full max-w-5xl px-6 py-20 sm:py-28">
        <Reveal>
          <h2 className="text-3xl font-semibold text-balance sm:text-4xl ltr:tracking-tight">
            {footer.heading}
          </h2>
          <p className="mt-4 max-w-xl leading-relaxed text-muted">
            {footer.blurb}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-4">
            <a
              href={`mailto:${email}`}
              className="group inline-flex items-center gap-2 rounded-full bg-fg px-5 py-2.5 text-sm font-medium text-bg transition-opacity hover:opacity-90"
            >
              {footer.cta}
              <ArrowUpRightIcon className="size-4 transition-transform group-hover:-translate-y-0.5 rtl:-scale-x-100" />
            </a>

            <a
              href={`mailto:${email}`}
              dir="ltr"
              className="font-mono text-sm break-all text-muted underline decoration-border underline-offset-4 transition-colors hover:text-fg hover:decoration-accent"
            >
              {email}
            </a>
          </div>
        </Reveal>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-5 px-6 py-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-faint">
            © {year} {name}. {footer.rights}
          </p>

          <div className="flex items-center gap-5">
            <p className="hidden text-xs text-faint sm:block">
              {footer.builtWith}
            </p>
            <ul className="flex items-center gap-3">
              {socials.map((social) => (
                <li key={social.icon}>
                  <a
                    href={social.href}
                    target={social.icon === "mail" ? undefined : "_blank"}
                    rel={social.icon === "mail" ? undefined : "noreferrer noopener"}
                    aria-label={socialLabels[social.icon]}
                    className="block text-faint transition-colors hover:text-fg"
                  >
                    <SocialIconFor icon={social.icon} className="size-[18px]" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
