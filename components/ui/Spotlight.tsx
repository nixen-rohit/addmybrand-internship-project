import React from "react";
import { cn } from "@/lib/utils";
import { RiRobot2Fill } from "react-icons/ri";
import ShinyText from "@/components/ui/SubHeading";
import { FaPlay } from "react-icons/fa6";

type SpotlightProps = {
  className?: string;
  fill?: string;
};

export const Spotlight = ({ className, fill }: SpotlightProps) => {
  return (
    <div className="relative flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-28 lg:py-32 overflow-hidden">
      {/* Grid Background */}
      <div
        className={cn(
          "pointer-events-none absolute inset-0 select-none",
          "[background-size:20px_20px] sm:[background-size:30px_30px] md:[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]",
        )}
      />

      {/* Spotlight SVG Background */}
      <svg
        className={cn(
          "animate-spotlight pointer-events-none absolute z-0 h-[168%] w-full opacity-15 sm:opacity-20",
          className
        )}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 3787 2842"
        fill="none"
      >
        <g filter="url(#filter)">
          <ellipse
            cx="1924.71"
            cy="273.501"
            rx="1924.71"
            ry="273.501"
            transform="matrix(-0.822377 -0.568943 -0.568943 0.822377 3631.88 2291.09)"
            fill={fill || "white"}
            fillOpacity="0.21"
          ></ellipse>
        </g>
        <defs>
          <filter
            id="filter"
            x="0.860352"
            y="0.838989"
            width="3785.16"
            height="2840.26"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="151"
              result="effect1_foregroundBlur_1065_8"
            />
          </filter>
        </defs>
      </svg>

      {/* Foreground Content */}
      <div className="relative pt-8 lg:pt-0 z-10 max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-5xl w-full">
        {/* Tag */}
        <div className="mb-4 sm:mb-6 md:mb-8">
          <section className="animate-fade-in-scale">
            <div className="relative rounded-full p-[1px] h-7 sm:h-8 md:h-9 inline-flex overflow-hidden text-xs sm:text-sm md:text-[14px] leading-6 text-gray-200 transition">
              <span
                className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite]  
                bg-[conic-gradient(from_90deg_at_50%_50%,#FFFF00_0%,transparent_50%,#FFFF00_100%)]"
              ></span>
              <a
                className="inline-flex h-full px-2 sm:px-3 py-1 w-full cursor-pointer 
                items-center justify-center rounded-full bg-stone-900 backdrop-blur-3xl"
                aria-label="AI-Powered Marketing Tool"
              >
                <span className="mr-1.5 sm:mr-2">
                  <RiRobot2Fill size={16} className="sm:w-5 sm:h-5" />
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
        <h1 className="  mb-4 sm:mb-6 md:mb-8 bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-600 bg-clip-text text-center font-bold text-transparent text-5xl md:text-5xl lg:text-6xl xl:text-7xl">
          <span className="block sm:inline">Get Your Brand in the</span>{" "}
          <span className="text-[#FFFF00] drop-shadow-[0_0_8px_#FFFF00] block mt-1 sm:mt-0">
            SPOTLIGHT
          </span>
        </h1>

        {/* Subheading */}
        <div className="mx-auto pt-2 sm:pt-4 mb-6 sm:mb-8 md:mb-10 max-w-xs sm:max-w-md md:max-w-2xl">
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-zinc-300 text-center font-normal">
            <ShinyText
              text="We help you automate marketing and boost your brand's visibility."
              speed={5}
            />
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col lg:flex-row gap-3 sm:gap-4 items-center justify-center">
          {/* Start Free Trial Button */}
          <button
            type="button"
            className="w-[6vw] lg:w-auto min-w-[140px] inline-flex items-center justify-center gap-2 rounded-full
            border border-transparent bg-[#FFFF00] drop-shadow-[0_0_8px_#FFFF00] text-black 
            hover:bg-[#ffff33] px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-medium 
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
            px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-medium
            transition-all duration-200 shadow-md focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:ring-offset-2 focus:ring-offset-transparent"
          >
            <FaPlay className="text-xs sm:text-sm" />
            Check Demo
          </a>
        </div>
      </div>
    </div>
  );
};
