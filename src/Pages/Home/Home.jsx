import React from "react";

import Hero from "./Hero/Hero";
import TopCategories from "./TopCategories/TopCategories";
import FeaturedCourses from "./Featured Courses/FeaturedCourses";
import Hightlight from "./Highlight Section/Hightlight";
import Testimonials from "./Testimonials/Testimonials";
import AcademyLMS from "./AcademyLMS/AcademyLMS";
import Articles from "./Articles/Articles";

const Home = () => {
  return (
    <div className="">
      <Hero />
      <TopCategories></TopCategories>
      <FeaturedCourses />
      <Hightlight />
      <Testimonials />
      <AcademyLMS />
      <Articles />
    </div>
  );
};

export default Home;
