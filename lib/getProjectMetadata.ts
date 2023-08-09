import fs from "fs";
import matter from "gray-matter";
import { ProjectMetadata } from "@/lib/ProjectMetadata";

//Fungsi ini akan mengambil metadata dari setiap post yang ada di folder posts
const getProjectMetadata = (): ProjectMetadata[] => {
  const folder = "posts/projects/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));
  // const slugs = markdownPosts.map((file) => file.replace(".md", ""));
  // return slugs;

  //* Get gray-matter metadata from file contents
  const posts = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(`${folder}${fileName}`, "utf8");
    const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title,
      techStacks: matterResult.data.techStacks,
      year: matterResult.data.year,
      image: matterResult.data.image,
      slug: fileName.replace(".md", ""),
    };
  });

  return posts;
};

export default getProjectMetadata;
