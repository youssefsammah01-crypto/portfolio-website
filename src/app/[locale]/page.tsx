import About from "@/components/About";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import { getContent } from "@/content";
import { defaultLocale, isLocale } from "@/lib/i18n";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale = isLocale(raw) ? raw : defaultLocale;
  const content = getContent(locale);

  return (
    <>
      <Hero hero={content.hero} />
      <About about={content.about} />
      <Projects projects={content.projects} />
      <Skills skills={content.skills} />
      <Experience experience={content.experience} />
    </>
  );
}
