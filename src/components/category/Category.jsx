import React from "react";
import CategoryCard from "./CategoryCard";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import fruits from "../../assets/fruits.png";
import fish from "../../assets/fish.png";

const Category = () => {
  return (
    <div className="px-[80px]">
      <div className="flex justify-between items-end mb-[32px]">
        <div>
          <h2 className="text-sm font-medium text-[#515751]">
            FIND YOUR FAVORITES
          </h2>
          <h1 className="text-3xl font-semibold text-[#0D270C]">
            Shop by Category
          </h1>
        </div>
        <div className="flex justify-center items-center gap-4">
          <button className="flex items-center justify-center rounded-full w-[48px] h-[48px] bg-[#E2E5E1]">
            <IoIosArrowBack />
          </button>
          <button className="flex items-center justify-center rounded-full w-[48px] h-[48px] bg-[#46AE3D]">
            <IoIosArrowForward />
          </button>
        </div>
      </div>

      <div className="flex justify-between">
        <CategoryCard
          bgColor="bg-[#F5EFD7]"
          title="Fruits"
          image={fruits}
        ></CategoryCard>

        <CategoryCard
          bgColor="bg-[#E1EEF5]"
          title="Fish"
          image={fish}
        ></CategoryCard>
        <CategoryCard
          bgColor="bg-[#F5E1E7]"
          title="Fruits"
          image={fruits}
        ></CategoryCard>

        <CategoryCard
          bgColor="bg-[#EAF4EC]"
          title="Fish"
          image={fish}
        ></CategoryCard>
        <CategoryCard
          bgColor="bg-[#F7EBF4]"
          title="Fish"
          image={fish}
        ></CategoryCard>
      </div>
    </div>
  );
};

export default Category;
