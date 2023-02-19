import React, { useState } from "react";
import StackItem from "@components/stackItem";
import Head from "next/head";
import Link from "next/link";
import { classNameHandler } from "@libs/client/classNameHandler";
export default function Resume() {
  const [isCommentOpen, setIsCommentOpen] = useState(false);
  return (
    <>
      <Head>
        <title>Romuru Resume | Jura Tempes Federation</title>
        <meta name="description" content="Romuru's Resume" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon.jpg" />
      </Head>

      <section className="flex justify-center w-full items-center flex-col mt-4 transition-all ">
        <h1 className="text-4xl font-semibold">
          Hi, I&#39;m <span className="text-sky-300 ">Romuru!</span>
        </h1>

        <div className="flex justify-center items-center flex-col">
          <div className="w-1/2 mt-4 ">
            <span className="z-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis earum atque quia eligendi. Fugiat alias ullam
              quibusdam, facere optio animi incidunt itaque consequatur id atque
              quae iste placeat commodi reiciendis!
            </span>

            <button
              className={classNameHandler(
                "fixed ml-36 z-10 transition-all text-2xl",
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
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </button>
            <div
              className={classNameHandler(
                isCommentOpen ? "" : " -mt-20 opacity-0 invisible",
                " transition-all overflow-hidden mt-2"
              )}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis earum atque quia eligendi. Fugiat alias ullam
              quibusdam, facere optio animi incidunt itaque consequatur id atque
              quae iste placeat commodi reiciendis! Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Blanditiis earum atque quia
              eligendi. Fugiat alias ullam quibusdam, facere optio animi
              incidunt itaque consequatur id atque quae iste placeat commodi
              reiciendis!
            </div>
          </div>

          <h2 className="text-3xl mt-4">contact me</h2>

          <span>pastel0721@naver.com</span>
          <div className="flex space-x-3">
            <Link target="_black" href="https://github.com/PastelBlue4">
              Github
            </Link>
            <Link target="_black" href="https://velog.io/@pastelblue0721">
              Velog
            </Link>
          </div>
        </div>
      </section>

      <section className="flex justify-center w-full items-center flex-col mt-4 ">
        <h1 className="text-3xl font-semibold mb-4">
          <span className="text-sky-300">Stacks</span>
        </h1>
        <div className="w-1/2 grid grid-cols-2 md:grid-cols-5  gap-y-2">
          <StackItem stackName="HTML" logo="/html.png">
            <div>dsds</div>
          </StackItem>

          <StackItem stackName="CSS" logo="/css.png">
            <div>dsds</div>
          </StackItem>

          <StackItem stackName="JavaScript" logo="/js.png">
            <div>dsds</div>
          </StackItem>
          <StackItem stackName="TypeScript" logo="/ts.png">
            <div>dsds</div>
          </StackItem>
          <StackItem stackName="React" logo="/react.png">
            <div>dsds</div>
          </StackItem>

          <StackItem stackName="Next.js" logo="/nextjs.png">
            <div>dsds</div>
          </StackItem>
          <StackItem stackName="SWR" logo="/swr.jpeg">
            <div>dsds</div>
          </StackItem>

          <StackItem stackName="TailwindCSS" logo="/tailwind.png">
            <div>dsds</div>
          </StackItem>

          <StackItem stackName="Prisma" logo="/prisma.webp">
            <div>dsds</div>
          </StackItem>

          <StackItem stackName="PlanetScale" logo="/pscale.png">
            <div>dsds</div>
          </StackItem>
        </div>
      </section>

      <section className="flex justify-center w-full items-center flex-col  mt-4 ">
        <h1 className=" text-3xl font-semibold mb-10">
          <span className="text-sky-300">Personal Project</span>
        </h1>

        <ul className="w-1/2">
          <li>
            <div className=" flex justify-between ">
              <span>노마드코더 IT 5분 잡학사전 베타테스터</span>
              <span>2022.11</span>
            </div>
          </li>

          <li>
            <div className=" flex justify-between ">
              <span>노마드코더 자바스크립트 & 타입스크립트 챌린지</span>
              <span>2022.8</span>
            </div>
          </li>

          <li>
            <div className=" flex justify-between ">
              <span>계룡디지텍고등학교 정보통신과</span>
              <span>2017.03 ~ 2020.2</span>
            </div>
          </li>
        </ul>
      </section>

      <section className="flex justify-center w-full items-center flex-col mt-4 ">
        <h1 className="text-3xl font-semibold mb-10">
          <span className="text-sky-300">Expernice</span>
        </h1>

        <ul className="w-1/2">
          <li>
            <div className=" flex justify-between ">
              <span>노마드코더 IT 5분 잡학사전 베타테스터</span>
              <span>2022.11</span>
            </div>
          </li>

          <li>
            <div className=" flex justify-between ">
              <span>노마드코더 자바스크립트 & 타입스크립트 챌린지</span>
              <span>2022.8</span>
            </div>
          </li>

          <li>
            <div className=" flex justify-between ">
              <span>계룡디지텍고등학교 정보통신과</span>
              <span>2017.03 ~ 2020.2</span>
            </div>
          </li>
        </ul>
      </section>
      <span className="">&gt;</span>
    </>
  );
}
