import MDX_Viewer from "@components/MDX_Viewer/MDX_Viewer";
import { getAllPostList, getPostById } from "@libs/post/api";

export async function generateStaticParams() {
  return getAllPostList().map((id) => ({ id }));
}

type Props = {
  postId: string;
};

export default async function Page({ postId }: Props) {
  const source = getPostById("test1");

  return (
    <div className="p-3 bg-blue-100">
      <MDX_Viewer source={source} />
    </div>
  );
}
