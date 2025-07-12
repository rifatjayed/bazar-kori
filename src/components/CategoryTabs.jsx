// import { ChevronLeft, ChevronRight } from "lucide-react";
// import { useRef } from "react";

// const categories = [
//   "Vegetables",
//   "Groceries",
//   "Fish",
//   "Meat",
//   "Dairy",
//   "Drinks",
//   "Bakery",
//   "Snacks & Confectionery",
//   "Fruits",
//   "Frozen",
// ];

// export default function CategoryTabs({ onSelect }) {
//   const scrollRef = useRef(null);

//   const scroll = (direction) => {
//     if (scrollRef.current) {
//       const scrollAmount = direction === "left" ? -200 : 200;
//       scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
//     }
//   };

//   return (
//     <div className="relative mb-4">
//       {/* Left Scroll Button */}
//       <button
//         onClick={() => scroll("left")}
//         className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow p-1 rounded-full hover:bg-gray-100"
//       >
//         <ChevronLeft size={18} />
//       </button>
//       {/* Scrollable Tabs */}
//       <div
//         ref={scrollRef}
//         className="flex gap-4 overflow-x-auto no-scrollbar px-8"
//       >
//         {categories.map((cat) => (
//           <button
//             key={cat}
//             onClick={() => onSelect?.(cat)}
//             className="text-sm whitespace-nowrap text-gray-600 hover:text-green-600 font-medium pb-1 border-b-2 border-transparent hover:border-green-600 transition"
//           >
//             {cat}
//           </button>
//         ))}
//       </div>
//       {/* Right Scroll Button */}
//       <button
//         onClick={() => scroll("right")}
//         className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow p-1 rounded-full hover:bg-gray-100"
//       >
//         <ChevronRight size={18} />
//       </button>
//
//     </div>
//   );
// }

// import { ChevronLeft, ChevronRight } from "lucide-react";
// import { useRef } from "react";

// const categories = [
//   "Vegetables",
//   "Groceries",
//   "Fish",
//   "Meat",
//   "Dairy",
//   "Drinks",
//   "Bakery",
//   "Snacks & Confectionery",
//   "Fruits",
//   "Frozen",
// ];

// export default function CategoryTabs({ onSelect }) {
//   const scrollRef = useRef(null);

//   const scroll = (direction) => {
//     if (scrollRef.current) {
//       const scrollAmount = direction === "left" ? -300 : 300;
//       scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
//     }
//   };

//   return (
//     <div className="relative mb-4 flex items-center justify-center">
//       {/* Left Scroll Button */}
//       <button
//         onClick={() => scroll("left")}
//         className="z-10 bg-white shadow p-2 rounded-full hover:bg-gray-100 mr-6"
//       >
//         <ChevronLeft size={24} />
//       </button>

//       {/* Scrollable Tabs (Centered container with fixed width) */}
//       <div
//         ref={scrollRef}
//         className="flex gap-4 overflow-x-auto no-scrollbar max-w-[900px] px-2"
//       >
//         {categories.map((cat) => (
//           <button
//             key={cat}
//             onClick={() => onSelect?.(cat)}
//             className="text-sm whitespace-nowrap text-gray-600 hover:text-green-600 font-medium pb-1 border-b-2 border-transparent hover:border-green-600 transition"
//           >
//             {cat}
//           </button>
//         ))}
//       </div>

//       {/* Right Scroll Button */}
//       <button
//         onClick={() => scroll("right")}
//         className="z-10 bg-white shadow p-2 rounded-full hover:bg-gray-100 ml-6"
//       >
//         <ChevronRight size={24} />
//       </button>
//     </div>
//   );
// }

// import { ChevronLeft, ChevronRight } from "lucide-react";
// import { useRef } from "react";

// const categories = [
//   "Vegetables",
//   "Groceries",
//   "Fish",
//   "Meat",
//   "Dairy",
//   "Drinks",
//   "Bakery",
//   "Snacks & Confectionery",
//   "Fruits",
//   "Frozen",
// ];

// export default function CategoryTabs({ onSelect }) {
//   const scrollRef = useRef(null);

//   const scrollByOneTab = (direction) => {
//     if (scrollRef.current) {
//       const container = scrollRef.current;
//       const tab = container.children[0];
//       const tabWidth = tab?.offsetWidth || 120; // fallback width
//       const scrollAmount = direction === "left" ? -tabWidth : tabWidth;
//       container.scrollBy({ left: scrollAmount, behavior: "smooth" });
//     }
//   };

//   return (
//     <div className="relative mb-4 flex items-center justify-center">
//       {/* Left Scroll Button */}
//       <button
//         onClick={() => scrollByOneTab("left")}
//         className="z-10 bg-white shadow p-2 rounded-full hover:bg-gray-100 mr-6"
//       >
//         <ChevronLeft size={24} />
//       </button>

//       {/* Tabs Container (fixed width for 6 items) */}
//       <div
//         ref={scrollRef}
//         className="flex gap-4 overflow-hidden no-scrollbar w-[720px]" // approx 6 tabs
//       >
//         {categories.map((cat) => (
//           <button
//             key={cat}
//             onClick={() => onSelect?.(cat)}
//             className="flex-shrink-0 text-sm whitespace-nowrap text-gray-600 hover:text-green-600 font-medium pb-1 border-b-2 border-transparent hover:border-green-600 transition"
//           >
//             {cat}
//           </button>
//         ))}
//       </div>

//       {/* Right Scroll Button */}
//       <button
//         onClick={() => scrollByOneTab("right")}
//         className="z-10 bg-white shadow p-2 rounded-full hover:bg-gray-100 ml-6"
//       >
//         <ChevronRight size={24} />
//       </button>
//     </div>
//   );
// }

// import { ChevronLeft, ChevronRight } from "lucide-react";
// import { useRef } from "react";

// const categories = [
//   "Vegetables",
//   "Groceries",
//   "Fish",
//   "Meat",
//   "Dairy",
//   "Drinks",
//   "Bakery",
//   "Snacks & Confectionery",
//   "Fruits",
//   "Frozen",
// ];

// export default function CategoryTabs({ onSelect }) {
//   const scrollRef = useRef(null);

//   const scrollByOneTab = (direction) => {
//     const container = scrollRef.current;
//     if (!container) return;

//     const tab = container.querySelector("button");
//     const tabWidth = tab ? tab.offsetWidth + 16 : 120; // tab width + gap (gap-4 = 1rem = 16px)
//     const scrollAmount = direction === "left" ? -tabWidth : tabWidth;

//     container.scrollBy({ left: scrollAmount, behavior: "smooth" });
//   };

//   return (
//     <div className="relative mb-4 flex items-center justify-center">
//       {/* Left Scroll Button */}
//       <button
//         onClick={() => scrollByOneTab("left")}
//         className="z-10 bg-white shadow p-2 rounded-full hover:bg-gray-100 mr-6"
//       >
//         <ChevronLeft size={24} />
//       </button>

//       {/* Scrollable Tabs (fit 6 items) */}
//       <div
//         ref={scrollRef}
//         className="flex gap-4 overflow-hidden no-scrollbar w-[720px]"
//       >
//         {categories.map((cat) => (
//           <button
//             key={cat}
//             onClick={() => onSelect?.(cat)}
//             className="flex-shrink-0 text-sm whitespace-nowrap text-gray-600 hover:text-green-600 font-medium pb-1 border-b-2 border-transparent hover:border-green-600 transition"
//           >
//             {cat}
//           </button>
//         ))}
//       </div>

//       {/* Right Scroll Button */}
//       <button
//         onClick={() => scrollByOneTab("right")}
//         className="z-10 bg-white shadow p-2 rounded-full hover:bg-gray-100 ml-6"
//       >
//         <ChevronRight size={24} />
//       </button>
//     </div>
//   );
// }

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

const categories = [
  "Vegetables",
  "Groceries",
  "Fish",
  "Meat",
  "Dairy",
  "Drinks",
  "Bakery",
  "Snacks & Confectionery",
  "Fruits",
  "Frozen",

  "Baby Care",
  "Personal Care",
  "Household Items",
  "Cleaning Supplies",
  "Pet Supplies",
  "Spices & Seasonings",
  "Health & Wellness",
  "Cooking Essentials",
  "Instant Food",
  "Beverages",
];

export default function CategoryTabs({ onSelect }) {
  const scrollRef = useRef(null);

  const scrollByOneTab = (direction) => {
    const container = scrollRef.current;
    if (!container) return;

    const tab = container.querySelector("button");
    const tabWidth = tab ? tab.getBoundingClientRect().width : 120;
    const gap = 16; // Tailwind's gap-4 = 1rem = 16px
    const scrollAmount =
      direction === "left" ? -(tabWidth + gap) : tabWidth + gap;

    container.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  return (
    <div className="relative mb-4 flex items-center justify-center">
      {/* Left Scroll Button */}
      <button
        onClick={() => scrollByOneTab("left")}
        className="z-10 bg-white shadow p-2 rounded-full hover:bg-gray-100 mr-6"
      >
        <ChevronLeft size={24} />
      </button>

      {/* Tabs */}
      <div
        ref={scrollRef}
        className="flex overflow-hidden w-[720px] no-scrollbar"
        style={{ columnGap: "16px" }} // Apply exact gap manually
      >
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => onSelect?.(cat)}
            className="flex-shrink-0 text-sm whitespace-nowrap text-gray-600 hover:text-green-600 font-medium pb-1 border-b-2 border-transparent hover:border-green-600 transition"
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Right Scroll Button */}
      <button
        onClick={() => scrollByOneTab("right")}
        className="z-10 bg-white shadow p-2 rounded-full hover:bg-gray-100 ml-6"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
}
