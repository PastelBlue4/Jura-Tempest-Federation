/** @format */

import Navbar from "@components/Navbar/Navbar";
import { Metadata } from "next";
import "styles/globals.css";

export const metadata: Metadata = {
  title: "Romuru's blog ",
  description:
    "Welcome to Jura-Tempest Federation! Dev, review, and more someting :) ",
  icons: "/icon.jpg",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <Navbar />
        <div className="flex flex-col items-center justify-center min-h-screen py-24 bg-gray-50">
          <div className="flex items-center justify-center w-5/6 ">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
