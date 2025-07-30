"use client";

import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import ShinyText from "@/components/ui/SubHeading";


const StarIcon = () => (
  <svg
    className="w-6 h-6 sm:w-8 sm:h-8 text-[#ffff33]"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

const ZapIcon = () => (
  <svg
    className="w-6 h-6 sm:w-8 sm:h-8 text-[#ffff33]"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
  </svg>
);

const CrownIcon = () => (
  <svg
    className="w-6 h-6 sm:w-8 sm:h-8 text-[#ffff33]"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M5 16L3 8l5.5 4 3.5-6 3.5 6 5.5-4-2 8H5z" />
  </svg>
);

const PricingCard = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      id: "starter",
      name: "Starter",
      icon: StarIcon,
      description: "Perfect for freelancers and small agencies",
      monthlyPrice: 29,
      annualPrice: 24,
      features: ["5 Client Projects", "3 Team Members", "50GB Cloud Storage"],
      popular: false,
    },
    {
      id: "pro",
      name: "Professional",
      icon: ZapIcon,
      description: "Best for growing agencies and marketing teams",
      monthlyPrice: 79,
      annualPrice: 64,
      features: [
        "Unlimited Projects",
        "10 Team Members",
        "200GB Cloud Storage",
      ],
      popular: true,
    },
    {
      id: "enterprise",
      name: "Enterprise",
      icon: CrownIcon,
      description: "Advanced features for large agencies and enterprises",
      monthlyPrice: 199,
      annualPrice: 159,
      features: ["Everything in Pro", "Unlimited Members", "Unlimited Storage"],
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen bg-black p-6 sm:p-10 lg:p-16">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h1 className="text-5xl lg:text-6xl font-bold text-white mb-4">
          Plans for every level of{" "}
          <span className="block text-[#FFFF00] drop-shadow-[0_0_8px_#FFFF00] pt-2">
            Ambition
          </span>
        </h1>
        <p
          className="mx-auto py-8 text-2xl
         max-w text-center font-normal  "
        >
          <ShinyText
            text="Choose a plan that fits your brand growth"
            speed={5}
          />
        </p>
        <div className="mt-6 inline-flex items-center bg-neutral-800 border border-yellow-400/30 rounded-full p-1">
          <button
            onClick={() => setIsAnnual(false)}
            className={`px-4 py-1.5 rounded-full text-sm transition ${
              !isAnnual
                ? "bg-[#ffff33] text-black shadow-md"
                : "text-gray-300 hover:text-white"
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setIsAnnual(true)}
            className={`px-4 py-1.5 rounded-full text-sm transition ${
              isAnnual
                ? "bg-[#ffff33] text-black shadow-md"
                : "text-gray-300 hover:text-white"
            }`}
          >
            Annual{" "}
            <span className="ml-2 text-[10px] px-2 py-0.5 rounded-full bg-yellow-500 text-black">
              Save 20%
            </span>
          </button>
        </div>
      </div>

      {/* Cards */}

      
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 px-4">
          {plans.map((plan) => {
            const Icon = plan.icon;
            const currentPrice = isAnnual
              ? plan.annualPrice
              : plan.monthlyPrice;
            const isHovered = hoveredCard === plan.id;

            return (
              <div
                key={plan.id}
                onMouseEnter={() => setHoveredCard(plan.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`relative bg-white/5 backdrop-blur-md border rounded-2xl p-6 transition-all duration-500 cursor-pointer
                ${
                  plan.popular
                    ? "border-yellow-400 shadow-yellow-400/40 shadow-lg scale-[1.03]"
                    : "border-white/10 hover:border-yellow-400 hover:shadow-yellow-400/30"
                }
                ${isHovered ? "scale-105" : ""}`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-[#ffff33] text-black px-4 py-1 text-xs font-bold rounded-full shadow-md">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <div className="flex justify-center items-center w-14 h-14 bg-yellow-100/20 text-[#ffff33] rounded-full mx-auto mb-4">
                    <Icon />
                  </div>
                  <h3 className="text-xl text-white font-semibold">
                    {plan.name}
                  </h3>
                  <p className="text-sm text-gray-400">{plan.description}</p>
                </div>

                <div className="text-center text-white mb-6">
                  <span className="text-3xl font-bold">${currentPrice}</span>
                  <span className="text-sm text-gray-400 ml-1">/mo</span>
                  {isAnnual && (
                    <div className="text-xs text-yellow-300 mt-1">
                      Billed yearly at ${currentPrice * 12}
                    </div>
                  )}
                </div>

                <ul className="space-y-3 text-left mb-6 text-gray-300 text-sm">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <div className="w-4 h-4 bg-yellow-400 text-black flex items-center justify-center rounded-full mr-2">
                        <FaCheck className="w-2 h-2" />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 rounded-xl font-semibold transition-all ${
                    plan.popular
                      ? "bg-[#ffff33] text-black hover:bg-yellow-300"
                      : "bg-neutral-900 text-white border border-yellow-500 hover:bg-[#ffff33] hover:text-black"
                  }`}
                >
                  {plan.popular ? "Get Started" : "Choose Plan"}
                </button>

                {/* Glow overlays */}
                <div
                className="absolute inset-0 rounded-2xl pointer-events-none"
              />
              </div>
            );
          })}
        </div>
     
     
    </div>
  );
};

export default PricingCard;
