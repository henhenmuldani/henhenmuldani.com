import React from "react";
import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getProjectMetadata from "@/lib/getProjectMetadata";
import Image from "next/image";

const getPostContent = (slug: string) => {
  const folder = "posts/projects/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
};

// untuk menjadikan static page
export const generateStaticParams = async () => {
  const posts = getProjectMetadata();
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

const ProjectDetailPage = (props: any) => {
  const slug = props.params.slug;
  const post = getPostContent(slug);
  return (
    <section className="p-6">
      {/* 
        //TODO: bikin image untuk hero image, jadi mdx hanya text aja
       */}
      <div className="flex items-center justify-center">
        <Image
          className="rounded-md border-8 border-foreground"
          src={post.data.image}
          key={post.data.slug}
          alt={post.data.title}
          width={720}
          height={720}
        />
      </div>
      <h1 className="mt-4 text-3xl font-black">{post.data.title}</h1>
      <article className="prose prose-slate max-w-none dark:prose-invert dark:prose-pre:bg-neutral-600">
        <Markdown>{post.content}</Markdown>
      </article>
    </section>
  );
};

export default ProjectDetailPage;
