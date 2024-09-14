import PostList from "@components/Post/PostList";
import { getAllPostList } from "lib/post/api";

export default async function Page() {
  const allPost = await getAllPostList();

  console.log(allPost);
  return (
    <>
      <div className="flex flex-col w-full ">
        <section className="flex flex-col items-center w-full ">
          <div className="grid w-full grid-cols-1 gap-4 lg:grid-cols-2 "></div>
        </section>
      </div>
    </>
  );
}
