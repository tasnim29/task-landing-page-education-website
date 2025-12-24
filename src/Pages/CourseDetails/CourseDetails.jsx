import React from "react";
import { useParams } from "react-router";
import { AllCoursesList } from "../../Constants/AllCoursesList";

const CourseDetails = () => {
  const { id } = useParams();
  const course = AllCoursesList.find((c) => c.id === parseInt(id));
  return (
    <div>
      <h1 className="text-8xl">{course.category}</h1>
    </div>
  );
};

export default CourseDetails;
