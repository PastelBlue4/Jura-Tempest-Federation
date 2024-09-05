import CodeBlock from "@components/CodeBlock/CodeBlock";
import type { MDXComponents } from "mdx/types";
import Image, { ImageProps } from "next/image";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 style={{ color: "red", fontSize: "48px" }}>{children}</h1>
    ),

    h2: ({ children }) => <h2 style={{ fontSize: "43px" }}>{children}</h2>,
    h3: ({ children }) => (
      <h3 style={{ color: "red", fontSize: "48px" }}>{children}</h3>
    ),

    h4: ({ children }) => <h4 style={{ fontSize: "43px" }}>{children}</h4>,

    code: ({ children }) => <CodeBlock codeSyntax={children} />,

    p: ({ children }) => <p style={{ color: "blue" }}>{children}</p>,

    ...components,
  };
}
