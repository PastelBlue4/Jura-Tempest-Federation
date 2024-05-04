"use client";

import Markdown from "../../../markdown/1234.mdx";

export default async function Page({ params }: { params: { id: string } }) {
  return (
    <div>
      <Markdown />
    </div>
  );
}
