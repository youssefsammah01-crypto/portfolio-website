import type { TimelineEntry } from "@/content/types";
import Reveal from "./Reveal";

/**
 * Vertical timeline shared by Experience and Education.
 *
 * The rail uses `border-s` and the dots a negative `start` offset — both
 * logical properties, so the whole thing mirrors itself in Arabic.
 *
 * The dot sits outside <Reveal> on purpose: Reveal animates a `transform`,
 * which would turn it into the containing block for absolute children and make
 * the dot jump once the animation settles.
 */
export default function Timeline({
  label,
  entries,
}: {
  label: string;
  entries: TimelineEntry[];
}) {
  return (
    <div>
      <h3 className="text-xs text-faint uppercase ltr:font-mono ltr:tracking-[0.18em]">
        {label}
      </h3>

      <ol className="mt-7 border-s border-border">
        {entries.map((entry, index) => (
          <li
            key={`${entry.org}-${entry.period}`}
            className="relative ps-7 pb-10 last:pb-0"
          >
            <span
              aria-hidden="true"
              className="absolute start-[-5px] top-1.5 size-2.5 rounded-full border-2 border-bg bg-border-strong"
            />
            <Reveal delay={index * 80}>
              <p className="text-xs text-faint ltr:font-mono">{entry.period}</p>
              <h4 className="mt-2 font-semibold">{entry.title}</h4>
              <p className="mt-0.5 text-sm text-accent">{entry.org}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {entry.description}
              </p>
            </Reveal>
          </li>
        ))}
      </ol>
    </div>
  );
}
