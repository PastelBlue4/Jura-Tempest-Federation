"use client";

import MDX_Viewer from "@components/MDX_Viewer/MDX_Viewer";

export default async function Page({ params }: { params: { id: string } }) {
  return (
    <div>
      <MDX_Viewer />
    </div>
  );
}
