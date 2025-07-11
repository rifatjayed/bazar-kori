import React from "react";
import customer from "../assets/customer2.svg";
import delivery from "../assets/delivery.svg";
import safe from "../assets/safe.svg";
import price from "../assets/price.svg";

const Service = () => {
  return (
    <div className="bg-[#F3FBF2] flex justify-between items-center p-[80px]">
      <div className="flex gap-[12px]">
        <img src={customer} alt="" />
        <div>
          <h1 className="text-[#0D270C] text-lg font-semibold">
            24/7 Customer Support
          </h1>
          <p className="text-sm text-[#515751]">
            Here to help you, day or night.
          </p>
        </div>
      </div>
      <div className="flex gap-[12px]">
        <img src={delivery} alt="" />
        <div>
          <h1 className="text-[#0D270C] text-lg font-semibold">
            Free Delivery Plans
          </h1>
          <p className="text-sm text-[#515751]">No minimum spend required</p>
        </div>
      </div>
      <div className="flex gap-[12px]">
        {" "}
        <img src={safe} alt="" />
        <div>
          <h1 className="text-[#0D270C] text-lg font-semibold">
            Safe & secure payment
          </h1>
          <p className="text-sm text-[#515751]">All payments are encrypted</p>
        </div>
      </div>
      <div className="flex gap-[12px]">
        {" "}
        <img src={price} alt="" />
        <div>
          <h1 className="text-[#0D270C] text-lg font-semibold">
            Unmatched prices
          </h1>
          <p className="text-sm text-[#515751]">For all products</p>
        </div>
      </div>
    </div>
  );
};

export default Service;
