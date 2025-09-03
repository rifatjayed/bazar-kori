// import React from "react";
// import customer from "../assets/customer2.svg";
// import delivery from "../assets/delivery.svg";
// import safe from "../assets/safe.svg";
// import price from "../assets/price.svg";

// const Service = () => {
//   return (
//     <div className="bg-[#F3FBF2] flex justify-between items-center p-[80px]">
//       <div className="flex gap-[12px]">
//         <img src={customer} alt="" />
//         <div>
//           <h1 className="text-[#0D270C] text-lg font-semibold">
//             24/7 Customer Support
//           </h1>
//           <p className="text-sm text-[#515751]">
//             Here to help you, day or night.
//           </p>
//         </div>
//       </div>
//       <div className="flex gap-[12px]">
//         <img src={delivery} alt="" />
//         <div>
//           <h1 className="text-[#0D270C] text-lg font-semibold">
//             Free Delivery Plans
//           </h1>
//           <p className="text-sm text-[#515751]">No minimum spend required</p>
//         </div>
//       </div>
//       <div className="flex gap-[12px]">
//         {" "}
//         <img src={safe} alt="" />
//         <div>
//           <h1 className="text-[#0D270C] text-lg font-semibold">
//             Safe & secure payment
//           </h1>
//           <p className="text-sm text-[#515751]">All payments are encrypted</p>
//         </div>
//       </div>
//       <div className="flex gap-[12px]">
//         {" "}
//         <img src={price} alt="" />
//         <div>
//           <h1 className="text-[#0D270C] text-lg font-semibold">
//             Unmatched prices
//           </h1>
//           <p className="text-sm text-[#515751]">For all products</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Service;

import React from "react";
import customer from "../assets/customer2.svg";
import delivery from "../assets/delivery.svg";
import safe from "../assets/safe.svg";
import price from "../assets/price.svg";

const Service = () => {
  return (
    <div className="bg-[#F3FBF2] flex flex-col sm:flex-row flex-wrap justify-center items-center gap-6 sm:gap-8 lg:gap-12 p-6 sm:p-8 md:p-12 lg:p-16 xl:p-20">
      {/* Customer Support */}
      <div className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-3 sm:gap-4 w-full sm:w-auto min-w-[200px]">
        <img
          src={customer}
          alt="24/7 Customer Support"
          className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14"
        />
        <div>
          <h1 className="text-[#0D270C] text-base sm:text-lg font-semibold">
            24/7 Customer Support
          </h1>
          <p className="text-xs sm:text-sm text-[#515751] mt-1">
            Here to help you, day or night.
          </p>
        </div>
      </div>

      {/* Delivery */}
      <div className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-3 sm:gap-4 w-full sm:w-auto min-w-[200px]">
        <img
          src={delivery}
          alt="Free Delivery Plans"
          className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14"
        />
        <div>
          <h1 className="text-[#0D270C] text-base sm:text-lg font-semibold">
            Free Delivery Plans
          </h1>
          <p className="text-xs sm:text-sm text-[#515751] mt-1">
            No minimum spend required
          </p>
        </div>
      </div>

      {/* Safe Payment */}
      <div className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-3 sm:gap-4 w-full sm:w-auto min-w-[200px]">
        <img
          src={safe}
          alt="Safe & secure payment"
          className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14"
        />
        <div>
          <h1 className="text-[#0D270C] text-base sm:text-lg font-semibold">
            Safe & secure payment
          </h1>
          <p className="text-xs sm:text-sm text-[#515751] mt-1">
            All payments are encrypted
          </p>
        </div>
      </div>

      {/* Prices */}
      <div className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-3 sm:gap-4 w-full sm:w-auto min-w-[200px]">
        <img
          src={price}
          alt="Unmatched prices"
          className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14"
        />
        <div>
          <h1 className="text-[#0D270C] text-base sm:text-lg font-semibold">
            Unmatched prices
          </h1>
          <p className="text-xs sm:text-sm text-[#515751] mt-1">
            For all products
          </p>
        </div>
      </div>
    </div>
  );
};

export default Service;
