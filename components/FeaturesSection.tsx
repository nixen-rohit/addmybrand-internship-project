import type React from "react";
import { cn } from "@/lib/utils";
import ShinyText from '@/components/ui/SubHeading';
import { BiSupport } from "react-icons/bi";
import { MdOutlineSecurity, MdAttachMoney } from "react-icons/md";
import { SiSimpleanalytics } from "react-icons/si";
import { TbTargetArrow } from "react-icons/tb";
import { FaCloudBolt, FaRegStarHalfStroke, FaRobot } from "react-icons/fa6";

export default function FeaturesSection() {
  const features = [
    {
      title: "AI-Powered Content Generation ",
      description:
        "Create compelling ad copy, social media posts, and marketing materials with advanced AI models trained on high-converting content.",
      icon: <FaRobot size={30} />,
    },
    {
      title: "Ease of use",
      description:
        "It's as easy as using an Apple, and as expensive as buying one.",
      icon: <FaRegStarHalfStroke size={30} />,
    },
    {
      title: "Smart Audience Targeting",
      description:
        "Leverage machine learning to identify and target your ideal customers across all platforms with precision accuracy.",
      icon: <TbTargetArrow size={30} />,
    },
    {
      title: "100% Uptime guarantee",
      description: "We just cannot be taken down by anyone.",
      icon: <FaCloudBolt size={30} />,
    },
    {
      title: "Advanced Analytics Suite",
      description:
        "Track performance, measure ROI, and optimize campaigns with real-time insights and predictive analytics.",
      icon: <SiSimpleanalytics size={30} />,
    },
    {
      title: "24/7 Customer Support",
      description:
        "We are available a 100% of the time. At least our AI agents are.",
      icon: <BiSupport size={30} />,
    },
    {
      title: "Money back guarantee",
      description:
        "If you don't like EveryAI, we’ll work to make it right or refund you.",
      icon: <MdAttachMoney size={30} />,
    },
    {
      title: "Enterprise Security",
      description:
        "Bank-level security with SOC 2 compliance, data encryption, and advanced privacy controls for enterprise peace of mind.",
      icon: <MdOutlineSecurity size={30} />,
    },
  ];

  return (
    <section className="bg-black py-20 px-4">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-5xl lg:text-6xl font-bold text-white mb-4">
          Powerful Features for Modern
          <span className="text-[#FFFF00] drop-shadow-[0_0_8px_#FFFF00] block pt-2">
            Marketing
          </span>
        </h2>
        <p
          className="mx-auto pt-8 
         max-w text-center text-base font-normal  "
        >
          <ShinyText
            text="We revolutionize how brands create, optimize, and scale their marketing campaigns. Join thousands of companies growing 10x faster."
            speed={5}
          />
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <Feature key={feature.title} {...feature} index={index} />
        ))}
      </div>
    </section>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border py-10 relative group/feature border-neutral-700",
        (index === 0 || index === 4) && "lg:border-l border-neutral-700",
        index < 4 && "lg:border-t border-neutral-700"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-900 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-900 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-500">{icon}</div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-600 group-hover/feature:bg-[#FFFF00] transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-400 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
