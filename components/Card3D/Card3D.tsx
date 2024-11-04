"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import Link from "next/link";

interface ThreeDCardDemoProps {
  title: string;
  subtitle: string;
  imageUrl: string;
  tryNowLink?: string; // Optional
  buttonLink?: string; // Optional
  tryNowText?: string;
  buttonText?: string;
}

export function ThreeDCardDemo({
  title,
  subtitle,
  imageUrl,
  tryNowLink,
  buttonLink,
  tryNowText = "Try now →",
  buttonText = "Sign up",
}: ThreeDCardDemoProps) {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
        <CardItem
          translateZ="50"
          className="text-xl sm:text-2xl font-bold text-neutral-600 dark:text-white mb-2"
        >
          {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm sm:text-base max-w-sm mt-2 leading-relaxed dark:text-neutral-300"
        >
          {subtitle}
        </CardItem>
        <CardItem
          translateZ="100"
          rotateX={20}
          rotateZ={-10}
          className="w-full mt-4"
        >
          <Image
            src={imageUrl}
            height="600"
            width="600"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-10">
          {tryNowLink && (
            <CardItem
              translateZ={20}
              translateX={-40}
              as={Link}
              href={tryNowLink}
              target="__blank"
              className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
            >
              {tryNowText}
            </CardItem>
          )}
          {buttonLink && (
            <CardItem
              translateZ={20}
              translateX={40}
              as={Link}
              href={buttonLink}
              target="__blank"
              className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
            >
              {buttonText}
            </CardItem>
          )}
        </div>
      </CardBody>
    </CardContainer>
  );
}
