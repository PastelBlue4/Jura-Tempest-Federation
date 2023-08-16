/** @format */

"use client";

import { classNameHandler } from "utils/client/classNameHandler";
import { getURL } from "next/dist/shared/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

type NavbarItemsTpye = {
  name: string;
  href: string;
};

const NavbarItmes: NavbarItemsTpye[] = [
  { name: "Home", href: "/" },
  { name: "Tech", href: "/tech" },
  { name: "Review", href: "/review" },
];

const NavbarItemsComponents = ({ name, href }: NavbarItemsTpye) => {
  return (
    <li>
      <Link href={href}>
        <span
          className={classNameHandler(
            "text-lg transition-all duration-75 text-gray-50 hover:text-blue-300",
            usePathname() == href ? "text-blue-300" : ""
          )}
        >
          {name}
        </span>
      </Link>
    </li>
  );
};

export default function Navbar() {
  return (
    <>
      <nav className="absolute top-0 flex items-center justify-center w-full h-24 bg-red-300">
        <div className="flex justify-between w-3/4">
          <div className="relative w-20 h-20 ">
            <Image
              src="/icon.jpg"
              alt="Rimuru Main logo :)"
              fill
              className="rounded-xl "
            />
          </div>

          <ul className="flex items-center gap-x-4 ">
            {NavbarItmes &&
              NavbarItmes.map((item) => {
                return (
                  <NavbarItemsComponents
                    key={item.name}
                    name={item.name}
                    href={item.href}
                  />
                );
              })}
          </ul>
        </div>
      </nav>
    </>
  );
}
