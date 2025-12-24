import React from "react";

const CourseTableView = ({ courses }) => {
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="w-full border border-gray-200 rounded-lg overflow-hidden">
          {/* Table Head */}
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                Course
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                Category
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                Instructor
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                Duration
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                Students
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                Price
              </th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {courses.map((course, index) => (
              <tr key={index} className="border-t hover:bg-gray-50 transition">
                <td className="px-4 py-3 font-medium text-gray-800">
                  {course.title}
                </td>
                <td className="px-4 py-3 text-gray-600">{course.category}</td>
                <td className="px-4 py-3 text-gray-600">{course.instructor}</td>
                <td className="px-4 py-3 text-gray-600">{course.duration}</td>
                <td className="px-4 py-3 text-gray-600">{course.students}</td>
                <td className="px-4 py-3">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      course.price === "Free"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {course.price}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CourseTableView;
