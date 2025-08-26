import React from "react";
import ProductGrid from "./products/Products";
import PromoBanner from "./PromoBanner";

const Recomand = () => {
  return (
    <section className="px-20  mx-auto my-[40px]">
      <h4 className="text-[#515751] text-sm font-medium">
        FIND YOUR FAVORITES
      </h4>
      <h2 className="text-2xl font-bold mb-4">Recommended for you</h2>
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left banner */}
        <div className="w-full lg:w-3/4 ">
          <ProductGrid />
        </div>
        {/* Right content */}
        <div className="w-full lg:w-1/4 lg:flex lg:justify-end">
          <PromoBanner />
        </div>
      </div>
    </section>
  );
};

export default Recomand;
