import MDX_Viewer from "components/MDX_Viewer/MDX_Viewer";
import { getAllPostList, getPostSourceBySlug } from "lib/post/api";

type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  return getAllPostList().map((slug) => ({ slug }));
}

export default async function Page({ params: { slug } }: Props) {
  const source = await getPostSourceBySlug(slug);
  const post = source.post;
  return (
    <article>
      <h1>{post.title}</h1>
      <div className="p-3 bg-blue-100">
        <MDX_Viewer source={source} />
      </div>
    </article>
  );
}
