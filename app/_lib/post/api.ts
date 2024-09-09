import fs from "fs";
import { join } from "path";

const postsPath = join(process.cwd(), "posts");

export const getAllPostList = () => {
  return fs.readdirSync(postsPath).map((slug) => slug.replace(/\.mdx$/, ""));
};

export const getPostById = (id: string) => {
  const fullPath = join(postsPath, `${id}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  return fileContents;
};
