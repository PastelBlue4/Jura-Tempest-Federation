import React, { useState } from "react";
import StackItem from "@components/stackItem";
import Head from "next/head";
import Link from "next/link";
import { classNameHandler } from "@libs/client/classNameHandler";
import Image from "next/image";
export default function Resume() {
  const [isCommentOpen, setIsCommentOpen] = useState(false);
  const [stackIndex, isStackIndex] = useState("");

  const getStackIndex = (index: string) => {
    isStackIndex((prev) => {
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

      <section className="relative">
        <div className="fixed flex flex-col items-center right-10">
          <h2 className="my-2 font-medium">Contact Me :)</h2>
          <span>pastel0721@naver.com</span>
          <div className="flex my-4 space-x-3">
            <Link
              target="_black"
              href="https://github.com/PastelBlue4"
              className="flex flex-col items-center w-20 "
            >
              <Image src="/github.png" width={30} height={30} alt="github" />
            </Link>
            <Link
              target="_black"
              href="https://velog.io/@pastelblue0721"
              className="flex flex-col items-center w-20"
            >
              <Image
                src="/velog.png"
                width={30}
                height={30}
                alt="velog"
                className=""
              />
            </Link>
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center justify-center w-full mt-20 transition-all ">
        <h1 className="w-1/2 text-4xl font-semibold">
          Hi, I&#39;m <span className="text-sky-300 ">Romuru</span>!
        </h1>

        <div className="relative flex flex-col items-center justify-center w-1/2 ">
          <div
            className={classNameHandler(
              "mt-6 relative transition-all bg-gray-100 py-3 px-5 w-full",
              isCommentOpen ? "pb-52" : ""
            )}
          >
            <button
              className={classNameHandler(
                "absolute right-0 z-10 transition-all ",
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
                <p>
                  안녕하세요! 기술로 세상을 더 편하게 믿고있는, 이찬우 입니다.
                </p>
                <ul className="my-1 text-2xl list-disc list-inside ">
                  저는 항상,
                  <li className="text-base">
                    궁극적으로 해결 해야하는 문제가 무엇인지 고민합니다.
                  </li>
                  <li className="text-base">
                    무엇이 사용자를 만족시킬 수 있는지 고민합니다.
                  </li>
                  <li className="text-base"></li>
                </ul>
              </span>

              <div
                className={classNameHandler(
                  " transition-all ease-in-out overflow-hidden mt-1 absolute text-lg ",
                  isCommentOpen ? "" : "   opacity-0 invisible"
                )}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis earum atque quia eligendi. Fugiat alias ullam
                quibusdam, facere optio animi incidunt itaque consequatur id
                atque quae iste placeat commodi reiciendis! Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Blanditiis earum atque
                quia eligendi. Fugiat alias ullam quibusdam, facere optio animi
                incidunt itaque consequatur id atque quae iste placeat commodi
                reiciendis!
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center justify-center w-full mt-4 ">
        <h1 className="mb-4 text-3xl font-semibold">
          <span className="text-sky-300 ">Stacks</span>
        </h1>
        <div className="grid w-1/2 grid-cols-2 md:grid-cols-5 gap-y-2">
          <StackItem
            stackName="HTML"
            logo="/html.png"
            getStackIndex={getStackIndex}
          />

          <StackItem
            stackName="CSS"
            logo="/css.png"
            getStackIndex={getStackIndex}
          />

          <StackItem
            stackName="JavaScript"
            logo="/js.png"
            getStackIndex={getStackIndex}
          />

          <StackItem
            stackName="TypeScript"
            logo="/ts.png"
            getStackIndex={getStackIndex}
          />

          <StackItem
            stackName="React"
            logo="/react.png"
            getStackIndex={getStackIndex}
          />

          <StackItem
            stackName="Next.js"
            logo="/nextjs.png"
            getStackIndex={getStackIndex}
          />

          <StackItem
            stackName="SWR"
            logo="/swr.jpeg"
            getStackIndex={getStackIndex}
          />

          <StackItem
            stackName="TailwindCSS"
            logo="/tailwind.png"
            getStackIndex={getStackIndex}
          />

          <StackItem
            stackName="Prisma"
            logo="/prisma.webp"
            getStackIndex={getStackIndex}
          />

          <StackItem
            stackName="PlanetScale"
            logo="/pscale.png"
            getStackIndex={getStackIndex}
          />
        </div>

        <div
          className={classNameHandler(
            "relative flex flex-col w-1/2  transition-all",
            stackIndex ? "pb-40" : ""
          )}
        >
          <div
            className={classNameHandler(
              " transition-all ease-in-out overflow-hidden mt-1 absolute text-lg ",
              stackIndex ? "" : "   opacity-0 invisible"
            )}
          >
            {stackIndex}
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center justify-center w-full mt-4 ">
        <h1 className="mb-10 text-3xl font-semibold ">
          <span className="text-sky-300">Personal Project</span>
        </h1>

        <ul className="w-1/2 space-y-2">
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

        <ul className="w-1/2 space-y-2">
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
      <span className="">&gt;</span>

      <div className="h-screen"></div>
    </>
  );
}
