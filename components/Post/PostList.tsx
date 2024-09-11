import { getAllPostList } from "lib/post/api";
import React from "react";

export default function PostList() {
  const posts = getAllPostList();

  console.log(posts);

  return <div></div>;
}
