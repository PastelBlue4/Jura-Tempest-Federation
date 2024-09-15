"use client";

import React from "react";
import "./codeBlockStyle.css";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/cjs/styles/prism";
import javascript from "react-syntax-highlighter/dist/cjs/languages/prism/javascript";
import typescript from "react-syntax-highlighter/dist/cjs/languages/prism/typescript";
import json from "react-syntax-highlighter/dist/cjs/languages/prism/json";
import rust from "react-syntax-highlighter/dist/cjs/languages/prism/rust";
import java from "react-syntax-highlighter/dist/cjs/languages/prism/java";
import go from "react-syntax-highlighter/dist/cjs/languages/prism/go";

SyntaxHighlighter.registerLanguage("javascript", javascript);
SyntaxHighlighter.registerLanguage("typescript", typescript);
SyntaxHighlighter.registerLanguage("json", json);
SyntaxHighlighter.registerLanguage("rust", rust);
SyntaxHighlighter.registerLanguage("java", java);
SyntaxHighlighter.registerLanguage("go", go);

export default function CodeBlock({ codeSyntax }: any) {
  return (
    <>
      <SyntaxHighlighter
        language="javascript"
        showLineNumbers={false}
        style={oneLight}
      >
        {codeSyntax}
      </SyntaxHighlighter>
    </>
  );
}
