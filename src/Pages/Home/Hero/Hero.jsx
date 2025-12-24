import React from "react";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

const Hero = () => {
  return (
    <div className="w-full pt-[4vh] md:pt-[12vh] h-screen bg-linear-to-b from-teal-900 to-teal-500">
      <div className="flex justify-center flex-col w-4/5 h-full mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* text */}
          <HeroContent />

          {/* image */}
          <HeroImage />
        </div>
      </div>
    </div>
  );
};

export default Hero;
