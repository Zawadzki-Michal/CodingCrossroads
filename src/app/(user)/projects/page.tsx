import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BsGithub, BsWordpress } from "react-icons/bs";
import projectsData from "./projectsData"; // Update with the correct path

const Projects: React.FC = () => {
  return (
    <div className="lg:min-h-[calc(100vh-155px)] text-gray-700 bg-black/80">
      <div className="lg:py-20 py-5 lg:px-24 px-2 grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-20 min-h-[800px]">
        {projectsData.map((project, index) => (
          <div
            key={index}
            className="bg-gray-100 min-h-[650px] max-w-[500px] rounded-xl shadow-lg hover:scale-105 duration-500"
          >
            <Link href={project.route} passHref>
              <Image
                src={project.imageSrc}
                height={500}
                width={500}
                alt={project.title}
                className=" h-[250px] lg:object-fill object-cover rounded-tl-xl rounded-tr-xl p-1"
              />
            </Link>
            <h1 className="text-3xl font-bold py-4 text-center">
              {project.title}
            </h1>
            <div className="flex flex-row justify-evenly ">
              <Link href={project.websiteLink} target="blank">
                <span className="flex flex-row items-center gap-2 hover:text-green-600 duration-300 hover:scale-105 duration-400 hover:shadow-md">
                  <BsWordpress className="text-2xl md:text-2xl " />
                  <p className="text-lg uppercase font-semibold">Website</p>
                </span>
              </Link>
              <Link href={project.repositoryLink} target="blank">
                <span className="flex flex-row items-center gap-2 hover:text-blue-400 duration-300 hover:scale-105 duration-400 hover:shadow-md">
                  <BsGithub className="text-2xl md:text-2xl " />
                  <p className="text-lg uppercase font-semibold">Repository</p>
                </span>
              </Link>
            </div>
            <div className="border-t-2 border-gray-700 w-11/12 mx-auto mt-3"></div>
            <p className="p-4 text-lg">{project.description}</p>
            <Link href={project.route} passHref>
              <div className="flex w-full justify-center">
                <button className="items-center border-2 border-gray-700 text-gray-700 font-semibold py-1.5 px-5 rounded-xl">
                  Show Details
                </button>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
