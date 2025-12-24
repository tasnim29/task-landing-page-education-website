import { categories } from "../../../Constants/Categories";

const TopCategories = () => {
  return (
    <section className="w-full py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Top Categories
          </h2>
          <button className="text-pink-600 font-semibold hover:underline">
            All Categories
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {categories.map((category) => (
            <div
              key={category.name}
              className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center justify-center text-center hover:scale-105 transition-transform"
            >
              <div className="mb-4">{category.icon}</div>
              <h3 className="font-semibold text-lg text-gray-800">
                {category.name}
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                {category.courses} Courses
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopCategories;
