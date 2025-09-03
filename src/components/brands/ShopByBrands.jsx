// import React, { useRef } from "react";
// import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
// import BrandCard from "./BrandCard";
// import photo1 from "../../assets/image1 (1).png";
// import photo2 from "../../assets/image1 (2).png";
// import photo3 from "../../assets/image1 (3).png";
// import photo4 from "../../assets/image1 (4).png";
// import photo5 from "../../assets/image1 (5).png";

// export default function ShopByBrands() {
//   return (
//     <div className="p-[80px] bg-[#F5F7F5]">
//       <div className="flex justify-between items-end mb-[32px]">
//         <div>
//           <h2 className="text-sm font-medium text-[#515751]">
//             Your Go-To Brands
//           </h2>
//           <h1 className="text-3xl font-semibold text-[#0D270C]">
//             Shop by Brands
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
//         <BrandCard
//           title="Lewis"
//           image={photo1}
//           description="30 Items"
//         ></BrandCard>
//         <BrandCard
//           title="Organic valley"
//           image={photo2}
//           description="15 Items"
//         ></BrandCard>
//         <BrandCard
//           title="Blood mary day"
//           image={photo3}
//           description="25 Items"
//         ></BrandCard>
//         <BrandCard
//           title="Organic valley"
//           image={photo4}
//           description="15 Items"
//         ></BrandCard>
//         <BrandCard
//           title="Organic valley"
//           image={photo5}
//           description="15 Items"
//         ></BrandCard>
//       </div>
//     </div>
//   );
// }

import React, { useRef, useState, useEffect } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import BrandCard from "./BrandCard";
import photo1 from "../../assets/image1 (1).png";
import photo2 from "../../assets/image1 (2).png";
import photo3 from "../../assets/image1 (3).png";
import photo4 from "../../assets/image1 (4).png";
import photo5 from "../../assets/image1 (5).png";

export default function ShopByBrands() {
  const scrollContainerRef = useRef(null);
  const [showArrows, setShowArrows] = useState(false);

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollWidth, clientWidth } = scrollContainerRef.current;
      setShowArrows(scrollWidth > clientWidth);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, []);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-8 sm:py-12 md:py-16 lg:py-20 bg-[#F5F7F5]">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-6 sm:mb-8 md:mb-[32px]">
        <div className="mb-4 sm:mb-0">
          <h2 className="text-xs sm:text-sm font-medium text-[#515751]">
            Your Go-To Brands
          </h2>
          <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#0D270C]">
            Shop by Brands
          </h1>
        </div>

        {showArrows && (
          <div className="flex justify-center items-center gap-2 sm:gap-3 md:gap-4">
            <button
              onClick={scrollLeft}
              className="flex items-center justify-center rounded-full w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-[#E2E5E1] hover:bg-[#d1d4d0] transition-colors"
              aria-label="Scroll left"
            >
              <IoIosArrowBack className="text-sm sm:text-base md:text-lg" />
            </button>
            <button
              onClick={scrollRight}
              className="flex items-center justify-center rounded-full w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-[#46AE3D] hover:bg-[#3d9a35] transition-colors"
              aria-label="Scroll right"
            >
              <IoIosArrowForward className="text-sm sm:text-base md:text-lg text-white" />
            </button>
          </div>
        )}
      </div>

      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto scrollbar-hide gap-4 sm:gap-5 md:gap-6 pb-4 -mx-4 px-4"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        onScroll={checkScroll}
      >
        <div className="min-w-[calc(50%-8px)] sm:min-w-[calc(33.333%-12px)] md:min-w-[calc(25%-12px)] lg:min-w-[calc(20%-16px)] flex-shrink-0">
          <BrandCard title="Lewis" image={photo1} description="30 Items" />
        </div>
        <div className="min-w-[calc(50%-8px)] sm:min-w-[calc(33.333%-12px)] md:min-w-[calc(25%-12px)] lg:min-w-[calc(20%-16px)] flex-shrink-0">
          <BrandCard
            title="Organic valley"
            image={photo2}
            description="15 Items"
          />
        </div>
        <div className="min-w-[calc(50%-8px)] sm:min-w-[calc(33.333%-12px)] md:min-w-[calc(25%-12px)] lg:min-w-[calc(20%-16px)] flex-shrink-0">
          <BrandCard
            title="Blood mary day"
            image={photo3}
            description="25 Items"
          />
        </div>
        <div className="min-w-[calc(50%-8px)] sm:min-w-[calc(33.333%-12px)] md:min-w-[calc(25%-12px)] lg:min-w-[calc(20%-16px)] flex-shrink-0">
          <BrandCard
            title="Organic valley"
            image={photo4}
            description="15 Items"
          />
        </div>
        <div className="min-w-[calc(50%-8px)] sm:min-w-[calc(33.333%-12px)] md:min-w-[calc(25%-12px)] lg:min-w-[calc(20%-16px)] flex-shrink-0">
          <BrandCard
            title="Organic valley"
            image={photo5}
            description="15 Items"
          />
        </div>
      </div>
    </div>
  );
}
