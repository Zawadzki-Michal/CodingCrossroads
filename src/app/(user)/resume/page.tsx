"use client";
import res1 from "@/images/resume1.png";
import res2 from "@/images/resume2.png";
import res3 from "@/images/resume3.png";
import Image from "next/image";

export default function Resume() {
  return (
    <div className="flex flex-col lg:gap-14 w-100vh bg-black/70 lg:py-24 py-4 gap-8">
      <div className="mx-auto">
        <Image
          src={res1}
          height={900}
          width={900}
          alt="resume"
          className="object-cover lg:rounded-xl lg:shadow-2xl"
        ></Image>
      </div>
      <div className="mx-auto">
        <Image
          src={res3}
          height={900}
          width={900}
          alt="resume"
          className="object-cover lg:rounded-xl lg:shadow-2xl"
        ></Image>
      </div>
      <div className="mx-auto">
        <Image
          src={res2}
          height={900}
          width={900}
          alt="resume"
          className="object-cover lg:rounded-xl lg:shadow-2xl"
        ></Image>
      </div>
    </div>
  );
}
