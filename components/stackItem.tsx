import Image from "next/image";
import React, { ReactNode } from "react";

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
      <div className="group flex justify-center ">
        <div className="flex items-center flex-col hover:scale-110 transition-all duration-100 ">
          <Image
            src={logo}
            alt={stackName}
            className=" rounded-full border-2 border-gray-200 p-[2px] shadow-lg "
            width={80}
            height={80}
          />

          <div className="transition-all  flex relative justify-center opacity-0 group-hover:opacity-100 border">
            <span className="absolute bg-gray-300 text-gray-800 px-2 -top-2 rounded-md ">
              {stackName}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
