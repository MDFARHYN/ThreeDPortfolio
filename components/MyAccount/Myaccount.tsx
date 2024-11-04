"use client";
import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "../ui/sidebar";
import {
  IconBrandTabler,
  IconSettings,
  IconUserBolt,
  IconSwitchHorizontal,
  IconBriefcase,
  IconInbox,
} from "@tabler/icons-react";
import { useDispatch, useSelector } from "react-redux";
import { setIsFreelancer } from "@/components/redux/uiSlice";
import { RootState } from "@/components/redux/store";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import CreateBlog from "../Blog/CreateBlog";
// Define an interface to type each link
interface LinkType {
  label: string;
  href?: string;
  onClick?: () => void;
  icon: React.ReactNode;
}

// Default link for optional href
const defaultLink: Required<LinkType> = {
  label: "",
  href: "#",
  onClick: () => {},
  icon: <span />,
};

export default function MyAccount() {
  const dispatch = useDispatch();
  const isFreelancer = useSelector((state: RootState) => state.ui.isFreelancer);
  const [Menu,setMenu] = useState("") 
  const handleLinkClick = (label: string) => {
    console.log(`Clicked on: ${label}`);
    setMenu(label)
  };

  // Define links common to both Client and Freelancer modes
  const commonLinks: LinkType[] = [
    {
      label: "Profile",
      onClick: () => handleLinkClick("Profile"),
      icon: (
        <IconUserBolt className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Settings",
      onClick: () => handleLinkClick("Settings"),
      icon: (
        <IconSettings className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
  ];

  // Define separate links for Client and Freelancer modes
  const clientLinks: LinkType[] = [
    ...commonLinks,
    {
      label: "Freelance Project",
      onClick: () => handleLinkClick("Freelance Project"),
      icon: (
        <IconBriefcase className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Project Application",
      onClick: () => handleLinkClick("Project Application"),
      icon: (
        <IconInbox className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
  ];

  const freelancerLinks: LinkType[] = [
    ...commonLinks,
    {
      label: "Your Blog",
      onClick: () => handleLinkClick("Your Blog"),
      icon: (
        <IconBriefcase className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Your Course",
      onClick: () => handleLinkClick("Your Course"),
      icon: (
        <IconInbox className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Job Application",
      onClick: () => handleLinkClick("Job Application"),
      icon: (
        <IconUserBolt className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
  ];

  const handleViewToggle = () => {
    dispatch(setIsFreelancer(!isFreelancer));
  };

  const links: LinkType[] = [
    ...(isFreelancer ? freelancerLinks : clientLinks),
    {
      label: isFreelancer ? "Switch to Client" : "Switch to Freelancer",
      onClick: handleViewToggle,
      icon: (
        <IconSwitchHorizontal className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
  ];

  const [open, setOpen] = useState(false);

  return (
    <div
      className={cn(
        "rounded-md flex flex-col md:flex-row bg-gray-100 dark:bg-neutral-800 w-full flex-1 max-w-7xl mx-auto border border-neutral-200 dark:border-neutral-700 overflow-hidden",
        "h-screen"
      )}
    >
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            {open ? <Logo /> : <LogoIcon />}
            <div className="mt-8 flex flex-col gap-2">
              {links.map((link, idx) => (
                <button
                  key={idx}
                  onClick={link.onClick}
                  className="flex items-center space-x-3  text-neutral-700 dark:text-neutral-200 cursor-pointer w-full text-left"
                >
                  <span className="text-lg">{link.icon}</span>
                  <span>{link.label}</span>
                </button>
              ))}
            </div>
          </div>
          <div>
            <SidebarLink
              link={{
                label: "Manu Arora",
                href: "#",
                icon: (
                  <Image
                    src="https://assets.aceternity.com/manu.png"
                    className="h-7 w-7 flex-shrink-0 rounded-full"
                    width={50}
                    height={50}
                    alt="Avatar"
                  />
                ),
              }}
            />
          </div>
        </SidebarBody>
      </Sidebar>
      {Menu == "Your Blog"?
       <CreateBlog />:
       ""
      }
 
    </div>
  );
}

export const Logo = () => {
  return (
    <Link
      href="#"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium text-black dark:text-white whitespace-pre"
      >
        My Account
      </motion.span>
    </Link>
  );
};

export const LogoIcon = () => {
  return (
    <Link
      href="#"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
    </Link>
  );
};

// Dummy dashboard component with content
const Dashboard = () => {
  return (
    <div className="flex flex-1">
      <div className="p-2 md:p-10 rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex flex-col gap-2 flex-1 w-full h-full">
        <div className="flex gap-2">
          {[...new Array(4)].map((_, i) => (
            <div
              key={"first-array" + i}
              className="h-20 w-full rounded-lg bg-gray-100 dark:bg-neutral-800 animate-pulse"
            ></div>
          ))}
        </div>
        <div className="flex gap-2 flex-1">
          {[...new Array(2)].map((_, i) => (
            <div
              key={"second-array" + i}
              className="h-full w-full rounded-lg bg-gray-100 dark:bg-neutral-800 animate-pulse"
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};
