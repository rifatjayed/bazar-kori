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
    // <section
    //   className="w-full  py-12"
    //   style={{
    //     backgroundImage: { newsletterBg }, // এখানে তোমার bg ইমেজ বসাও
    //   }}
    // >
    // <section
    //   className="w-full py-12 bg-[#FEF2F2] bg-no-repeat bg-center bg-cover"
    //   style={{
    //     backgroundImage: `url(${newsletterBg})`, // এখানে তোমার bg ইমেজ বসাও
    //   }}
    // >
    //   <div className="max-w-[1170px] mx-auto flex flex-col md:flex-row items-center justify-between gap-8 px-6">
    //     {/* Left Content */}
    //     <div className="flex-1 space-y-4 text-center md:text-left">
    //       <h2 className="text-2xl md:text-3xl font-bold text-gray-800 leading-snug">
    //         Get Daily Grocery Deals <br /> Straight To Your Inbox
    //       </h2>
    //       <p className="text-gray-500">
    //         Save up to 30% with exclusive daily deals
    //       </p>

    //       {/* Input Field */}
    //       {/* <form
    //         // onSubmit={handleSubmit}
    //         className="flex items-center justify-center md:justify-start gap-3 mt-4"
    //       >
    //         <input
    //           type="email"
    //           value={email}
    //           onChange={(e) => setEmail(e.target.value)}
    //           placeholder="Enter your email address"
    //           className="px-4 py-3 rounded-lg border border-gray-300 w-72 focus:outline-none focus:ring-2 focus:ring-green-500"
    //         />
    //         <button
    //           type="submit"
    //           className="px-6 py-3 bg-red-400 hover:bg-red-500 text-white font-medium rounded-lg transition"
    //         >
    //           Subscribe
    //         </button>
    //       </form> */}

    //       <form className="flex items-center justify-center md:justify-start mt-4 w-72">
    //         <div className="relative w-full">
    //           <input
    //             type="email"
    //             value={email}
    //             onChange={(e) => setEmail(e.target.value)}
    //             placeholder="Enter your email address"
    //             className="px-4 py-3 pr-28 rounded-lg border border-gray-300 w-[456px] focus:outline-none focus:ring-2 focus:ring-green-500"
    //           />
    //           <button
    //             type="submit"
    //             className="absolute right-1 top-1/2 -translate-y-1/2 px-4 py-2 bg-red-400 hover:bg-red-500 text-white font-medium rounded-md transition"
    //           >
    //             Subscribe
    //           </button>
    //         </div>
    //       </form>
    //     </div>

    //     {/* Right Image */}
    //     <div className="flex-1 flex justify-center">
    //       <img
    //         src={newsletterImg}
    //         alt="Grocery Man"
    //         className="w-80 h-auto object-contain"
    //       />
    //     </div>
    //   </div>
    // </section>

    // <section className=" ">
    //   <div className="max-w-[936px] flex justify-between items-center mx-auto">
    //     {/* Left Content */}
    //     <div className="w-[668px] space-y-4 py-[102px]">
    //       <h2 className="text-2xl md:text-3xl font-bold text-gray-800 leading-snug">
    //         Get Daily Grocery Deals <br /> Straight To Your Inbox
    //       </h2>
    //       <p className="text-gray-500">
    //         Save up to 30% with exclusive daily deals
    //       </p>

    //       {/* Input Field with Button */}
    //       {/* <div className="relative w-[456px] mt-4">
    //         <input
    //           type="email"
    //           value={email}
    //           onChange={(e) => setEmail(e.target.value)}
    //           placeholder="Enter your email address"
    //           className="w-full px-4 py-3 pr-32 rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-green-500"
    //         />
    //         <button
    //           type="submit"
    //           className="absolute right-1 top-1/2 -translate-y-1/2 px-6 py-3 bg-red-400 hover:bg-red-500 text-white font-medium rounded-md transition z-10"
    //         >
    //           Subscribe
    //         </button>
    //       </div> */}
    //       <div className="relative w-[456px] mt-4">
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
    //     <div className="w-[268px] flex justify-center">
    //       <img
    //         src={newsletterImg}
    //         alt="Grocery Man"
    //         className="w-full h-full object-contain"
    //       />
    //     </div>
    //   </div>
    // </section>
    <section className="px-[80px] bg-[#FEF2F2]  relative">
      <img src={newsletterBg} alt="" className="absolute z-10" />
      <div className=" w-full flex justify-between items-center ">
        {/* Left Content */}
        <div className=" space-y-4 py-[102px]">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 leading-snug">
            Get Daily Grocery Deals <br /> Straight To Your Inbox
          </h2>
          <p className="text-gray-500">
            Save up to 30% with exclusive daily deals
          </p>

          <div className="relative w-full max-w-[456px] mt-4">
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
        <div className=" flex justify-center">
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
