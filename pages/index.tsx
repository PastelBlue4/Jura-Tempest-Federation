import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Jura Tempest Federation</title>
        <meta name="description" content="Romuru's DevBlog" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon.jpg" />
      </Head>

      <div className="flex justify-center">
        <div className=" flex flex-col mt-10 pt-10 px-12 items-center border border-blue-300">
          <div className="  text-3xl text-blue-300  rounded-lg ">
            우리 가게 아직 살아있어요.....
          </div>
          <Image src="/rimuru.jpg" alt="Rimuru!" width={500} height={500} />
        </div>
      </div>
    </>
  );
}
