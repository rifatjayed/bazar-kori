// import React from "react";
// import heroImg1 from "../../assets/fococlipping-20220128-2129 2.png";
// import heroImg2 from "../../assets/fococlipping-20220128-2129 3.png";
// import heroImg3 from "../../assets/newsletter (2).png";

// const Hero = () => {
//   return (
//     <section className="relative">
//       {/* Full section background */}
//       <img
//         src={heroImg3}
//         alt="Background"
//         className="absolute inset-0 w-full h-full object-cover -z-10"
//       />

//       <div className="flex gap-4 justify-center p-20">
//         {/* left section */}
//         <div className="bg-[#E3FBE1] relative overflow-hidden flex flex-col justify-center rounded-2xl w-[750px] h-[523px] ps-[50px]">
//           <div className="z-10 relative max-w-[450px]">
//             <h1 className="text-5xl font-semibold text-[#0D270C] leading-snug">
//               Grocerius Vegetable <br /> farm Organic 100%
//             </h1>
//             <p className="text-base mt-4">
//               Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit.
//               Vehicula faucibus massa est elit maecenas.
//             </p>
//             <button className="mt-6 bg-green-600 text-white px-6 py-3 rounded-lg">
//               Shop Now
//             </button>
//           </div>

//           {/* image right bottom */}
//           <img
//             src={heroImg1}
//             alt=""
//             className="absolute bottom-0 right-0 w-[400px] h-auto"
//           />
//         </div>

//         {/* right section */}
//         <div className="bg-[#F8E3EE] relative overflow-hidden flex flex-col justify-center rounded-2xl w-[400px] h-[523px]">
//           <div className="z-10 relative w-[350px] px-[40px]">
//             <h1 className="text-4xl font-semibold text-[#0D270C] leading-snug">
//               25% SALE OFF
//             </h1>
//             <p className="text-base mt-4">
//               Premium Flower Seeds <br /> Net 2.2 OZ
//             </p>
//             <button className="mt-6 bg-green-600 text-white px-6 py-3 rounded-lg">
//               Shop Now
//             </button>
//           </div>

//           {/* image right bottom */}
//           <img
//             src={heroImg2}
//             alt=""
//             className="absolute bottom-0 right-0 w-[400px] h-auto"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

import React from "react";
import heroImg1 from "../../assets/fococlipping-20220128-2129 2.png";
import heroImg2 from "../../assets/fococlipping-20220128-2129 3.png";
import heroImg3 from "../../assets/newsletter (2).png";

const Hero = () => {
  return (
    <section className="relative">
      {/* Full section background */}
      <img
        src={heroImg3}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover -z-10"
      />

      <div className="flex flex-col lg:flex-row gap-4 md:gap-6 justify-center p-4 md:p-8 lg:p-12 xl:p-20">
        {/* Left section */}
        <div className="bg-[#E3FBE1] relative overflow-hidden flex flex-col justify-center rounded-2xl w-full lg:max-w-[750px] h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[523px] p-6 md:p-8 lg:ps-[50px]">
          <div className="z-10 relative max-w-full md:max-w-[80%] lg:max-w-[450px]">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#0D270C] leading-tight md:leading-snug">
              Grocerius Vegetable <br /> farm Organic 100%
            </h1>
            <p className="text-sm md:text-base mt-2 md:mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing{" "}
              <br className="hidden md:block" /> elit. Vehicula faucibus massa
              est elit maecenas.
            </p>
            <button className="mt-4 md:mt-6 bg-green-600 text-white px-5 py-2 md:px-6 md:py-3 rounded-lg text-sm md:text-base">
              Shop Now
            </button>
          </div>

          {/* Image right bottom - Hidden on mobile, visible on tablet+ */}
          <img
            src={heroImg1}
            alt="Organic vegetables"
            className="absolute bottom-0 right-0 w-[200px] sm:w-[250px] md:w-[300px] lg:w-[350px] xl:w-[400px] h-auto hidden sm:block"
          />
        </div>

        {/* Right section */}
        <div className="bg-[#F8E3EE] relative overflow-hidden flex flex-col justify-center rounded-2xl w-full lg:max-w-[400px] h-[250px] sm:h-[300px] md:h-[350px] lg:h-[450px] xl:h-[523px] p-6 md:p-8">
          <div className="z-10 relative w-full max-w-full md:max-w-[300px] px-4 md:px-[40px]">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#0D270C] leading-tight md:leading-snug">
              25% SALE OFF
            </h1>
            <p className="text-sm md:text-base mt-2 md:mt-4">
              Premium Flower Seeds <br /> Net 2.2 OZ
            </p>
            <button className="mt-4 md:mt-6 bg-green-600 text-white px-5 py-2 md:px-6 md:py-3 rounded-lg text-sm md:text-base">
              Shop Now
            </button>
          </div>

          {/* Image right bottom - Hidden on mobile, visible on tablet+ */}
          <img
            src={heroImg2}
            alt="Flower seeds sale"
            className="absolute bottom-0 right-0 w-[150px] sm:w-[200px] md:w-[250px] lg:w-[300px] xl:w-[400px] h-auto hidden sm:block"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
