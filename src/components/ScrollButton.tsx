"use client";
import React from "react";

const ScrollButton = () => {
  const scrollToContent = () => {
    const viewportHeight = window.innerHeight;
    const scrollAmount = viewportHeight - 50; // Scroll down by the viewport height + 50 pixels

    window.scrollBy({
      top: scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToContent}
      className="absolute lg:bottom-20 bottom-8 left-1/2 transform -translate-x-1/2 bg-transparent hover:text-gray-900 hover:bg-gray-50 text-gray-50 border-2 font-bold py-2 px-4 rounded"
    >
      Explore My Blog
    </button>
  );
};

export default ScrollButton;
