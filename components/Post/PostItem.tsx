import PostType from "interfaces/post";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  post: PostType;
};

export default function PostItem({ post }: Props) {
  return (
    <>
      <Link
        href={`/post/${post.slug}`}
        className="flex flex-col items-center justify-between w-full h-auto max-w-sm mx-auto rounded-lg "
      >
        <div className="w-full overflow-hidden">
          <div className="relative w-full h-64 transition-transform bg-blue-300 rounded-t-md hover:scale-105">
            <Image
              src={post.ogImage ? post.ogImage : "/post-asset/default-og.jpeg"}
              fill
              alt=""
              className="object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col justify-between w-full h-32 px-3 py-3 bg-white rounded-b-md">
          <span className="text-xl font-semibold text-gray-900 break-keep">
            {post.title}
          </span>
          <span className="h-full overflow-hidden text-base text-gray-500">
            {post.description}
          </span>

          <div className="flex items-center justify-between space-x-1 text-sm text-gray-500 ">
            <div className="flex gap-x-1">
              <span className="">{post.type}</span>
              <span>◦</span>
              <time className="">{post.date}</time>
            </div>

            <div>
              <span>{post.readingLength} Min read</span>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
