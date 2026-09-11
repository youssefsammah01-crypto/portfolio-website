import type { SiteContent } from "@/content/types";
import Section from "./Section";
import Timeline from "./Timeline";

export default function Experience({
  experience,
}: {
  experience: SiteContent["experience"];
}) {
  return (
    <Section
      id="experience"
      eyebrow={experience.eyebrow}
      heading={experience.heading}
    >
      <div className="grid gap-14 md:grid-cols-2 md:gap-12">
        <Timeline label={experience.workLabel} entries={experience.work} />
        <Timeline
          label={experience.educationLabel}
          entries={experience.education}
        />
      </div>
    </Section>
  );
}
