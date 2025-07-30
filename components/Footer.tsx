"use client";
import React from "react";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { BackgroundBeamsWithCollision } from "@/components/ui/Rain";
import Image from "next/image";

const GraphyFooter = () => {
  return (
    <footer className="h-full text-white border-t border-gray-200">
      <BackgroundBeamsWithCollision>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <a
                  href="#"
                  className="relative z-20 mr-4 flex items-center space-x-2 px-2 py-1 text-sm font-normal text-black"
                >
                  <Image
                    height={7}
                    width={7}
                    loading="lazy"
                    src="eagle.svg"
                    alt="logo"
                    className="w-7 h-7 p-1 bg-[#FACC15] rounded-full hover:text-[#FFFF00] hover:drop-shadow-[0_0_10px_#FFFF00]"
                  />
                  <span className="text-lg font-semibold text-[#FFFF00] drop-shadow-[0_0_10px_#FFFF00] ">ADmyBRAND</span>
                   
                </a>
                
              </div>
              <p className="text-sm  mb-6 max-w-xs">
                ADmyBRAND empowers teams to transform raw data into clear,
                compelling visuals — making insights easier to share,
                understand, and act on.
              </p>

              {/* Social Links */}
              <div className="flex space-x-4">
                <a
                  href="#"
                  className=" hover:text-[#FFFF00] hover:drop-shadow-[0_0_10px_#FFFF00]"
                  aria-label="Twitter"
                >
                  <FaXTwitter size={25} />
                </a>
                <a
                  href="#"
                  className="hover:text-[#FFFF00] hover:drop-shadow-[0_0_10px_#FFFF00] "
                  aria-label="Instagram"
                >
                  <FaInstagram size={25} />
                </a>
                <a
                  href="#"
                  className=" hover:text-[#FFFF00] hover:drop-shadow-[0_0_10px_#FFFF00]"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin size={25} />
                </a>
                <a
                  href="#"
                  className="hover:text-[#FFFF00] hover:drop-shadow-[0_0_10px_#FFFF00]"
                  aria-label="GitHub"
                >
                  <FaGithub size={25} />
                </a>
              </div>
            </div>

            <div className="flex justify-around items-start flex-wrap gap-8 lg:col-span-3">
              {/* Product Links */}
              <div>
                <h3 className="text-xl font-semibold uppercase tracking-wider mb-4 pb-2 border-b text-[#FFFF00] drop-shadow-[0_0_10px_#FFFF00]">
                  Product
                </h3>
                <ul className="space-y-3 flex flex-col justify-center items-center ">
                  <li>
                    <a
                      href="#features"
                      className="text-sm hover:text-[#FFFF00] hover:drop-shadow-[0_0_10px_#FFFF00]"
                    >
                      Features
                    </a>
                  </li>
                  <li>
                    <a
                      href="#pricing"
                      className="text-sm  hover:text-[#FFFF00] hover:drop-shadow-[0_0_10px_#FFFF00]"
                    >
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a
                      href="#testimonials"
                      className="text-sm hover:text-[#FFFF00] hover:drop-shadow-[0_0_10px_#FFFF00]"
                    >
                      Testimonials
                    </a>
                  </li>
                </ul>
              </div>

              {/* Company Links */}
              <div>
                <h3 className="text-xl font-semibold text-[#FFFF00] drop-shadow-[0_0_10px_#FFFF00]  uppercase tracking-wider mb-4 pb-2 border-b  ">
                  Company
                </h3>
                <ul className="space-y-3 flex flex-col justify-center items-center ">
                  <li>
                    <a
                      href="#footer"
                      className="text-sm hover:text-[#FFFF00] hover:drop-shadow-[0_0_10px_#FFFF00]"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm hover:text-[#FFFF00] hover:drop-shadow-[0_0_10px_#FFFF00] "
                    >
                      Careers
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm  hover:text-[#FFFF00] hover:drop-shadow-[0_0_10px_#FFFF00]"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-sm hover:text-[#FFFF00] hover:drop-shadow-[0_0_10px_#FFFF00]">
                © 2025 ADDyourBrand All rights reserved.
              </p>
              <div className="flex flex-wrap items-center space-x-6 text-sm">
                <a href="#" className=" hover:text-[#FFFF00] hover:drop-shadow-[0_0_10px_#FFFF00] ">
                  Privacy Policy
                </a>
                <a href="#" className=" hover:text-[#FFFF00] hover:drop-shadow-[0_0_10px_#FFFF00]">
                  Terms of Service
                </a>
                <a href="#" className=" hover:text-[#FFFF00] hover:drop-shadow-[0_0_10px_#FFFF00]">
                  Cookie Settings
                </a>
              </div>
            </div>
          </div>
        </div>
      </BackgroundBeamsWithCollision>
    </footer>
  );
};

export default GraphyFooter;
