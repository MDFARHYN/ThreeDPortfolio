"use client";
import React, { useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";
import {
  IconBrandGithub,
  IconBrandFacebook,
} from "@tabler/icons-react";
import ReCAPTCHA from "react-google-recaptcha";
import LoadingCircle from "../Loading/LoadingCircle";
interface User {
  first_name: string;
  last_name: string;
  email: string;
  mobile_number: string;
  password: string;
  confirm_password: string;
  captcha_value: string;
}

export function SignupFormDemo() {
  const [user, setUser] = useState<User>({
    first_name: "",
    last_name: "",
    email: "",
    mobile_number: "",
    password: "",
    confirm_password: "",
    captcha_value: "",
  });

  const [warMsg, setwarMsg] = useState<string>("");
  const [isLoading, setisLoading] = useState<boolean>(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onChangeCaptcha = (value: string | null) => {
    setUser((prev) => ({ ...prev, captcha_value: value || "" }));
  };

  const validateEmail = (email: string) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email) && email.length <= 50;
  };

  const validatePhoneNumber = (phone: string) => {
    const re = /^\d{1,15}$/;
    return re.test(phone);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setwarMsg("");

    if (!user.first_name) {
      setwarMsg("First name is required");
      return;
    } else if (user.first_name.length > 20) {
      setwarMsg("First name cannot exceed 20 characters");
      return;
    } else if (!user.last_name) {
      setwarMsg("Last name is required");
      return;
    } else if (user.last_name.length > 20) {
      setwarMsg("Last name cannot exceed 20 characters");
      return;
    } else if (!user.mobile_number) {
      setwarMsg("Phone number is required");
      return;
    } else if (!validatePhoneNumber(user.mobile_number)) {
      setwarMsg("Please enter a valid phone number (only digits, up to 15 characters)");
      return;
    } else if (!user.email) {
      setwarMsg("Email is required");
      return;
    } else if (!validateEmail(user.email)) {
      setwarMsg("Please enter a valid email address (up to 50 characters)");
      return;
    } else if (!user.password) {
      setwarMsg("Type your password");
      return;
    } else if (user.password.length > 20) {
      setwarMsg("Password cannot exceed 20 characters");
      return;
    } else if (user.password.length < 4) {
      setwarMsg("Minimum 4 characters required for password");
      return;
    } else if (!user.confirm_password) {
      setwarMsg("Type your confirm password");
      return;
    } else if (user.password !== user.confirm_password) {
      setwarMsg("Password and confirm password don't match");
      return;
    } else if (!user.captcha_value) {
      setwarMsg("Please complete the CAPTCHA");
      return;
    }

    setisLoading(true);
    setTimeout(() => {
      console.log("User registered:", user);
      setwarMsg("Registration successful! Please verify your email.");
      setUser({
        first_name: "",
        last_name: "",
        email: "",
        mobile_number: "",
        password: "",
        confirm_password: "",
        captcha_value: "",
      });
      setisLoading(false);
    }, 2000);
  };

  return (
    <div className="max-w-md mt-20 w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        Register an Account
      </h2>
      <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
        Already have an account? <a href="/login" className="text-blue-600 dark:text-blue-400">Login</a>
      </p>

      <form className="my-8" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="firstname">First name</Label>
            <Input
              id="firstname"
              name="first_name"
              placeholder="Tyler"
              type="text"
              value={user.first_name}
              onChange={handleInputChange}
            />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">Last name</Label>
            <Input
              id="lastname"
              name="last_name"
              placeholder="Durden"
              type="text"
              value={user.last_name}
              onChange={handleInputChange}
            />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            name="email"
            placeholder="projectmayhem@fc.com"
            type="email"
            value={user.email}
            onChange={handleInputChange}
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="mobile_number">Phone Number</Label>
          <Input
            id="mobile_number"
            name="mobile_number"
            placeholder="018****"
            type="text"
            value={user.mobile_number}
            onChange={handleInputChange}
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            name="password"
            placeholder="••••••••"
            type="password"
            value={user.password}
            onChange={handleInputChange}
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-8">
          <Label htmlFor="confirm_password">Confirm Password</Label>
          <Input
            id="confirm_password"
            name="confirm_password"
            placeholder="••••••••"
            type="password"
            value={user.confirm_password}
            onChange={handleInputChange}
          />
        </LabelInputContainer>

        <ReCAPTCHA
          sitekey="6LciYlMaAAAAAE28SyHrqdm9g6a43UGIf6_ImvF8"
          onChange={onChangeCaptcha}
        />

        {warMsg && (
          <div className="bg-red-400 rounded-lg p-1 text-white text-center text-sm my-4">{warMsg}</div>
        )}

        {!isLoading ? (
          <button
            className="mt-5 bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            type="submit"
          >
            Sign up &rarr;
            <BottomGradient />
          </button>
        ) : (
          <LoadingCircle />
        )}

        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

        <div className="flex flex-col space-y-4">
          <button
            className="relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900"
            type="button"
          >
            <IconBrandGithub className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
            <span className="text-neutral-700 dark:text-neutral-300 text-sm">GitHub</span>
            <BottomGradient />
          </button>
          <button
            className="relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900"
            type="button"
          >
            <IconBrandFacebook className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
            <span className="text-neutral-700 dark:text-neutral-300 text-sm">Facebook</span>
            <BottomGradient />
          </button>
        </div>
      </form>
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

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};