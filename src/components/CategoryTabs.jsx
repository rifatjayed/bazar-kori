import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useMemo } from "react";
import { useProducts } from "./context/ProductsProvider";

export default function CategoryTabs({ onSelect }) {
  const { products } = useProducts();
  console.log(products);
  const scrollRef = useRef(null);

  // Unique categories generate
  const categories = useMemo(() => {
    const set = new Set();
    products.forEach((product) => {
      if (product.category) set.add(product.category);
    });
    return Array.from(set);
  }, [products]);

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
