// import React from "react";
// import heroImg1 from "../../assets/fococlipping-20220128-2129 2.png";
// import heroImg2 from "../../assets/fococlipping-20220128-2129 3.png";
// import heroImg3 from "../../assets/newsletter (2).png";

// const Hero = () => {
//   return (
//     <section className="bg-red-200">
//       <div className="flex gap-4  justify-center p-20">
//         {/* left section */}
//         <div className="bg-[#E3FBE1] w-[750px] h-[523px] ps-[50px] relative overflow-hidden flex flex-col justify-center rounded-2xl">
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

//           {/* image right bottom এ বসানো */}
//           <img
//             src={heroImg1}
//             alt=""
//             className="absolute bottom-0 right-0 w-[400px] h-auto"
//           />
//         </div>

//         {/* right section */}

//         <div className="bg-[#F8E3EE]  relative overflow-hidden flex flex-col justify-center rounded-2xl">
//           <div className="z-10 relative w-[350px]  px-[40px] ">
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

//           {/* image right bottom এ বসানো */}
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

      <div className="flex gap-4 justify-center p-20">
        {/* left section */}
        <div className="bg-[#E3FBE1] relative overflow-hidden flex flex-col justify-center rounded-2xl w-[750px] h-[523px] ps-[50px]">
          <div className="z-10 relative max-w-[450px]">
            <h1 className="text-5xl font-semibold text-[#0D270C] leading-snug">
              Grocerius Vegetable <br /> farm Organic 100%
            </h1>
            <p className="text-base mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit.
              Vehicula faucibus massa est elit maecenas.
            </p>
            <button className="mt-6 bg-green-600 text-white px-6 py-3 rounded-lg">
              Shop Now
            </button>
          </div>

          {/* image right bottom */}
          <img
            src={heroImg1}
            alt=""
            className="absolute bottom-0 right-0 w-[400px] h-auto"
          />
        </div>

        {/* right section */}
        <div className="bg-[#F8E3EE] relative overflow-hidden flex flex-col justify-center rounded-2xl w-[400px] h-[523px]">
          <div className="z-10 relative w-[350px] px-[40px]">
            <h1 className="text-4xl font-semibold text-[#0D270C] leading-snug">
              25% SALE OFF
            </h1>
            <p className="text-base mt-4">
              Premium Flower Seeds <br /> Net 2.2 OZ
            </p>
            <button className="mt-6 bg-green-600 text-white px-6 py-3 rounded-lg">
              Shop Now
            </button>
          </div>

          {/* image right bottom */}
          <img
            src={heroImg2}
            alt=""
            className="absolute bottom-0 right-0 w-[400px] h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
