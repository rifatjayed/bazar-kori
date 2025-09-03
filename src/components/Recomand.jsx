// import React from "react";
// import ProductGrid from "./products/Products";
// import PromoBanner from "./PromoBanner";

// const Recomand = () => {
//   return (
//     <section className="px-20  mx-auto my-[40px]">
//       <h4 className="text-[#515751] text-sm font-medium">
//         FIND YOUR FAVORITES
//       </h4>
//       <h2 className="text-2xl font-bold mb-4">Recommended for you</h2>
//       <div className="flex flex-col lg:flex-row gap-6">
//         {/* Left banner */}
//         <div className="w-full lg:w-3/4 ">
//           <ProductGrid />
//         </div>
//         {/* Right content */}
//         <div className="w-full lg:w-1/4 lg:flex lg:justify-end">
//           <PromoBanner />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Recomand;

import React from "react";
import ProductGrid from "./products/Products";
import PromoBanner from "./PromoBanner";

const Recomand = () => {
  return (
    <section className="px-4 sm:px-6 md:px-10 lg:px-20 mx-auto my-6 sm:my-8 md:my-10 lg:my-[40px]">
      <h4 className="text-[#515751] text-xs sm:text-sm font-medium">
        FIND YOUR FAVORITES
      </h4>
      <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4">
        Recommended for you
      </h2>
      {/* <div className="flex flex-col lg:flex-row gap-4 sm:gap-5 md:gap-6">
       
        <div className="w-full lg:w-3/4">
          <ProductGrid />
        </div>

    
        <div className="w-full lg:w-1/4">
          <div className="lg:flex lg:justify-end">
            <PromoBanner />
          </div>
        </div>
      </div> */}

      <div className="flex flex-col lg:flex-row gap-4 sm:gap-5 md:gap-6">
        {/* Left banner - Hidden on small/medium screens, visible on large screens */}
        <div className=" w-full lg:w-3/4">
          <ProductGrid />
        </div>

        {/* Right content - Full width on small/medium screens, 3/4 on large screens */}
        <div className="hidden lg:block w-full lg:w-1/4">
          <PromoBanner />
        </div>
      </div>
    </section>
  );
};

export default Recomand;
