import React from "react";
import BlogItem from "@/components/BlogItem";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Henhen Imam M - Blog",
};

const BlogPage = () => {
  return (
    <section className="p-6">
      <h1 className="text-3xl font-black">Blog</h1>
      <div className="mt-4 grid grid-cols-1 gap-4">
        {Array.from({ length: 2 }).map((_, index) => (
          <BlogItem key={index} />
        ))}
      </div>
    </section>
  );
};

export default BlogPage;
