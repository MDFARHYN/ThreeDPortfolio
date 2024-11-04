import React from "react";
import { Cover } from "../ui/cover";
import  {AnimatedModalDemo}from "@/components/AnimateButton/AnimateButton";

export function CoverDemo() {
  return (
    <div>
      <h1 className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
      Hi, I'm Farhan <br />  <Cover> Your Python Developer</Cover>
      </h1>
      <div className="-mt-40">
      <AnimatedModalDemo 
      icon="✉️"// Calendar icon for appointments
      button_text="Get in Touch" 
      href="/contact"
       
    />
      </div>
    
    </div>
  );
}
