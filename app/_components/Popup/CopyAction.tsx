"use client";

import React from "react";

interface CopyActionType {
  item: string;
}

export default function CopyAction(props: CopyActionType) {
  return (
    <>
      <div className="fixed z-30 flex justify-center w-full bottom-24">
        <span className="px-5 py-3 text-lg rounded-md bg-sky-200">
          {props.item === "phone"
            ? "전화번호를 복사했어요."
            : "메일을 복사했어요."}
        </span>
      </div>
    </>
  );
}
