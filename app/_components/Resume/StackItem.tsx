"use client";

import { classNameHandler } from "@utils/client/classNameHandler";
import Image from "next/image";
import React, { ReactNode, useState } from "react";

interface StackItemTypes {
  children?: ReactNode;
  stackName: string;
  logo: string;
}

export default function StackItem({
  children,
  stackName,
  logo,
}: StackItemTypes) {
  return (
    <>
      <div className="relative flex justify-center group">
        <div
          className={classNameHandler(
            "flex flex-col items-center relative duration-300 ease-in-out hover:scale-110 cursor-pointer group w-20 h-20"
          )}
        >
          <Image
            src={logo}
            alt={stackName}
            className=" rounded-full border-2 border-gray-200 p-[2px] shadow-lg absolute "
            width={70}
            height={70}
          />
        </div>
        <div className="absolute z-20 flex justify-center transition-all opacity-0 bottom-2 group-hover:opacity-100">
          <span className="absolute px-2 text-gray-800 bg-gray-300 rounded-md ">
            {stackName}
          </span>
        </div>
      </div>
    </>
  );
}
