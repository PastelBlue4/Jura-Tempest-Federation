"use client";

import React from "react";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/cjs/styles/prism";
import javascript from "react-syntax-highlighter/dist/cjs/languages/prism/javascript";
import typescript from "react-syntax-highlighter/dist/cjs/languages/prism/typescript";
import json from "react-syntax-highlighter/dist/cjs/languages/prism/json";
import rust from "react-syntax-highlighter/dist/cjs/languages/prism/rust";
import java from "react-syntax-highlighter/dist/cjs/languages/prism/java";
import go from "react-syntax-highlighter/dist/cjs/languages/prism/go";

export default function CodeBlock() {
  const codeSyntax = "code code code ";
  return (
    <>
      <SyntaxHighlighter language="javascript" style={oneLight} showLineNumbers>
        {codeSyntax}
      </SyntaxHighlighter>
    </>
  );
}
