"use client";

import React from "react";
import Image from "next/image";
import { IoMailUnread } from "react-icons/io5";

export default function Passion() {
    const handleScrollToContact = () => {
        const contactSection = document.getElementById("contact");
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: "smooth" });
        }
    };
    return (
        <div id="passion" className="min-h-screen flex items-center justify-center px-8 md:px-16 py-10 md:py-20">
            <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-6xl gap-10">

                <div className="grid grid-cols-2 gap-6">

                    <div className=" border border-gray-700 bg-[#212327] rounded-lg shadow-lg p-6 flex flex-col items-center justify-center text-center space-y-4 hover:scale-105 transition-transform duration-300">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                            <Image src="/app-icon.svg" alt="App Design" width={24} height={24} />
                        </div>
                        <p className="text-white font-semibold text-lg">App Design</p>
                    </div>

                    <div className=" border border-gray-700 bg-[#212327] rounded-lg shadow-lg p-6 flex flex-col items-center justify-center text-center space-y-4 hover:scale-105 transition-transform duration-300">
                        <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full flex items-center justify-center">
                            <Image src="/web-icon.svg" alt="Web Design" width={24} height={24} />
                        </div>
                        <p className="text-white font-semibold text-lg">Web & Interface Design</p>
                    </div>

                    <div className=" border border-gray-700 bg-[#212327] rounded-lg shadow-lg p-6 flex flex-col items-center justify-center text-center space-y-4 hover:scale-105 transition-transform duration-300">
                        <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-full flex items-center justify-center">
                            <Image src="/brand-icon.svg" alt="Brand Identity" width={24} height={24} />
                        </div>
                        <p className="text-white font-semibold text-lg">Brand Identity</p>
                    </div>

                    <div className=" border border-gray-700 bg-[#212327] rounded-lg shadow-lg p-6 flex flex-col items-center justify-center text-center space-y-4 hover:scale-105 transition-transform duration-300">
                        <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center">
                            <Image src="/prototype-icon.svg" alt="Prototyping" width={24} height={24} />
                        </div>
                        <p className="text-white font-semibold text-lg">Wireframes & Prototyping</p>
                    </div>
                </div>

                <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white leading-snug">
                        Let’s make meaningful <br /> user interfaces
                    </h2>
                    <button
                        className="px-6 py-3 bg-[#BBFF00] text-black font-medium rounded-full shadow-lg hover:bg-[#7b9929] transition w-full md:w-auto flex items-center justify-center gap-2"
                        onClick={handleScrollToContact}
                    >
                        <IoMailUnread className="text-xl text-black" />
                        Get in touch
                    </button>
                </div>
            </div>
        </div>
    );
}
