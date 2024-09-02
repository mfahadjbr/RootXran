"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";

export default function ThreeDCardDemo() {
  return (
    <CardContainer className="inter-var shadow-2xl rounded-2xl">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-2xl font-bold text-neutral-600 dark:text-white"
        >
          About Us
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src='https://th.bing.com/th?id=OIP.65ZZa7sfDA8AIIWFRWSTlwHaEo&w=316&h=197&c=8&rs=1&qlt=90&r=0&o=6&dpr=1.3&pid=3.1&rm=2'
            height="1000"
            width="1000"
            className="h-80 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-4 text-center">
          <p>I am a full stack web developer with a passion for creating interactive and responsive web applications. I have experience working with Javascript,React,Node.js,HTML,CSS,and Git. I am a quick learner and I am always looking to expand my knoweldge and skill set. I am a team player and I am excited to work with others to create amazing applications.</p>
        </div>
      </CardBody>
    </CardContainer>
  );
}
