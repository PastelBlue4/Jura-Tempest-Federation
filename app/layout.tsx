/** @format */

import Navbar from "@components/Navbar/Navbar";
import { Metadata } from "next";
import "styles/globals.css";
import RecoidContextProvider from "./_atoms/recoilContextProvider";

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
        <div className="flex flex-col items-center min-h-screen py-24 bg-blue-50 ">
          <div className="flex justify-center w-11/12 max-w-screen-3xl">
            <RecoidContextProvider>{children}</RecoidContextProvider>
          </div>
        </div>
      </body>
    </html>
  );
}
