import Head from "next/head";
import React from "react";

interface HeaderInterface {
  title: string;
  description: string;
  image: string;
}

export default function Header({ title, description, image }: HeaderInterface) {
  return (
    <Head>
      <title>{title} | Jura Tempest Federation</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/icon.jpg" />
      <meta property="og:url" content="www.romuru.dev" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="blog" />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={title} />
    </Head>
  );
}