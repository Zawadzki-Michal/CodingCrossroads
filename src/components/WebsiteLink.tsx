import React from "react";
import Link from "next/link";
import { BsWordpress } from "react-icons/bs";

const WebsiteLink = ({ websiteLink }: any) => {
  return (
    <Link href={websiteLink} target="blank">
      <span className="flex flex-row items-center gap-2 hover:text-green-600 duration-300 hover:scale-105 duration-400 hover:shadow-md">
        <BsWordpress className="text-2xl md:text-2xl " />
        <p className="text-lg uppercase font-semibold">Website</p>
      </span>
    </Link>
  );
};

export default WebsiteLink;
