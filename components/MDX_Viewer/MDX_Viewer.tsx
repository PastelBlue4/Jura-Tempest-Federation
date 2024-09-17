"use client";

import CodeBlock from "components/CodeBlock/CodeBlock";
import { getPostSourceBySlug } from "lib/post/api";
import { MDXRemote } from "next-mdx-remote";

type Props = {
  source: Awaited<ReturnType<typeof getPostSourceBySlug>>;
};
export default function MDX_Viewer({ source }: Props) {
  return (
    <article className="w-full p-3">
      <MDXRemote
        {...source}
        components={{
          h1: ({ children }) => (
            <h1 className="mb-4 py-1 text-2xl md:text-3xl border-b-[1px] border-gray-400">
              {children}
            </h1>
          ),
          h2: ({ children }) => (
            <h2 className="py-1 mb-4 text-xl font-semibold text-gray-700 border-gray-400 md:text-2xl">
              - {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="py-1 mb-4 text-lg border-gray-400 md:text-xl">
              {children}
            </h3>
          ),
          p: ({ children }) => (
            <p className="my-4 leading-6 text-gray-600 md:text-lg">
              {children}
            </p>
          ),
          blockquote: ({ children }) => (
            <blockquote className="p-2 mx-1 my-3 border-l-4 border-blue-400 rounded-sm bg-blue-50">
              {children}
            </blockquote>
          ),

          strong: ({ children }) => (
            <strong className="leading-6 text-gray-700 ">{children}</strong>
          ),

          code: ({ children }) => <CodeBlock codeSyntax={children} />,
        }}
      />
    </article>
  );
}
