/** @format */

import Link from "next/link";
import React from "react";

type ReviewPostItemType = {
  item: {
    id: number;
    type: string;
    title: string;
    date: string;
    contents: string;
    thumbnail: string;
  };
};

export default function ReviewPostItem({ item }: ReviewPostItemType) {
  return (
    <Link
      href={`/${item.type}/${item.id}`}
      className="flex flex-col-reverse items-center justify-between w-full max-w-md mx-auto transition-all border-b rounded-sm h-96 hover:scale-105"
    >
      <div className="flex flex-col justify-center w-full h-32 px-4 space-y-1 bg-white ">
        <span className="text-blue-400 break-keep">{item.title}</span>
        <span className="text-sm text-gray-700 overflow-hidde">
          {item.contents}
        </span>
        <div className="flex items-center space-x-1 text-xs text-gray-500 ">
          <span className="">{item.type} </span>
          <span>◦</span>
          <time className="">{item.date}</time>
        </div>
      </div>
      <div className=" h-full w-full bg-cover overflow-hidden rounded-sm bg-blue-300 aspect-[1.73/1]"></div>
    </Link>
  );
}
