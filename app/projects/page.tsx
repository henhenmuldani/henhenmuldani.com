import React from "react";
import getProjectMetadata from "@/lib/getProjectMetadata";
import ProjectsItem from "@/components/ProjectsItem";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Henhen Imam M - Projects",
};

const ProjectsPage = () => {
  const projectMetadata = getProjectMetadata();

  return (
    <section className="p-6">
      <h1 className="text-3xl font-black">Projects</h1>
      <div className="mt-4 grid gap-4 md:grid-cols-3">
        {projectMetadata
          .map((project) => (
            <ProjectsItem key={project.slug} {...project} /> //pake spread operator artinya sama dengan yang dibawah
            // <PostPreview key={post.slug} title={post.title} subtitle={post.subtitle} date={post.date} slug={post.slug} />
          ))
          .sort((a, b) => b.props.year - a.props.year)}
      </div>
    </section>
  );
};

export default ProjectsPage;
