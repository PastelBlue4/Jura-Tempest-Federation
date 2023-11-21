/** @format */

"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { classNameHandler } from "@libs/client/classNameHandler";

type NavbarItemsTpye = {
  name: string;
  href: string;
};

const NavbarItmes: NavbarItemsTpye[] = [
  { name: "Home", href: "/" },
  { name: "Romuru", href: "/romuru-tempest" },
  { name: "Tech", href: "/tech" },
  { name: "Review", href: "/review" },
];

const NavbarItemsComponents = ({ name, href }: NavbarItemsTpye) => {
  return (
    <li>
      <Link href={href}>
        <span
          className={classNameHandler(
            "text-lg transition-all duration-75 text-gray-900 hover:text-blue-400",
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
      <nav className="fixed top-0 flex items-center justify-center w-full h-16 bg-blue-300 ">
        <div className="flex justify-center w-3/4 md:justify-between">
          <Link href="/" className="relative flex w-12 h-12 ">
            <Image
              src="/icon.jpg"
              alt="Rimuru Main logo :)"
              fill
              className="rounded-md "
            />
          </Link>

          <ul className="items-center hidden gap-x-4 md:flex">
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
