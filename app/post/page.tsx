import PostList from "@components/Post/PostList";
import { getAllPostList } from "lib/post/api";

export default async function Page() {
  const allPost = await getAllPostList();

  return (
    <>
      <div className="flex flex-col w-full ">
        <PostList posts={allPost} />
      </div>
    </>
  );
}
