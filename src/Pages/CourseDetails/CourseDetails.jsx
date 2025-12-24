import React, { useState } from "react";
import { useParams } from "react-router";
import { AllCoursesList } from "../../Constants/AllCoursesList";
import Curriculam from "./Curriculam";

const CourseDetails = () => {
  const [activeTab, setActiveTab] = useState("Curriculum");
  const tabs = ["Overview", "Curriculum", "Instructor", "FAQ", "Reviews"];
  const { id } = useParams();
  const course = AllCoursesList.find((c) => c.id === parseInt(id));
  return (
    <div className="py-32 max-w-7xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Welcome to <span className="text-pink-700">{course.title}</span>
      </h2>

      <div className="flex justify-center gap-4 mb-8 flex-wrap">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 rounded-lg font-semibold transition cursor-pointer
              ${
                tab === activeTab
                  ? "bg-pink-700 text-white hover:bg-pink-500"
                  : "bg-gray-200 text-gray-700 hover:bg-pink-500 hover:text-white"
              }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
        <div className="md:col-span-3">
          <div className="bg-white rounded-xl shadow-sm p-6 space-y-4 ">
            <div>
              <p className="text-sm text-gray-500">Course Price</p>
              <p className="text-3xl font-bold text-gray-900">
                ৳{course.price}
              </p>
            </div>

            <button className="w-full bg-pink-700 hover:bg-pink-500 text-white font-semibold py-3 rounded-lg transition">
              Buy Now
            </button>

            <button className="w-full border border-pink-700 text-pink-700 hover:bg-pink-50 font-semibold py-3 rounded-lg transition">
              Add to Wishlist
            </button>
          </div>
        </div>

        <div className="col-span-9">
          {activeTab === "Curriculum" ? (
            <Curriculam course={course} />
          ) : (
            `${activeTab} tab content `
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
