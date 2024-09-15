import Navbar from "components/Navbar/Navbar";
import { Metadata } from "next";
import "styles/globals.css";
import RecoidContextProvider from "../atoms/recoilContextProvider";

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
        <div className="flex flex-col items-center min-h-screen py-20 bg-blue-50 ">
          <div className="flex justify-center w-full max-w-screen-xl md:w-11/12">
            <RecoidContextProvider>{children}</RecoidContextProvider>
          </div>
        </div>
      </body>
    </html>
  );
}
