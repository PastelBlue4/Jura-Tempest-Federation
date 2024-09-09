"use client";

import CodeBlock from "@components/CodeBlock/CodeBlock";
import { MDXRemote } from "next-mdx-remote";
import React from "react";

export default function MDX_Viewer({ source }: any) {
  return (
    <article>
      <MDXRemote
        {...source}
        components={{
          h1: ({ children }) => <h1>{children}</h1>,

          code: ({ children }) => <CodeBlock codeSyntax={children} />,
        }}
      />
    </article>
  );
}
