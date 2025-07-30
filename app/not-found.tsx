"use client"

import FuzzyText from "@/components/ui/Error";

 
const NotFound = () => {
  return (
    <div className="h-screen  flex flex-col justify-center items-center gap-6">
      <FuzzyText
        baseIntensity={0.2}
        hoverIntensity={2}
        enableHover={true}
         
        
      >
        404 
      </FuzzyText>
      <FuzzyText
        baseIntensity={0.2}
        hoverIntensity={2}
        enableHover={true}
      >
        ERROR 
      </FuzzyText>
    </div>
  );
};

export default NotFound;
