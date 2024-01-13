"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const Carousel = ({
  data,
}: {
  data: { image: string; description: string }[];
}) => {
  const [currentImg, setCurrentImg] = useState(0);
  const [carouselSize, setCarouselSize] = useState({ width: 800, height: 640 });
  const carouselRef = useRef(null);

  useEffect(() => {
    let elem = carouselRef.current as unknown as HTMLDivElement;
    let { width, height } = elem.getBoundingClientRect();
    if (carouselRef.current) {
      setCarouselSize({
        width,
        height,
      });
    }
  }, []);

  return (
    <div className="relative">
      <div className=" mx-auto md:w-10/12 h-[250px] md:h-[400px] md:rounded-md overflow-hidden relative md:shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
        <div
          ref={carouselRef}
          style={{
            left: -currentImg * carouselSize.width,
          }}
          className="w-full h-full absolute flex transition-all duration-500"
        >
          {data.map((v, i) => (
            <div key={i} className="relative shrink-0 w-full h-full">
              <Image
                className="pointer-events-none"
                alt={`carousel-image-${i}`}
                fill
                src={v.image}
              />
              <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 p-1 text-md uppercase text-center text-white">
                {v.description}
              </div>
            </div>
          ))}
        </div>
        <div className="absolute top-1/2 left-0">
          <button
            disabled={currentImg === 0}
            onClick={() =>
              setCurrentImg((prev) => (prev === 0 ? data.length - 1 : prev - 1))
            }
            className={`border px-4 py-2 font-bold bg-gray-200 ${
              currentImg === 0 && "opacity-50"
            }`}
          >
            {"<"}
          </button>
        </div>

        <div className="absolute top-1/2 right-0">
          <button
            onClick={() =>
              setCurrentImg((prev) => (prev === data.length - 1 ? 0 : prev + 1))
            }
            className="border px-4 py-2 font-bold bg-gray-200"
          >
            {">"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
