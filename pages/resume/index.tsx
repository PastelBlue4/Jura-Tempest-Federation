import React, { useState } from "react";
import StackItem from "@components/stackItem";
import Head from "next/head";
import Link from "next/link";
import { classNameHandler } from "@libs/client/classNameHandler";
import Image from "next/image";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import data from "soruce/data.json";

import CopyAction from "@components/copyAction";
import Header from "@components/header";

export default function Resume() {
  const [isCommentOpen, setIsCommentOpen] = useState(false);
  const [isStackOpen, setIsStackOpen] = useState(false);
  const [isProjectOpen, setIsProjectOpen] = useState(false);
  const [isExperniceOpen, setIsExperniceOpen] = useState(false);
  const [onCopy, setOnCopy] = useState({ toggle: false, copyTagert: "phone" });

  const stackHandler = (index: number): any => {
    if (!isStackOpen) {
      setIsStackOpen(true);
      scroll.scrollTo(
        500 + (window.innerWidth > 560 ? index * 200 : index * 280),
        {
          smooth: true,
          duration: 500,
        }
      );
    }
    if (isStackOpen) {
      setIsStackOpen(false);
      scroll.scrollTo(700, { duration: 700 });
    }
  };
  const copyMessageHandler = (item: "phone" | "mail") => {
    setOnCopy({ toggle: true, copyTagert: item });

    setTimeout(() => {
      setOnCopy({ toggle: false, copyTagert: item });
    }, 2000);
  };

  return (
    <>
      <Header
        title="Romuru's resume"
        description="이찬우의 이력서, 포트폴리오 페이지입니다."
        image="profile.jpeg"
      />

      <div className="relative z-50 flex flex-col items-center h-auto bg-gray-50 ">
        <div className="w-full max-w-screen-lg antialiased last:mb-20 ">
          <div
            className={classNameHandler(
              " z-50  flex justify-center",
              onCopy.toggle ? "opacity-100 w-full" : "opacity-0 visible w-0 "
            )}
          >
            <CopyAction item={onCopy.copyTagert} />
          </div>
          <section className="fixed bottom-0 z-50 flex justify-center w-full max-w-screen-lg ">
            <div className="box-content flex items-baseline justify-between w-full h-20 max-w-3xl px-3 font-bold border-t border-gray-300 bg-sky-50">
              <ScrollLink
                offset={-30}
                className="flex flex-col items-center mt-2 space-y-1 text-[11px] cursor-pointer text-slate-500 hover:text-sky-300 "
                to="ContactMe"
              >
                <div className="flex flex-col items-center space-y-1">
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
                      d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                    />
                  </svg>

                  <span className="">Contact Me</span>
                </div>
              </ScrollLink>

              <ScrollLink
                offset={-30}
                className="flex flex-col items-center mt-2  space-y-1 text-[11px] cursor-pointer text-slate-500 hover:text-sky-300 "
                to="Stacks"
              >
                <div className="flex flex-col items-center space-y-1">
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
                      d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
                    />
                  </svg>
                  <span className="">Stacks</span>
                </div>
              </ScrollLink>
              <ScrollLink
                offset={-30}
                className="flex flex-col items-center mt-2 space-y-1  text-[11px] cursor-pointer text-slate-500 hover:text-sky-300 "
                to="Project"
              >
                <div className="flex flex-col items-center space-y-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="-mt-[1px] w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
                    />
                  </svg>
                  <span className="">Project</span>
                </div>
              </ScrollLink>
              <ScrollLink
                offset={-30}
                className="flex flex-col items-center mt-2 space-y-1  text-[11px] cursor-pointer  text-slate-500 hover:text-sky-300 "
                to="Expernice"
              >
                <div className="flex flex-col items-center space-y-1">
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
                      d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6"
                    />
                  </svg>
                  <span className="">Expernice</span>
                </div>
              </ScrollLink>
              <ScrollLink
                offset={-30}
                className="flex flex-col items-center mt-2 space-y-1  text-[11px] cursor-pointer  text-slate-500 hover:text-sky-300 "
                to="Education"
              >
                <div className="flex flex-col items-center space-y-1 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 -mt-[1px]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                    />
                  </svg>

                  <span className="">Education</span>
                </div>
              </ScrollLink>
            </div>
          </section>
          <section className="flex flex-col items-center justify-center w-full mt-10 transition-all lg:mt-20 ">
            <h1 className="w-11/12 p-1 text-xl font-semibold border-b-2">
              Hi, I&#39;m Romuru
            </h1>

            <div className="relative flex flex-col justify-center w-11/12 text-gray-600">
              <p className="flex flex-col mt-6 text-2xl font-semibold ">
                <span className="">안녕하세요!</span>
                <span className="mt-1 text-2xl ">
                  배우고 나눔에 거리낌 없는 이찬우 입니다.
                </span>
              </p>
              <div
                className={classNameHandler(
                  "mt-6 relative transition-all duration-300 bg-gray-100 py-3 px-5 w-full rounded-xl ",
                  isCommentOpen ? "pb-[200px] " : ""
                )}
              >
                <button
                  className={classNameHandler(
                    "absolute right-2 z-10 transition-all p-2 ",
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
                    className="w-7 h-7"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </button>
                <div className="relative ">
                  <span className="text-lg">
                    <ul className="my-4 space-y-1 text-xl list-disc list-inside ">
                      <span className="my-2 font-semibold">저는 항상,</span>
                      <li className="text-base leading-relaxed lg:text-lg">
                        <span className="font-bold text-blue-400 ">
                          지속가능한{" "}
                        </span>
                        소프트웨어가 무엇인지 고민해요.
                      </li>
                      <li className="mt-5 text-base font-normal lg:text-lg">
                        지금 직면한 문제를 넘어,
                        <span className="font-bold text-blue-400 ">
                          본질적으로
                        </span>
                        해결 해야하는 문제가 무엇인지 고민해요.
                      </li>

                      <li className="text-base leading-relaxed lg:text-lg">
                        사용자에게 최고의 경험을 줄수 있는
                        <span className="font-bold text-blue-400">UX/UI</span>를
                        고민해요.
                      </li>
                      <li className="text-base leading-relaxed lg:text-lg">
                        동료와 같은 목표를 나눌수 있게하는
                        <span className="font-bold text-blue-400 ">소통</span>이
                        무엇인지 고민해요.
                      </li>
                    </ul>
                  </span>

                  <div
                    className={classNameHandler(
                      " transition-all ease-in-out mt-2 absolute text-lg ",
                      isCommentOpen
                        ? "  duration-700"
                        : "  opacity-0 invisible duration-300 "
                    )}
                  >
                    <span className="text-base lg:text-lg">
                      제가 알고있는 것들을 나누고, 교차검증을 하는 과정에 나도
                      몰랐던 부분도 알게 되어 나눔이 곧 성장이라는 생각을 가지고
                      있어요. 하지만 직접 경험하고, 문제 해결방법을 초기에
                      파악할 권리를 존중하지 못하는건 않을까라는 고민을
                      가끔해요. 그래도 회사와, 동료들과 같이 성장하는 것은 매우
                      중요하고 재미있는 과정이라고 생각해요.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id="ContactMe" className="mt-10">
            <div className="flex flex-col items-center ">
              <h1 className="w-11/12 pb-2 mb-4 text-lg font-semibold border-b-2 ">
                <span className="p-1">Contact Me</span>
              </h1>

              <div className="flex justify-center pb-2 my-3 space-x-3 border-gray-300">
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
                  <Image src="/velog.png" width={40} height={40} alt="velog" />
                  <span className="absolute invisible px-2 transition-all bg-gray-300 rounded-md opacity-0 -bottom-6 group-hover:opacity-100 group-hover:visible">
                    Velog
                  </span>
                </Link>
              </div>
              <div className="space-y-6 ">
                <span className="flex items-center justify-between px-2 py-1 text-lg ">
                  <div className="flex gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="box-content w-6 h-6 pr-3 border-r-2 border-gray-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                      />
                    </svg>
                    <span>010-8408-6414</span>
                  </div>

                  <span
                    className="p-2 ml-6 text-sm bg-gray-200 rounded-md cursor-pointer hover:text-sky-600"
                    onClick={() => {
                      navigator.clipboard.writeText("010-8408-6414");
                      copyMessageHandler("phone");
                    }}
                  >
                    번호 복사
                  </span>
                </span>

                <span className="flex items-center justify-between px-2 py-1 text-lg ">
                  <div className="flex gap-3 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="box-content w-6 h-6 pr-3 border-r-2 border-gray-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                      />
                    </svg>
                    <span>pastel0721@naver.com</span>
                  </div>
                  <span
                    className="p-2 ml-6 text-sm bg-gray-200 rounded-md cursor-pointer hover:text-sky-600"
                    onClick={() => {
                      navigator.clipboard.writeText("pastel0721@naver.com");
                      copyMessageHandler("mail");
                    }}
                  >
                    메일 복사
                  </span>
                </span>
              </div>
            </div>
          </section>
          <section
            id="Stacks"
            className="relative flex flex-col items-center justify-center w-full mt-10 transition-all"
          >
            <h1 className="w-11/12 pb-2 mb-4 text-lg font-semibold border-b-2 ">
              <span className="p-1">Stacks</span>
            </h1>
            <span
              className={classNameHandler(
                "transition-all",
                isStackOpen ? "opacity-0 visible h-0 " : " mb-2"
              )}
            >
              아이콘을 눌러 자세히 살펴보세요!
            </span>
            <div className="flex justify-center w-full">
              <div
                id="gridContainer"
                className={classNameHandler(
                  "relative  w-11/12 transition-all duration-150",
                  isStackOpen
                    ? "grid grid-cols-1  space-y-3 "
                    : "grid grid-cols-4  md:grid-cols-8 gap-y-2"
                )}
              >
                {data.map((item, index) => {
                  return (
                    <div
                      className={classNameHandler(
                        "flex relative justify-center",
                        isStackOpen
                          ? "items-center border-b border-gray-300 py-6 box-content last:border-none "
                          : ""
                      )}
                      key={index}
                    >
                      <div
                        className="relative"
                        id={item.stackName}
                        onClick={(e) => {
                          stackHandler(index);
                        }}
                      >
                        <StackItem
                          logo={item.logo}
                          stackName={item.stackName}
                        />
                      </div>
                      <div
                        className={classNameHandler(
                          " bg-gray-100  tracking-wide",
                          isStackOpen
                            ? "ml-px opacity-100 text-base w-11/12 h-full transition duration-300 rounded-xl "
                            : "visible opacity-0 w-0 h-0"
                        )}
                      >
                        <ul
                          className={classNameHandler(
                            "flex flex-col",
                            isStackOpen ? " m-3 py-2 space-y-4 " : ""
                          )}
                        >
                          {isStackOpen &&
                            item.contents.map((contents, index) => {
                              return (
                                <li
                                  className={classNameHandler(
                                    "",
                                    isStackOpen
                                      ? "list-disc list-inside "
                                      : "w-0 h-0 visible"
                                  )}
                                  key={index}
                                >
                                  {contents}
                                </li>
                              );
                            })}
                        </ul>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="relative flex justify-center w-11/12 max-w-screen-md ">
              <div className="flex justify-center w-full p-2 mt-5 text-lg bg-gray-200 rounded-lg -z-10 ">
                <span className="text-base">
                  특정 언어, 직무에 한정하지 않고{" "}
                  <span className="font-bold text-blue-400">다양한 경험</span>을
                  해보려 하고있어요.
                </span>
              </div>
            </div>
          </section>
          <section
            id="Project"
            className="flex flex-col items-center justify-center w-full mt-10 "
          >
            <h1 className="w-11/12 pb-2 mb-4 text-lg font-semibold border-b-2 ">
              <span className="p-1">Project</span>
            </h1>

            <ul className="w-11/12 space-y-4">
              <li className="pb-4 space-y-2 border-b">
                <div className="flex flex-col space-y-2 ">
                  <span className="text-2xl font-bold">Karrot Market</span>
                  <span className="text-sm font-semibold text-gray-400">
                    2022.11 ~ 진행중
                  </span>
                </div>
                <div className="flex flex-col space-y-3 text-gray-700">
                  <span>
                    사용자가 이미지를 첨부한 게시글을 업로드할 수 있고, 대화,
                    즐겨찾기, 이메일 인증 등 상호작용이 가능한 중고거래 플랫폼
                    풀스택 클론 프로젝트에요.
                  </span>
                  <span className="">
                    Next.js • TypeScript • TailwindCSS • SWR • Prisma •
                    PlanetScale • React-hook-form
                  </span>
                </div>
                <div className="py-2">
                  <Link
                    className="font-semibold text-blue-500 "
                    href="https://github.com/PastelBlue4/karrot-market-clone"
                    target="_black"
                  >
                    코드 보러가기
                  </Link>
                </div>
              </li>

              <li className="pb-4 space-y-2 border-b">
                <div className="flex flex-col space-y-2">
                  <span className="text-2xl font-bold">ToDoList_Recoil</span>
                  <span className="text-sm font-semibold text-gray-400">
                    2022.9
                  </span>
                </div>
                <div className="flex flex-col space-y-3 text-gray-700">
                  <span>
                    상태관리 라이브러리를 통해 todo의 추가, 삭제, 카테고리
                    변경과 다크모드의 상태를 참조하여 손쉽게 데이터를 변경할 수
                    있는 방법을 구현한 프로젝트에요.{" "}
                  </span>
                  <span className="">
                    React • TypeScript • Styled-components • Recoil •
                    React-hook-form
                  </span>
                </div>
                <div className="py-2 space-x-4">
                  <Link
                    className="font-semibold text-blue-500"
                    href="https://github.com/PastelBlue4/ToDoList_Recoil"
                    target="_black"
                  >
                    코드 보러가기
                  </Link>
                  <Link
                    className="font-semibold text-blue-500"
                    href="https://to-do-list-recoil.vercel.app/"
                    target="_black"
                  >
                    결과물 보러가기
                  </Link>
                </div>
              </li>

              <li className="pb-4 space-y-2 border-b">
                <div className="flex flex-col space-y-2 ">
                  <span className="text-2xl font-bold">Cointracker</span>
                  <span className="text-sm font-semibold text-gray-400">
                    2022.8
                  </span>
                </div>
                <div className="flex flex-col space-y-3 text-gray-700">
                  <span>
                    코인정보 API를 React-query로 fetch하고, 맵핑을 통해
                    컴포넌트를 렌더링하여 보여줘요. 리액트의 데이터 바인딩과,
                    API요청, 유용한 React 라이브러리를 사용해본 프로젝트에요.
                  </span>
                  <span className="">
                    React • TypeScript • Styled-components • React-query •
                    React-rotuer
                  </span>
                </div>
                <div className="py-2 space-x-4 ">
                  <Link
                    className="font-semibold text-blue-500"
                    href="https://github.com/PastelBlue4/cointracker"
                    target="_black"
                  >
                    코드 보러가기
                  </Link>
                  <Link
                    className="font-semibold text-blue-500"
                    href="https://reactcointracker.vercel.app/"
                    target="_black"
                  >
                    결과물 보러가기
                  </Link>
                </div>
              </li>
            </ul>
          </section>
          <section
            id="Expernice"
            className="flex flex-col items-center justify-center w-full mt-10 "
          >
            <h1 className="w-11/12 pb-2 mb-4 text-lg font-semibold border-b-2 ">
              <span className="p-1">Expernice</span>
            </h1>

            <ul className="w-11/12 space-y-4">
              <li className="pb-4 space-y-2 border-b">
                <div className="flex flex-col space-y-2 ">
                  <span className="text-2xl font-bold">
                    지식공유 블로그 포스팅
                  </span>
                  <span className="text-sm font-semibold text-gray-400">
                    2022.2 ~
                  </span>
                </div>
                <div className="flex flex-col space-y-3 text-gray-700">
                  <span>
                    새로운 기술을 배우고, 문제를 해결한 경험을 문서화하는 연습을
                    하고있어요. 아직 어색하고 좋은 내용을 담기에는 어렵지만,
                    꾸준히 포스팅을 하려고 해요. 지금 방문하고 있는 웹사이트가
                    새로운 개인 블로그에요!
                  </span>
                  <span className=""></span>
                </div>
                <div className="py-2">
                  <Link
                    className="font-semibold text-blue-500"
                    href="https://velog.io/@pastelblue0721"
                    target="_black"
                  >
                    블로그 보러가기
                  </Link>
                </div>
              </li>

              <li className="pb-4 space-y-2 border-b">
                <div className="flex flex-col space-y-2 ">
                  <span className="text-2xl font-bold">
                    노마드코더 IT 5분 잡학사전 베타테스터
                  </span>
                  <span className="text-sm font-semibold text-gray-400">
                    2022.11
                  </span>
                </div>
                <div className="flex flex-col space-y-3 text-gray-700">
                  <span>
                    노마드코더에서 출간한 IT 5분 잡학사전에 베타테스터로
                    참여했어요. 오타 수정과 문맥, 기술적인 내용을 전반적으로
                    검토하는 일을 했어요.
                  </span>
                  <span className=""></span>
                </div>
                <div className="py-2">
                  <Link
                    className="font-semibold text-blue-500"
                    href="http://www.yes24.com/Product/Goods/113463430"
                    target="_black"
                  >
                    책 정보 보러가기 (Yes24)
                  </Link>
                </div>
              </li>

              <li className="pb-4 space-y-2 border-b">
                <div className="flex flex-col space-y-2 ">
                  <span className="text-2xl font-bold">
                    Javascript & TypeScript 챌린지
                  </span>
                  <span className="text-sm font-semibold text-gray-400">
                    2022.4
                  </span>
                </div>
                <div className="flex flex-col space-y-3 text-gray-700">
                  <span>
                    노마드코더에서 주기적으로 열리는 JS와 TS 챌린지를 성실하게
                    수료했어요. 챌린지는 매일 아침 6시에 퀴즈 또는 과제가
                    주어져요. 마감 기간까지 제출 해야하고, 최종 과제가 심사를
                    통과해야 챌린지를 수료할 수 있어요.
                  </span>
                  <span className=""></span>
                </div>
                <div className="py-2"></div>
              </li>
            </ul>
          </section>
          <section
            id="Education"
            className="flex flex-col items-center justify-center w-full mt-10 mb-10 "
          >
            <h1 className="w-11/12 pb-2 mb-4 text-lg font-semibold ">
              <span className="p-1">Education</span>
            </h1>
            <ul className="w-11/12 space-y-2">
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
