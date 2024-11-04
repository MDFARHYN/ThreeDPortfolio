"use client";
import React from "react";
import { PinContainer } from "../ui/3d-pin";
import myimg from '../assets/farhyn.webp'
import Image from "next/image";
import { CoolMode } from "../magicui/cool-mode";
export function AnimatedPinDemo() {
  if (typeof window == undefined){
    return 
  }
  return (
    <CoolMode>
    <div className="h-[5rem] w-full flex items-center justify-center  z-0">
      
      <PinContainer
        title="Your Python Devloper"
        href="#"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          
          
         
          <Image
          alt="my_image"
          src={myimg} 
         />
        </div>
      </PinContainer>
     
    </div>
    </CoolMode>
  );
}
