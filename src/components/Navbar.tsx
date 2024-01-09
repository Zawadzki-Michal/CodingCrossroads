"use client";
import React from "react";
import { useState } from "react";
import Logo from "./Logo";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";
import DropDown from "@/components/DropDown";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleDropdownClick = (e: any) => {
    e.stopPropagation();
    // You can add more logic here if needed, but do not define state or other functions inside
  };
  const nav = [
    { title: "About Me", href: "/about" },
    { title: "Contact", href: "/contact" },
    { title: "Studio", href: "/studio" },
    { title: "Dropdown", href: "#" },
  ];

  return (
    <div className="w-full bg-[#111111]/95 h-20 shadow-md sticky top-0 backdrop-blur-2xl transition-colors z-50">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 lg:px-0 h-full">
        <Logo title="Coding Crossroads" className="text-gray-100" />

        {/* Desktop Navigation */}
        <div className="hidden md:inline-flex items-center gap-7 text-gray-100 hover:text-gray-400 duration-200">
          {nav.map((item) =>
            item.href === "#" ? (
              <DropDown key={item.title} />
            ) : (
              <Link key={item.title} href={item.href}>
                <div className="text-lg uppercase font-semibold relative group overflow-hidden cursor-pointer">
                  {item.title}
                  <span className="w-full h-[2px] bg-gray-100 absolute inline-block left-0 bottom-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-200"></span>
                </div>
              </Link>
            )
          )}
        </div>

        <div className="md:hidden relative">
          <FiMenu
            className="text-3xl text-white cursor-pointer"
            onClick={toggleMenu}
          />
        </div>
      </div>
      {isMenuOpen && (
        <div className="flex items-start justify-end h-screen w-screen pr-4 pt-2 ">
          <div className=" bg-[#111111]/95 rounded-xl flex flex-col gap-4 justify-center h-auto p-10">
            {nav.map((item) =>
              item.href === "#" ? (
                <div
                  key={item.title}
                  onClick={handleDropdownClick}
                  className="flex justify-center items-center text-center text-2xl text-gray-100 hover:text-gray-600 p-3 cursor-pointer"
                >
                  <DropDown />
                </div>
              ) : (
                <Link key={item.title} href={item.href}>
                  <div
                    onClick={closeMenu}
                    className="flex justify-center items-center text-center text-2xl text-gray-100 p-3 cursor-pointer"
                  >
                    {item.title}
                  </div>
                </Link>
              )
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
