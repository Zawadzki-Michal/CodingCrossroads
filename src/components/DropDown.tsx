"use client";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineCaretUp, AiOutlineCaretDown } from "react-icons/ai";
import { SlArrowDown } from "react-icons/sl";
import { SlArrowUp } from "react-icons/sl";

let list = [
  {
    id: 1,
    title: "Projects",
    href: "/projects",
  },
  {
    id: 2,
    title: "Portfolio",
    href: "https://portfolio-sage-two-22.vercel.app/",
  },
  {
    id: 3,
    title: "Resume",
    href: "/resume",
  },
];

export default function DropDown() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="relative group">
      <button
        onClick={toggleDropdown}
        className="w-full flex items-center justify-between lg:font-bold lg:text-lg text-2xl mr-4 rounded-lg lg:uppercase border-4 border-transparent lg:active:border-white  lg:active:text-white duration-300"
      >
        Portfolio{"  "}
        {isOpen ? <SlArrowUp className="" /> : <SlArrowDown className="" />}
      </button>
      <span
        className={`w-full h-[2px] bg-gray-100 absolute inline-block left-0 bottom-0 lg:group-hover:translate-x-0 lg:transition-transform duration-200 ${
          isOpen ? "block" : "hidden"
        }`}
      ></span>
      {isOpen && (
        <div className="lg:absolute top-full left-0 mt-2 w-full bg-transparent lg:bg-stone-300 rounded-lg shadow-lg">
          <ul className="flex flex-col items-center justify-center w-full">
            {list.map((item) => (
              <li
                key={item.id}
                className="py-4 text-gray-100 lg:text-gray-700 lg:text-xl lg:uppercase lg:font-bold"
              >
                <Link href={item.href} onClick={toggleDropdown}>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
