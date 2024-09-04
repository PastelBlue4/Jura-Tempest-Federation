"use client";

import PostItem from "@components/Post/PostItem";
import Link from "next/link";

const mainPreviewItems = [
  {
    id: 1,
    type: "tech",
    title: "Lorem ipsum dolor sit amet consectetur",
    date: "2022-32-32",
    contents: "lorem loremloremorem  ",
    readingLength: 22,
    thumbnail: "/rimuru.jpg",
  },
  {
    id: 2,
    type: "tech",
    title: "Lorem ipsum dolor sit amet consectetur",
    date: "2022-32-32",
    contents: "lorem loremloremorem  ",
    readingLength: 22,
    thumbnail: "/rimuru.jpg",
  },
  {
    id: 3,
    type: "tech",
    title: "Lorem ipsum dolor sit amet consectetur",
    date: "2022-32-32",
    contents: "lorem loremloremorem  ",
    readingLength: 22,
    thumbnail: "/rimuru.jpg",
  },
  {
    id: 4,
    type: "review",
    title: "illum, necessitatibus vitae culpa sequi ",
    date: "2022-32-32",
    contents: "lorem loremloremorem ",
    readingLength: 22,
    thumbnail: "/rimuru.jpg",
  },
  {
    id: 5,
    type: "review",
    title: "illum, necessitatibus vitae culpa sequi ",
    date: "2022-32-32",
    contents: "lorem loremloremorem ",
    readingLength: 22,
    thumbnail: "/rimuru.jpg",
  },
];

export default function Page() {
  return (
    <>
      <div className="flex flex-col w-full ">
        <section className="flex flex-col items-center w-full py-5 bg-white rounded-lg">
          <h1 className="text-3xl font-semibold">Romuru Tempest</h1>
          <h2 className="mt-1 text-sm text-gray-400">
            this is Romuru&#39;s dev blog{" "}
          </h2>

          <div className="mt-10">
            <span>I&#39;m working at Korea as Software Developer </span>
            <div className="flex justify-center space-x-3 ">
              <Link href="">Git</Link>
              <Link href="">Mail</Link>
            </div>
          </div>
        </section>
        <section className="flex flex-col items-center w-full py-5 ">
          <div className="grid w-full grid-cols-1 gap-4 lg:grid-cols-2 ">
            {mainPreviewItems &&
              mainPreviewItems.map((item) => {
                return <PostItem key={item.id} item={item} />;
              })}
          </div>
        </section>
      </div>
    </>
  );
}
