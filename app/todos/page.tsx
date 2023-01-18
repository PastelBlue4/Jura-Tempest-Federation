"use client";

import { Todo } from "@/components/Todo";
import React, { useEffect, useState } from "react";

interface ITodo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export default function todo() {
  const [result, setResult] = useState<ITodo[]>([
    { userId: 234, id: 234, title: "title", completed: true },
  ]);
  const [isLoading, setIsLoading] = useState(true);
  const [fetchPostError, setFetchPostError] = useState(false);
  const fetchJson = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    if (response.status === 200) {
      const data = await response.json();
      setIsLoading(false);
      return data;
    } else {
      setFetchPostError(true);
    }
  };

  useEffect(() => {
    fetchJson();
  }, []);

  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {fetchPostError ? <h1>data fetch faild : </h1> : null}
          <div>Loading Done.</div>
          {result instanceof Array ? <div></div> : null}
        </div>
      )}
    </>
  );
}
