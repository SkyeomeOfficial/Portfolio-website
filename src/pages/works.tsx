"use client";

import Image from "next/image";
import React, { useState } from "react";
import { FaEye, FaEyeSlash  } from "react-icons/fa";

export default function Works() {
  const prototypes = [
    {
      title: "True Premium Hemp Products",
      description: "An e-commerce website for premium hemp products.",
      thumbnail: "/images/prototype1.jpg",
      embedLink: "https://embed.figma.com/design/BWqwxcuLBNwAhyTRYMfZvU/SKYTOWN-ROLEPLAY?node-id=168-12146&embed-host=share",
    },
    {
      title: "Creative Agency Website",
      description: "A modern design for a creative agency.",
      thumbnail: "/images/prototype2.jpg",
      embedLink: "https://embed.figma.com/design/BWqwxcuLBNwAhyTRYMfZvU/SKYTOWN-ROLEPLAY?node-id=168-12146&embed-host=share",
    },
    {
      title: "Uber Eats UI Design",
      description: "Redesign of the Uber Eats mobile app.",
      thumbnail: "/images/prototype3.jpg",
      embedLink: "https://embed.figma.com/design/BWqwxcuLBNwAhyTRYMfZvU/SKYTOWN-ROLEPLAY?node-id=168-12146&embed-host=share",
    },
    {
      title: "Wireless Gaming Mouse",
      description: "A product landing page for a gaming mouse.",
      thumbnail: "/images/prototype4.jpg",
      embedLink: "https://embed.figma.com/design/BWqwxcuLBNwAhyTRYMfZvU/SKYTOWN-ROLEPLAY?node-id=168-12146&embed-host=share",
    },
    {
      title: "Nike Shopping App",
      description: "An intuitive shopping app for Nike products.",
      thumbnail: "/images/prototype5.jpg",
      embedLink: "https://embed.figma.com/design/BWqwxcuLBNwAhyTRYMfZvU/SKYTOWN-ROLEPLAY?node-id=168-12146&embed-host=share",
    },
    {
      title: "Instagram Growth Website",
      description: "Landing page for an Instagram growth service.",
      thumbnail: "/images/prototype6.jpg",
      embedLink: "https://embed.figma.com/design/BWqwxcuLBNwAhyTRYMfZvU/SKYTOWN-ROLEPLAY?node-id=168-12146&embed-host=share",
    },
    {
        title: "True Premium Hemp Products",
        description: "An e-commerce website for premium hemp products.",
        thumbnail: "/images/prototype1.jpg",
        embedLink: "https://embed.figma.com/design/BWqwxcuLBNwAhyTRYMfZvU/SKYTOWN-ROLEPLAY?node-id=168-12146&embed-host=share",
      },
      {
        title: "Creative Agency Website",
        description: "A modern design for a creative agency.",
        thumbnail: "/images/prototype2.jpg",
        embedLink: "https://embed.figma.com/design/BWqwxcuLBNwAhyTRYMfZvU/SKYTOWN-ROLEPLAY?node-id=168-12146&embed-host=share",
      },
      {
        title: "Uber Eats UI Design",
        description: "Redesign of the Uber Eats mobile app.",
        thumbnail: "/images/prototype3.jpg",
        embedLink: "https://embed.figma.com/design/BWqwxcuLBNwAhyTRYMfZvU/SKYTOWN-ROLEPLAY?node-id=168-12146&embed-host=share",
      },
      {
        title: "Wireless Gaming Mouse",
        description: "A product landing page for a gaming mouse.",
        thumbnail: "/images/prototype4.jpg",
        embedLink: "https://embed.figma.com/design/BWqwxcuLBNwAhyTRYMfZvU/SKYTOWN-ROLEPLAY?node-id=168-12146&embed-host=share",
      },
      {
        title: "Nike Shopping App",
        description: "An intuitive shopping app for Nike products.",
        thumbnail: "/images/prototype5.jpg",
        embedLink: "https://embed.figma.com/design/BWqwxcuLBNwAhyTRYMfZvU/SKYTOWN-ROLEPLAY?node-id=168-12146&embed-host=share",
      },
      {
        title: "Instagram Growth Website",
        description: "Landing page for an Instagram growth service.",
        thumbnail: "/images/prototype6.jpg",
        embedLink: "https://embed.figma.com/design/BWqwxcuLBNwAhyTRYMfZvU/SKYTOWN-ROLEPLAY?node-id=168-12146&embed-host=share",
      },
  ];

  const [visiblePrototypes, setVisiblePrototypes] = useState(6);
  const [previewVisible, setPreviewVisible] = useState(
    Array(prototypes.length).fill(false)
  );

  const loadMorePrototypes = () => {
    setVisiblePrototypes((prev) => Math.min(prev + 3, prototypes.length));
  };

  const togglePreview = (index: number) => {
    setPreviewVisible((prev) =>
      prev.map((visible, idx) => (idx === index ? !visible : visible))
    );
  };

  return (
    <div id="works" className="min-h-screen text-white py-20 px-8 md:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Stuff I’ve done. <span className="inline-block">🤓</span>
          </h2>
          <p className="text-gray-400">
            Explore some of my interactive Figma prototypes below.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {prototypes.slice(0, visiblePrototypes).map((prototype, index) => (
            <div
              key={index}
              className="border border-gray-700 bg-[#212327] rounded-lg overflow-hidden shadow-md transform transition-transform hover:scale-105"
            >
              {!previewVisible[index] ? (
                <Image
                  src={prototype.thumbnail}
                  width={100}
                  height={100}
                  alt={`${prototype.title} Thumbnail`}
                  className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover"
                />
              ) : (
                <iframe
                  src={prototype.embedLink}
                  className="w-full h-[300px] md:h-[400px] lg:h-[500px] border-0"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              )}
              <div className="p-4">
                <h3 className="text-lg font-semibold">{prototype.title}</h3>
                <p className="text-gray-400 text-sm mt-2">
                  {prototype.description}
                </p>
                <div className="mt-4">
                  <button
                    onClick={() => togglePreview(index)}
                    className="px-4 py-2 bg-[#BBFF00] text-black w-full font-medium rounded-full shadow-lg hover:bg-[#7b9929] transition flex items-center justify-center"
                  >
                    {!previewVisible[index] ? (
                      <FaEye className="text-lg" />
                    ) : (
                      <FaEyeSlash className="text-lg" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {visiblePrototypes < prototypes.length && (
          <div className="mt-12 text-center">
            <button
              onClick={loadMorePrototypes}
              className="px-6 py-3 bg-[#BBFF00] text-black font-medium rounded-full shadow-lg hover:bg-[#7b9929] transition"
            >
              View More
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
