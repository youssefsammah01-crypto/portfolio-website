import type { ReactNode } from "react";
import Reveal from "./Reveal";

/**
 * Shared section shell: anchor target, hairline top border, eyebrow + heading.
 *
 * Note the `ltr:` prefixes on the eyebrow — letter-spacing and monospace both
 * break Arabic, which is a connected script, so they only apply in English.
 */
export default function Section({
  id,
  eyebrow,
  heading,
  intro,
  children,
}: {
  id: string;
  eyebrow: string;
  heading: string;
  intro?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 border-t border-border">
      <div className="mx-auto w-full max-w-5xl px-6 py-20 sm:py-28">
        <Reveal>
          <p className="text-xs text-accent uppercase ltr:font-mono ltr:tracking-[0.18em]">
            {eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-balance sm:text-4xl ltr:tracking-tight">
            {heading}
          </h2>
          {intro ? (
            <p className="mt-4 max-w-2xl leading-relaxed text-muted">{intro}</p>
          ) : null}
        </Reveal>

        <div className="mt-12 sm:mt-14">{children}</div>
      </div>
    </section>
  );
}
