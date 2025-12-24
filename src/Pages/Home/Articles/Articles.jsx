import React, { useState } from "react";
import { blogPosts } from "../../../Constants/BlogsList";
import ArticleCard from "./ArticleCard";

const Articles = () => {
  const [showAll, setShowAll] = useState(false);
  const articlesToShow = showAll ? blogPosts : blogPosts.slice(0, 4);
  return (
    <section className="py-20 ">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            The Articles
          </h2>
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-pink-600 font-semibold hover:underline cursor-pointer"
          >
            {showAll ? "Show less" : "Show All"}
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {articlesToShow.map((post) => (
            <ArticleCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Articles;
