import Image from "next/image";
import React, { ReactNode } from "react";

interface StackItemTypes {
  children?: ReactNode;
  stackName: string;
  logo: string;
  getStackIndex: (index: string) => string;
}

export default function StackItem({
  children,
  stackName,
  logo,
  getStackIndex,
}: StackItemTypes) {
  return (
    <>
      <div
        className="flex justify-center cursor-pointer group"
        onClick={() => {
          getStackIndex(stackName);
        }}
      >
        <div className="flex flex-col items-center transition-all duration-100 hover:scale-110 ">
          <Image
            src={logo}
            alt={stackName}
            className=" rounded-full border-2 border-gray-200 p-[2px] shadow-lg "
            width={80}
            height={80}
          />

          <div className="relative flex justify-center transition-all border opacity-0 group-hover:opacity-100">
            <span className="absolute px-2 text-gray-800 bg-gray-300 rounded-md -top-2 ">
              {stackName}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
