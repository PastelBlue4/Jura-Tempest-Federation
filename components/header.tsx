"use client";

import Head from "next/head";
import React from "react";

interface HeaderInterface {
  title: string;
  description: string;
  image?: string;
}

export default function Header({
  title,
  description,
  image = "rimuru.jpg",
}: HeaderInterface) {
  return (
    <Head>
      <title>{`${title} | Jura Tempest Federation`}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/icon.jpg" />
      <meta property="og:url" content="www.romuru.dev" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="blog" />
      <meta property="og:image" content={`https://www.romuru.dev/${image}`} />
      <meta property="og:image:alt" content={description} />
      <meta property="og:site_name" content={title} />
      <meta property="og:locale" content="ko_KR" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Head>
  );
}
