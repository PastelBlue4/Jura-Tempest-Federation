"use client";

import CodeBlock from "components/CodeBlock/CodeBlock";
import { getPostSourceBySlug } from "post/api";
import { MDXRemote } from "next-mdx-remote";

type Props = {
  source: Awaited<ReturnType<typeof getPostSourceBySlug>>;
};
export default function MDX_Viewer({ source }: Props) {
  return (
    <article className="">
      <MDXRemote
        {...source}
        components={{
          h1: ({ children }) => <h1 className="text-2xl">{children}</h1>,
          code: ({ children }) => <CodeBlock codeSyntax={children} />,
          p: ({ children }) => <p>{children}</p>,
        }}
      />
    </article>
  );
}
