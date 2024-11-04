// components/DrawerNavigation.tsx
"use client";

import React, { useEffect, useState } from "react";
import {
  IconHome,
  IconTerminal2,
  IconBook,
  IconCalendar,
  IconLogin,
  IconLogout,
  IconSun,
  IconMoon,
  IconMenu,
  IconX,
  IconUser,
  IconUsers,
  IconExchange,
  IconBriefcase,
} from "@tabler/icons-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { setDarkMode, setIsFreelancer } from "@/components/redux/uiSlice";
import { RootState } from "@/components/redux/store";

export function DrawerNavigation() {
  const dispatch = useDispatch();
  const darkMode = useSelector((state: RootState) => state.ui.darkMode);
  const isFreelancer = useSelector((state: RootState) => state.ui.isFreelancer);

  const { setTheme } = useTheme();
  
  // Local state for controlling drawer visibility
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);

  useEffect(() => {
    setTheme(darkMode ? "dark" : "light");
  }, [darkMode, setTheme]);

  // Toggle drawer state
  const toggleDrawer = () => {
    setIsOpenDrawer((prev) => !prev);
  };

  // Toggle dark mode and update Redux state
  const handleDarkModeToggle = () => {
    dispatch(setDarkMode(!darkMode));
    setTheme(!darkMode ? "dark" : "light");
  };

  // Toggle between Freelancer and Client view and update Redux state
  const handleViewToggle = () => {
    dispatch(setIsFreelancer(!isFreelancer));
  };

  const links = [
    { title: "Home", icon: <IconHome />, href: "/" },
    { title: "Read Blog", icon: <IconBook />, href: "/blog" },
    { title: "Course", icon: <IconTerminal2 />, href: "/course" },
    { title: "Find Job", icon: <IconCalendar />, href: "/find-job" },
    { title: "Book Appointment", icon: <IconCalendar />, href: "/appoinmnet" },
    { title: "My Account", icon: <IconUser />, href: "/my-account" },
    {
      title: isFreelancer ? "Switch to Client" : "Switch to Freelancer",
      icon: isFreelancer ? <IconBriefcase /> : <IconExchange />,
      onClick: handleViewToggle,
    },
    { title: "Login", icon: <IconLogin />, href: "/login" },
    { title: "Logout", icon: <IconLogout />, href: "/login" },
  ];

  return (
    <div className="relative flex">
      {isOpenDrawer && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={toggleDrawer}
        ></div>
      )}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white transform ${
          isOpenDrawer ? "translate-x-0" : "-translate-x-full"
        } transition-transform z-[100]`}
      >
        <div className="flex justify-end p-4">
          <button onClick={toggleDrawer} className="text-white">
            <IconX size={24} />
          </button>
        </div>
        <nav className="p-4 space-y-4">
          <ul className="space-y-4">
            {links.map((link, index) => (
              <li key={index}>
                {link.href ? (
                  <Link
                    href={link.href}
                    onClick={link.onClick}
                    className="flex items-center space-x-3 text-gray-300 hover:text-white cursor-pointer"
                  >
                    <span className="text-lg">{link.icon}</span>
                    <span>{link.title}</span>
                  </Link>
                ) : (
                  <button
                    onClick={link.onClick}
                    className="flex items-center space-x-3 text-gray-300 hover:text-white cursor-pointer w-full text-left"
                  >
                    <span className="text-lg">{link.icon}</span>
                    <span>{link.title}</span>
                  </button>
                )}
              </li>
            ))}
          </ul>
          <button
            onClick={handleDarkModeToggle}
            className="flex items-center space-x-3 text-gray-300 hover:text-white mt-4"
          >
            <span className="text-lg">
              {darkMode ? <IconMoon /> : <IconSun />}
            </span>
            <span>{darkMode ? "Dark Mode" : "Light Mode"}</span>
          </button>
        </nav>
      </div>
      {!isOpenDrawer && (
        <button
          onClick={toggleDrawer}
          className="fixed top-4 left-4 z-[100] p-2 bg-gray-800 text-white rounded-md"
        >
          <IconMenu size={24} />
        </button>
      )}
    </div>
  );
}

export default DrawerNavigation;
