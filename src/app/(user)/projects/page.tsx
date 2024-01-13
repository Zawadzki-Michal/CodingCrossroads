import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BsGithub, BsWordpress } from "react-icons/bs";
import projectsData from "./projectsData";
import WebsiteLink from "@/components/WebsiteLink";
import GitHubLink from "@/components/GithubLink";

const Projects: React.FC = () => {
  return (
    // Main container for the Projects section
    <div className="lg:min-h-[calc(100vh-155px)] lg::px-10 text-gray-700 bg-black/80">
      {/* // Grid layout to display project cards */}
      <div className="lg:py-20 py-5 px-4 lg:px-24 grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-20 min-h-[800px]">
        {/* // Map through each project in the projectsData array */}
        {projectsData.map((project, index) => (
          // Project card container
          <div
            key={index}
            className="bg-gray-100 min-h-[600px] max-w-[500px] rounded-xl shadow-lg hover:scale-105 duration-500"
          >
            {/* // Link wrapping the project image */}
            <Link href={project.route} passHref>
              <Image
                src={project.imageSrc}
                height={500}
                width={500}
                alt={project.title}
                className="h-[250px] lg:object-fill object-cover rounded-tl-xl rounded-tr-xl lg:p-1"
              />
            </Link>

            {/* // Project title */}
            <h1 className="text-3xl font-bold py-4 text-center">
              {project.title}
            </h1>

            {/* // Links to project website and repository */}
            <div className="flex flex-row justify-evenly ">
              <WebsiteLink websiteLink={project.websiteLink} />
              <GitHubLink repositoryLink={project.repositoryLink} />
            </div>
            {/* // Horizontal divider */}
            <div className="border-t-2 border-gray-700 w-11/12 mx-auto mt-3"></div>

            {/* // Project description */}
            <p className="p-4 text-lg">{project.description}</p>

            {/* // Button to show more details about the project */}
            <Link href={project.route} passHref>
              <div className="flex w-full justify-center pb-6">
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
