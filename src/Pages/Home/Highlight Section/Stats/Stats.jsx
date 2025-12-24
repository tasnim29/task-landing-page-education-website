import React from "react";
import CountUp from "react-countup";

import { stats } from "../../../../Constants/StatsList";

const Stats = () => {
  return (
    <section className="w-full py-5">
      <div className="max-w-7xl mx-auto px-4">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition"
            >
              <div className="text-pink-600 text-4xl mb-4 flex justify-center">
                {item.icon}
              </div>

              <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
                <CountUp
                  end={item.value}
                  duration={20}
                  decimals={item.decimals || 0}
                  suffix={item.suffix || ""}
                  enableScrollSpy
                  scrollSpyOnce
                />
              </h3>

              <p className="mt-2 text-gray-600 text-sm md:text-base">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
