import Image from "next/image";
import Link from "next/link";
import React from "react";

type PostItemType = {
  item: {
    id: string;
    type: string;
    title: string;
    date: string;
    contents: string;
    thumbnail: string;
    readingLength: number;
  };
};

export default function PostItem({ item }: PostItemType) {
  return (
    <Link
      href={`/post/${item.id}`}
      className="flex flex-col items-center justify-between w-full h-auto max-w-lg mx-auto rounded-lg "
    >
      <div className="w-full overflow-hidden">
        <div className="relative w-full h-64 transition-transform bg-blue-300 rounded-t-md hover:scale-105">
          <Image
            src={item.thumbnail}
            fill
            alt=""
            className="hidden object-contain"
          />
        </div>
      </div>

      <div className="flex flex-col justify-between w-full h-32 px-3 py-3 bg-white rounded-b-md">
        <span className="text-xl font-semibold text-gray-900 break-keep">
          {item.title}
        </span>
        <span className="h-full overflow-hidden text-base text-gray-500">
          {item.contents}
        </span>

        <div className="flex items-center justify-between space-x-1 text-sm text-gray-500 ">
          <div className="flex gap-x-1">
            <span className="">{item.type} </span>
            <span>◦</span>
            <time className="">{item.date}</time>
          </div>

          <div>
            <span>{item.readingLength} Min read</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
