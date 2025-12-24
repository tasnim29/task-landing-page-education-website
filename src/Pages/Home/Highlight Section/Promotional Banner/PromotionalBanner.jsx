import React from "react";
import Lottie from "lottie-react";
import promoAnimation from "../../../../animation/Best Offers.json";

const PromotionalBanner = () => {
  return (
    <section className="w-full py-20">
      <div
        className="relative mx-auto 
         overflow-hidden"
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/promotional-banner.png')",
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-linear-to-r from-pink-900/90 via-pink-700/85 to-pink-500/80" />

        {/* Content */}
        <div
          className="relative z-10 px-4 max-w-7xl mx-auto py-14
          flex flex-col md:flex-row
          items-center justify-between gap-8"
        >
          {/* Text */}
          <div className="max-w-xl text-white">
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Upgrade Your Skills <br /> With Expert-Led Courses
            </h2>

            <p className="mt-4 text-white/80 text-sm md:text-base">
              Learn from industry professionals and build real-world skills.
              Flexible learning, lifetime access, and certifications included.
            </p>

            <button
              className="mt-6 px-7 py-3
              bg-white text-pink-700 font-semibold
              hover:bg-pink-100 transition cursor-pointer"
            >
              Explore Courses
            </button>
          </div>

          {/* Lottie Animation */}
          <div className="w-full md:w-[40%]">
            <Lottie animationData={promoAnimation} loop />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromotionalBanner;
