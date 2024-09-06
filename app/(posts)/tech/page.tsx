"use client";

import PostItem from "@components/Post/PostItem";

const blogItems = [
  {
    id: "titleText1",
    type: "tech",
    title: "Lorem ipsum dolor sit amet consectetur",
    date: "2022-32-32",
    contents: "lorem loremloremorem  ",
    readingLength: 5,
    thumbnail: "/rimuru.jpg",
  },
  {
    id: "titleText222",
    type: "tech",
    title: "Lorem ipsum dolor sit amet consectetur",
    date: "2022-32-32",
    contents: "lorem loremloremorem  ",
    readingLength: 10,
    thumbnail: "/rimuru.jpg",
  },
  {
    id: "titleText33333",
    type: "tech",
    title: "Lorem ipsum dolor sit amet consectetur",
    date: "2022-32-32",
    contents: "lorem loremloremorem  ",
    readingLength: 15,
    thumbnail: "/rimuru.jpg",
  },
];

export default function Page() {
  return (
    <>
      <div className="flex flex-col w-full ">
        <section className="flex flex-col items-center w-full ">
          <div className="grid w-full grid-cols-1 gap-4 lg:grid-cols-2 ">
            {blogItems &&
              blogItems.map((item) => {
                return <PostItem key={item.id} item={item} />;
              })}
          </div>
        </section>
      </div>
    </>
  );
}
