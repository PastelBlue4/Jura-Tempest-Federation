import MDX_Viewer from "components/MDX_Viewer/MDX_Viewer";
import { getAllPostSlugs, getPostSourceBySlug } from "lib/post/api";

type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export default async function Page({ params: { slug } }: Props) {
  const source = await getPostSourceBySlug(slug);
  const post = source.post;

  return (
    <article className="w-full bg-blue-100">
      <h1 className="text-2xl font-semibold text-center">{post.title}</h1>

      <div className="w-full p-1 ">
        <MDX_Viewer source={source} />
      </div>
    </article>
  );
}
