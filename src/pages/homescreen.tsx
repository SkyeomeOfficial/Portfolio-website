"use client";

import React from "react";
import Image from "next/image";
import { IoMailUnread } from "react-icons/io5";

export default function Homescreen() {
  const handleScrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleScrollToproject = () => {
    const contactSection = document.getElementById("works");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      id="homescreen"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center md:justify-center px-6 sm:px-12 md:px-20 py-10 md:py-20 relative gap-10 md:gap-14 xl:gap-96"
    >
      <div className="text-white max-w-md space-y-6 text-center md:text-left mb-10 md:mb-0">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
          Hi, I’m <span className="text-[#BBFF00]">Himesh!</span>{" "}
          <span className="inline-block animate-bounce">👋</span>
        </h1>
        <p className="text-gray-600 font-light text-base sm:text-xs md:text-lg">
          I design graphic visuals and user interfaces (UI) for apps and
          websites.
        </p>
        <div className="flex flex-col md:flex-row gap-6 mt-8 items-center md:items-start justify-center md:justify-start">
          <button
            className="px-6 py-3 bg-[#BBFF00] text-black font-medium rounded-full items-center text-center justify-center flex flex-row gap-2 shadow-lg hover:bg-[#7b9929] transition w-full md:w-auto"
            onClick={handleScrollToContact}
          >
            <IoMailUnread className="text-xl text-black" />
            Get in touch
          </button>
          <button
            className="px-6 py-3 border-2 border-gray-500 text-gray-300 font-medium rounded-full hover:border-[#BBFF00] hover:text-[#BBFF00] transition w-full md:w-auto"
            onClick={handleScrollToproject}
          >
            View portfolio
          </button>
        </div>
      </div>

      <div className="relative flex items-center justify-center">
        <div className="relative w-[200px] sm:w-[250px] md:w-[300px] lg:w-[350px] h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] rounded-full flex items-center justify-center shadow-2xl">
          <Image
            src="/image2.jpeg"
            alt="Logo"
            width={340}
            height={340}
            priority={true}
            className="rounded-full"
          />
          <div className="absolute top-16 sm:top-32 -left-8">
            <Image
              src="/aftereffects.webp"
              alt="Photoshop"
              width={70}
              height={70}
            />
          </div>
          <div className="absolute -top-10 sm:-top-3 -right-10 sm:-right-3">
            <Image
              src="/cup.webp"
              alt="Figma"
              width={125}
              height={125}
            />
          </div>
        </div>
        <div className="absolute bottom-[-30px] sm:bottom-[-10px] right-[-30px] sm:right-[-10px]">
          <Image
            src="/vector.webp"
            alt="Himesh"
            width={125}
            height={125}
            className="rounded-full"
          />
        </div>
      </div>
    </div>
  );
}
