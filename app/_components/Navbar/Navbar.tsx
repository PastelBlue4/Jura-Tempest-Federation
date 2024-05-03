"use client";

/** @format */

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
            "text-base  transition-all duration-75  hover:text-blue-500",
            usePathname() == href ? "text-blue-500" : "text-gray-50"
          )}
        >
          {name}
        </span>
      </Link>
    </li>
  );
};

export default function Navbar() {
  console.log(usePathname().split("/"));
  console.log("dsadas");

  return (
    <>
      <nav className="fixed top-0 z-50 flex items-center justify-center w-full h-16 bg-blue-300 ">
        <div className="flex justify-center w-11/12 md:justify-between max-w-screen-3xl">
          <Link href="/" className="relative flex w-11 h-11 ">
            <Image
              src="/icon.jpg"
              alt="Rimuru Main logo :)"
              fill
              className="rounded-md "
            />
          </Link>

          <ul className="items-center justify-end hidden w-full gap-x-6 md:flex ">
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
