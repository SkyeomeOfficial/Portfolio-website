"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("homescreen");

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash) {
      setActiveSection(hash);
      const targetSection = document.getElementById(hash);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
      }
    }

    const handleScroll = () => {
      const sections = ["homescreen", "passion", "works", "contact"];
      let currentSection = "homescreen";

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom > 150) {
            currentSection = section;
            break;
          }
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSmoothScroll = (event: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    event.preventDefault();
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="sticky top-0 z-50 flex items-center justify-center md:justify-between px-6 md:px-12 py-4 bg-[rgb(19, 22, 24)] backdrop-filter backdrop-blur-md bg-opacity-40">
      <div className="flex-shrink-0">
        <Image
          src="/LOGO_FULL.svg"
          alt="Logo"
          width={120}
          height={40}
          className="md:w-[140px] md:h-[50px]"
        />
      </div>

      <div className="hidden md:flex flex-row items-center justify-between gap-10">
        <nav className="flex space-x-6 lg:space-x-8">
          <a
            href="#homescreen"
            onClick={(e) => handleSmoothScroll(e, "homescreen")}
            className={`relative ${
              activeSection === "homescreen"
                ? "text-[#BBFF00] scale-110 font-bold"
                : "text-gray-300 hover:text-gray-100"
            } font-medium text-sm transition-transform duration-300 group`}
          >
            Home
          </a>
          <a
            href="#passion"
            onClick={(e) => handleSmoothScroll(e, "passion")}
            className={`relative ${
              activeSection === "passion"
                ? "text-[#BBFF00] scale-110 font-bold"
                : "text-gray-300 hover:text-gray-100"
            } font-medium text-sm transition-transform duration-300 group`}
          >
            Passion
          </a>
          <a
            href="#works"
            onClick={(e) => handleSmoothScroll(e, "works")}
            className={`relative ${
              activeSection === "works"
                ? "text-[#BBFF00] scale-110 font-bold"
                : "text-gray-300 hover:text-gray-100"
            } font-medium text-sm transition-transform duration-300 group`}
          >
            Works
          </a>
        </nav>

        <a
          href="#contact"
          onClick={(e) => handleSmoothScroll(e, "contact")}
          className={`${activeSection === "contact"
            ? "bg-[#BBFF00] text-black scale-110 font-bold border-2 border-[#BBFF00]"
            : "text-[#BBFF00] hover:bg-[#BBFF00] hover:text-black border-2 border-[#BBFF00]"
            } font-medium text-sm px-6 py-2 rounded-full transition-transform duration-300`}
        >
          Contact
        </a>
      </div>
    </div>
  );
}
