"use client";

import TestMDX from "../../../../posts/test1.mdx";

export default async function Page({ params }: { params: { id: string } }) {
  return (
    <div>
      <TestMDX />
    </div>
  );
}
