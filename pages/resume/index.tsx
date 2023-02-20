import React, { useState } from "react";
import StackItem from "@components/stackItem";
import Head from "next/head";
import Link from "next/link";
import { classNameHandler } from "@libs/client/classNameHandler";
import Image from "next/image";
export default function Resume() {
  const data = [
    { stackName: "HTML", logo: "/html.png" },
    { stackName: "CSS", logo: "/css.png" },
    { stackName: "JavaScript", logo: "/js.png" },
    { stackName: "TypeScript", logo: "/ts.png" },
    { stackName: "React", logo: "/react.png" },
    { stackName: "Next.js", logo: "/nextjs.png" },
    { stackName: "SWR", logo: "/swr.jpg" },
    { stackName: "TailwindCSS", logo: "/tailwind.png" },
    { stackName: "Prisma", logo: "/prisma.webp" },
    { stackName: "PlanetScale", logo: "/pscale.png" },
  ];

  const [isCommentOpen, setIsCommentOpen] = useState(false);
  const [stackIndex, setStackIndex] = useState("");

  const getStackIndex = (index: string): any => {
    setStackIndex((prev) => {
      if (index === prev) {
        return "";
      }
      return index;
    });
  };

  return (
    <>
      <Head>
        <title>Romuru Resume | Jura Tempes Federation</title>
        <meta name="description" content="Romuru's Resume" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon.jpg" />
      </Head>
      <div className="flex flex-col items-center ">
        <div className="w-full max-w-screen-xl ">
          <section className="relative">
            <div className="static flex flex-col top-20 2xl:items-end 2xl:fixed 2xl:right-14 ">
              <div className="flex flex-col items-center">
                <h2 className="my-2 font-medium">Contact Me :)</h2>
                <span>pastel0721@naver.com</span>
                <div className="flex my-4 space-x-3">
                  <Link
                    target="_black"
                    href="https://github.com/PastelBlue4"
                    className="relative flex flex-col items-center w-20 group "
                  >
                    <Image
                      src="/github.png"
                      width={40}
                      height={40}
                      alt="github"
                    />
                    <span className="absolute invisible px-2 transition-all bg-gray-300 rounded-md opacity-0 -bottom-6 group-hover:opacity-100 group-hover:visible">
                      GitHub
                    </span>
                  </Link>

                  <Link
                    target="_black"
                    href="https://velog.io/@pastelblue0721"
                    className="relative flex flex-col items-center w-20 group "
                  >
                    <Image
                      src="/velog.png"
                      width={40}
                      height={40}
                      alt="velog"
                    />
                    <span className="absolute invisible px-2 transition-all bg-gray-300 rounded-md opacity-0 -bottom-6 group-hover:opacity-100 group-hover:visible">
                      Velog
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </section>
          <section className="flex flex-col items-center justify-center w-full mt-10 transition-all lg:mt-20 ">
            <h1 className="w-5/6 pb-2 text-4xl font-semibold border-b-2 border-spacing-y-20">
              Hi, I&#39;m <span className="text-sky-300 ">Romuru</span>
              <p className="mt-2 text-xl font-semibold">
                안녕하세요!{" "}
                <span className="font-bold">배우고 나눔에 거리낌 없는</span>{" "}
                이찬우 입니다.
              </p>
            </h1>

            <div className="relative flex flex-col items-center justify-center w-5/6 ">
              <div
                className={classNameHandler(
                  "mt-6 relative transition-all bg-gray-100 py-3 px-5 w-full",
                  isCommentOpen ? "pb-[400px] " : ""
                )}
              >
                <button
                  className={classNameHandler(
                    "absolute right-2 z-10 transition-all ",
                    isCommentOpen ? "rotate-180" : ""
                  )}
                  onClick={() => {
                    setIsCommentOpen(!isCommentOpen);
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-8 h-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </button>
                <div className="tracking-wide">
                  <span className="text-lg">
                    <ul className="my-2 space-y-2 text-2xl list-disc list-inside ">
                      <span className="font-bold">저는 항상</span>
                      <li className="mt-5 text-base">
                        궁극적으로 해결 해야하는 문제가 무엇인지 고민합니다.
                      </li>
                      <li className="text-base">
                        무엇이 사용자를 진정으로 만족시킬 수 있는지 고민합니다.
                      </li>
                      <li className="text-base">
                        동료와 같은 목표를 설정할 수 있는 소통이 무엇인지
                        고민합니다.
                      </li>
                    </ul>
                  </span>

                  <div
                    className={classNameHandler(
                      " transition-all ease-in-out  mt-1 absolute text-lg  p-1",
                      isCommentOpen ? "" : "   opacity-0 invisible"
                    )}
                  >
                    제가 알고있는 것들을 나누는것에
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="relative flex flex-col items-center justify-center w-full mt-4 transition-all">
            <h1 className="mb-4 text-3xl font-semibold">
              <span className="text-sky-300 ">Stacks</span>
            </h1>

            <div
              className={classNameHandler(
                "w-5/6 transition-all ",
                stackIndex
                  ? "grid grid-cols-1  gap-y-4 relative "
                  : "grid grid-cols-4  md:grid-cols-8"
              )}
            >
              {data.map((item, index) => {
                return (
                  <div
                    className={classNameHandler(
                      "flex transition-all border",
                      stackIndex ? "justify-start h-52 p-4" : "justify-center"
                    )}
                    key={index}
                  >
                    <StackItem
                      logo={item.logo}
                      stackName={item.stackName}
                      getStackIndex={getStackIndex}
                    />
                  </div>
                );
              })}
            </div>

            <div
              className={classNameHandler(
                "relative flex flex-col w-5/6 transition-all",
                stackIndex ? "pb-40" : ""
              )}
            >
              <div
                className={classNameHandler(
                  "-z-10 transition-all ease-in-out overflow-hidden mt-4 absolute text-lg w-full",
                  stackIndex ? "" : "opacity-0 invisible"
                )}
              >
                <div className="flex p-3 transition-all bg-red-300 ">
                  <div>{stackIndex}</div>
                </div>
              </div>
            </div>
          </section>
          <section className="flex flex-col items-center justify-center w-full mt-4 ">
            <h1 className="mb-10 text-3xl font-semibold ">
              <span className="text-sky-300">Personal Project</span>
            </h1>

            <ul className="w-5/6 space-y-2">
              <li>
                <div className="flex justify-between ">
                  <span className="text-xl">캐럿마켓</span>
                  <span>2022.12 ~ </span>
                </div>
                <span>캐럿마켓 설명</span>
              </li>

              <li>
                <div className="flex justify-between ">
                  <span>Reocil Todo List</span>
                  <span>2022.8 ~ 2022.8</span>
                </div>
              </li>

              <li>
                <div className="flex justify-between ">
                  <span>계룡디지텍고등학교 정보통신과</span>
                  <span>2017.03 ~ 2020.2</span>
                </div>
              </li>
            </ul>
          </section>
          <section className="flex flex-col items-center justify-center w-full mt-4 ">
            <h1 className="mb-10 text-3xl font-semibold">
              <span className="text-sky-300">Expernice</span>
            </h1>

            <ul className="w-5/6 space-y-2">
              <li>
                <div className="flex justify-between ">
                  <span>노마드코더 IT 5분 잡학사전 베타테스터</span>
                  <span>2022.11</span>
                </div>
              </li>

              <li>
                <div className="flex justify-between ">
                  <span>노마드코더 자바스크립트 & 타입스크립트 챌린지</span>
                  <span>2022.8</span>
                </div>
              </li>

              <li>
                <div className="flex justify-between ">
                  <span>계룡디지텍고등학교 정보통신과</span>
                  <span>2017.03 ~ 2020.2</span>
                </div>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </>
  );
}
