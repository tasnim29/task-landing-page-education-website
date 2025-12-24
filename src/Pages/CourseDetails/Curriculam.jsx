import React, { useState } from "react";

const Curriculam = ({ course }) => {
  const [openModule, setOpenModule] = useState(0);

  const toggleModule = (index) => {
    setOpenModule(openModule === index ? null : index);
  };
  return (
    <div className="">
      <div className="space-y-4 max-w-3xl mx-auto">
        {course.modules.map((module, index) => (
          <div
            className={`border rounded-lg overflow-hidden shadow-sm transition-all duration-300 ${
              openModule === index ? " border-none " : "border-gray-200"
            }`}
          >
            <button
              onClick={() => toggleModule(index)}
              className={`w-full text-left px-4 py-3 flex justify-between items-center font-semibold transition-colors duration-300
            ${
              openModule === index
                ? "bg-pink-100 text-pink-700"
                : "bg-gray-100 hover:bg-gray-200 text-gray-800"
            }
          `}
            >
              {module.title}
              <span>{openModule === index ? "-" : "+"}</span>
            </button>
            {openModule == index && (
              <div className="px-6 py-3 bg-white space-y-2 ">
                {module.lessons.map((lesson, index) => (
                  <ul
                    key={index}
                    className="list-disc w-full text-left px-4 py-3 bg-white  font-semibold "
                  >
                    <li>{lesson.title}</li>
                  </ul>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Curriculam;
