"use client"
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import ShinyText from "@/components/ui/SubHeading";
import { FaStar } from "react-icons/fa6";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import Image from "next/image";

 

interface Testimonial {
  name: string;
  title: string;
  company: string;
  avatar: string;
  quote: string;
  highlights: string[];
}

const testimonials: Testimonial[] = [
  {
    name: "Marcus Johnson",
    title: "CTO, DataDrive Inc",
    company: "DataDrive",
    avatar: "/image/Firstimage.jpg",
    quote:
      "The AI voice agents are revolutionary. Our customer satisfaction increased by 40% while reducing response time from hours to seconds. Incredible ROI.",
    highlights: [
      "40% satisfaction boost",
      "Instant responses",
      "Seamless integration",
    ],
  },
  {
    name: "Sarah Chen",
    title: "Head of Operations",
    company: "TechFlow",
    avatar: "/image/second.jpg",
    quote:
      "Implementation was seamless and the results were immediate. Our team productivity has never been higher, and customer feedback is overwhelmingly positive.",
    highlights: [
      "Seamless implementation",
      "Immediate results",
      "Higher productivity",
    ],
  },
  {
    name: "Michael Rodriguez",
    title: "VP of Customer Success",
    company: "InnovateNow",
    avatar: "/image/third.jpg",
    quote:
      "The automation capabilities exceeded our expectations. We've been able to scale our customer support without adding headcount while maintaining quality.",
    highlights: [
      "Exceeded expectations",
      "Scalable solution",
      "Quality maintained",
    ],
  },
  {
    name: "Emily Watson",
    title: "Director of Technology",
    company: "NextGen Solutions",
    avatar: "/image/fourth.jpg",
    quote:
      "Outstanding performance and reliability. The AI adapts to our business needs perfectly, and the analytics provided are incredibly insightful.",
    highlights: [
      "Outstanding performance",
      "Perfect adaptation",
      "Insightful analytics",
    ],
  },
  {
    name: "David Park",
    title: "Chief Innovation Officer",
    company: "FutureScope",
    avatar: "/image/last.jpg",
    quote:
      "Game-changing technology that transformed our customer interactions. The ROI was evident within the first month of deployment.",
    highlights: ["Game-changing tech", "Transformed interactions", "Quick ROI"],
  },
];

export default function TestimonialsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const controls = useAnimation();

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(nextTestimonial, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying]);

  const currentTestimonial = testimonials[currentIndex];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseEnter = () => {
    setIsAutoPlaying(false);
    controls.start({ opacity: 1 });
  };

  const handleMouseLeave = () => {
    setIsAutoPlaying(true);
    controls.start({ opacity: 0 });
  };

  return (
    <section className="flex flex-col justify-center items-center py-16 px-4 min-h-screen">
      
      {/* Glowing Tag */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center bg-black text-white px-4 py-2 rounded-full text-sm font-semibold shadow-sm border border-zinc-800">
          <span className="w-2 h-2 rounded-full bg-[#FFFF00] mr-3 animate-pulse "></span>
          Trusted by Industry Leaders
        </div>
      </div>

      {/* Heading & Subheading */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
          What Our{" "}
          <span className="block text-[#FFFF00] drop-shadow-[0_0_8px_#FFFF00]">
            Clients Say
          </span>
        </h2>
        <p className="mx-auto pt-6 max-w-2xl text-center text-base text-white/80">
          <ShinyText
            text="Join thousands of successful brands who have transformed their marketing with our revolutionary platform."
            speed={5}
          />
        </p>
      </div>

      <div className="relative max-w-4xl w-full">
        {/* Main testimonial card */}
        <div
          ref={divRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="relative bg-[hsl(220,15%,8%)] backdrop-blur-sm border border-[hsl(220,15%,20%)] rounded-2xl p-8 sm:p-12 shadow-xl overflow-hidden"
        >
          {/* Spotlight effect */}
          <motion.div
            className="pointer-events-none absolute -inset-px rounded-2xl"
            animate={controls}
            transition={{ duration: 0.5 }}
            style={{
              background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255, 193, 7, 0.15), transparent 40%)`,
            }}
          />
          {/* Quote Icon */}
          <div className="absolute top-6 right-6 text-[#ffff33] text-4xl opacity-80 z-10">
            <BiSolidQuoteAltLeft />

          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="space-y-6 relative z-10"
            >
              {/* User Info */}
              <div className="flex flex-col sm:flex-row gap-6 items-center">
                <Image
                  height={100}
                  width={100}
                  loading="lazy"
                  src={currentTestimonial.avatar}
                  alt={currentTestimonial.name}
                  className="w-16 h-16 rounded-full border-2 border-yellow-400 object-cover"
                />
                <div className="text-center sm:text-left">
                  <h3 className="text-lg font-bold text-white">
                    {currentTestimonial.name}
                  </h3>
                  <p className="text-[#ffff33] text-sm font-medium">
                    {currentTestimonial.title}
                  </p>
                  <p className="text-sm text-slate-400">
                    {currentTestimonial.company}
                  </p>
                  <div className="flex justify-center sm:justify-start mt-2 gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <FaStar
                        key={i}
                        size={14}
                        className="text-[#ffff33] fill-yellow-400"
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Quote */}
              <p className="italic text-white text-lg leading-relaxed">
                "{currentTestimonial.quote}"
              </p>

              {/* Highlights */}
              <div className="flex flex-wrap gap-3">
                {currentTestimonial.highlights.map((item, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 text-sm bg-[hsl(47,96%,53%,0.1)] border border-yellow-400/40 text-yellow-400 rounded-full"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation arrows */}
          <div className=" flex justify-center gap-4 mt-8 relative z-10">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 flex items-center justify-center rounded-full 
              bg-zinc-900 border border-neutral-900 hover:bg-zinc-800  transition-colors group"
              aria-label="Previous testimonial"
            >
              <FaChevronLeft
                size={20}
                className="text-neutral-500 group-hover:text-neutral-200 transition-colors"
              />
            </button>
            <button
              onClick={nextTestimonial}
              className="w-12 h-12 flex items-center justify-center rounded-full 
              bg-zinc-900 border border-neutral-900 hover:bg-zinc-800 transition-colors group"
              aria-label="Next testimonial"
            >
              <FaChevronRight
                size={20}
                className="text-neutral-500 group-hover:text-neutral-200 transition-colors"
              />
            </button>
          </div>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-yellow-400 scale-110"
                  : "bg-[hsl(220,10%,50%)] hover:bg-yellow-400/60"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
