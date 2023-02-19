import React, { useState } from "react";
import StackItem from "@components/stackItem";
import Head from "next/head";
import Link from "next/link";

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
      <section className="flex justify-center w-full items-center flex-col border mt-4 ">
        <h1 className="text-4xl font-semibold">
          Hi, I&#39;m <span className="text-sky-300">Romuru!</span>
        </h1>

        <div className="flex justify-center items-center flex-col">
          <div className="w-1/2 mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            earum atque quia eligendi. Fugiat alias ullam quibusdam, facere
            optio animi incidunt itaque consequatur id atque quae iste placeat
            commodi reiciendis!
            <button className="fixed ml-28">
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
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis earum atque quia eligendi. Fugiat alias ullam
              quibusdam, facere optio animi incidunt itaque consequatur id atque
              quae iste placeat commodi reiciendis!
            </div>
          </div>

          <h2 className="text-3xl">contact me</h2>

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

      <section className="flex justify-center w-full items-center flex-col border mt-4 ">
        <h1 className="text-3xl font-semibold">
          <span className="text-sky-300">Stacks</span>
        </h1>

        <ul className="w-1/2 grid grid-cols-3">
          <StackItem stackName="React" logo="/dds" level="Main">
            <div className="">dsds</div>
          </StackItem>

          <StackItem stackName="React" logo="/dds" level="Main">
            <div>dsds</div>
          </StackItem>

          <StackItem stackName="React" logo="/dds" level="Main">
            <div>dsds</div>
          </StackItem>
        </ul>
      </section>

      <section className="flex justify-center w-full items-center flex-col border mt-4 ">
        <h1 className="text-3xl font-semibold">
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

      <section className="flex justify-center w-full items-center flex-col border mt-4 ">
        <h1 className="text-3xl font-semibold">
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
