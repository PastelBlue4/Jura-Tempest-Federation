import Image from "next/image";
import React, { ReactNode } from "react";

interface StackItemTypes {
  children: ReactNode;
  stackName: string;
  logo: string;
  level: "Main" | "Sub";
}

export default function StackItem({
  children,
  stackName,
  logo,
  level,
}: StackItemTypes) {
  return (
    <>
      <li className="flex">
        <div className=" border-4 hover:scale-110 transition-all ">
          <div className="relative w-14 h-14  ">
            <Image
              src={logo}
              alt={stackName}
              fill
              className="bg-sky-300 rounded-full"
            />
          </div>
          <div className="flex justify-between w-24">
            <span>{stackName}</span>
            <span>{level}</span>
          </div>
          <span>{children}</span>
        </div>
      </li>
    </>
  );
}
