import React, { useState } from "react";
import newsletterImg from "../../assets/newsletter (1).png";
import newsletterBg from "../../assets/newsletter (2).png";

function NewsletterSection() {
  const [email, setEmail] = useState("");

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (!email) {
  //     alert("Please enter your email address");
  //     return;
  //   }
  //   alert(Subscribed successfully with: ${email});
  //   setEmail("");
  // };

  return (
    // <section className="px-[80px] bg-[#FEF2F2]  relative">
    //   <img src={newsletterBg} alt="" className="absolute z-10" />
    //   <div className=" w-full flex justify-between items-center ">
    //     {/* Left Content */}
    //     <div className=" space-y-4 py-[102px]">
    //       <h2 className="text-2xl md:text-3xl font-bold text-gray-800 leading-snug">
    //         Get Daily Grocery Deals <br /> Straight To Your Inbox
    //       </h2>
    //       <p className="text-gray-500">
    //         Save up to 30% with exclusive daily deals
    //       </p>

    //       <div className="relative w-full max-w-[456px] mt-4">
    //         <input
    //           type="email"
    //           value={email}
    //           onChange={(e) => setEmail(e.target.value)}
    //           placeholder="Enter your email address"
    //           className="w-full px-4 py-3 pr-[155px] rounded-3xl border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-green-500"
    //         />
    //         <button
    //           type="submit"
    //           className="absolute right-2 top-1/2 -translate-y-1/2 w-[130px] py-2 px-2 bg-red-400 hover:bg-red-500 text-white font-medium rounded-3xl transition z-10"
    //         >
    //           Subscribe
    //         </button>
    //       </div>
    //     </div>

    //     {/* Right Image */}
    //     <div className="hidden md:flex justify-center w-full md:w-auto">
    //       <img
    //         src={newsletterImg}
    //         alt="Grocery Man"
    //         className="w-full h-full object-contain"
    //       />
    //     </div>
    //   </div>
    // </section>

    <section className="relative bg-[#FEF2F2] px-4 md:px-[80px]">
      {/* Background */}
      <img
        src={newsletterBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover z-10"
      />

      <div className="relative z-20 w-full flex flex-col md:flex-row justify-between items-center">
        {/* Left Content */}
        <div className="space-y-4 py-16 md:py-[102px] text-center md:text-left w-full md:w-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 leading-snug">
            Get Daily Grocery Deals <br /> Straight To Your Inbox
          </h2>
          <p className="text-gray-500">
            Save up to 30% with exclusive daily deals
          </p>

          <div className="relative w-full max-w-[456px] mx-auto md:mx-0 mt-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="w-full px-4 py-3 pr-[155px] rounded-3xl border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 -translate-y-1/2 w-[130px] py-2 px-2 bg-red-400 hover:bg-red-500 text-white font-medium rounded-3xl transition z-10"
            >
              Subscribe
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="hidden md:flex justify-center w-full md:w-auto">
          <img
            src={newsletterImg}
            alt="Grocery Man"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </section>
  );
}

export default NewsletterSection;
