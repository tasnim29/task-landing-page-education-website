import React from "react";

const AcademyLMS = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-0">
      <div className="py-20 bg-black/70 text-white text-center rounded-3xl md:px-16 px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Join Our Academy Today!
        </h2>
        <p className="mb-6 text-lg md:text-xl">
          Learn from industry experts and start your journey to success.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-white text-pink-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-300 transition cursor-pointer">
            I am a Student
          </button>
          <button className="bg-white text-purple-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-300 transition cursor-pointer">
            Become an Instructor
          </button>
        </div>
      </div>
    </div>
  );
};

export default AcademyLMS;
