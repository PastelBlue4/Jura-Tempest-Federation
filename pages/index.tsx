import Header from "@components/header";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header title="Home" description="Romuru's Dev Blog" image="rimuru.jpg" />

      <div className="flex justify-center">
        <div className="flex flex-col items-center px-12 pt-10 mt-10 border border-blue-300 ">
          <div className="text-3xl text-blue-300 rounded-lg ">
            우리 가게 아직 살아있어요.....
          </div>
          <Image src="/rimuru.jpg" alt="Rimuru!" width={500} height={500} />
        </div>
      </div>
    </>
  );
}
