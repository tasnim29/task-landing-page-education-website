import Tilt from "react-parallax-tilt";
import { FaClock, FaUserGraduate } from "react-icons/fa";
import { Link } from "react-router";

const CourseGridView = ({ courses }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
      {courses.map((course, index) => (
        <Tilt key={index}>
          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-48 object-cover"
            />

            <div className="p-5 flex flex-col gap-3">
              <span className="text-sm font-semibold text-pink-600">
                {course.category}
              </span>

              <h3 className="text-lg font-bold text-gray-800">
                {course.title}
              </h3>

              <p className="text-sm text-gray-500">By {course.instructor}</p>

              <div className="flex items-center justify-between text-gray-500 text-sm mt-2">
                <div className="flex items-center gap-2">
                  <FaClock />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaUserGraduate />
                  <span>{course.students} students</span>
                </div>
              </div>

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

                <Link
                  to={`/courses/${course.id}`}
                  className="text-sm font-medium text-white bg-pink-600 px-4 py-2 rounded-full hover:bg-pink-700 transition"
                >
                  View More
                </Link>
              </div>
            </div>
          </div>
        </Tilt>
      ))}
    </div>
  );
};

export default CourseGridView;
