import MDX_Viewer from "@components/MDX_Viewer/MDX_Viewer";
import { getAllPostList, getPostById } from "@libs/post/api";
import { compileMDX } from "next-mdx-remote/rsc";

export async function generateStaticParams() {
  return getAllPostList().map((slug) => ({ slug }));
}

type Props = {
  params: { slug: string };
};

export default async function Page({ params: { slug } }: Props) {
  const source = getPostById(slug);

  const { frontmatter } = await compileMDX({
    source,
    options: {
      parseFrontmatter: true,
    },
  });

  console.log(frontmatter);

  return (
    <div className="p-3 bg-blue-100">
      <MDX_Viewer source={source} />
    </div>
  );
}
