"use client";

import React from "react";

interface ITodo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export const Todo = (resultData: ITodo) => {
  return (
    <div>
      <h1>{resultData.title}</h1>
      <span>{resultData.id}</span>
      <span>{resultData.userId}</span>
      <span>{resultData.completed}</span>
    </div>
  );
};
