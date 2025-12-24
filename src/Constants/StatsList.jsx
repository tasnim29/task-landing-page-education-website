import {
  FaUserGraduate,
  FaChalkboardTeacher,
  FaStar,
  FaSmile,
} from "react-icons/fa";
export const stats = [
  {
    icon: <FaUserGraduate />,
    value: 50000,
    suffix: "+",
    label: "Students Enrolled",
  },
  {
    icon: <FaChalkboardTeacher />,
    value: 120,
    suffix: "+",
    label: "Expert Instructors",
  },
  {
    icon: <FaStar />,
    value: 4.9,
    decimals: 1,
    label: "Average Rating",
  },
  {
    icon: <FaSmile />,
    value: 95,
    suffix: "%",
    label: "Satisfaction Rate",
  },
];
