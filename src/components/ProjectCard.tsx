import Image from "next/image";
import { ArrowUpRightIcon, GithubIcon } from "./icons";

export type ProjectCardProps = {
  slug: string;
  title: string;
  description: string;
  tags: readonly string[];
  repoUrl: string | null;
  liveUrl: string | null;
  image: string | null;
  codeLabel: string;
  liveLabel: string;
};

/** Stable per-slug hue, so every project gets its own cover without a designer. */
function coverStyle(slug: string) {
  let hash = 0;
  for (let index = 0; index < slug.length; index += 1) {
    hash = (hash * 31 + slug.charCodeAt(index)) >>> 0;
  }
  const hue = hash % 360;
  return {
    backgroundImage: `linear-gradient(135deg, oklch(0.36 0.08 ${hue}), oklch(0.19 0.04 ${(hue + 60) % 360}))`,
  };
}

/**
 * Built from the slug, not the title: it stays the same in both languages and
 * is always Latin. (Arabic titles gave odd results — "لوحة الطقس" became "لا".)
 */
function initials(slug: string) {
  return slug
    .split("-")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

export default function ProjectCard({
  slug,
  title,
  description,
  tags,
  repoUrl,
  liveUrl,
  image,
  codeLabel,
  liveLabel,
}: ProjectCardProps) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-xl border border-border bg-surface transition-colors hover:border-border-strong">
      <div className="relative aspect-16/10 w-full border-b border-border">
        {image ? (
          <Image
            src={image}
            alt=""
            fill
            sizes="(min-width: 640px) 50vw, 100vw"
            className="object-cover"
          />
        ) : (
          <div
            style={coverStyle(slug)}
            className="flex size-full items-center justify-center"
          >
            <span className="font-mono text-4xl font-semibold text-white/20">
              {initials(slug)}
            </span>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted">
          {description}
        </p>

        <ul className="mt-5 flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <li
              key={tag}
              className="rounded-md border border-border bg-elevated px-2 py-1 font-mono text-[11px] text-faint"
            >
              {tag}
            </li>
          ))}
        </ul>

        {repoUrl || liveUrl ? (
          <div className="mt-5 flex items-center gap-5 border-t border-border pt-5">
            {repoUrl ? (
              <a
                href={repoUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-fg"
              >
                <GithubIcon className="size-4" />
                {codeLabel}
              </a>
            ) : null}

            {liveUrl ? (
              <a
                href={liveUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="group inline-flex items-center gap-1.5 text-sm text-accent transition-opacity hover:opacity-80"
              >
                {liveLabel}
                <ArrowUpRightIcon className="size-4 transition-transform group-hover:-translate-y-0.5 rtl:-scale-x-100" />
              </a>
            ) : null}
          </div>
        ) : null}
      </div>
    </article>
  );
}
