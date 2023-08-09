import Hero from "@/components/Hero";
import ProjectsPreview from "@/components/ProjectsPreview";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    // <main className="flex flex-col items-center justify-between max-w-5xl mx-auto bg-blue-400">
    <main>
      <Hero />
      {/* <BlogPreview /> */}
      <ProjectsPreview />
      <Contact />
    </main>
  );
}
