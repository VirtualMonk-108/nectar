const CategoryCard = ({ category, onClick }) => {
  if (!category) return null;
  
  return (
    <button
      onClick={() => onClick(category)}
      className={`${category.backgroundColor || 'bg-gray-50'} p-4 rounded-xl flex flex-col items-center justify-center gap-2 transition-transform hover:scale-105`}
    >
      <img
        src={category.image}
        alt={category.name}
        className="w-24 h-24 object-contain"
      />
      <p className="text-sm font-medium text-center">{category.name}</p>
    </button>
  );
};

const CategoryGrid = ({ categories = [], onCategoryClick }) => {
  if (!categories || categories.length === 0) {
    return (
      <div className="p-4 text-center text-gray-500">
        No categories available
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {categories.map((category) => (
        <CategoryCard
          key={category.id}
          category={category}
          onClick={onCategoryClick}
        />
      ))}
    </div>
  );
};

export default CategoryGrid;