import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Path() {
  const pathItmes = ({}) => {
    return <li></li>;
  };

  return (
    <div className="text-sm breadcrumbs">
      <ul>
        <li>
          <a>Documents</a>
        </li>
        <li>Add Document</li>
      </ul>
    </div>
  );
}
