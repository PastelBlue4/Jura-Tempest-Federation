/** @format */

import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <>
      <section className="flex w-full h-screen mt-10 md:mt-16 ">
        <div className="flex flex-col w-64 ">
          <div className="relative  w-80 aspect-[1/1.167] ">
            <Image src="/rimuru.jpg" alt="main profile" fill />
          </div>
          <h2 className="mt-2 text-xl ">Hi, I&apos;m Romuru Tempest</h2>
        </div>
      </section>
    </>
  );
}
