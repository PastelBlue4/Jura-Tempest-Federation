import MDX_Viewer from "@components/MDX_Viewer/MDX_Viewer";
import { getAllPostList } from "@libs/post/api";

export async function generateStaticParams() {
  return getAllPostList().map((id) => ({ id }));
}

type Props = {
  postId: string;
};

export default async function Page({ postId }: Props) {
  console.log(getAllPostList);

  return (
    <div>
      <MDX_Viewer postId={postId ? postId : "test1"} />
    </div>
  );
}
