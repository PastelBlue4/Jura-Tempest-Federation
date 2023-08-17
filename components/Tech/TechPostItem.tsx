/** @format */

import { type } from "os";
import React from "react";

type TechPostItemType = {
  item: {
    id: number;
    title: string;
    date: string;
    contents: string;
    thumbnail: string;
  };
};

export default function TechPostItem({ item }: TechPostItemType) {
  return (
    <div className="flex items-center justify-between w-full h-32 px-4 pb-6 border-b">
      <div className="flex flex-col justify-center w-2/3 h-32 p-2 space-y-2 ">
        <span className="text-blue-400 break-keep">{item.title}</span>
        <span className="text-sm text-gray-700 overflow-hidde">
          {item.contents}
        </span>
        <time className="text-xs text-gray-500">{item.date}</time>
      </div>
      <div className="w-1/3 bg-blue-300 aspect-square"></div>
    </div>
  );
}
