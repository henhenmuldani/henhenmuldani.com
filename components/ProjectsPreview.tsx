import React from "react";
import getProjectMetadata from "@/lib/getProjectMetadata";
import ProjectsItem from "@/components/ProjectsItem";
import Link from "next/link";
const ProjectsPreview = () => {
  const projectMetadata = getProjectMetadata();
  const size = 3;

  return (
    <section className="p-6">
      <Link href={`/projects`}>
        <h1 className="text-3xl font-black hover:text-[#CBA65F]">Projects</h1>
      </Link>
      <div className="mt-4 grid gap-4 md:grid-cols-3">
        {projectMetadata
          .map((project) => (
            <ProjectsItem key={project.slug} {...project} /> //pake spread operator artinya sama dengan yang dibawah
            // <PostPreview key={post.slug} title={post.title} subtitle={post.subtitle} date={post.date} slug={post.slug} />
          ))
          .sort((a, b) => b.props.year - a.props.year)
          .slice(0, size)}
      </div>
    </section>
  );
};

export default ProjectsPreview;
