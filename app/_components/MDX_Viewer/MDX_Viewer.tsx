import CodeBlock from "@components/CodeBlock/CodeBlock";

import { MDXRemote } from "next-mdx-remote/rsc";
import React from "react";

type Props = {
  source: string;
};

export default async function MDX_Viewer({ source }: Props) {
  return (
    <article className="">
      <MDXRemote
        options={{
          parseFrontmatter: true,
          mdxOptions: {
            remarkPlugins: [],
            rehypePlugins: [],
          },
        }}
        source={source}
        components={{
          h1: ({ children }) => <h1>{children}</h1>,
          code: ({ children }) => <CodeBlock codeSyntax={children} />,
          p: ({ children }) => <div>{children}</div>,
        }}
      />
    </article>
  );
}
