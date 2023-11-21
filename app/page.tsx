/** @format */

"use client";

import TechPostItem from "@components/Tech/TechPostItem";

const mainPreviewItems = [
  {
    id: 1,
    type: "tech",
    title: "Lorem ipsum dolor sit amet consectetur",
    date: "2022-32-32",
    contents: "lorem loremloremorem  quntityButton",
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
    id: 1,
    type: "review",
    title: "illum, necessitatibus vitae culpa sequi ",
    date: "2022-32-32",
    contents: "lorem loremloremorem ",
    thumbnail: "/",
  },
  {
    id: 2,
    type: "review",
    title: "empora quam unde ad adipisci nobis fugit",
    date: "2022-32-32",
    contents: "lorem loremloremorem ",
    thumbnail: "/",
  },
];

export default function Page() {
  return (
    <>
      <div className="flex flex-col w-full ">
        <section className="flex flex-col items-center justify-center w-full ">
          <div className="grid w-full grid-cols-1 p-4 gap-y-4 lg:grid-cols-2 2xl:grid-cols-4">
            {mainPreviewItems &&
              mainPreviewItems.map((item) => {
                return <TechPostItem key={item.id} item={item} />;
              })}
          </div>
        </section>
      </div>
    </>
  );
}
