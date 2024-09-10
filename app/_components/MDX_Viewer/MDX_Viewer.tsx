import CodeBlock from "@components/CodeBlock/CodeBlock";
import { MDXRemote, compileMDX } from "next-mdx-remote/rsc";
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
        }}
        source={source}
        components={{
          h1: ({ children }) => <h1 className="text-2xl">{children}</h1>,
          code: ({ children }) => <CodeBlock codeSyntax={children} />,
          p: ({ children }) => <p>{children}</p>,
        }}
      />
    </article>
  );
}
