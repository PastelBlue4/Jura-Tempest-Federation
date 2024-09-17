"use client";

import CodeBlock from "components/CodeBlock/CodeBlock";
import { getPostSourceBySlug } from "lib/post/api";
import { MDXRemote } from "next-mdx-remote";

type Props = {
  source: Awaited<ReturnType<typeof getPostSourceBySlug>>;
};
export default function MDX_Viewer({ source }: Props) {
  return (
    <article className="w-full ">
      <MDXRemote
        {...source}
        components={{
          h1: ({ children }) => (
            <h1 className="mb-4 pb-1 text-xl border-b-[1px] border-gray-400">
              {children}
            </h1>
          ),
          h2: ({ children }) => (
            <h2 className="pb-1 mb-4 text-lg border-gray-400">- {children}</h2>
          ),
          h3: ({ children }) => (
            <h3 className="pb-1 mb-4 text-lg border-gray-400">- {children}</h3>
          ),
          p: ({ children }) => <p className="text-gray-600">{children}</p>,
          code: ({ children }) => <CodeBlock codeSyntax={children} />,
        }}
      />
    </article>
  );
}
