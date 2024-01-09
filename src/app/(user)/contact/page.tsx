import MyContactBox from "@/components/MyContactBox";
import roads from "@/images/roads.jpg";
import Image from "next/image";
import React from "react";

export default function ContactPage() {
  return (
    <div className="w-full max-h-[screen] relative">
      <Image
        src={roads}
        height={0}
        width={0}
        alt="lorry"
        className="lg:w-full lg:max-h-[calc(100vh-80px)] lg:object-fill h-[calc(100vh-80px)] object-cover"
      />
      <div className="absolute top-0 w-full h-full bg-black/40 text-gray-100 flex flex-col items-center justify-evenly lg:px-44 text-center px-4">
        <div className="lg:w-1/2 lg:h-3/4 w-screen h-[calc(100vh-120px)] p-6  lg:bg-[#111111]/90   text-left lg:rounded-lg  flex flex-col gap-4 justify-between lg:p-10">
          <h2 className="text-6xl lg:text-6xl font-bold">How can I help?</h2>

          <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold">
            {`I'd love to hear from you!`}
          </h3>
          <p className="w-10/12 text-md">
            {`Do you have a question or are you interested in working with me?
            Please fill out the form below and I'll get back to you as soon as I can.`}
          </p>

          <MyContactBox />
        </div>
      </div>
    </div>
  );
}
