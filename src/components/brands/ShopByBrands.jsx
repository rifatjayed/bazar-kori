import React, { useRef } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import BrandCard from "./BrandCard";
import photo1 from "../../assets/image1 (1).png";
import photo2 from "../../assets/image1 (2).png";
import photo3 from "../../assets/image1 (3).png";
import photo4 from "../../assets/image1 (4).png";
import photo5 from "../../assets/image1 (5).png";

export default function ShopByBrands() {
  return (
    <div className="p-[80px] bg-[#F5F7F5]">
      <div className="flex justify-between items-end mb-[32px]">
        <div>
          <h2 className="text-sm font-medium text-[#515751]">
            Your Go-To Brands
          </h2>
          <h1 className="text-3xl font-semibold text-[#0D270C]">
            Shop by Brands
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
        <BrandCard
          title="Lewis"
          image={photo1}
          description="30 Items"
        ></BrandCard>
        <BrandCard
          title="Organic valley"
          image={photo2}
          description="15 Items"
        ></BrandCard>
        <BrandCard
          title="Blood mary day"
          image={photo3}
          description="25 Items"
        ></BrandCard>
        <BrandCard
          title="Organic valley"
          image={photo4}
          description="15 Items"
        ></BrandCard>
        <BrandCard
          title="Organic valley"
          image={photo5}
          description="15 Items"
        ></BrandCard>
      </div>
    </div>
  );
}
