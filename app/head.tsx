import { usePathname } from "next/navigation";

let pathName: string;

function getURL() {
  pathName = usePathname();
}

export default function Head() {
  return (
    <>
      <title>{pathName}</title>
    </>
  );
}
