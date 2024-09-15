import PostType from "interfaces/post";
import React from "react";
import PostItem from "./PostItem";

type Props = {
  posts: PostType[];
};

export default function PostList({ posts }: Props) {
  return (
    <>
      <section className="flex flex-col items-center w-full ">
        <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 ">
          {posts.map((post) => (
            <PostItem post={post} key={post.slug} />
          ))}
        </div>
      </section>
    </>
  );
}
