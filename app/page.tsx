import Hero from "@/components/Hero";
import BlogPreview from "@/components/BlogPreview";
import ProjectsPreview from "@/components/ProjectsPreview";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <BlogPreview />
      <ProjectsPreview />
      <Contact />
    </main>
  );
}
