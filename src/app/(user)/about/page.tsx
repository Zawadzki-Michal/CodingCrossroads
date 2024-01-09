import React from "react";
import Image from "next/image";
import about from "../../../images/aboutme2.jpeg";
import DropDown from "@/components/DropDown";

const About = () => {
  return (
    <div className="lg:w-2/3 lg:min-h-[calc(100vh-180px)] mx-auto">
      <DropDown />
      <h1 className="text-7xl lg:text-[100px] font-bold text-center lg:my-10 my-4 text-gray-700">
        About Me
      </h1>
      <div className="lg:px-10 px-4">
        <div className="lg:float-left lg:mr-8 mb-4">
          <Image
            src={about}
            height={600}
            width={600}
            alt="lorry"
            className="object-cover lg:rounded-xl lg:shadow-2xl"
          />
        </div>

        <p className="lg:text-2xl text-xl text-gray-600 lg:leading-relaxed pb-10">
          {`

Hello! I’m Michal, a 35-year-old web development enthusiast living in Derby, and a proud father to Martyna and Jacob. My journey from a lorry driver and bathroom renovation business owner to an aspiring junior web developer is anything but ordinary.

My passion for technology sparked in my teenage years, starting from programming bots for games to modifying custom ROMs during the early Android era. Now, it’s all about full-stack web development.

Joining the School of Code’s intensive 16-week bootcamp was a pivotal moment in my life. It wasn’t just any bootcamp; it was a competitive and unique experience that I earned after persistently applying since summer 2019, finally beating nearly 3,000 applicants. This persistence is a core part of who I am – I’m not one to give up. I chase my dreams until they become reality, and software engineering has been a lifelong dream of mine.

The bootcamp didn’t just enhance my technical skills; it transformed me personally. I’ve become more open, confident in public speaking, and comfortable engaging with clients and strangers alike. I’m always eager to learn, unafraid to admit what I don’t know, and ready to embrace new challenges.

My blog, ‘Coding Crossroads’, is a testament to this journey. It’s where I share the highs and lows of transitioning from a lorry driver to a junior web developer. Writing about my experiences, from the intense learning at the School of Code to everyday life challenges, has become a newfound passion.

Teamwork is another aspect I thoroughly enjoy. Participating in daily stand-ups, sprint planning, retrospectives, and supporting my teammates is something I find fulfilling.

Outside of coding, I’m a tech enthusiast at heart. I love keeping up with the latest in technology, listening to podcasts, indulging in handheld gaming, and exploring photography. Video editing is my latest venture. And a non-tech dream? Someday, I’ll ride a Harley Davidson, revisiting my love for biking that I paused for family responsibilities.`}
        </p>
      </div>
    </div>
  );
};

export default About;
