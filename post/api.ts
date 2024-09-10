import fs from "fs";
import { join } from "path";
import { serialize } from "next-mdx-remote/serialize";
import PostType from "interfaces/post";

const postsPath = join(process.cwd(), "posts");

export const getAllPostList = () => {
  return fs.readdirSync(postsPath).map((slug) => slug.replace(/\.mdx$/, ""));
};

export const getPostById = (slug: string) => {
  const fullPath = join(postsPath, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  return fileContents;
};

export const getPostSourceBySlug = async (slug: string) => {
  const fileContents = getPostById(slug);
  const serializedData = await serialize(fileContents, {
    mdxOptions: {
      format: "mdx",
    },
    parseFrontmatter: true,
  });

  return {
    ...serializedData,
    post: { ...serializedData.frontmatter, slug } as PostType,
  };
};
