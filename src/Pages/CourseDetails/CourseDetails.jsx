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
                  ? "bg-pink-700 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-pink-500 hover:text-white"
              }`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="text-center text-black">
        {activeTab === "Curriculum" ? (
          <Curriculam course={course} />
        ) : (
          `${activeTab} tab content `
        )}
      </div>
    </div>
  );
};

export default CourseDetails;
