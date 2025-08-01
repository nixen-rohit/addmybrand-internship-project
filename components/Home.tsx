import React from "react";
import { cn } from "@/lib/utils";
import { Spotlight } from "@/components/ui/Spotlight";
import ShinyText from "@/components/ui/SubHeading";
import { FaPlay } from "react-icons/fa";
import { RiRobot2Fill } from "react-icons/ri";

const Home = () => {
  return (
    <div className="relative flex h-screen w-full overflow-hidden rounded-md bg-black/[0.96] antialiased md:items-center md:justify-center">
      <div
        className={cn(
          " pointer-events-none absolute inset-0 [background-size:40px_40px] select-none",
          "[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]"
        )}
      />

      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="white"
      />

      <div className="flex flex-col justify-evenly items-center relative z-10 mx-auto w-full max-w-7xl
       p-4 pt-20 md:pt-0 lg:mt-0">
        {/* Tag */}
        <div className="flex justify-center items-center sm:mb-7 lg:mb-8  ">
          <section className="animate-fade-in-scale">
            <div
              className="relative rounded-full p-[1px] 
      h-8  md:h-9 lg:h-9
      inline-flex overflow-hidden 
      text-base text-sm md:text-[12px] lg:text-[12px]
      leading-6 text-gray-200 transition"
            >
              <span
                className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite]  
        bg-[conic-gradient(from_90deg_at_50%_50%,#FFFF00_0%,transparent_50%,#FFFF00_100%)]"
              ></span>

              <a
                className="inline-flex h-full 
        px-3  md:px-5 lg:px-5
        py-1 sm:py-1.5 md:py-2 lg:py-2 
        w-full cursor-pointer 
        items-center justify-center 
        rounded-full bg-stone-900 backdrop-blur-3xl"
                aria-label="AI-Powered Marketing Tool"
              >
                <span className="mr-2">
                  <RiRobot2Fill className=" w-4 h-4 md:w-5 md:h-5  lg:w-5 lg:h-5 " />
                </span>
                <span className="whitespace-nowrap">
                  AI-Powered
                  <span className="ml-1 font-semibold text-[#FFFF00]">
                    Marketing Tool
                  </span>
                </span>
              </a>
            </div>
          </section>
        </div>

        {/* Heading */}
        <h1
          className="mb-4 md:mb-8 bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-600 
        bg-clip-text text-center font-bold text-transparent leading-[4rem] text-6xl md:text-5xl lg:text-6xl xl:text-7xl"
        >
          <span className="block ">Get Your Brand in the</span>{" "}
          <span className="text-[#FFFF00] drop-shadow-[0_0_8px_#FFFF00] block mt-1   ">
            SPOTLIGHT
          </span>
        </h1>

        {/* Subheading */}
        <p
          className="mx-auto mt-4 max-w-lg text-center text-base font-normal 
         text-lg md:text-lg lg:text-xl text-zinc-300 text-center font-normal"
        >
          <ShinyText
            text="We help you automate marketing and boost your brand's visibility."
            speed={5}
          />
        </p>

        {/* Buttons */}
        <div className="flex flex-col lg:flex-row lg:pt-9 gap-6 
         items-center justify-center mt-2 mb-2 ">
          {/* Start Free Trial Button */}
          <button
            type="button"
            className="w-[6vw] lg:w-auto min-w-[140px] inline-flex items-center justify-center gap-2 rounded-full
            border border-transparent bg-[#FFFF00] drop-shadow-[0_0_8px_#FFFF00] text-black 
            hover:bg-[#ffff33] px-4   py-2.5   text-sm   font-medium 
            transition-all duration-200 shadow-md focus:outline-none focus:ring-2 focus:ring-[#FFFF00] focus:ring-offset-2 focus:ring-offset-transparent"
          >
            Start Free Trial
          </button>

          {/* Demo Button */}
          <a
            href="https://nixen-portfolio.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
            className="w-[6vw] lg:w-auto min-w-[140px]  inline-flex items-center justify-center gap-2 rounded-full
            border border-transparent bg-zinc-800 text-white hover:bg-zinc-700 
            px-4  py-2.5 text-sm   font-medium
            transition-all duration-200 shadow-md focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:ring-offset-2 focus:ring-offset-transparent"
          >
            <FaPlay className="text-xs  " />
            Check Demo
          </a>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black/90 to-transparent pointer-events-none"></div>
    </div>
  );
};

export default Home;
