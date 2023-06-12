"use client";

import React from "react";

export default function Page() {
  const items = [1, 2, 3, 4, 4, 5, 6, 6];
  return (
    <>
      <div className="w-screen h-screen bg-blue-200">
        {items.map((item) => {
          return <div key={item}></div>;
        })}
      </div>
    </>
  );
}
