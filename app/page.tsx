/** @format */

"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { Metadata } from "next";

export default function Page() {
  const [toogle, setToggle] = useState(true);

  return (
    <>
      <div className="flex flex-col items-center justify-center mt-20 ">
        <h1 className="text-2xl font-bold"> 블로그는 계속해서 제작중이에요!</h1>
        <Link
          target="blank"
          href="https://github.com/PastelBlue4/Jura-Tempest-Federation"
          className="my-10 underline hover:text-sky-300"
        >
          깃허브로 코드 보러가기
        </Link>

        <Image src="/mokoko.png" alt="profile" width={300} height={300} />
      </div>
    </>
  );
}