/** @format */

import Link from "next/link";
import { type } from "os";
import React from "react";

type TechPostItemType = {
  item: {
    id: number;
    type: string;
    title: string;
    date: string;
    contents: string;
    thumbnail: string;
  };
};

export default function TechPostItem({ item }: TechPostItemType) {
  return (
    <Link
      href={`/${item.type}/${item.id}`}
      className="flex items-center justify-between w-full h-32 px-4 pb-6 border-b"
    >
      <div className="flex flex-col justify-center w-2/3 h-32 p-2 space-y-2 ">
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
      <div className="w-1/3 bg-blue-300 aspect-square"></div>
    </Link>
  );
}
