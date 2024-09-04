"use client";

import Link from "next/link";
import React, { useState } from "react";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
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
  { name: "Life", href: "/life" },
];

export default function Navbar() {
  const [isMobileNavbarButtonOpen, setIsMobileNavbarButtonOpen] =
    useState(false);

  const NavbarItemsComponents = ({ name, href }: NavbarItemsTpye) => {
    return (
      <li>
        <Link href={href}>
          <span
            className={classNameHandler(
              "text-base font-medium  transition-all duration-75  hover:text-blue-500",
              usePathname() == href ? "text-blue-500" : "text-gray-700"
            )}
          >
            {name}
          </span>
        </Link>
      </li>
    );
  };

  const MobileNavbarItemsComponents = ({ name, href }: NavbarItemsTpye) => {
    return (
      <li onClick={() => setIsMobileNavbarButtonOpen(false)}>
        <Link href={href}>
          <span
            className={classNameHandler(
              "text-3xl font-medium  transition-all duration-75  hover:text-blue-500",
              usePathname() == href ? "text-blue-500" : "text-gray-700"
            )}
          >
            {name}
          </span>
        </Link>
      </li>
    );
  };

  console.log(isMobileNavbarButtonOpen);
  return (
    <>
      <nav className="fixed top-0 z-50 flex items-center justify-center w-full h-16 bg-blue-50">
        <div className="flex items-center justify-between w-full max-w-screen-lg px-4 md:px-6 ">
          <Link href="/" className="relative flex p-2 text-base text-gray-600 ">
            Romuru.dev
          </Link>

          <ul className="items-center justify-end hidden w-full gap-x-14 md:flex ">
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

          <div className="relative md:hidden">
            <button
              onClick={() => {
                setIsMobileNavbarButtonOpen((prev) => !prev);
              }}
            >
              {isMobileNavbarButtonOpen ? (
                <RxCross1 className="w-6 h-6" />
              ) : (
                <RxHamburgerMenu className="w-6 h-6" />
              )}
            </button>

            <ul
              className={classNameHandler(
                isMobileNavbarButtonOpen ? "visible " : "opacity-0 invisible",
                "fixed left-0 w-screen h-screen transition-all duration-500 bg-blue-50  top-16 px-7 pt-8 space-y-10 border-t-2 md:hidden "
              )}
            >
              {NavbarItmes &&
                NavbarItmes.map((item) => {
                  return (
                    <MobileNavbarItemsComponents
                      key={item.name}
                      name={item.name}
                      href={item.href}
                    />
                  );
                })}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
