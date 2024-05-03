/** @format */

import Image from "next/image";
import Link from "next/link";
import React from "react";

type PostItemType = {
  item: {
    id: number;
    type: string;
    title: string;
    date: string;
    contents: string;
    thumbnail: string;
  };
};

export default function PostItem({ item }: PostItemType) {
  return (
    <Link
      href={`/${item.type}/${item.id}`}
      className="flex flex-col items-center justify-between w-full max-w-md mx-auto border-b rounded-sm "
    >
      <div className="w-full overflow-hidden">
        <div className="relative w-full h-64 transition-transform bg-blue-300 rounded-sm hover:scale-105">
          <Image src={item.thumbnail} fill alt="" className="object-contain" />
        </div>
      </div>

      <div className="flex flex-col justify-between w-full h-32 px-2 py-3 bg-white ">
        <span className="font-normal text-blue-400 break-keep">
          {item.title}
        </span>
        <span className="h-full text-sm text-gray-700 overflow-hidde">
          {item.contents}
        </span>

        <div className="flex items-center justify-between space-x-1 text-xs text-gray-500 ">
          <div className="flex gap-x-1">
            <span className="">{item.type} </span>
            <span>◦</span>
            <time className="">{item.date}</time>
          </div>

          <div>
            <span>22 Min read</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
