import React from "react";

import Hero from "./Hero/Hero";
import TopCategories from "./TopCategories/TopCategories";
import FeaturedCourses from "./Featured Courses/FeaturedCourses";

const Home = () => {
  return (
    <div className="">
      <Hero />
      <TopCategories></TopCategories>
      <FeaturedCourses />
    </div>
  );
};

export default Home;
