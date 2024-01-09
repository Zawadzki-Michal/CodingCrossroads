import React from "react";
import Image from "next/image";
import about from "../../../images/aboutme2.jpeg";

const About = () => {
  return (
    <div className="w-full lg:h-[calc(100vh-180px)] flex lg:flex-row flex-col lg:justify-center">
      <div className="lg:w-1/2 h-full flex justify-center items-center ">
        <Image
          src={about}
          height={800}
          width={800}
          alt="lorry"
          className="lg:w-[700px] lg:h-[700px] object-cover lg:rounded-xl shadow-2xl justify-center align-middle items-center"
        />
      </div>
      <div className="lg:w-1/2 lg:h-full flex justify-center items-center flex-col gap-4">
        <h1 className="text-6xl font-bold text-center lg:mt-10 mt-4 text-gray-700">
          About Me
        </h1>
        <p className="lg:text-2xl text-lg p-3 text-gray-700 lg:p-12 leading-relaxed">
          Hello, I'm Michal Zawadzki, a dynamic full-stack web developer fresh
          out of a 16-week bootcamp. While I've been immersed in coding for a
          while, this recent experience has honed my skills and instilled a
          proactive learning approach. I firmly believe in the power of
          commitment and habits to turn goals into reality. In my recent role as
          a Junior Full Stack Developer at the School of Code in Birmingham,
          I've excelled in breaking down complex challenges and contributing to
          product development using technologies like Node.js, Express, React,
          and PostgreSQL. Understanding that hiring a junior is an investment
          for any company, I am confident that I'll be a great choice. With a
          blend of experience and fresh enthusiasm, I'm ready to contribute to
          your team's success. If you're looking for a dedicated developer with
          a passion for growth, let's connect and explore how I can bring value
          to your projects.
        </p>
      </div>
    </div>
  );
};

export default About;
