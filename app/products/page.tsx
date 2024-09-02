"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";

export default function ThreeDCardDemo() {
  return (
    <div className="flex flex-wrap justify-center gap-10 mb-[10px]">
    <CardContainer className="inter-var shadow-2xl rounded-2xl">
      <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-2xl font-bold text-neutral-600 dark:text-white"
        >
          Assassin’s Creed
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src='/1.avif'
            height="1000"
            width="800"
            className="h-80 w-full object-fill rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex flex-col mt-4">
          <p>Assassin’s Creed Shadows Gold Edition</p>
          <h1 className="mt-2 text-gray-800">$69.99</h1>
        </div>
      </CardBody>
    </CardContainer>

    <CardContainer className="inter-var shadow-2xl rounded-2xl">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-2xl font-bold text-neutral-600 dark:text-white"
        >
          Kingdom Come
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src='/fahad.avif'
            height="1000"
            width="1000"
            className="h-80 w-full object-fill rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex flex-col mt-4">
          <p>Kingdom Come: Deliverance ||</p>
          <h1 className="mt-2 text-gray-800">$69.99</h1>
        </div>
      </CardBody>
    </CardContainer>

    <CardContainer className="inter-var shadow-2xl rounded-2xl">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-2xl font-bold text-neutral-600 dark:text-white"
        >
          Call of Duty
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src='/2.avif'
            height="1000"
            width="1000"
            className="h-80 w-full object-fill rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex flex-col mt-4">
          <p>Call of Duty®: Black Ops 6 - Cross-Gen Bundle</p>
          <h1 className="mt-2 text-gray-800">$69.99</h1>
        </div>
      </CardBody>
    </CardContainer>

    <CardContainer className="inter-var shadow-2xl rounded-2xl">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-2xl font-bold text-neutral-600 dark:text-white"
        >
          Call of Duty
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src='/3.avif'
            height="1000"
            width="1000"
            className="h-80 w-full object-fill rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex flex-col mt-4">
          <p>Call of Duty®: Black Ops 6 - Vault Edition</p>
          <h1 className="mt-2 text-gray-800">$89.99</h1>
        </div>
      </CardBody>
    </CardContainer>

    <CardContainer className="inter-var shadow-2xl rounded-2xl">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-2xl font-bold text-neutral-600 dark:text-white"
        >
          Into the Radius
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src='/4.avif'
            height="1000"
            width="1000"
            className="h-80 w-full object-fill rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex flex-col mt-4">
          <p>Into the Radius</p>
          <h1 className="mt-2 text-gray-800">$29.99</h1>
        </div>
      </CardBody>
    </CardContainer>

    <CardContainer className="inter-var shadow-2xl rounded-2xl">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-2xl font-bold text-neutral-600 dark:text-white"
        >
          Enotria
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src='/5.avif'
            height="1000"
            width="1000"
            className="h-80 w-full object-fill rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex flex-col mt-4">
          <p>Enotria: The Last Song Standard Edition</p>
          <h1 className="mt-2 text-gray-800">$49.99</h1>
        </div>
      </CardBody>
    </CardContainer>


    <CardContainer className="inter-var shadow-2xl rounded-2xl">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-2xl font-bold text-neutral-600 dark:text-white"
        >
          NBA 2K25 All-Star Edition
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src='/6.avif'
            height="1000"
            width="1000"
            className="h-80 w-full object-fill rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex flex-col mt-4">
          <p>NBA 2K25 All-Star Edition</p>
          <h1 className="mt-2 text-gray-800">$99.99</h1>
        </div>
      </CardBody>
    </CardContainer>

    <CardContainer className="inter-var shadow-2xl rounded-2xl">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-2xl font-bold text-neutral-600 dark:text-white"
        >
          Call of Duty
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src='/7.avif'
            height="1000"
            width="1000"
            className="h-80 w-full object-fill rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex flex-col mt-4">
          <p>Call of Duty®: Black Ops 6 - Open Beta</p>
          <h1 className="mt-2 text-gray-800">$78.99</h1>
        </div>
      </CardBody>
    </CardContainer>

    <CardContainer className="inter-var shadow-2xl rounded-2xl">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-2xl font-bold text-neutral-600 dark:text-white"
        >
          Minefield Combat
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src='/8.avif'
            height="1000"
            width="1000"
            className="h-80 w-full object-fill rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex flex-col mt-4">
          <p>Minefield Combat</p>
          <h1 className="mt-2 text-gray-800">$11.99</h1>
        </div>
      </CardBody>
    </CardContainer>


    <CardContainer className="inter-var shadow-2xl rounded-2xl">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-2xl font-bold text-neutral-600 dark:text-white"
        >
         Little Nightmares
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src='/9.webp'
            height="1000"
            width="1000"
            className="h-80 w-full object-fill rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex flex-col mt-4">
          <p>Little Nightmares</p>
          <h1 className="mt-2 text-gray-800">$19.99</h1>
        </div>
      </CardBody>
    </CardContainer>

    <CardContainer className="inter-var shadow-2xl rounded-2xl">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-2xl font-bold text-neutral-600 dark:text-white"
        >
          Beyond Good & Evil
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src='/10.avif'
            height="1000"
            width="1000"
            className="h-80 w-full object-fill rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex flex-col mt-4">
          <p>Beyond Good & Evil 20th Anniversary Edition</p>
          <h1 className="mt-2 text-gray-800">$19.99</h1>
        </div>
      </CardBody>
    </CardContainer>
    </div>
  );
}
