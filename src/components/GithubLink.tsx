import React from "react";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";

const GitHubLink = ({ repositoryLink }: any) => {
  return (
    <Link href={repositoryLink} target="blank" rel="noopener noreferrer">
      <span className="flex flex-row items-center gap-2 hover:text-blue-400 duration-300 hover:scale-105 duration-400 hover:shadow-md">
        <BsGithub className="text-2xl md:text-2xl " />
        <p className="text-lg uppercase font-semibold">Repository</p>
      </span>
    </Link>
  );
};

export default GitHubLink;
