// import React, { useMemo, useState, useRef, useEffect } from "react";
// import CategoryCard from "./CategoryCard";
// import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
// import { useProducts } from "../context/ProductsProvider";

// const Category = () => {
//   const { products } = useProducts();
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [visibleCards, setVisibleCards] = useState(5);
//   const carouselRef = useRef(null);

//   const defaultBgColors = [
//     "bg-[#F5EFD7]",
//     "bg-[#E1EEF5]",
//     "bg-[#F5E1E7]",
//     "bg-[#EAF4EC]",
//     "bg-[#F7EBF4]",
//   ];

//   // Get all unique categories
//   const categories = useMemo(() => {
//     const map = new Map();
//     products.forEach((product) => {
//       if (!map.has(product.category)) {
//         map.set(product.category, product);
//       }
//     });
//     return Array.from(map.values());
//   }, [products]);

//   // Handle responsive card count
//   useEffect(() => {
//     const handleResize = () => {
//       const width = window.innerWidth;
//       if (width < 640) setVisibleCards(1);
//       else if (width < 768) setVisibleCards(2);
//       else if (width < 1024) setVisibleCards(3);
//       else if (width < 1280) setVisibleCards(4);
//       else setVisibleCards(5);
//     };

//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   // Calculate total pages
//   const totalPages = Math.ceil(categories.length / visibleCards);

//   // Navigate to next set of categories
//   const next = () => {
//     if (currentIndex < totalPages - 1) {
//       setCurrentIndex((prev) => prev + 1);
//     } else {
//       setCurrentIndex(0); // Loop back to start
//     }
//   };

//   // Navigate to previous set of categories
//   const prev = () => {
//     if (currentIndex > 0) {
//       setCurrentIndex((prev) => prev - 1);
//     } else {
//       setCurrentIndex(totalPages - 1); // Loop to end
//     }
//   };

//   // Get currently visible categories
//   const visibleCategories = categories.slice(
//     currentIndex * visibleCards,
//     (currentIndex + 1) * visibleCards
//   );

//   // If we don't have enough categories to fill the last page, add empty placeholders
//   const categoryItems = [];
//   for (let i = 0; i < visibleCards; i++) {
//     const category = visibleCategories[i];
//     if (category) {
//       categoryItems.push(
//         <CategoryCard
//           key={category.category}
//           bgColor={defaultBgColors[i % defaultBgColors.length]}
//           title={category.category}
//           image={category.image}
//         />
//       );
//     } else {
//       // Empty placeholder to maintain layout
//       categoryItems.push(<div key={`empty-${i}`} className="w-full h-0"></div>);
//     }
//   }

//   return (
//     <div className="px-4 md:px-8 lg:px-[80px] py-8">
//       <div className="flex justify-between items-end mb-8">
//         <div>
//           <h2 className="text-sm font-medium text-[#515751]">
//             FIND YOUR FAVORITES
//           </h2>
//           <h1 className="text-2xl md:text-3xl font-semibold text-[#0D270C]">
//             Shop by Category
//           </h1>
//         </div>

//         {categories.length > visibleCards && (
//           <div className="flex justify-center items-center gap-4">
//             <button
//               onClick={prev}
//               className="flex items-center justify-center rounded-full w-10 h-10 md:w-12 md:h-12 bg-[#E2E5E1] hover:bg-[#D1D4D0] transition-colors"
//               aria-label="Previous categories"
//             >
//               <IoIosArrowBack />
//             </button>
//             <button
//               onClick={next}
//               className="flex items-center justify-center rounded-full w-10 h-10 md:w-12 md:h-12 bg-[#46AE3D] hover:bg-[#3A8D32] text-white transition-colors"
//               aria-label="Next categories"
//             >
//               <IoIosArrowForward />
//             </button>
//           </div>
//         )}
//       </div>

//       <div className="relative">
//         <div
//           ref={carouselRef}
//           className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6 transition-transform duration-300"
//         >
//           {categoryItems}
//         </div>

//         {/* Page indicators */}
//         {totalPages > 1 && (
//           <div className="flex justify-center mt-6 space-x-2">
//             {Array.from({ length: totalPages }).map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => setCurrentIndex(index)}
//                 className={`w-2 h-2 rounded-full ${
//                   index === currentIndex ? "bg-[#46AE3D]" : "bg-[#E2E5E1]"
//                 }`}
//                 aria-label={`Go to page ${index + 1}`}
//               />
//             ))}
//           </div>
//         )}
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
  const [visibleCards, setVisibleCards] = useState(1);
  const carouselRef = useRef(null);
  const containerRef = useRef(null);

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

  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-6 md:py-8">
      <div className="flex justify-between items-end mb-6 md:mb-8">
        <div>
          <h2 className="text-xs sm:text-sm font-medium text-[#515751]">
            FIND YOUR FAVORITES
          </h2>
          <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#0D270C]">
            Shop by Category
          </h1>
        </div>

        {categories.length > visibleCards && (
          <div className="flex justify-center items-center gap-2 sm:gap-3 md:gap-4">
            <button
              onClick={prev}
              className="flex items-center justify-center rounded-full w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-[#E2E5E1] hover:bg-[#D1D4D0] transition-colors"
              aria-label="Previous categories"
            >
              <IoIosArrowBack className="text-sm md:text-base" />
            </button>
            <button
              onClick={next}
              className="flex items-center justify-center rounded-full w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-[#46AE3D] hover:bg-[#3A8D32] text-white transition-colors"
              aria-label="Next categories"
            >
              <IoIosArrowForward className="text-sm md:text-base" />
            </button>
          </div>
        )}
      </div>

      <div className="relative" ref={containerRef}>
        <div
          ref={carouselRef}
          className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4 md:gap-5 lg:gap-6"
        >
          {visibleCategories.map((category, index) => (
            <CategoryCard
              key={category.category}
              bgColor={defaultBgColors[index % defaultBgColors.length]}
              title={category.category}
              image={category.image}
            />
          ))}
        </div>

        {/* Page indicators */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-4 md:mt-6 space-x-1.5 md:space-x-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full ${
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
