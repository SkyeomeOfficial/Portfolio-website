import React from "react";
import Image from "next/image";
import { FaInstagram, FaBehance, FaDribbble, FaDiscord } from "react-icons/fa";
import { FaXTwitter, FaThreads } from "react-icons/fa6";

export default function About() {
  return (
    <footer
      id="about"
      className="bg-gradient-to-b from-[#212327] to-[#131516] text-gray-300 pb-12 pt-4 px-6 md:px-12 rounded-t-[6vh] border-t-2 border-[#2a2a2b] shadow-2xl shadow-black"
    >
      <div className="flex justify-center mb-7">
        <div className="w-10 h-1 bg-[rgba(255,255,255,0.05)] rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="flex flex-col space-y-4">
          <h2 className="text-2xl font-bold text-white flex items-center justify-center md:justify-start text-center md:text-left">
            About me
          </h2>

          <p className="text-gray-600 text-sm font-light w-full text-justify md:text-left">
            My name is Himesh. I&apos;m a designer from India. Outside of my
            full-time commitments, I love being outdoors, exploring nature.
            Nature gives me the power to create amazing user experiences that
            make customers and users satisfied when they&apos;re using products.
          </p>
          <p className="text-gray-600 text-sm font-light w-full text-justify md:text-left mt-4">
            I&apos;ve been a designer for the last 1 year. I&apos;m currently working as a
            freelancer.
          </p>

          <div>
            <h3 className="text-sm mt-3 font-semibold text-[#BBFF00]">
              You can follow me on:
            </h3>
            <div className="flex flex-row gap-4 mt-4">
              <a
                href="https://www.instagram.com/mr.skyeome"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-pink-500 to-orange-500 rounded-full"
              >
                <FaInstagram className="text-xl text-white" />
              </a>
              <a
                href="https://www.behance.net/mrskyeome"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 bg-blue-600 rounded-full"
              >
                <FaBehance className="text-xl text-white" />
              </a>
              <a
                href="https://dribbble.com/MrSkyeome"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 bg-pink-400 rounded-full"
              >
                <FaDribbble className="text-xl text-white" />
              </a>
            </div>
          </div>
        </div>

        <div className="relative flex flex-col items-center justify-center md:items-end md:justify-end overflow-visible">
          <div className="relative rounded-lg border-2 border-white shadow-md">
            <Image
              src="/image.jpg"
              alt="Community Highlight"
              width={300}
              height={300}
              className="object-cover"
            />

            <div className="absolute top-2 -right-8 bg-gray-50 text-gray-800 px-4 py-2 rounded-lg shadow flex flex-row gap-3 items-center">
              <div className="rounded-full px-2 py-2 bg-blue-500">
                <FaDiscord className="text-2xl text-white" />
              </div>
              <div>
                <p className="text-sm font-semibold">Community Members</p>
                <p className="text-blue-500 font-bold text-base">2K +</p>
              </div>
            </div>

            <div className="absolute bottom-4 -left-10 bg-[#e6f7ff] text-[#005ba4] rounded-lg px-3 py-3 shadow-2xl flex flex-row gap-4 items-center">
              <Image
                src="/image.jpg"
                alt="Community Highlight"
                width={40}
                height={40}
                className="object-cover rounded-full"
              />
              <div>
                <p className="text-sm font-semibold">&quot;Imagination Awaits You&quot;</p>
                <p className="text-xs text-[#005ba4]">@ Mr.Skyeome</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-12 border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
        <div className="flex flex-col space-y-2 text-center md:text-left">
          <h3 className="text-base font-bold text-white">Let&apos;s make meaningful interfaces!</h3>
          <p className="text-sm font-normal">
            Email:{" "}
            <a
              href="mailto:letsgo@chiragdesigns.in"
              className="text-[#BBFF00] hover:underline font-normal"
            >
              himesh.singh1103@gmail.com
            </a>
          </p>
        </div>

        <div className="flex flex-col md:items-end md:text-right items-center text-center">
          <h3 className="text-sm mt-3 font-semibold">You can follow me on:</h3>
          <div className="flex flex-row gap-4 mt-4">
            <a
              href="https://www.instagram.com/mr.skyeome"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-pink-500 to-orange-500 rounded-full"
            >
              <FaInstagram className="text-xl text-white" />
            </a>
            <a
              href="https://x.com/mrskyeome"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 bg-black rounded-full"
            >
              <FaXTwitter className="text-xl text-white" />
            </a>
            <a
              href="https://www.threads.net/@mr.skyeome"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 bg-black rounded-full"
            >
              <FaThreads className="text-xl text-white" />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-sm text-gray-500 font-normal">
        <p className="text-sm text-gray-600">
          © {new Date().getFullYear()} All rights reserved by <span className="text-[#BBFF00]">Skyeome</span>.
        </p>
      </div>
    </footer>
  );
}
