import { projects } from "@/content/profile";
import type { SiteContent } from "@/content/types";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";
import Section from "./Section";

export default function Projects({
  projects: copy,
}: {
  projects: SiteContent["projects"];
}) {
  return (
    <Section
      id="projects"
      eyebrow={copy.eyebrow}
      heading={copy.heading}
      intro={copy.intro}
    >
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project, index) => (
          <Reveal key={project.slug} delay={index * 70} className="h-full">
            <ProjectCard
              slug={project.slug}
              title={copy.items[project.slug].title}
              description={copy.items[project.slug].description}
              tags={project.tags}
              repoUrl={project.repoUrl}
              liveUrl={project.liveUrl}
              image={project.image}
              codeLabel={copy.code}
              liveLabel={copy.live}
            />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
