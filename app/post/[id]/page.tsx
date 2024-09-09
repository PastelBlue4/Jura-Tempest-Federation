import MDX_Viewer from "@components/MDX_Viewer/MDX_Viewer";
import { getAllPostList } from "@libs/post/api";

export function generateStaticParams() {
  return getAllPostList().map((id) => ({ id }));
}

export default async function Page({ params }: { params: { id: string } }) {
  console.log(params);
  return (
    <div>
      <MDX_Viewer />
    </div>
  );
}
