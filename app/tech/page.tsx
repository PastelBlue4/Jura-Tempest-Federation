/** @format */

"use client";

import TechPostItem from "@components/Tech/TechPostItem";
import Image from "next/image";
import Link from "next/link";

const blogItems = [
  {
    id: 1,
    type: "tech",
    title: "Lorem ipsum dolor sit amet consectetur",
    date: "2022-32-32",
    contents: "lorem loremloremorem ",
    thumbnail: "/",
  },
  {
    id: 2,
    type: "tech",
    title: "adipisicing elit. Soluta natus",
    date: "2022-32-32",
    contents: "lorem loremloremorem ",
    thumbnail: "/",
  },
  {
    id: 3,
    type: "tech",
    title: " Soluta natus nisi quisquam ducimus",
    date: "2022-32-32",
    contents: "lorem loremloremorem ",
    thumbnail: "/",
  },
  {
    id: 4,
    type: "tech",
    title: "illum, necessitatibus vitae culpa sequi ",
    date: "2022-32-32",
    contents: "lorem loremloremorem ",
    thumbnail: "/",
  },
  {
    id: 5,
    type: "tech",
    title: "empora quam unde ad adipisci nobis fugit",
    date: "2022-32-32",
    contents: "lorem loremloremorem ",
    thumbnail: "/",
  },
];

export default function Page() {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full mt-10 ">
        <section className="w-full space-y-7">
          {blogItems &&
            blogItems.map((item) => {
              return <TechPostItem key={item.id} item={item} />;
            })}
        </section>
      </div>
    </>
  );
}
