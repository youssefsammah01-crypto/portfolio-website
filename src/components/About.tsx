import type { SiteContent } from "@/content/types";
import Reveal from "./Reveal";
import Section from "./Section";

export default function About({ about }: { about: SiteContent["about"] }) {
  return (
    <Section id="about" eyebrow={about.eyebrow} heading={about.heading}>
      <div className="grid gap-12 md:grid-cols-[1.5fr_1fr] md:gap-16">
        <Reveal>
          <div className="space-y-5 leading-relaxed text-muted">
            {about.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </Reveal>

        <Reveal delay={120}>
          <dl className="divide-y divide-border rounded-xl border border-border bg-surface px-5">
            {about.facts.map((fact) => (
              <div key={fact.label} className="flex flex-col gap-1 py-4">
                <dt className="text-xs text-faint">{fact.label}</dt>
                <dd className="text-sm text-fg">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </Section>
  );
}
