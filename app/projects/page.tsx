import React from "react";
import getProjectMetadata from "@/lib/getProjectMetadata";
import ProjectsItem from "@/components/ProjectsItem";
const ProjectsPage = () => {
  const projectMetadata = getProjectMetadata();

  return (
    <section className="p-6">
      <h1 className="text-4xl font-black">Projects</h1>
      <div className="mt-4 grid gap-4 md:grid-cols-3">
        {projectMetadata.map((project) => (
          <ProjectsItem key={project.slug} {...project} /> //pake spread operator artinya sama dengan yang dibawah
          // <PostPreview key={post.slug} title={post.title} subtitle={post.subtitle} date={post.date} slug={post.slug} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsPage;
