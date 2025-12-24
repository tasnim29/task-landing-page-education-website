import React from "react";
import { testimonials } from "../../../Constants/FeedbackList";

const Testimonials = () => {
  return (
    <div className="py-20 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        What Our Students Say
      </h2>
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        {testimonials.map((t, idx) => (
          <div
            key={idx}
            className="p-6 rounded-2xl  shadow-lg flex flex-col items-center text-center"
          >
            <p className="mb-4 text-lg">"{t.quote}"</p>
            <img
              src={t.avatar}
              alt={t.name}
              className="w-16 h-16 rounded-full mb-2 border-2"
            />
            <h3 className="font-semibold">{t.name}</h3>
            <span className="text-sm text-gray-400">{t.role}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
