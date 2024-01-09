import React from "react";
import Link from "next/link";
import Image from "next/image";
import build from "@/images/build.png"; // Ensure these paths are correct
import socks from "@/images/socks.png";
import portfolio from "@/images/portfolio.png";
import { BsGithub, BsWordpress } from "react-icons/bs";

const Projects: React.FC = () => {
  return (
    <div className="lg:min-h-[calc(100vh-155px)] text-gray-700 bg-black/80">
      <div className="lg:py-20 py-5 lg:px-24 px-2 grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-20 min-h-[800px]">
        {/* Portfolio Project */}
        <div className="bg-gray-100 min-h-[650px] max-w-[500px] rounded-xl shadow-lg hover:scale-105 duration-500">
          <Link href="https://team-build.vercel.app/" passHref>
            <Image
              src={portfolio}
              height={500}
              width={500}
              alt="Team Build"
              className=" h-[250px] lg:object-fill object-cover rounded-tl-xl rounded-tr-xl p-1"
            />
          </Link>
          <h1 className="text-3xl font-bold py-4 text-center">
            Portfolio Website
          </h1>
          <div className="flex flex-row justify-evenly ">
            <div className="flex flex-row justify-evenly align-middle">
              <Link
                href="https://portfolio-sage-two-22.vercel.app/"
                target="blank"
              >
                <span className="flex flex-row items-center gap-2 hover:text-green-600 duration-300 hover:scale-105 duration-400 hover:shadow-md">
                  <BsWordpress className="text-2xl md:text-2xl " />
                  <p className="text-lg uppercase font-semibold">Website</p>
                </span>
              </Link>
            </div>
            <div className="flex flex-row justify-evenly align-middle">
              <Link
                href="https://github.com/Zawadzki-Michal/Portfolio"
                target="blank"
              >
                <span className="flex flex-row items-center gap-2 hover:text-blue-400 duration-300 hover:scale-105 duration-400 hover:shadow-md">
                  <BsGithub className="text-2xl md:text-2xl " />
                  <p className="text-lg uppercase font-semibold">Repository</p>
                </span>
              </Link>
            </div>
          </div>

          <div className="border-t-2 border-gray-700 w-11/12 mx-auto mt-3"></div>
          <p className="p-4 text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
            doloremque culpa error minima. Aperiam odit, omnis porro asperiores
            quae natus sint debitis sit, animi necessitatibus autem corporis
            nihil voluptate officia?
          </p>
          <Link href="">
            <div className="flex w-full justify-center">
              <button className=" items-center border-2 border-gray-700 text-gray-700 font-semibold py-1.5 px-5 rounded-xl">
                Show Details
              </button>
            </div>
          </Link>
        </div>

        {/* Team Build Project */}
        <div className="bg-gray-100 min-h-[650px] max-w-[500px] rounded-xl shadow-lg hover:scale-105 duration-500">
          <Link href="https://team-build.vercel.app/" passHref>
            <Image
              src={build}
              height={500}
              width={500}
              alt="Team Build"
              className="lg:w-full h-[250px] lg:object-fill object-cover rounded-tl-xl rounded-tr-xl p-1"
            />
          </Link>
          <h1 className="text-3xl font-bold py-4 text-center">
            Team Build App
          </h1>
          <div className="flex flex-row justify-evenly ">
            <div className="flex flex-row justify-evenly align-middle">
              <Link href="https://team-build.vercel.app/" target="blank">
                <span className="flex flex-row items-center gap-2 hover:text-green-600 duration-300 hover:scale-105 duration-400 hover:shadow-md">
                  <BsWordpress className="text-2xl md:text-2xl " />
                  <p className="text-lg uppercase font-semibold">Website</p>
                </span>
              </Link>
            </div>
            <div className="flex flex-row justify-evenly align-middle">
              <Link
                href="https://github.com/Zawadzki-Michal/SocksByWipit-BackEnd"
                target="blank"
              >
                <span className="flex flex-row items-center gap-2 hover:text-blue-400 duration-300 hover:scale-105 duration-400 hover:shadow-md">
                  <BsGithub className="text-2xl md:text-2xl " />
                  <p className="text-lg uppercase font-semibold">Repository</p>
                </span>
              </Link>
            </div>
          </div>
          <div className="border-t-2 border-gray-700 w-11/12 mx-auto mt-3"></div>
          <p className="p-4 text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
            doloremque culpa error minima. Aperiam odit, omnis porro asperiores
            quae natus sint debitis sit, animi necessitatibus autem corporis
            nihil voluptate officia?
          </p>
          <Link href="">
            <div className="flex w-full justify-center align-bottom">
              <button className=" items-center border-2 border-gray-700 text-gray-700 font-semibold py-1.5 px-5 rounded-xl">
                Show Details
              </button>
            </div>
          </Link>
        </div>

        {/* School of Code Stash Project */}

        <div className="bg-gray-100 min-h-[650px] max-w-[500px] rounded-xl shadow-lg hover:scale-105 duration-500">
          <Link href="https://team-build.vercel.app/" passHref>
            <Image
              src={socks}
              height={500}
              width={500}
              alt="Team Build"
              className="lg:w-full h-[250px] lg:object-fill object-cover rounded-tl-xl rounded-tr-xl p-1"
            />
          </Link>

          <h1 className="text-3xl font-bold py-4 text-center">
            School of Code Stash
          </h1>
          <div className="flex flex-row justify-evenly ">
            <div className="flex flex-row justify-evenly align-middle">
              <Link href="https://socs-ui.onrender.com/" target="blank">
                <span className="flex flex-row items-center gap-2 hover:text-green-600 duration-300 hover:scale-105 duration-400 hover:shadow-md">
                  <BsWordpress className="text-2xl md:text-2xl " />
                  <p className="text-lg uppercase font-semibold">Website</p>
                </span>
              </Link>
            </div>
            <div className="flex flex-row justify-evenly align-middle">
              <Link
                href="https://github.com/SchoolOfCode/Team-Build"
                target="blank"
              >
                <span className="flex flex-row items-center gap-2 hover:text-blue-400 duration-300 hover:scale-105 duration-400 hover:shadow-md">
                  <BsGithub className="text-2xl md:text-2xl " />
                  <p className="text-lg uppercase font-semibold">Repository</p>
                </span>
              </Link>
            </div>
          </div>

          <div className="border-t-2 border-gray-700 w-11/12 mx-auto mt-3"></div>
          <p className="p-4 text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
            doloremque culpa error minima. Aperiam odit, omnis porro asperiores
            quae natus sint debitis sit, animi necessitatibus autem corporis
            nihil voluptate officia?
          </p>

          <Link href="">
            <div className="flex w-full justify-center">
              <button className=" items-center border-2 border-gray-700 text-gray-700 font-semibold py-1.5 px-5 rounded-xl">
                Show Details
              </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;
