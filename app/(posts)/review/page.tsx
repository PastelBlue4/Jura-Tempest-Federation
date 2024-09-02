"use client";

import PostItem from "@components/Post/PostItem";

const reviewItems = [
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
        <section className="flex flex-col items-center w-full ">
          <div className="grid w-full grid-cols-1 gap-4 lg:grid-cols-2 ">
            {reviewItems &&
              reviewItems.map((item) => {
                return <PostItem key={item.id} item={item} />;
              })}
          </div>
        </section>
      </div>
    </>
  );
}
