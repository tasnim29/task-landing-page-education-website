import {
  FaPaintBrush,
  FaCode,
  FaChartBar,
  FaMusic,
  FaCamera,
  FaBook,
} from "react-icons/fa";
export const categories = [
  {
    name: "Art & Design",
    icon: <FaPaintBrush className="text-pink-500 text-2xl" />,
    courses: 38,
  },
  {
    name: "Development",
    icon: <FaCode className="text-blue-500 text-2xl" />,
    courses: 52,
  },
  {
    name: "Business",
    icon: <FaChartBar className="text-green-500 text-2xl" />,
    courses: 44,
  },
  {
    name: "Music",
    icon: <FaMusic className="text-purple-500 text-2xl" />,
    courses: 26,
  },
  {
    name: "Photography",
    icon: <FaCamera className="text-yellow-500 text-2xl" />,
    courses: 18,
  },
  {
    name: "Languages",
    icon: <FaBook className="text-indigo-500 text-2xl" />,
    courses: 30,
  },
];
