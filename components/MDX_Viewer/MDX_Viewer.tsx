"use client";

import CodeBlock from "components/CodeBlock/CodeBlock";
import { getPostSourceBySlug } from "lib/post/api";
import { MDXRemote } from "next-mdx-remote";
import Image from "next/image";

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
            <h1 className="mt-6 mb-4  md:mt-8 md:mb-6 text-2xl font-semibold md:text-3xl border-b-[1px] pb-1 border-gray-300">
              {children}
            </h1>
          ),
          h2: ({ children }) => (
            <h2 className="mt-6 mb-4 text-xl font-semibold text-gray-800 md:mt-8 md:mb-6 md:text-2xl">
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="mt-6 mb-4 text-lg font-semibold text-gray-700 md:mt-8 md:mb-6 md:text-xl">
              {children}
            </h3>
          ),
          h4: ({ children }) => (
            <h4 className="mt-6 mb-4 text-lg font-semibold text-gray-700 md:mt-8 md:mb-6 md:text-xl">
              {children}
            </h4>
          ),
          p: ({ children }) => (
            <p className="my-4 text-gray-600 md:text-lg">{children}</p>
          ),

          ol: ({ children }) => (
            <ol className="pl-6 my-6 list-decimal marker:text-blue-500">
              {children}
            </ol>
          ),

          ul: ({ children }) => (
            <ul className="pl-6 my-6 list-disc marker:text-blue-500">
              {children}
            </ul>
          ),

          li: ({ children }) => <li className="">{children}</li>,

          img: ({ src, alt }) => (
            <span className="flex justify-center w-full py-6">
              <Image
                src={src ?? ""}
                alt={alt ?? ""}
                width={800}
                height={400}
                className="w-full md:w-[70%] rounded-lg shadow-md"
              />
            </span>
          ),

          strong: ({ children }) => (
            <strong className="font-semibold text-blue-500 ">{children}</strong>
          ),

          blockquote: ({ children }) => (
            <blockquote className="px-4 py-2 my-8 border-l-4 border-blue-500 rounded-sm bg-blue-50">
              {children}
            </blockquote>
          ),

          a: ({ children, href }) => (
            <a
              target="_blank"
              href={href}
              className="inline text-blue-500 hover:text-blue-600 hover:underline"
            >
              {children}
            </a>
          ),

          code: ({ children }) => <CodeBlock codeSyntax={children} />,
        }}
      />
    </article>
  );
}
