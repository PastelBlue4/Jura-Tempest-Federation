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
      <Navbar />
      <body className="mt-32">{children}</body>
    </html>
  );
}
