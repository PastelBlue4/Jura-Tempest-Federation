import CodeBlock from "@components/CodeBlock/CodeBlock";
import { getPostById } from "@libs/post/api";
import { MDXRemote, compileMDX } from "next-mdx-remote/rsc";
import React from "react";

type Props = {
  postId: string;
};

export default async function MDX_Viewer({ postId }: Props) {
  return (
    <article>
      <MDXRemote
        options={{
          parseFrontmatter: true,
          mdxOptions: {
            remarkPlugins: [],
            rehypePlugins: [],
          },
        }}
        source={getPostById(postId)}
        components={{
          h1: ({ children }) => <h1>{children}</h1>,
          code: ({ children }) => <CodeBlock codeSyntax={children} />,
        }}
      />
    </article>
  );
}
