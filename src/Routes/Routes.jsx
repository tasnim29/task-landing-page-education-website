import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import Courses from "../Pages/Courses/Courses";
import CourseDetails from "../Pages/CourseDetails/CourseDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "courses",
        Component: Courses,
      },
      {
        path: "courses/:id",
        Component: CourseDetails,
      },
    ],
  },
]);
