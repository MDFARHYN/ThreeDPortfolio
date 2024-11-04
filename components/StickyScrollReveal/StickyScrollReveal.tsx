"use client";

import React from "react";
import { StickyScroll } from "../ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
  {
    title: "farhyn.com - More Than a Portfolio",
    description:
      "farhyn.com is not just a portfolio website; it's a learning hub where I regularly post tutorials, course materials, and blog content—all absolutely free. Whether you're interested in tech, freelancing tips, or advanced tutorials, you'll find valuable resources here without any cost.",
    content: (
        <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/farhyn_Educational_Resources_Community.webp" // Replace with a relevant image
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Educational_Resources_Community"
        />
      </div>
    ),
  },
  {
    title: "Trust-Based Freelance Platform",
    description:
      "farhyn.com is also a unique trust-based freelancing platform. Clients can easily post projects and hire freelancers directly without any commission fees—0% commission. Freelancers keep 100% of their earnings with no hidden charges. This platform is designed to empower freelancers and make hiring hassle-free for clients.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/farhyn_Trust_Based_Freelance_Platform_Image.webp" // Replace with a relevant image
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="freelance platform demo"
        />
      </div>
    ),
  },
  {
    title: "Important Disclaimer",
    description:
      "Please note that farhyn.com does not provide any payment solutions or payment protection services. It is a trust-based platform, so I, Farhan Ahmed, or farhyn.com are not responsible if a client does not pay after receiving the work or if a project is not completed after payment. We strongly encourage clients and freelancers to use their own judgment and take necessary precautions before hiring or taking on a project.",
    content: (
        <div className="h-full w-full text-3xl bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
         ⚠️ Important Disclaimer
    </div>
    ),
  },
  {
    title: "Educational Resources & Community",
    description:
      "farhyn.com is a place where knowledge is shared freely. You’ll find various educational resources, a supportive community, and a collection of useful tutorials designed to help you grow in your career and skillset. Join the community, and start learning today!",
    content: (
        <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/farhyn_Educational_Resources_Community_300x300.webp" // Replace with a relevant image
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="freelance platform demo"
        />
      </div>
    ),
  },
];

export function StickyScrollRevealDemo() {
  return (
    <div className="p-10">
      <StickyScroll content={content} />
    </div>
  );
}
