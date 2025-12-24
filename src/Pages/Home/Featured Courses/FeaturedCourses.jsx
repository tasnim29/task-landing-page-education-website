import React from "react";
import { FaClock, FaUserGraduate } from "react-icons/fa";
import { coursesList } from "../../../Constants/CoursesList";
import Tilt from "react-parallax-tilt";

const FeaturedCourses = () => {
  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
          Featured Courses
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {coursesList.map((course, index) => (
            <Tilt>
              {" "}
              <div
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                {/* Course Image */}
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />

                <div className="p-5 flex flex-col gap-3">
                  {/* Category */}
                  <span className="text-sm font-semibold text-pink-600">
                    {course.category}
                  </span>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-gray-800">
                    {course.title}
                  </h3>

                  {/* Instructor */}
                  <p className="text-sm text-gray-500">
                    By {course.instructor}
                  </p>

                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-gray-500 text-sm mt-2">
                    <div className="flex items-center gap-2">
                      <FaClock className="text-gray-400" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaUserGraduate className="text-gray-400" />
                      <span>{course.students} students</span>
                    </div>
                  </div>

                  {/* Price / Badge */}
                  <div className="mt-3 flex items-center justify-between">
                    <span
                      className={`px-3 py-1 rounded-full font-semibold ${
                        course.price.toLowerCase() === "free"
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {course.price}
                    </span>

                    <button className="text-sm font-medium text-white bg-pink-600 px-4 py-2 rounded-full hover:bg-pink-700 transition">
                      View More
                    </button>
                  </div>
                </div>
              </div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;
