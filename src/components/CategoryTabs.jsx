import { useState } from "react";

const categories = [
  "Vegetables",
  "Groceries",
  "Fish",
  "Meat",
  "Dairy",
  "Drinks",
  "Bakery",
  "Snacks & Confectionery",
];

export default function CategoryTabs({ onSelect }) {
  const [active, setActive] = useState("Groceries");

  const handleClick = (category) => {
    setActive(category);
    onSelect && onSelect(category);
  };

  return (
    <div className="flex flex-wrap gap-4 items-center border-b border-gray-200 mb-4 overflow-x-auto">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => handleClick(cat)}
          className={`pb-2 text-sm whitespace-nowrap ${
            active === cat
              ? "text-green-600 border-b-2 border-green-600 font-medium"
              : "text-gray-500 hover:text-green-600"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
