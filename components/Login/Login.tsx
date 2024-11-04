"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import {
  IconBrandGithub,
  IconBrandFacebook,
} from "@tabler/icons-react";
 
import LoadingCircle from "../Loading/LoadingCircle";
 
export function LoginFormDemo() {
  const [isLoading, setisLoading] = useState<boolean>(false);

  const handleLogin = (provider: string) => {
    setisLoading(true);
    setTimeout(() => {
      console.log(`Logged in with ${provider}`);
      setisLoading(false);
    }, 2000);
  };

  return (
    <div className="max-w-md mt-20 w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        Login to Your Account
      </h2>
      <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
        Welcome back! Please login to continue.
      </p>

      <div className="flex flex-col space-y-4 my-8">
        <button
          onClick={() => handleLogin("GitHub")}
          className="relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900"
          type="button"
          disabled={isLoading}
        >
          <IconBrandGithub className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
          <span className="text-neutral-700 dark:text-neutral-300 text-sm">Login with GitHub</span>
          <BottomGradient />
        </button>
        <button
          onClick={() => handleLogin("Facebook")}
          className="relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900"
          type="button"
          disabled={isLoading}
        >
          <IconBrandFacebook className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
          <span className="text-neutral-700 dark:text-neutral-300 text-sm">Login with Facebook</span>
          <BottomGradient />
        </button>
      </div>
      
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};
