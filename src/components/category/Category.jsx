// import React, { useMemo } from "react";
// import CategoryCard from "./CategoryCard";
// import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
// import { useProducts } from "../context/ProductsProvider";
// import fruits from "../../assets/fruits.png";
// import fish from "../../assets/fish.png";

// const Category = () => {
//   const { products } = useProducts();
//   const defaultBgColors = [
//     "bg-[#F5EFD7]",
//     "bg-[#E1EEF5]",
//     "bg-[#F5E1E7]",
//     "bg-[#EAF4EC]",
//     "bg-[#F7EBF4]",
//   ];

//   // Unique categories generate
//   const categories = useMemo(() => {
//     const map = new Map(); // category -> first product
//     products.forEach((product) => {
//       if (!map.has(product.category)) {
//         map.set(product.category, product);
//       }
//     });
//     return Array.from(map.values()).slice(0, 5);
//   }, [products]);

//   return (
//     <div className="px-[80px]">
//       <div className="flex justify-between items-end mb-[32px]">
//         <div>
//           <h2 className="text-sm font-medium text-[#515751]">
//             FIND YOUR FAVORITES
//           </h2>
//           <h1 className="text-3xl font-semibold text-[#0D270C]">
//             Shop by Category
//           </h1>
//         </div>
//         <div className="flex justify-center items-center gap-4">
//           <button className="flex items-center justify-center rounded-full w-[48px] h-[48px] bg-[#E2E5E1]">
//             <IoIosArrowBack />
//           </button>
//           <button className="flex items-center justify-center rounded-full w-[48px] h-[48px] bg-[#46AE3D]">
//             <IoIosArrowForward />
//           </button>
//         </div>
//       </div>

//       <div className="flex justify-between">
//         {categories.map((product, index) => (
//           <CategoryCard
//             key={product.category}
//             bgColor={defaultBgColors[index % defaultBgColors.length]}
//             title={product.category}
//             image={product.image} // ধরলাম product.image আছে
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Category;

import React, { useMemo, useState, useRef, useEffect } from "react";
import CategoryCard from "./CategoryCard";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useProducts } from "../context/ProductsProvider";

const Category = () => {
  const { products } = useProducts();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(5);
  const carouselRef = useRef(null);

  const defaultBgColors = [
    "bg-[#F5EFD7]",
    "bg-[#E1EEF5]",
    "bg-[#F5E1E7]",
    "bg-[#EAF4EC]",
    "bg-[#F7EBF4]",
  ];

  // Get all unique categories
  const categories = useMemo(() => {
    const map = new Map();
    products.forEach((product) => {
      if (!map.has(product.category)) {
        map.set(product.category, product);
      }
    });
    return Array.from(map.values());
  }, [products]);

  // Handle responsive card count
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) setVisibleCards(1);
      else if (width < 768) setVisibleCards(2);
      else if (width < 1024) setVisibleCards(3);
      else if (width < 1280) setVisibleCards(4);
      else setVisibleCards(5);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Calculate total pages
  const totalPages = Math.ceil(categories.length / visibleCards);

  // Navigate to next set of categories
  const next = () => {
    if (currentIndex < totalPages - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setCurrentIndex(0); // Loop back to start
    }
  };

  // Navigate to previous set of categories
  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    } else {
      setCurrentIndex(totalPages - 1); // Loop to end
    }
  };

  // Get currently visible categories
  const visibleCategories = categories.slice(
    currentIndex * visibleCards,
    (currentIndex + 1) * visibleCards
  );

  // If we don't have enough categories to fill the last page, add empty placeholders
  const categoryItems = [];
  for (let i = 0; i < visibleCards; i++) {
    const category = visibleCategories[i];
    if (category) {
      categoryItems.push(
        <CategoryCard
          key={category.category}
          bgColor={defaultBgColors[i % defaultBgColors.length]}
          title={category.category}
          image={category.image}
        />
      );
    } else {
      // Empty placeholder to maintain layout
      categoryItems.push(<div key={`empty-${i}`} className="w-full h-0"></div>);
    }
  }

  return (
    <div className="px-4 md:px-8 lg:px-[80px] py-8">
      <div className="flex justify-between items-end mb-8">
        <div>
          <h2 className="text-sm font-medium text-[#515751]">
            FIND YOUR FAVORITES
          </h2>
          <h1 className="text-2xl md:text-3xl font-semibold text-[#0D270C]">
            Shop by Category
          </h1>
        </div>

        {categories.length > visibleCards && (
          <div className="flex justify-center items-center gap-4">
            <button
              onClick={prev}
              className="flex items-center justify-center rounded-full w-10 h-10 md:w-12 md:h-12 bg-[#E2E5E1] hover:bg-[#D1D4D0] transition-colors"
              aria-label="Previous categories"
            >
              <IoIosArrowBack />
            </button>
            <button
              onClick={next}
              className="flex items-center justify-center rounded-full w-10 h-10 md:w-12 md:h-12 bg-[#46AE3D] hover:bg-[#3A8D32] text-white transition-colors"
              aria-label="Next categories"
            >
              <IoIosArrowForward />
            </button>
          </div>
        )}
      </div>

      <div className="relative">
        <div
          ref={carouselRef}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6 transition-transform duration-300"
        >
          {categoryItems}
        </div>

        {/* Page indicators */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-6 space-x-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full ${
                  index === currentIndex ? "bg-[#46AE3D]" : "bg-[#E2E5E1]"
                }`}
                aria-label={`Go to page ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Category;
