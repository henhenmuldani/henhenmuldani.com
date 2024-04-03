import React from "react";
import BlogItem from "./BlogItem";

const BlogPreview = () => {
  return (
    <section className="p-6">
      <h1 className="cursor-pointer text-3xl font-black hover:text-[#CBA65F]">
        Blog
      </h1>
      <div className="mt-4 grid gap-4 md:grid-cols-1">
        {Array.from({ length: 3 }).map((_, index) => (
          <BlogItem key={index} />
        ))}
      </div>
    </section>
  );
};

export default BlogPreview;
