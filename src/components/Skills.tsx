import { skillGroups } from "@/content/profile";
import type { SiteContent } from "@/content/types";
import Reveal from "./Reveal";
import Section from "./Section";

export default function Skills({ skills }: { skills: SiteContent["skills"] }) {
  return (
    <Section
      id="skills"
      eyebrow={skills.eyebrow}
      heading={skills.heading}
      intro={skills.intro}
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, index) => (
          <Reveal key={group.key} delay={index * 70} className="h-full">
            <div className="h-full rounded-xl border border-border bg-surface p-6">
              <h3 className="text-sm font-semibold">{skills.groups[group.key]}</h3>
              <ul className="mt-4 flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-border bg-elevated px-2.5 py-1.5 font-mono text-xs text-muted"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
