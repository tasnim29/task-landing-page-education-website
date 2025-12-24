import React, { useState } from "react";
import { AllCoursesList } from "../../Constants/AllCoursesList";

import CourseGridView from "./CourseGridView";
import CourseTableView from "./CourseTableView";

const Courses = () => {
  const [view, setView] = useState("grid");

  return (
    <div className="py-32 max-w-7xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        All Courses
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
        <div className="col-span-3 bg-white rounded-xl shadow-md p-5 space-y-6 h-fit">
          {/* Filter Section */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Filter Courses</h3>

            <select className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm  focus:ring-2 focus:ring-pink-500">
              <option>All Categories</option>
              <option>Development</option>
              <option>Design</option>
              <option>Business</option>
              <option>Marketing</option>
            </select>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">View Mode</h3>

            <div className="flex gap-3">
              <button
                onClick={() => setView("grid")}
                className="flex-1 py-2 text-white font-semibold  bg-green-700 hover:bg-green-900 cursor-pointer"
              >
                Grid View
              </button>

              <button
                onClick={() => setView("table")}
                className="flex-1 py-2 text-white font-semibold  bg-yellow-700 hover:bg-yellow-900 cursor-pointer"
              >
                Table View
              </button>
            </div>
          </div>
        </div>

        <div className="col-span-9">
          {view === "grid" ? (
            <CourseGridView courses={AllCoursesList} />
          ) : (
            <CourseTableView courses={AllCoursesList} />
          )}
        </div>
      </div>

      <div className=" flex justify-center  gap-3 mt-10">
        {[1, 2, 3].map((page) => (
          <button
            className={` w-10 h-10 flex items-center justify-center rounded-full font-semibold transition 
        ${
          page === 1
            ? "bg-pink-600 text-white"
            : "bg-gray-200 text-gray-700 hover:bg-pink-500 hover:text-white"
        }`}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Courses;
