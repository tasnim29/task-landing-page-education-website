import React from "react";

const ArticleCard = ({ post }) => {
  return (
    <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full">
      <img
        src={post.imageUrl}
        alt={post.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-5 flex flex-col flex-1 justify-between">
        <div>
          <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-2">
            {post.title}
          </h3>
          <p className="text-gray-500 text-sm mb-2">{post.date}</p>
          <p className="text-gray-700">{post.summary}</p>
        </div>
        <button className="text-sm font-medium text-white bg-pink-600 px-4 py-2 rounded-full hover:bg-pink-700 transition">
          Read More
        </button>
      </div>
    </div>
  );
};

export default ArticleCard;
